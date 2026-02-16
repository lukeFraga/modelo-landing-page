import React from 'react';
import { EXPERT } from '../constants';
import { Instagram, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-12 border-t border-stone-800">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-2">{EXPERT.name}</h2>
            <p className="text-stone-400 text-sm">{EXPERT.role}</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
             <div className="flex items-center gap-2 text-stone-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{EXPERT.address}</span>
             </div>
             <a 
                href={EXPERT.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-primary transition-colors"
             >
                <Instagram className="w-5 h-5" />
                <span>Siga no Instagram</span>
             </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 text-center text-stone-500 text-xs">
          <p>&copy; {new Date().getFullYear()} {EXPERT.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;