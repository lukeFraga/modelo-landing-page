import React from 'react';
import { EXPERT, IMAGES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <img 
              src={IMAGES.technology} 
              alt="Dra Mariana Planejamento" 
              className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-tl-3xl shadow-lg hidden md:block">
              <p className="font-serif text-3xl font-bold">10+</p>
              <p className="text-sm uppercase tracking-wider">Anos de<br/>Experiência</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-secondary">
              Muito prazer, sou a <span className="text-primary">{EXPERT.name}</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Minha missão é muito mais do que tratar dentes; é devolver a segurança de sorrir sem medo. 
              Como especialista em Estética e Reabilitação Oral, dedico minha carreira a criar sorrisos 
              que respeitam a identidade única de cada paciente.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Acredito em uma odontologia que une <strong>arte, tecnologia e humanização</strong>. 
              Aqui no Cambuí, em Campinas, criei um espaço para você se sentir acolhido(a) e cuidado(a) 
              em cada detalhe.
            </p>

            <ul className="space-y-4 pt-4">
              {[
                "Especialista em Facetas e Lentes em Resina",
                "Planejamento Digital do Sorriso",
                "Tecnologia minimamente invasiva",
                "Atendimento exclusivo e personalizado"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;