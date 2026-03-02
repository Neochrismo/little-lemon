import './App.css';
import React from 'react';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import HighlightedSpecials from './Specials';
import Testimonial from './Testimonial';
import Footer from './Footer';


function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HighlightedSpecials />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
