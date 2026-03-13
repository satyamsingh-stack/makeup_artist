import React, { useState } from 'react';
import './Services.css';

function Services() {
  const [selectedServiceVideo, setSelectedServiceVideo] = useState(null);

  const services = [
    {
      id: 1,
      icon: '💍',
      title: 'Bridal Makeup',
      description: 'Make your special day even more memorable with our exquisite bridal makeup services tailored to your unique style.',
      image: '/Images/1.jpg',
      video: '/Videos/Video-250.mp4'
    },
    {
      id: 2,
      icon: '✈️',
      title: 'Destination Weddings',
      description: 'We travel to your dream destination to provide flawless makeup services for you and your loved ones.',
      image: '/Images/2.jpg',
      video: '/Videos/Video-457.mp4'
    },
    {
      id: 3,
      icon: '⭐',
      title: 'Celebrity Makeovers',
      description: 'Trusted by top celebrities, we create stunning looks for red carpets, photoshoots, and events.',
      image: '/Images/3.jpeg',
      video: '/Videos/Video-625.mp4'
    },
    {
      id: 4,
      icon: '💼',
      title: 'Corporate Events',
      description: 'Look your best for important business events with our professional makeup services.',
      image: '/Images/4.jpeg',
      video: '/Videos/Video-864.mp4'
    }
  ];

  return (
    <div className="services">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Explore the wide range of makeup services we offer for every occasion</p>
        <div className="divider"></div>
      </div>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-image-wrapper">
              <img src={service.image} alt={service.title} />
              <div className="service-overlay">
                <span className="service-icon">{service.icon}</span>
              </div>
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="see-action-btn" onClick={() => setSelectedServiceVideo(service.video)}>
                See In Action ▶
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedServiceVideo && (
        <div className="service-video-modal" onClick={() => setSelectedServiceVideo(null)}>
          <button className="close-service-video" onClick={() => setSelectedServiceVideo(null)}>✕</button>
          <video autoPlay controls className="service-playing-video">
            <source src={selectedServiceVideo} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}

export default Services;