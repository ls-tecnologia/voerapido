import React from 'react';
import { QuoteForm } from './QuoteForm';
import { ShieldCheck, Clock, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative min-h-screen md:min-h-[800px] bg-[#F8F9FA] pt-20 pb-12 flex flex-col justify-center overflow-hidden">
      
      {/* Decorative Background for Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-primary opacity-10"></div>
        {/* Abstract pattern could go here */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('https://picsum.photos/1920/1080')] bg-cover bg-center opacity-20 mask-image-linear-gradient"></div>
      </div>

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-8 items-center max-w-6xl">
        
        {/* Texto Hero (Mobile First: On top or integrated) */}
        <div className="text-center md:text-left mb-4 md:mb-0 space-y-4 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-text leading-tight">
            Viaje com segurança <br className="hidden md:block"/>
            <span className="text-brand-primary">pelo melhor preço.</span>
          </h1>
          <p className="text-brand-textSec text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
            Especialistas em turismo corporativo e lazer. Cotação rápida, sem burocracia e com atendimento humano via WhatsApp.
          </p>
          
          {/* Trust badges small */}
          <div className="flex justify-center md:justify-start gap-4 pt-2 text-xs md:text-sm font-medium text-brand-textSec">
            <div className="flex items-center gap-1 hover:text-brand-success transition-colors cursor-default">
              <ShieldCheck size={16} className="text-brand-success" /> Compra Segura
            </div>
            <div className="flex items-center gap-1 hover:text-brand-primary transition-colors cursor-default">
              <Clock size={16} className="text-brand-primary" /> Atendimento Rápido
            </div>
          </div>
        </div>

        {/* Quote Form Component */}
        <div className="w-full flex justify-center md:justify-end">
          <QuoteForm />
        </div>

      </div>
    </div>
  );
};