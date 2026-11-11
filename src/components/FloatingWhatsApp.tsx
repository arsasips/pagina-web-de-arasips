import React from 'react';
import { getSedeInfo } from '../data/mockData';
import { SedeName } from '../types';

interface FloatingWhatsAppProps {
  selectedSede: SedeName;
  onChangeSede: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ selectedSede, onChangeSede }) => {
  const sede = getSedeInfo(selectedSede);
  const message = encodeURIComponent(`Hola ARSAS IPS, escribo a la sede ${selectedSede} para solicitar información.`);

  return (
    <aside className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      <button onClick={onChangeSede} className="rounded-full bg-white px-4 py-3 text-xs font-bold text-[#004786] shadow-lg" aria-label={`Cambiar sede, actualmente ${selectedSede}`}>
        Sede {selectedSede} · Cambiar
      </button>
      <a href={`https://wa.me/${sede.whatsappNumber}?text=${message}`} target="_blank" rel="noopener noreferrer" aria-label={`Abrir WhatsApp de la sede ${selectedSede}`} className="pulse-whatsapp flex h-14 w-14 items-center justify-center rounded-full bg-[#fc9427] text-white shadow-xl transition-transform hover:scale-105">
        <span className="material-symbols-outlined text-[28px]">chat</span>
      </a>
    </aside>
  );
};
