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
const EMAILJS_SERVICE_ID = 'service_4nuip3f';
const EMAILJS_TEMPLATE_ID = 'template_rp9jmgl';
const EMAILJS_PUBLIC_KEY = 'BplNyD2b98NgGNDzl'; // Replace with your actual Public Key

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
        to_name: 'Anjali Bhasker',
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
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642-1.453 1.955-2.439 3.513-2.439 1.107 0 2.05.379 2.723.996.674.617 1.115 1.49 1.264 2.514.149 1.024.05 1.846-.3 2.469-.35.622-.885 1.073-1.532 1.351-.647.278-1.419.418-2.235.418-.8 0-1.575-.14-2.232-.414-.658-.275-1.155-.717-1.477-1.272-.321-.555-.461-1.2-.408-1.85.05-.65.274-1.191.635-1.557.36-.367.837-.61 1.357-.698.52-.09.976-.062 1.332.12.357.18.61.45.758.814l.522-.6c-.354-.693-.53-1.39-.53-2.1 0-1.129.463-2.023 1.298-2.512-.671-.077-1.323.134-1.912.604-.59.47-.943 1.134-.943 1.885 0 .12.014.236.041.348.412-.257.888-.401 1.385-.401 1.454 0 2.782 1.167 3.431 2.405.516.98.632 2.191.319 3.313-.32 1.145-1.125 2.026-2.212 2.42-1.088.393-2.35.403-3.477.027a9.98 9.98 0 01-2.406-.76l-.447.596c.74.487 1.566.848 2.447 1.059.88.21 1.772.203 2.601-.073.828-.276 1.533-.773 2.052-1.44.52-.665.783-1.488.783-2.509 0-.221-.016-.44-.045-.655a9.22 9.22 0 00-2.723.527c-1.092.373-1.853 1.159-2.287 2.223-.434 1.064-.45 2.374-.028 3.549.423 1.175 1.223 2.024 2.275 2.411 1.05.386 2.217.363 3.308-.114 1.093-.478 1.853-1.318 2.232-2.408a.49.49 0 01.665-.193l1.277.746.245-.833a.503.503 0 01.056-.091c.414-.472.647-1.131.647-1.899 0-1.6-.801-2.837-2.138-3.346.513-1.39.468-2.891-.155-4.225z" fill="white"/>
            </svg>
          </a>
          <a 
            href="https://www.instagram.com/anjalibhaskermakeovers?igsh=bDIwYnR1dGZ2b3ox" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-float instagram-float"
            title="Follow on Instagram"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5"/>
              <circle cx="18" cy="6" r="1" fill="white"/>
            </svg>
          </a>
        </div> (truncated)

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
