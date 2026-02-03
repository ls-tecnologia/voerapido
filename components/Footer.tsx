import React from 'react';
import { Plane, Instagram, Facebook, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-bg border-t border-brand-border py-12 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-brand-primary p-1.5 rounded-lg text-white">
              <Plane size={18} fill="currentColor" />
            </div>
            <span className="text-lg font-bold text-brand-text">VOERAPIDO</span>
          </div>
          <p className="text-sm text-brand-textSec">
            CNPJ: 00.000.000/0001-00 <br/>
            R. Arão Lins de Andrade, Nº 588 - Loja 02 - Prazeres, Jaboatão dos Guararapes - PE, 54310-335
          </p>
        </div>

        <div>
          <h4 className="font-bold text-brand-text mb-3">Serviços</h4>
          <ul className="space-y-2 text-sm text-brand-textSec">
            <li><a href="#" className="hover:text-brand-primary">Passagens Aéreas</a></li>
            <li><a href="#" className="hover:text-brand-primary">Hotéis e Resorts</a></li>
            <li><a href="#" className="hover:text-brand-primary">Seguro Viagem</a></li>
            <li><a href="#" className="hover:text-brand-primary">Corporativo</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-brand-text mb-3">Ajuda</h4>
          <ul className="space-y-2 text-sm text-brand-textSec">
            <li><a href="#" className="hover:text-brand-primary">Central de Ajuda</a></li>
            <li><a href="#" className="hover:text-brand-primary">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-brand-primary">Termos de Uso</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-brand-text mb-3">Redes Sociais</h4>
          <div className="flex gap-4 text-brand-textSec">
            <a href="#" className="hover:text-brand-primary"><Instagram size={20} /></a>
            <a href="#" className="hover:text-brand-primary"><Facebook size={20} /></a>
            <a href="#" className="hover:text-brand-primary"><Linkedin size={20} /></a>
          </div>
        </div>

      </div>
      
      <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-brand-border text-center">
        <p className="text-xs text-brand-muted">
          © {new Date().getFullYear()} Voerapido Agência de Viagens. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};