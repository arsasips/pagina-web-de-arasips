import React, { useState } from 'react';
import { SPECIALISTS_DATA, SEDES_DATA } from '../data/mockData';
import { Specialist } from '../types';

interface SpecialistsViewProps {
  onBookWithSpecialist: (specialist: Specialist) => void;
}

export const SpecialistsView: React.FC<SpecialistsViewProps> = ({
  onBookWithSpecialist,
}) => {
  const [selectedSedeFilter, setSelectedSedeFilter] = useState<'todos' | 'Valledupar' | 'Atánquez'>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = SPECIALISTS_DATA.filter((s) => {
    const matchesSede =
      selectedSedeFilter === 'todos' || s.sedes.includes(selectedSedeFilter);
    const matchesQuery =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.focusAreas.some((fa) => fa.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSede && matchesQuery;
  });

  return (
    <div className="max-w-[1240px] mx-auto px-4 md:px-8 py-12 flex flex-col gap-10">
      {/* Title & Introduction */}
      <div className="flex flex-col gap-3 text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-[#004786] font-bold">
          Equipo Médico y Terapéutico
        </span>
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-[#1c1c17]">
          Nuestros Especialistas
        </h1>
        <p className="text-sm md:text-base text-[#424751] leading-relaxed">
          Profesionales certificados con amplia trayectoria en neurorehabilitación,
          fonoaudiología, pedagogía inclusiva y salud mental en Valledupar y Atánquez.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <div className="relative w-full sm:w-72">
            <span className="material-symbols-outlined absolute left-3.5 top-2.5 text-[#727782] text-[20px]">
              search
            </span>
            <input
              type="text"
              placeholder="Buscar por nombre o especialidad..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#1c1c17]/15 rounded-full pl-10 pr-4 py-2 text-xs text-[#1c1c17] focus:outline-none focus:border-[#004786]"
            />
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-[#ebe8e0] rounded-full">
            <button
              onClick={() => setSelectedSedeFilter('todos')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedSedeFilter === 'todos'
                  ? 'bg-white text-[#004786] shadow-sm'
                  : 'text-[#424751] hover:text-[#1c1c17]'
              }`}
            >
              Todas las Sedes
            </button>
            <button
              onClick={() => setSelectedSedeFilter('Valledupar')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedSedeFilter === 'Valledupar'
                  ? 'bg-[#004786] text-white shadow-sm'
                  : 'text-[#424751] hover:text-[#1c1c17]'
              }`}
            >
              Sede Valledupar
            </button>
            <button
              onClick={() => setSelectedSedeFilter('Atánquez')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedSedeFilter === 'Atánquez'
                  ? 'bg-[#004786] text-white shadow-sm'
                  : 'text-[#424751] hover:text-[#1c1c17]'
              }`}
            >
              Sede Atánquez
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Specialists */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((specialist) => (
          <div
            key={specialist.id}
            className="rounded-3xl bg-white border border-[#1c1c17]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              {/* Specialist Photo & Badge */}
              <div className="relative h-60 w-full overflow-hidden bg-[#ebe8e0]">
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#004786] shadow-sm">
                  {specialist.experienceYears} años exp.
                </div>
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  {specialist.sedes.map((s) => (
                    <span
                      key={s}
                      className="bg-[#004786]/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 flex flex-col gap-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#004786]">
                    {specialist.specialty}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-[#1c1c17]">
                    {specialist.name}
                  </h3>
                  <p className="text-xs text-[#727782]">{specialist.role}</p>
                  <p className="text-[10px] text-[#727782] font-mono mt-0.5">
                    ReTHUS: {specialist.rethus}
                  </p>
                </div>

                <p className="text-xs text-[#424751] leading-relaxed">
                  {specialist.bio}
                </p>

                {/* Focus areas */}
                <div className="pt-2">
                  <p className="text-[11px] font-bold text-[#1c1c17] mb-1.5">Áreas de enfoque:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {specialist.focusAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="bg-[#f7f3eb] text-[#424751] text-[10px] font-semibold px-2 py-0.5 rounded-md"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-[11px] text-[#727782] bg-[#fdf9f1] p-2.5 rounded-xl border border-[#1c1c17]/5 mt-1">
                  <span className="font-semibold text-[#1c1c17]">Horario:</span> {specialist.schedule}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 flex gap-2">
              <button
                onClick={() => onBookWithSpecialist(specialist)}
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#fc9427] hover:bg-[#e57f15] text-white py-2.5 rounded-full font-bold text-xs shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                <span>Pedir Cita</span>
              </button>
              <a
                href={`https://wa.me/${SEDES_DATA.valledupar.whatsappNumber}?text=Hola%20ARSAS%20IPS,%20deseo%20consultar%20disponibilidad%20con%20${encodeURIComponent(
                  specialist.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#004786] text-white hover:bg-[#00386b] transition-colors shrink-0"
                title="Consultar por WhatsApp"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
