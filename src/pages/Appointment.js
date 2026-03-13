import React, { useState } from 'react';
import './Appointment.css';

function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Bridal Makeup',
    'Destination Wedding',
    'Celebrity Makeover',
    'Party Makeup',
    'Corporate Event',
    'Editorial / Photoshoot',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Appointment form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="appointment" id="appointment">
      <div className="appointment-header">
        <h1>Book an Appointment</h1>
        <p>Ready to look your best? Schedule your appointment with us today!</p>
        <div className="header-divider"></div>
      </div>

      {submitted ? (
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h2>Thank You!</h2>
          <p>Your appointment request has been submitted successfully.</p>
          <p>We will contact you within 24 hours to confirm your booking.</p>
          <button onClick={() => setSubmitted(false)} className="book-another-btn">
            Book Another Appointment
          </button>
        </div>
      ) : (
        <div className="appointment-content">
          <div className="appointment-info">
            <div className="info-card">
              <span className="info-icon">📍</span>
              <h3>Location</h3>
              <p>Bangkok, Thailand</p>
              <p>Available for destination weddings across Thailand, Vietnam & India</p>
            </div>
            <div className="info-card">
              <span className="info-icon">📱</span>
              <h3>Contact</h3>
              <p>+66 123 456 789</p>
              <p>contact@anjalibhaskarmakeovers.com</p>
            </div>
            <div className="info-card">
              <span className="info-icon">⏰</span>
              <h3>Working Hours</h3>
              <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
              <p>Sunday: By Appointment</p>
            </div>
          </div>

          <form className="appointment-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Required *</label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Preferred Date *</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  value={formData.date}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Preferred Time</label>
                <select 
                  id="time" 
                  name="time" 
                  value={formData.time}
                  onChange={handleChange}
                >
                  <option value="">Select a time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                  <option value="evening">Evening (3 PM - 7 PM)</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Additional Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows="4" 
                placeholder="Tell us more about your requirements..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit Appointment Request
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Appointment;
