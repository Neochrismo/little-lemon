import{BrowserRouter, Routes, Route,} from 'react-router-dom';
import './App.css';
import React from 'react';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import HighlightedSpecials from './Specials';
import Testimonial from './Testimonial';
import About from './AboutSection';
import Footer from './Footer';
import BookingForm from './TableForm';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
            path="/"
            element={
          <>
            <HeroSection />
            <HighlightedSpecials />
            <Testimonial />
            <About />
          </>
          }
        />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
