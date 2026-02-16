import React from 'react';
import { STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-secondary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Passo a Passo</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">
            Como funciona a Primeira Consulta
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, index) => (
            <div key={index} className="relative p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
              <div className="text-5xl font-serif text-primary/20 font-bold absolute top-4 right-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary relative z-10">
                {step.title}
              </h3>
              <p className="text-gray-300 relative z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;