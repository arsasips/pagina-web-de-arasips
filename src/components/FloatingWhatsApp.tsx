import React, { useState } from 'react';
import { SEDES_DATA } from '../data/mockData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="fixed bottom-6 right-6 z-40">
      {/* Quick Branch Popover */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-[#1c1c17]/10 p-4 mb-2 flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between border-b border-[#1c1c17]/5 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <p className="font-heading font-bold text-sm text-[#004786]">
                ¿A qué sede deseas escribir?
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#727782] hover:text-[#1c1c17] p-1"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          {/* Sede Valledupar WhatsApp */}
          <a
            href={`https://wa.me/${SEDES_DATA.valledupar.whatsappNumber}?text=Hola%20ARSAS%20IPS,%20escribo%20a%20la%20Sede%20Valledupar%20para%20información%20o%20cita`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 p-2.5 rounded-xl bg-[#fdf9f1] hover:bg-[#fc9427]/10 border border-[#fc9427]/20 transition-all text-left group"
          >
            <div className="w-9 h-9 rounded-full bg-[#fc9427] text-white flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[20px]">location_city</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-[#1c1c17] group-hover:text-[#fc9427] transition-colors">
                Sede Valledupar
              </p>
              <p className="text-xs text-[#424751] font-medium">
                {SEDES_DATA.valledupar.whatsappFormatted}
              </p>
              <p className="text-[11px] text-[#727782] mt-0.5">
                Recepción: 7:00 am - 12:00 m | Tarde: 2:00 pm - 4:00 pm
              </p>
            </div>
          </a>

          {/* Sede Atánquez WhatsApp */}
          <a
            href={`https://wa.me/${SEDES_DATA.atanquez.whatsappNumber}?text=Hola%20ARSAS%20IPS,%20escribo%20a%20la%20Sede%20Atánquez%20para%20información%20o%20cita`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 p-2.5 rounded-xl bg-[#fdf9f1] hover:bg-[#fc9427]/10 border border-[#fc9427]/20 transition-all text-left group"
          >
            <div className="w-9 h-9 rounded-full bg-[#004786] text-white flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[20px]">nature_people</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-[#1c1c17] group-hover:text-[#004786] transition-colors">
                Sede Atánquez
              </p>
              <p className="text-xs text-[#424751] font-medium">
                {SEDES_DATA.atanquez.whatsappFormatted}
              </p>
              <p className="text-[11px] text-[#727782] mt-0.5">
                Atención continua: 7:30 am - 3:00 pm
              </p>
            </div>
          </a>

          <div className="text-[11px] text-[#727782] text-center bg-[#f7f3eb] p-2 rounded-lg">
            Atención prioritaria para pacientes con orden médica y EPS.
          </div>
        </div>
      )}

      {/* Floating Button with Pulse animation */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir chat de WhatsApp para Valledupar o Atánquez"
        className="pulse-whatsapp flex items-center justify-center w-14 h-14 rounded-full bg-[#fc9427] hover:bg-[#e57f15] text-white shadow-[0_16px_36px_-6px_rgba(242,140,30,0.5)] transition-all transform hover:scale-105 active:scale-95 focus:outline-none"
      >
        <span className="material-symbols-outlined text-[28px]">
          {isOpen ? 'close' : 'chat'}
        </span>
      </button>
    </aside>
  );
};
