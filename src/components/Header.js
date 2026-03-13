import React, { useRef } from 'react';
import './Header.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Header() {
  const carouselRef = useRef(null);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Anjali Bhaskar</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/appointment">Appointment</a></li>
        </ul>
      </nav>
      <div className="carousel-container">
        <Carousel 
          ref={carouselRef}
          autoPlay 
          infiniteLoop 
          showThumbs={false} 
          showStatus={false} 
          showArrows={false}
          interval={5000} 
          transitionTime={1000}
        >
          <div className="slide-wrapper">
            <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1400&h=550&fit=crop&crop=faces" alt="Slide 1" />
          </div>
          <div className="slide-wrapper">
            <img src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=1400&h=550&fit=crop&crop=faces" alt="Slide 2" />
          </div>
          <div className="slide-wrapper">
            <img src="https://images.unsplash.com/photo-1519415220914-67c4a47750bc?w=1400&h=550&fit=crop&crop=faces" alt="Slide 3" />
          </div>
          <div className="slide-wrapper">
            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1400&h=550&fit=crop&crop=faces" alt="Slide 4" />
          </div>
        </Carousel>
        
        <button className="carousel-nav-btn carousel-prev" onClick={() => carouselRef.current?.onClickPrev?.()}>
          &#10094;
        </button>
        <button className="carousel-nav-btn carousel-next" onClick={() => carouselRef.current?.onClickNext?.()}>
          &#10095;
        </button>
      </div>
    </header>
  );
}

export default Header;