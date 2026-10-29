import React, { useState } from 'react';
import { SEDES_DATA, CLINIC_FACADE_URL } from '../data/mockData';

interface SedesViewProps {
  onOpenBookingForSede: (sede: 'Valledupar' | 'Atánquez') => void;
}

export const SedesView: React.FC<SedesViewProps> = ({
  onOpenBookingForSede,
}) => {
  const [activeTab, setActiveTab] = useState<'valledupar' | 'atanquez'>('valledupar');
  const sede = SEDES_DATA[activeTab];

  return (
    <div className="max-w-[1240px] mx-auto px-4 md:px-8 py-12 flex flex-col gap-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
        <span className="text-xs uppercase tracking-widest text-[#004786] font-bold">
          Infraestructura y Cobertura
        </span>
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-[#1c1c17]">
          Nuestras Sedes Clínicas
        </h1>
        <p className="text-sm md:text-base text-[#424751] leading-relaxed">
          Diseñadas pensando en la comodidad, accesibilidad universal y bienestar integral de
          nuestros pacientes y sus cuidadores en el departamento del Cesar.
        </p>

        {/* Tab switch */}
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            onClick={() => setActiveTab('valledupar')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
              activeTab === 'valledupar'
                ? 'bg-[#004786] text-white shadow-md'
                : 'bg-white text-[#424751] hover:bg-[#ebe8e0] border border-[#1c1c17]/10'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">location_city</span>
            <span>Sede Valledupar (Principal)</span>
          </button>
          <button
            onClick={() => setActiveTab('atanquez')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
              activeTab === 'atanquez'
                ? 'bg-[#004786] text-white shadow-md'
                : 'bg-white text-[#424751] hover:bg-[#ebe8e0] border border-[#1c1c17]/10'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">nature_people</span>
            <span>Sede Atánquez (Territorio)</span>
          </button>
        </div>
      </div>

      {/* Main Sede Card Feature */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white rounded-3xl p-6 md:p-10 border border-[#1c1c17]/10 shadow-sm">
        {/* Left: Images & Badges */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="relative rounded-3xl overflow-hidden shadow-lg h-[340px] md:h-[400px]">
            <img
              src={CLINIC_FACADE_URL}
              alt={sede.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#004786] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {sede.badge}
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#004786] text-[24px]">
                  accessible_forward
                </span>
                <span className="text-xs font-bold text-[#1c1c17]">
                  Rampa y acceso 100% libre de barreras arquitectónicas
                </span>
              </div>
            </div>
          </div>

          {/* Quick Schedule Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-[#fdf9f1] p-4 rounded-2xl border border-[#1c1c17]/5 flex flex-col gap-1">
              <div className="flex items-center gap-2 text-[#004786] text-xs font-bold">
                <span className="material-symbols-outlined text-[18px]">event_available</span>
                <span>Recepción de Órdenes</span>
              </div>
              <p className="text-xs text-[#1c1c17] font-semibold mt-1">
                {sede.receptionSchedule}
              </p>
              <p className="text-[11px] text-[#727782]">Presencial en ventanilla de admisiones</p>
            </div>

            <div className="bg-[#fdf9f1] p-4 rounded-2xl border border-[#1c1c17]/5 flex flex-col gap-1">
              <div className="flex items-center gap-2 text-[#fc9427] text-xs font-bold">
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Atención Digital & Tarde</span>
              </div>
              <p className="text-xs text-[#1c1c17] font-semibold mt-1">
                {sede.afternoonSchedule}
              </p>
              <p className="text-[11px] text-[#727782]">Canal directo de WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Right: Info & Facilities */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-[#1c1c17]">{sede.name}</h2>
            <div className="flex items-center gap-2 text-[#424751] text-sm mt-2">
              <span className="material-symbols-outlined text-[#004786] text-[20px]">
                location_on
              </span>
              <span className="font-medium">{sede.address}</span>
            </div>
            <p className="text-sm text-[#424751] mt-3 leading-relaxed">
              {sede.description}
            </p>
          </div>

          {/* Facilities list */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#004786] mb-3">
              Áreas y Equipamiento Destacado:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {sede.facilities.map((fac, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 bg-[#f7f3eb] p-3 rounded-xl text-xs text-[#1c1c17]"
                >
                  <span className="material-symbols-outlined text-emerald-600 text-[18px] shrink-0">
                    check
                  </span>
                  <span>{fac}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact and Booking Action Bar */}
          <div className="pt-4 border-t border-[#1c1c17]/10 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() =>
                onOpenBookingForSede(
                  activeTab === 'valledupar' ? 'Valledupar' : 'Atánquez'
                )
              }
              className="flex-1 flex items-center justify-center gap-2 bg-[#004786] hover:bg-[#00386b] text-white py-3.5 rounded-full font-bold text-sm shadow-md transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Agendar cita en {activeTab === 'valledupar' ? 'Valledupar' : 'Atánquez'}</span>
            </button>

            <a
              href={`https://wa.me/${sede.whatsappNumber}?text=Hola%20ARSAS%20IPS,%20escribo%20con%20inquietud%20sobre%20la%20Sede%20${encodeURIComponent(
                sede.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#fc9427] hover:bg-[#e57f15] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-[0_4px_16px_rgba(252,148,39,0.3)] transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>WhatsApp Sede</span>
            </a>
          </div>

          {/* Guide for first time patients */}
          <div className="bg-[#fdf9f1] p-4 rounded-2xl border border-[#1c1c17]/10">
            <h4 className="text-xs font-bold text-[#004786] flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[18px]">info</span>
              <span>Requisitos para tu primera visita a la sede:</span>
            </h4>
            <ul className="text-xs text-[#424751] space-y-1 list-disc pl-5">
              <li>Llegar 15 minutos antes de la hora programada.</li>
              <li>Traer documento original del paciente y acudiente.</li>
              <li>Presentar copia impresa o digital de la orden médica y autorización EPS.</li>
              <li>Ropa cómoda para sesiones de fisioterapia o terapia ocupacional.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
