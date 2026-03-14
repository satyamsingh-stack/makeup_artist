import React from 'react';
import './Achievements.css';

function Achievements() {
  const achievements = [
    {
      id: 1,
      image: '/Images/Achivement1.jpeg',
      title: 'Certified Professional',
      description: 'International Makeup Artistry Certification'
    },
    {
      id: 2,
      image: '/Images/Achivement2.jpeg',
      title: 'Bridal Excellence',
      description: 'Best Bridal Makeup Artist Award'
    },
    {
      id: 3,
      image: '/Images/Achivement3.jpeg',
      title: 'Creative Excellence',
      description: 'Outstanding Makeup Design Recognition'
    },
    {
      id: 4,
      image: '/Images/Achivement4.webp',
      title: 'Industry Leader',
      description: 'Top Makeup Artist of the Year'
    }
  ];

  return (
    <section className="achievements" id="achievements">
      <div className="achievements-container">
        <h2 className="achievements-title">🏆 Awards & Achievements 🏆</h2>
        <p className="achievements-subtitle">Recognized for Excellence in Makeup Artistry</p>
        <div className="achievements-divider"></div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={achievement.id} className="achievement-card" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="achievement-image-wrapper">
                <img src={achievement.image} alt={achievement.title} className="achievement-image" />
                <div className="achievement-overlay">
                  <div className="achievement-badge">★</div>
                </div>
              </div>
              <div className="achievement-content">
                <h3 className="achievement-card-title">{achievement.title}</h3>
                <p className="achievement-card-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating elements for animation */}
        <div className="floating-star star-1">⭐</div>
        <div className="floating-star star-2">✨</div>
        <div className="floating-star star-3">⭐</div>
      </div>
    </section>
  );
}

export default Achievements;