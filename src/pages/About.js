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
          <h1>About Anjali Bhasker</h1>
          <p>Anjali Bhasker is a celebrated makeup artist with years of experience in creating stunning looks for brides, celebrities, and high-profile clients. Based in Thailand, she travels across the globe to bring her expertise to destination weddings, fashion shows, and special events. With a team of over 30 skilled professionals, Anjali ensures that every client looks and feels their best on their special day.</p>
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