import './App.css';
import React from 'react';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import HighlightedSpecials from './Specials';
import Testimonial from './Testimonial';



function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HighlightedSpecials />
      <Testimonial />
    </div>
  );
}

export default App;
