import React from 'react';

function Services() {
  const servicesList = [
    { icon: '💒', title: 'Bridal Makeup', desc: 'Perfect bridal looks for your special day' },
    { icon: '✈️', title: 'Destination Weddings', desc: 'Global coverage for wedding parties across Thailand, Vietnam & India' },
    { icon: '⭐', title: 'Celebrity Makeovers', desc: 'Professional styling for actors, models & celebrities' },
    { icon: '🏢', title: 'Corporate Events', desc: 'Elegant looks for business professionals & executives' },
    { icon: '💃', title: 'Party Makeup', desc: 'Stunning makeup for all special occasions & functions' },
    { icon: '📸', title: 'Editorial & Photoshoot', desc: 'Professional makeup for fashion shoots & magazines' }
  ];

  return (
    <section className="services fade-in-element">
      <h2>Our Services</h2>
      <ul>
        {servicesList.map((service, index) => (
          <li key={index} className="service-item" style={{ animationDelay: `${index * 0.1}s` }}>
            <span className="service-icon">{service.icon}</span>
            <div className="service-content">
              <span className="service-text">{service.title}</span>
              <span className="service-desc">{service.desc}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Services;
