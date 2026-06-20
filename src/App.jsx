import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Lomba from './components/Lomba';
import Schedule from './components/Schedule';
import Panitia from './components/Panitia';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-indo-white flex flex-col font-inter">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Lomba />
        <Schedule />
        <Panitia />

        
      </main>
      <Footer />
    </div>
  );
}

export default App;
