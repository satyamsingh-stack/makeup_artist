import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const tutorialVideos = [
    {
      id: 1,
      title: 'Bridal Makeup Tutorial',
      description: 'Learn the secrets of perfect bridal makeup',
      video: '/Videos/Video-165.mp4',
      thumbnail: '/Images/6.jpeg'
    },
    {
      id: 2,
      title: 'Party Makeup Tips',
      description: 'Stunning looks for any celebration',
      video: '/Videos/Video-650.mp4',
      thumbnail: '/Images/7.jpeg'
    },
    {
      id: 3,
      title: 'Makeup Transformation',
      description: 'Before and after magic',
      video: '/Videos/Video-741.mp4',
      thumbnail: '/Images/8.jpeg'
    }
  ];

  const services = [
    'Bridal Makeup',
    'Destination Wedding',
    'Celebrity Makeover',
    'Party Makeup',
    'Corporate Event',
    'Other'
  ];

  const handleBookingChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleQuickBook = (e) => {
    e.preventDefault();
    // Navigate to appointment page
    navigate('/appointment');
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1>Welcome to Anjali Bhaskar Makeovers</h1>
          <p>Discover the art of beauty with Anjali Bhaskar, an internationally renowned makeup artist specializing in destination weddings, celebrity makeovers, and special events. Let us make your special day unforgettable with our professional touch.</p>
          <button className="book-now" onClick={handleQuickBook}>Book Now</button>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className="quick-book-section">
        <div className="quick-book-container">
          <div className="quick-book-content">
            <h2>Ready to Look Stunning?</h2>
            <p>Book your appointment now and let us transform your look!</p>
          </div>
          <form className="quick-book-form" onSubmit={handleQuickBook}>
            <div className="quick-form-row">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={bookingData.name}
                onChange={handleBookingChange}
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={bookingData.email}
                onChange={handleBookingChange}
                required 
              />
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
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
                <option value="">Select Service</option>
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="quick-book-btn">
              Get Started →
            </button>
          </form>
        </div>
      </section>

      <section className="tutorial-section">
        <div className="tutorial-container">
          <h2>Makeup Inspiration & Tips</h2>
          <p className="tutorial-subtitle">Watch our latest makeup tutorials and transformations</p>
          <div className="tutorial-divider"></div>

          <div className="tutorial-grid">
            {tutorialVideos.map((tut) => (
              <div key={tut.id} className="tutorial-card" onClick={() => setSelectedVideo(tut.video)}>
                <div className="tutorial-video-wrapper">
                  {tut.thumbnail ? (
                    <img src={tut.thumbnail} alt={tut.title} className="tutorial-thumbnail" />
                  ) : (
                    <video preload="metadata">
                      <source src={tut.video} type="video/mp4" />
                    </video>
                  )}
                  <div className="tutorial-play-btn">
                    <span>▶</span>
                  </div>
                </div>
                <div className="tutorial-info">
                  <h3>{tut.title}</h3>
                  <p>{tut.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedVideo && (
          <div className="tutorial-modal" onClick={() => setSelectedVideo(null)}>
            <button className="close-tutorial" onClick={() => setSelectedVideo(null)}>✕</button>
            <video autoPlay controls className="tutorial-playing-video">
              <source src={selectedVideo} type="video/mp4" />
            </video>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
