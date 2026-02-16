import React from 'react';
import { IMAGES } from '../constants';

const Results: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Transformações Reais</span>
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mt-3 mb-6">
            O poder de um novo sorriso
          </h2>
          <p className="text-gray-600">
            Veja como a odontologia estética pode harmonizar seu rosto e rejuvenescer sua expressão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Using mostly the same result image for demo purposes, in real app would be different URLs */}
          <div className="group relative overflow-hidden rounded-xl shadow-md bg-white">
            <img src={IMAGES.result} alt="Resultado 1" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white font-medium">Facetas em Resina</p>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-xl shadow-md bg-white">
            <img src={IMAGES.humanized} alt="Resultado 2" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white font-medium">Reabilitação Oral</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl shadow-md bg-white md:col-span-2 lg:col-span-1">
             <img src={IMAGES.implant} alt="Resultado 3" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white font-medium">Implantes</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400 italic">
            * As imagens são meramente ilustrativas de casos clínicos. Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Results;