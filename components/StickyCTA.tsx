import React, { useState, useEffect } from 'react';
import Button from './Button';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-gray-100 z-50 md:hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
      <Button text="Agendar Grátis no WhatsApp" variant="sticky" fullWidth className="shadow-lg" />
    </div>
  );
};

export default StickyCTA;