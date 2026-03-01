import './App.css';
import React from 'react';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import HighlightedSpecials from './Specials';


function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HighlightedSpecials />
    </div>
  );
}

export default App;
