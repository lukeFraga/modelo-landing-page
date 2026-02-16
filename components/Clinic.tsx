import React from 'react';
import { IMAGES } from '../constants';

const Clinic: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="font-serif text-3xl md:text-4xl text-secondary">
              Um ambiente pensado para o seu conforto
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nossa clínica no Cambuí foi projetada para que sua experiência seja tranquila e agradável desde a recepção.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Equipamentos modernos, poltronas confortáveis e uma equipe treinada para oferecer um atendimento humanizado e exclusivo.
            </p>
            <div className="pt-4">
              <h3 className="font-bold text-secondary text-lg mb-2">Localização Privilegiada</h3>
              <p className="text-gray-500">Rua Coronel Quirino, 845 – Cambuí, Campinas – SP</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img 
              src={IMAGES.clinic} 
              alt="Recepção da Clínica" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Clinic;