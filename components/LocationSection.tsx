import React from "react";
import { MapPin, Navigation, Phone } from "lucide-react";

export const LocationSection: React.FC = () => {
  // ✅ Link correto com destination_place_id
  const mapsDirectionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=-8.1636220918671,-34.926400322501095&destination_place_id=ChIJkRLWtrwQqncRr_ff67fl0Vk";

  const whatsappUrl =
    "https://wa.me/55SEUNUMERO?text=Ol%C3%A1!%20Gostaria%20de%20atendimento%20na%20loja%20f%C3%ADsica.";

  return (
    <section id="location" className="bg-brand-surfaceAlt py-14">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-brand-primary font-semibold text-sm">
            <MapPin size={16} />
            Loja física
          </div>

          <h2 className="mt-2 text-3xl font-bold text-brand-text">
            Onde estamos
          </h2>

          <p className="mt-2 text-base text-brand-textSecondary">
            Atendimento presencial na loja. Venha nos visitar ou trace a rota
            direto no Google Maps.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 mb-6">
          <a
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-md
                       bg-brand-primary hover:bg-brand-dark
                       text-white px-5 py-4 text-base font-semibold
                       transition-colors shadow-sm"
          >
            <Navigation size={20} />
            Como chegar
          </a>

          <a
            href={whatsappUrl}
            className="w-full inline-flex items-center justify-center gap-2 rounded-md
                       border border-brand-border bg-white
                       text-brand-text px-5 py-4 text-base font-semibold
                       hover:bg-brand-surface transition-colors"
          >
            <Phone size={20} />
            Falar no WhatsApp
          </a>
        </div>

        {/* Info Card */}
        <div className="rounded-lg border border-brand-border bg-white p-5 mb-6">
          <p className="text-sm font-semibold text-brand-text">
            VOERAPIDO — Loja Física
          </p>
          <p className="mt-1 text-sm text-brand-textSecondary">
            Recife – PE <br />
            Atendimento presencial com suporte completo para sua viagem.
          </p>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden border border-brand-border bg-white shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.387849692064!2d-34.926400322501095!3d-8.1636220918671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae10bcb6d112d%3A0x59d1e5b7ebfdf7af!2sVOERAPIDO!5e0!3m2!1spt-BR!2sbr!4v1770126797534!5m2!1spt-BR!2sbr"
            className="w-full h-[320px]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da VOERAPIDO"
          />
        </div>
      </div>
    </section>
  );
};