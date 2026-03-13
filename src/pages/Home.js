import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const tutorialVideos = [
    {
      id: 1,
      title: 'Bridal Makeup Tutorial',
      description: 'Learn the secrets of perfect bridal makeup',
      video: '/Videos/Video-165.mp4'
    },
    {
      id: 2,
      title: 'Party Makeup Tips',
      description: 'Stunning looks for any celebration',
      video: '/Videos/Video-650.mp4'
    },
    {
      id: 3,
      title: 'Makeup Transformation',
      description: 'Before and after magic',
      video: '/Videos/Video-741.mp4'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1>Welcome to Anjali Bhaskar Makeovers</h1>
          <p>Discover the art of beauty with Anjali Bhaskar, an internationally renowned makeup artist specializing in destination weddings, celebrity makeovers, and special events. Let us make your special day unforgettable with our professional touch.</p>
          <button className="book-now">Book Now</button>
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
                  <video preload="metadata">
                    <source src={tut.video} type="video/mp4" />
                  </video>
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
