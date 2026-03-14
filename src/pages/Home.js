import React, { useState, useEffect } from 'react';
import './Home.css';

function Home({ openBookingModal }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [teamCount, setTeamCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate team count from 0 to 30
          animateCount(0, 30, 2000, setTeamCount);
          // Animate clients count from 0 to 1000
          animateCount(0, 1000, 2500, setClientsCount);
          // Animate experience count from 0 to 10
          animateCount(0, 10, 1500, setExperienceCount);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  const animateCount = (start, end, duration, setter) => {
    const startTime = performance.now();
    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setter(Math.floor(start + (end - start) * easeOut));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1>Welcome to Anjali Bhasker Makeovers</h1>
          <p>Discover the art of beauty with Anjali Bhasker, an internationally renowned makeup artist specializing in destination weddings, celebrity makeovers, and special events. Let us make your special day unforgettable with our professional touch.</p>
          <button className="book-now" onClick={() => { if (openBookingModal) openBookingModal(); }}>Book Now</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-content">
            <h2>About Anjali Bhaskar</h2>
            <p>An internationally acclaimed makeup artist specializing in destination weddings, luxury events, and celebrity makeup. Her artistry has graced top actresses and prominent celebrities, including Ankita Devi.</p>
            <p>Based in Thailand, she travels to Vietnam and across India, serving an exclusive clientele of business professionals and affluent families. Each client receives personalized consultation for a bespoke experience.</p>
            <p>Guided by excellence, Anjali leads a distinguished team bringing premium makeup services globally.</p>
            
            {/* Animated Stats */}
            <div className="about-stats">
              <div className="stat-item">
                <h3>{teamCount}+</h3>
                <p>Team Members</p>
              </div>
              <div className="stat-item">
                <h3>{clientsCount.toLocaleString()}+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>{experienceCount}+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="/Images/7.jpeg" alt="Anjali Bhaskar" />
          </div>
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
