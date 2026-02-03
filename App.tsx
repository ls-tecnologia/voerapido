import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { LocationSection } from './components/LocationSection';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <LocationSection />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;