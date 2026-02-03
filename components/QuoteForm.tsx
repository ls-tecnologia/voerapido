import React, { useState, useEffect } from 'react';
import { MapPin, Bus, Plane, Check, Send, Globe, ChevronDown, Loader2, AlertCircle } from 'lucide-react';
import { TripDetails } from '../types';

// Types for IBGE API
interface IBGEUF {
  id: number;
  sigla: string;
  nome: string;
}

interface IBGECity {
  id: number;
  nome: string;
}

// Reusable Location Selector Component
const LocationInput = ({ 
  label, 
  value, 
  onChange,
  error
}: { 
  label: string, 
  value: string, 
  onChange: (val: string) => void,
  error?: boolean
}) => {
  const [ufs, setUfs] = useState<IBGEUF[]>([]);
  const [cities, setCities] = useState<IBGECity[]>([]);
  const [selectedUf, setSelectedUf] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [loadingCities, setLoadingCities] = useState(false);

  // Fetch UFs on mount
  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
      .then(res => res.json())
      .then(data => setUfs(data))
      .catch(err => console.error("Erro ao carregar UFs", err));
  }, []);

  // Fetch Cities when UF changes
  useEffect(() => {
    if (selectedUf) {
      setLoadingCities(true);
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
        .then(res => res.json())
        .then(data => {
          setCities(data);
          setLoadingCities(false);
          setSelectedCity(''); 
        })
        .catch(err => {
          console.error("Erro ao carregar cidades", err);
          setLoadingCities(false);
        });
    } else {
      setCities([]);
    }
  }, [selectedUf]);

  // Update parent value when City changes
  useEffect(() => {
    if (selectedCity && selectedUf) {
      onChange(`${selectedCity} - ${selectedUf}`);
    } else {
       // Clear value if city is not selected to enforce full selection
       if (selectedUf && !selectedCity) {
           onChange(''); 
       }
    }
  }, [selectedCity, selectedUf, onChange]);

  return (
    <div className="space-y-1">
      <label className={`block text-xs font-semibold ml-1 transition-colors ${error ? 'text-red-500' : 'text-brand-textSec'}`}>
        {label} {error && <span className="text-[10px] font-normal opacity-80">- Obrigatório</span>}
      </label>
      <div className="flex gap-2">
        {/* UF Selector */}
        <div className="relative w-1/3 min-w-[90px]">
          <select
            className={`w-full appearance-none bg-brand-bg border rounded-lg py-3 pl-3 pr-8 text-sm font-medium text-brand-text focus:ring-2 focus:ring-brand-light focus:border-brand-primary outline-none transition-all cursor-pointer ${error ? 'border-red-300 ring-1 ring-red-100' : 'border-brand-border'}`}
            value={selectedUf}
            onChange={(e) => setSelectedUf(e.target.value)}
          >
            <option value="">UF</option>
            {ufs.map(uf => (
              <option key={uf.id} value={uf.sigla}>{uf.sigla}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-textSec pointer-events-none" size={16} />
        </div>

        {/* City Selector */}
        <div className="relative flex-1">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-textSec z-10">
            {loadingCities ? <Loader2 size={16} className="animate-spin text-brand-primary" /> : <MapPin size={16} />}
          </div>
          
          <select
            className={`w-full appearance-none bg-brand-bg border rounded-lg py-3 pl-9 pr-8 text-sm text-brand-text focus:ring-2 focus:ring-brand-light focus:border-brand-primary outline-none transition-all cursor-pointer ${!selectedUf ? 'opacity-50 cursor-not-allowed' : ''} ${error ? 'border-red-300 ring-1 ring-red-100' : 'border-brand-border'}`}
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!selectedUf}
          >
            <option value="">{loadingCities ? 'Carregando...' : 'Selecione a cidade'}</option>
            {cities.map(city => (
              <option key={city.id} value={city.nome}>{city.nome}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-textSec pointer-events-none" size={16} />
        </div>
      </div>
    </div>
  );
};

export const QuoteForm: React.FC = () => {
  const [details, setDetails] = useState<TripDetails>({
    type: 'round-trip',
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    transport: 'plane',
    extras: {
      hotel: false,
      transfer: false,
      insurance: false,
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    origin?: boolean;
    destination?: boolean;
    departureDate?: boolean;
    returnDate?: boolean;
  }>({});
  const [dateMismatch, setDateMismatch] = useState(false);

  const handleExtraToggle = (key: keyof typeof details.extras) => {
    setDetails(prev => ({
      ...prev,
      extras: { ...prev.extras, [key]: !prev.extras[key] }
    }));
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    let isValid = true;
    let isDateInvalid = false;

    if (!details.origin) {
      newErrors.origin = true;
      isValid = false;
    }
    if (!details.destination) {
      newErrors.destination = true;
      isValid = false;
    }
    if (!details.departureDate) {
      newErrors.departureDate = true;
      isValid = false;
    }
    if (details.type === 'round-trip') {
      if (!details.returnDate) {
        newErrors.returnDate = true;
        isValid = false;
      } else if (details.departureDate && details.returnDate < details.departureDate) {
        newErrors.returnDate = true;
        isValid = false;
        isDateInvalid = true;
      }
    }

    setErrors(newErrors);
    setDateMismatch(isDateInvalid);
    return isValid;
  };

  const handleWhatsAppSubmit = () => {
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
        const typeText = details.type === 'round-trip' ? 'Ida e Volta' : 'Somente Ida';
        
        // Formating dates for display
        const dateText = details.type === 'round-trip' 
          ? `${formatDate(details.departureDate)} até ${formatDate(details.returnDate)}`
          : `${formatDate(details.departureDate)}`;
        
        const transportText = details.transport === 'plane' ? 'Avião' : 'Ônibus';
        
        const extrasList = [
            details.extras.hotel ? '• Hotel' : '',
            details.extras.transfer ? '• Transfer' : '',
            details.extras.insurance ? '• Seguro' : ''
        ].filter(Boolean).join('\n');
        
        const extrasText = extrasList ? extrasList : '• Nenhum';

      const text = `
Olá! 👋
Gostaria de solicitar um orçamento de viagem.

📍 Origem: ${details.origin}
📍 Destino: ${details.destination}
✈️ Tipo de viagem: ${typeText}
📅 Datas: ${dateText}
👥 Número de pessoas: ${details.passengers}
🚌 Transporte: ${transportText}

➕ Serviços adicionais:
${extrasText}

Fico no aguardo do atendimento.
Obrigado!
      `.trim();

      const encoded = encodeURIComponent(text);
      // Atualizado para o número solicitado: 81993077777 (com prefixo do país 55)
      window.open(`https://wa.me/5581993077777?text=${encoded}`, '_blank');
      setIsSubmitting(false);
    }, 600);
  };

  const handleInternationalClick = () => {
    const text = `Olá! Tenho interesse em uma *Viagem Internacional*. Gostaria de falar com um consultor.`;
    // Atualizado para o número solicitado
    window.open(`https://wa.me/5581993077777?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-brand-surface rounded-xl shadow-xl border border-brand-border overflow-hidden w-full max-w-md mx-auto animate-fade-in-up delay-200">
      {/* Header do Card */}
      <div className="bg-brand-primary p-4 text-center">
        <h3 className="text-white font-bold text-lg">Simular Viagem Nacional</h3>
        <p className="text-brand-light text-xs opacity-90">Preencha para receber cotação via WhatsApp</p>
      </div>

      <div className="p-5 space-y-5">
        
        {/* Tipo de Viagem */}
        <div className="flex bg-brand-bg p-1 rounded-lg">
          <button
            onClick={() => {
              setDetails(prev => ({ ...prev, type: 'round-trip' }));
              setErrors(prev => ({ ...prev, returnDate: false }));
              setDateMismatch(false);
            }}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              details.type === 'round-trip' 
                ? 'bg-white text-brand-primary shadow-sm' 
                : 'text-brand-textSec hover:text-brand-text'
            }`}
          >
            Ida e Volta
          </button>
          <button
            onClick={() => {
              setDetails(prev => ({ ...prev, type: 'one-way' }));
              setErrors(prev => ({ ...prev, returnDate: false }));
              setDateMismatch(false);
            }}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              details.type === 'one-way' 
                ? 'bg-white text-brand-primary shadow-sm' 
                : 'text-brand-textSec hover:text-brand-text'
            }`}
          >
            Somente Ida
          </button>
        </div>

        {/* Origem e Destino com IBGE API */}
        <div className="space-y-4">
          <LocationInput 
            label="Origem (Onde você está?)" 
            value={details.origin} 
            onChange={(val) => {
              setDetails(prev => ({...prev, origin: val}));
              if (val) setErrors(prev => ({ ...prev, origin: false }));
            }} 
            error={errors.origin}
          />
          <LocationInput 
            label="Destino (Para onde vai?)" 
            value={details.destination} 
            onChange={(val) => {
              setDetails(prev => ({...prev, destination: val}));
              if (val) setErrors(prev => ({ ...prev, destination: false }));
            }} 
            error={errors.destination}
          />
        </div>

        {/* International Travel Link */}
        <button 
          onClick={handleInternationalClick}
          className="w-full flex items-center justify-between p-3 bg-brand-light/50 border border-dashed border-brand-primary/40 rounded-lg group hover:bg-brand-light hover:border-brand-primary transition-all duration-300"
        >
          <div className="flex items-center gap-2">
            <Globe size={18} className="text-brand-primary" />
            <div className="text-left">
              <span className="block text-xs font-bold text-brand-primary">Viagem Internacional?</span>
              <span className="block text-[10px] text-brand-textSec group-hover:text-brand-dark">Fale com um consultor especialista</span>
            </div>
          </div>
          <ChevronDown className="-rotate-90 text-brand-primary/50 group-hover:text-brand-primary transition-transform" size={16} />
        </button>

        {/* Datas */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={`block text-xs font-semibold mb-1 ${errors.departureDate ? 'text-red-500' : 'text-brand-textSec'}`}>
              Data de Ida {errors.departureDate && '*'}
            </label>
            <div className="relative">
              <input
                type="date"
                className={`w-full px-3 py-2.5 bg-brand-bg border rounded-lg text-brand-text text-sm focus:ring-2 focus:ring-brand-light focus:border-brand-primary outline-none transition-all ${errors.departureDate ? 'border-red-300 ring-1 ring-red-100' : 'border-brand-border'}`}
                value={details.departureDate}
                onChange={(e) => {
                  setDetails(prev => ({ ...prev, departureDate: e.target.value }));
                  if (e.target.value) {
                    setErrors(prev => ({ ...prev, departureDate: false }));
                    // Limpa erro de data mismatch se o usuário corrigir
                    if (details.returnDate && e.target.value <= details.returnDate) {
                        setDateMismatch(false);
                    }
                  }
                }}
              />
            </div>
          </div>
          <div>
            <label className={`block text-xs font-semibold mb-1 ${errors.returnDate ? 'text-red-500' : 'text-brand-textSec'}`}>
              {details.type === 'round-trip' ? 'Data de Volta' : 'Retorno (Opcional)'} {errors.returnDate && '*'}
            </label>
            <div className="relative">
              <input
                type="date"
                disabled={details.type === 'one-way'}
                min={details.departureDate} // Impede seleção de datas anteriores na UI
                className={`w-full px-3 py-2.5 bg-brand-bg border rounded-lg text-brand-text text-sm focus:ring-2 focus:ring-brand-light focus:border-brand-primary outline-none transition-all ${details.type === 'one-way' ? 'opacity-50 cursor-not-allowed border-brand-border' : (errors.returnDate ? 'border-red-300 ring-1 ring-red-100' : 'border-brand-border')}`}
                value={details.returnDate}
                onChange={(e) => {
                  setDetails(prev => ({ ...prev, returnDate: e.target.value }));
                  if (e.target.value) {
                    setErrors(prev => ({ ...prev, returnDate: false }));
                    if (details.departureDate && e.target.value >= details.departureDate) {
                        setDateMismatch(false);
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Passageiros e Transporte */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-brand-textSec mb-1">Passageiros</label>
            <div className="flex items-center justify-between bg-brand-bg border border-brand-border rounded-lg px-3 py-2.5">
              <button 
                onClick={() => setDetails(prev => ({ ...prev, passengers: Math.max(1, prev.passengers - 1) }))}
                className="w-6 h-6 flex items-center justify-center bg-brand-surface rounded shadow-sm text-brand-primary font-bold active:scale-95 transition-transform hover:bg-white"
              >-</button>
              <span className="text-sm font-semibold text-brand-text">{details.passengers}</span>
              <button 
                onClick={() => setDetails(prev => ({ ...prev, passengers: Math.min(20, prev.passengers + 1) }))}
                className="w-6 h-6 flex items-center justify-center bg-brand-surface rounded shadow-sm text-brand-primary font-bold active:scale-95 transition-transform hover:bg-white"
              >+</button>
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-brand-textSec mb-1">Meio</label>
            <div className="flex bg-brand-bg border border-brand-border rounded-lg p-0.5 h-[42px]">
              <button
                onClick={() => setDetails(prev => ({ ...prev, transport: 'plane' }))}
                className={`flex-1 flex items-center justify-center rounded transition-all duration-200 ${details.transport === 'plane' ? 'bg-white text-brand-primary shadow-sm scale-[0.98]' : 'text-brand-muted hover:text-brand-textSec'}`}
              >
                <Plane size={18} />
              </button>
              <button
                onClick={() => setDetails(prev => ({ ...prev, transport: 'bus' }))}
                className={`flex-1 flex items-center justify-center rounded transition-all duration-200 ${details.transport === 'bus' ? 'bg-white text-brand-primary shadow-sm scale-[0.98]' : 'text-brand-muted hover:text-brand-textSec'}`}
              >
                <Bus size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Extras */}
        <div>
          <label className="block text-xs font-semibold text-brand-textSec mb-2">Adicionais</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'hotel', label: 'Hotel' },
              { key: 'transfer', label: 'Transfer' },
              { key: 'insurance', label: 'Seguro' }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => handleExtraToggle(item.key as keyof typeof details.extras)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-200 ${
                  details.extras[item.key as keyof typeof details.extras]
                    ? 'bg-brand-light border-brand-primary text-brand-dark'
                    : 'bg-brand-bg border-brand-border text-brand-textSec hover:border-brand-muted'
                }`}
              >
                {details.extras[item.key as keyof typeof details.extras] && <Check size={12} />}
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Botão de Ação */}
        <div className="space-y-2">
            <button
            onClick={handleWhatsAppSubmit}
            disabled={isSubmitting}
            className="w-full bg-brand-primary hover:bg-brand-dark text-white font-bold py-3.5 rounded-lg shadow-lg shadow-brand-primary/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-80 disabled:cursor-wait group"
            >
            {isSubmitting ? (
                <Loader2 size={18} className="animate-spin" />
            ) : (
                <>
                <Send size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                <span>Solicitar no WhatsApp</span>
                </>
            )}
            </button>
            {(errors.origin || errors.destination || errors.departureDate || errors.returnDate) && (
                <div className="flex flex-col gap-1 text-red-500 text-xs animate-in fade-in slide-in-from-top-1 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <AlertCircle size={12} />
                      <span>
                        {dateMismatch 
                          ? 'A data da volta não pode ser anterior à data da ida.'
                          : 'Preencha os campos obrigatórios para continuar.'
                        }
                      </span>
                    </div>
                </div>
            )}
        </div>

        <p className="text-center text-[10px] text-brand-muted">
          Ao clicar, você será redirecionado para falar com um consultor. Sem compromisso.
        </p>

      </div>
    </div>
  );
};