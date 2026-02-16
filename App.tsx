import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Results from './components/Results';
import Features from './components/Features';
import Process from './components/Process';
import Clinic from './components/Clinic';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import Button from './components/Button';
import { EXPERT } from './constants';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
           <div className="font-serif text-xl font-bold text-secondary">
             Dra. Mariana <span className="text-primary">Valença</span>
           </div>
           <div className="hidden md:block">
             <Button text="Agendar Agora" variant="outline" className="px-6 py-2 text-xs" />
           </div>
        </div>
      </header>

      <main className="flex-grow">
        <Hero />
        <About />
        <Results />
        <Features />
        <Process />
        <Clinic />
        
        {/* Final CTA Section */}
        <section className="py-24 bg-primary text-white text-center">
          <div className="container mx-auto px-4">
             <h2 className="font-serif text-3xl md:text-5xl mb-6">
               Seu novo sorriso começa com um clique.
             </h2>
             <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
               Não espere mais para ter a confiança que você merece. Agende sua avaliação gratuita com a Dra. Mariana Valença.
             </p>
             <Button 
              text="Agendar Minha Avaliação Gratuita" 
              className="bg-secondary text-white hover:bg-stone-800 shadow-xl text-lg px-10 py-5" 
             />
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;