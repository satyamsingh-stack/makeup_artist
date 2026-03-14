import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Achievements from './components/Achievements';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_anjali_makeover';
const EMAILJS_TEMPLATE_ID = 'template_booking_form';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your actual Public Key

function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    location: ''
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'sending', 'success', 'error'
  const formRef = useRef(null);

  const openBookingModal = () => {
    setBookingModalOpen(true);
    setBookingSubmitted(false);
    setSubmitStatus(null);
    document.body.style.overflow = 'hidden';
  };

  const closeBookingModal = () => {
    setBookingModalOpen(false);
    setBookingSubmitted(false);
    setSubmitStatus(null);
    document.body.style.overflow = 'auto';
  };

  const handleBookingChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const requiredFields = ['name', 'email', 'phone', 'service', 'date', 'time', 'location'];
    const isValid = requiredFields.every(field => bookingData[field].trim() !== '');
    
    if (!isValid) {
      alert('Please fill in all required fields');
      return;
    }

    setSubmitStatus('sending');

    try {
      // Send email using EmailJS
      const templateParams = {
        to_name: 'Anjali Bhaskar',
        from_name: bookingData.name,
        from_email: bookingData.email,
        phone: bookingData.phone,
        service: bookingData.service,
        event_date: bookingData.date,
        event_time: bookingData.time,
        event_location: bookingData.location,
        message: `New booking request from ${bookingData.name}. Service: ${bookingData.service}. Date: ${bookingData.date} at ${bookingData.time}. Location: ${bookingData.location}. Contact: ${bookingData.email}, ${bookingData.phone}`
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setBookingSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setBookingData({ name: '', email: '', phone: '', service: '', date: '', time: '', location: '' });
        closeBookingModal();
      }, 3000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      alert('Failed to send booking request. Please try again or contact us directly.');
    }
  };
  
  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-element');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header onBookNowClick={openBookingModal} />
        <Portfolio />
        <Achievements />
        <Routes>
          <Route path="/" element={<Home openBookingModal={openBookingModal} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
        <Footer />

        {/* Floating Social Media Widget */}
        <div className="floating-social">
          <a 
            href="https://wa.me/66123456789" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-float whatsapp-float"
            title="Chat on WhatsApp"
          >
            <span>💬</span>
          </a>
          <a 
            href="https://www.instagram.com/anjalibhaskermakeovers?igsh=bDIwYnR1dGZ2b3ox" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-float instagram-float"
            title="Follow on Instagram"
          >
            <span>📸</span>
          </a>
        </div>

        {/* Booking Modal */}
        {bookingModalOpen && (
          <div className="booking-modal-overlay" onClick={closeBookingModal}>
            <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal" onClick={closeBookingModal}>×</button>
              <h2>Book Your Appointment</h2>
              <p>Fill in your details and we'll get back to you shortly</p>
              {bookingSubmitted && submitStatus === 'success' ? (
                <div className="booking-success">
                  <span className="success-icon">✓</span>
                  <h3>Booking Request Sent Successfully!</h3>
                  <p>We have received your booking request and will contact you soon.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleBookingSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={bookingData.name}
                    onChange={handleBookingChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={bookingData.email}
                    onChange={handleBookingChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={bookingData.phone}
                    onChange={handleBookingChange}
                    required
                  />
                  <select
                    name="service"
                    value={bookingData.service}
                    onChange={handleBookingChange}
                    required
                  >
                    <option value="">Select Service *</option>
                    <option value="Bridal Makeup">Bridal Makeup</option>
                    <option value="Destination Wedding">Destination Wedding</option>
                    <option value="Celebrity Makeover">Celebrity Makeover</option>
                    <option value="Party Makeup">Party Makeup</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Other">Other</option>
                  </select>
                  <input
                    type="date"
                    name="date"
                    value={bookingData.date}
                    onChange={handleBookingChange}
                    required
                  />
                  <input
                    type="time"
                    name="time"
                    value={bookingData.time}
                    onChange={handleBookingChange}
                    required
                  />
                  <input
                    type="text"
                    name="location"
                    placeholder="Event Location *"
                    value={bookingData.location}
                    onChange={handleBookingChange}
                    required
                  />
                  <button 
                    type="submit" 
                    className="submit-btn" 
                    disabled={submitStatus === 'sending'}
                  >
                    {submitStatus === 'sending' ? 'Sending...' : 'Book Now'}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
