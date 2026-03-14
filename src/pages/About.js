import React, { useState } from 'react';
import './About.css';

function About() {
  const [selectedTransformVideo, setSelectedTransformVideo] = useState(null);

  const transformationVideos = [
    {
      id: 1,
      title: 'Bridal Transformation',
      video: '/Videos/Video-83.mp4'
    },
    {
      id: 2,
      title: 'Party Look Transformation',
      video: '/Videos/Video-741.mp4'
    }
  ];

  return (
    <div className="about">
      <div className="about-container">
        <div className="about-content">
          <h1>About Anjali Bhaskar</h1>
          <p>Anjali Bhaskar is an internationally acclaimed makeup artist specializing in destination weddings, luxury events, and celebrity makeup. Her artistry has graced top actresses and prominent celebrities, including the renowned Ankita Devi, establishing her reputation as a sought-after name in high-end beauty.</p>
          <p>Based in Thailand, Anjali frequently travels to Vietnam and across India, delivering her signature flawless makeup services to an exclusive clientele of business professionals, high-profile individuals, and affluent families. Her meticulous attention to detail and passion for perfection have established her as the preferred choice for weddings and special occasions. Each client receives personalized consultation to ensure a bespoke experience tailored to their unique requirements. From intimate gatherings to grand celebrations, Anjali ensures every detail is perfected to create lasting memories.</p>
          <p>Guided by a vision of excellence, Anjali leads a distinguished team of over 30 professional makeup artists and beauty experts. Together, they traverse the globe, bringing premium makeup services to discerning clients who deserve nothing less than extraordinary. Every transformation reflects her commitment to enhancing natural beauty with sophisticated artistry and timeless elegance.</p>
          <div className="about-stats">
            <div className="stat-item">
              <h3>30+</h3>
              <p>Professional Team Members</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Happy Clients Served</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src="/Images/7.jpeg" alt="Anjali Bhasker" />
        </div>
      </div>

      {/* Transformation Videos Section */}
      <div className="transformation-section">
        <h2>Watch Our Transformations</h2>
        <p className="transform-subtitle">See the magic of professional makeup artistry</p>
        <div className="transform-divider"></div>

        <div className="transformation-grid">
          {transformationVideos.map((trans) => (
            <div key={trans.id} className="transformation-card" onClick={() => setSelectedTransformVideo(trans.video)}>
              <div className="transform-video-wrapper">
                <video preload="metadata">
                  <source src={trans.video} type="video/mp4" />
                </video>
                <div className="transform-play-btn">▶</div>
              </div>
              <p className="transform-title">{trans.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedTransformVideo && (
        <div className="transform-modal" onClick={() => setSelectedTransformVideo(null)}>
          <button className="close-transform" onClick={() => setSelectedTransformVideo(null)}>✕</button>
          <video autoPlay controls className="transform-playing-video">
            <source src={selectedTransformVideo} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}

export default About;