import React, { useState } from 'react';
import './Portfolio.css';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('images');
  const [playingVideo, setPlayingVideo] = useState(null);

  const images = [
    '/Images/1.jpg',
    '/Images/2.jpg',
    '/Images/3.jpeg',
    '/Images/4.jpeg',
    '/Images/5.jpeg',
    '/Images/6.jpeg',
    '/Images/7.jpeg',
    '/Images/8.jpeg',
    '/Images/9.jpeg',
  ];

  const videos = [
    '/Videos/Video-250.mp4',
    '/Videos/Video-457.mp4',
    '/Videos/Video-625.mp4',
    '/Videos/Video-864.mp4',
    '/Videos/Video-947.mp4',
    '/Videos/Video-165.mp4',
    '/Videos/Video-650.mp4',
    '/Videos/Video-741.mp4',
    '/Videos/Video-83.mp4',
  ];

  const handleVideoClick = (video, index) => {
    setPlayingVideo(index);
  };

  const handleBackButton = (e) => {
    e.stopPropagation();
    setPlayingVideo(null);
  };

  return (
    <section className="portfolio">
      <div className="portfolio-header">
        <h2 className="portfolio-title">✨ Our Work Showcase ✨</h2>
        <p className="portfolio-subtitle">Explore our latest makeup transformations and exclusive behind-the-scenes content</p>
        <div className="title-divider"></div>
      </div>
      
      <div className="portfolio-tabs">
        <button 
          className={`tab-btn ${activeTab === 'images' ? 'active' : ''}`}
          onClick={() => setActiveTab('images')}
        >
          <span className="tab-icon">📸</span> Gallery
        </button>
        <button 
          className={`tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
          onClick={() => setActiveTab('videos')}
        >
          <span className="tab-icon">🎥</span> Videos
        </button>
      </div>

      {activeTab === 'images' && (
        <div className="portfolio-grid image-grid">
          {images.map((image, index) => (
            <div key={index} className="portfolio-item image-item" data-index={index}>
              <img src={image} alt={`Portfolio ${index + 1}`} loading="lazy" />
              <div className="overlay">
                <p>Makeup Transformation</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'videos' && (
        <>
          <div className="portfolio-grid video-grid">
            {videos.map((video, index) => (
              <div 
                key={index} 
                className={`portfolio-item video-item ${playingVideo === index ? 'playing' : ''}`}
                onClick={() => !playingVideo && handleVideoClick(video, index)}
              >
                {playingVideo !== index ? (
                  <>
                    <video preload="metadata" style={{ width: '100%', height: '100%' }}>
                      <source src={video} type="video/mp4" />
                    </video>
                    <div className="video-play-btn">
                      <span className="play-icon">▶</span>
                    </div>
                    <div className="video-label">Video {index + 1}</div>
                  </>
                ) : null}
              </div>
            ))}
          </div>

          {playingVideo !== null && (
            <div className="video-modal-overlay" onClick={() => setPlayingVideo(null)}>
              <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="back-btn" onClick={handleBackButton}>
                  <span>←</span> Back
                </button>
                <video 
                  autoPlay 
                  controls 
                  className="reels-video"
                  onClick={(e) => e.stopPropagation()}
                >
                  <source src={videos[playingVideo]} type="video/mp4" />
                </video>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Portfolio;
