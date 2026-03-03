import './App.css';
import React from 'react';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import HighlightedSpecials from './Specials';
import Testimonial from './Testimonial';
import About from './AboutSection';
import Footer from './Footer';


function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HighlightedSpecials />
      <Testimonial />
      <About />
      <Footer />
    </div>
  );
}

export default App;
