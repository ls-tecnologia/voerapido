import React from "react";
import { Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-bg border-t border-brand-border py-12 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <img src="/images/voerapido.svg" alt="VoeRapido" className="h-9 w-auto" />
          <p className="text-sm text-brand-textSec">
            CNPJ: 24.364.263/0001-48 <br />
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
          <h4 className="font-bold text-brand-text mb-3">Contato</h4>
          <div className="flex gap-4 text-brand-textSec mb-3">
            <a href="https://www.instagram.com/voerapido" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary">
              <Instagram size={20} />
            </a>
            <a href="https://wa.me/5581987365000" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
          <a href="tel:+558134765000" className="text-sm text-brand-textSec hover:text-brand-primary transition-colors">(81) 3476-5000</a>
          <br />
          <a href="mailto:atendimento@voerapido.com" className="text-sm text-brand-textSec hover:text-brand-primary transition-colors">atendimento@voerapido.com</a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-brand-border text-center">
        <p className="text-xs text-brand-muted">
          © {new Date().getFullYear()} Voerapido Agência de Viagens. Todos os direitos reservados.
        </p>
        <p className="text-xs text-brand-muted mt-1">
          Desenvolvido por{" "}
          <a href="https://atlaspe.com.br" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-medium hover:underline">Atlas Soluções Digitais</a>
        </p>
      </div>
    </footer>
  );
};
