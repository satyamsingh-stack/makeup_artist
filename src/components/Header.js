import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // High-quality makeup images from Unsplash
  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1920&h=800&fit=crop&q=80',
      title: 'Bridal Elegance',
      subtitle: 'Make your wedding day unforgettable'
    },
    {
      url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1920&h=800&fit=crop&q=80',
      title: 'Glamour Redefined',
      subtitle: 'Celebrity-style makeovers'
    },
    {
      url: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=1920&h=800&fit=crop&q=80',
      title: 'Destination Weddings',
      subtitle: 'We travel across Thailand, Vietnam & India'
    },
    {
      url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&h=800&fit=crop&q=80',
      title: 'Special Events',
      subtitle: 'Professional makeup for every occasion'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Navigate to appointment page
  const goToAppointment = (e) => {
    e.preventDefault();
    navigate('/appointment');
    closeMenu();
  };

  // Smooth scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className="header">
      <nav className={`navbar ${menuOpen ? 'mobile-open' : ''}`}>
        <div className="logo" onClick={() => navigate('/')}>Anjali Bhaskar</div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); navigate('/'); closeMenu(); }}>Home</a></li>
          <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
          <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a></li>
          <li><a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')}>Portfolio</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
          <li><a href="/appointment" onClick={goToAppointment} className="book-btn">Book Now</a></li>
        </ul>
      </nav>
      
      <div className="carousel-container" id="home">
        <div className="carousel-slides">
          {carouselImages.map((slide, index) => (
            <div 
              key={index} 
              className={`slide-wrapper ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={slide.url} alt={slide.title} />
              <div className="slide-overlay"></div>
              <div className="slide-content">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-subtitle">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-nav-btn carousel-prev" onClick={goToPrev}>
          &#10094;
        </button>
        <button className="carousel-nav-btn carousel-next" onClick={goToNext}>
          &#10095;
        </button>
        
        <div className="carousel-dots">
          {carouselImages.map((_, index) => (
            <button 
              key={index} 
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
