import React from 'react';
import { EXPERT, IMAGES } from '../constants';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-20 pb-10 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
            <span className="inline-block py-1 px-3 border border-primary text-primary text-xs tracking-[0.2em] uppercase rounded-full">
              Odontologia Estética em Campinas
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary leading-tight">
              Seu sorriso é sua <span className="text-primary italic">assinatura</span>. Cuide dele com excelência.
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
              Transforme sua autoestima com tratamentos estéticos de alto padrão. 
              Facetas em resina e reabilitação oral com naturalidade.
            </p>
            
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <Button className="w-full md:w-auto text-base" />
              <p className="text-xs text-gray-400 uppercase tracking-wide">
                Resposta rápida • Sem compromisso
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={IMAGES.hero} 
                alt={EXPERT.name} 
                className="w-full h-auto object-cover object-top max-h-[600px]"
              />
            </div>
            {/* Decorative background elements */}
            <div className="absolute top-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;