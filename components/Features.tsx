import React from 'react';
import { FEATURES } from '../constants';
import Button from './Button';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-4">
            Por que confiar seu sorriso a mim?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="p-8 rounded-2xl bg-stone-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-stone-100 group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Intermediate CTA */}
        <div className="mt-16 bg-primary/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl text-secondary mb-4">
            Ainda com dúvidas se é o momento certo?
          </h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Não deixe para depois a confiança que você pode ter hoje. 
            A primeira consulta é 100% gratuita para que você conheça as possibilidades sem compromisso.
          </p>
          <Button text="Quero Agendar Minha Avaliação" variant="primary" />
        </div>
      </div>
    </section>
  );
};

export default Features;