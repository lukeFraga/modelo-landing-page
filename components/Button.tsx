import React from 'react';
import { MessageCircle } from 'lucide-react';
import { EXPERT } from '../constants';

interface ButtonProps {
  text?: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'sticky';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  text = "Agendar Consulta Gratuita", 
  className = "", 
  variant = 'primary',
  fullWidth = false 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-full px-8 py-4 text-sm uppercase transform hover:-translate-y-1 hover:shadow-lg";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primaryDark shadow-md",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    sticky: "bg-green-600 text-white hover:bg-green-700 shadow-xl", // WhatsApp Green for sticky
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <a 
      href={EXPERT.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      <span>{text}</span>
    </a>
  );
};

export default Button;