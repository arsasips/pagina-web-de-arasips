import React, { useState } from 'react';
import { SPECIALISTS_DATA, SEDES_DATA } from '../data/mockData';
import { Specialist, SedeName } from '../types';

interface SpecialistsViewProps {
  onBookWithSpecialist: (specialist: Specialist) => void;
  selectedSede: SedeName;
}

const ADMIN_TEAM: Array<{ name: string; role: string; sede: SedeName; image: string; bio?: string }> = [
  {
    name: 'Arianna Yisel Córdoba Mindiola',
    role: 'Admisiones y facturación',
    sede: 'Atánquez',
    image: '/images/profesionales/arianna-cordoba-mindiola.jpeg',
    bio: 'Encargada de gestionar los procesos de ingreso y admisión de usuarios, verificación de derechos y autorizaciones, así como la facturación de los servicios de salud prestados por la IPS, garantizando el cumplimiento de la normatividad vigente, la eficiencia administrativa y la continuidad en la prestación de los servicios.',
  },
  {
    name: 'Carmen Cecilia Paso Maestre',
    role: 'Auxiliar de enfermería y admisionista',
    sede: 'Atánquez',
    image: '/images/profesionales/carmen-cecilia-paso-maestre.jpeg',
    bio: 'Con experiencia en atención al usuario, primera infancia y procesos administrativos en salud. Tiene conocimientos en rutas de atención, orientación a familias y cuidado integral del adulto mayor. Se caracteriza por su responsabilidad, liderazgo, compromiso y calidad humana, con vocación de servicio y facilidad para trabajar en equipo.',
  },
  {
    name: 'Lexibel León',
    role: 'Técnico laboral por competencias en auxiliar administrativo',
    sede: 'Valledupar',
    image: '/images/profesionales/lexibel-leon.jpeg',
  },
];

export const SpecialistsView: React.FC<SpecialistsViewProps> = ({
  onBookWithSpecialist,
  selectedSede,
}) => {
  const [selectedSedeFilter, setSelectedSedeFilter] = useState<'todos' | SedeName>(selectedSede);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = SPECIALISTS_DATA.filter((s) => {
    const matchesSede =
      selectedSedeFilter === 'todos' || s.sedes.includes(selectedSedeFilter);
    const matchesQuery =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.focusAreas ?? []).some((fa) => fa.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSede && matchesQuery;
  });

  return (
    <div className="max-w-[1240px] mx-auto px-4 md:px-8 py-12 flex flex-col gap-10">
      {/* Title & Introduction */}
      <div className="flex flex-col gap-3 text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-[#004090] font-bold">
          Equipo de {selectedSedeFilter === 'todos' ? 'Valledupar y Atánquez' : selectedSedeFilter}
        </span>
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-[#1c1c17]">
          Profesionales y equipo
        </h1>
        <p className="text-sm md:text-base text-[#424751] leading-relaxed">
          Conoce a parte del equipo de cada sede, según la información institucional recibida.
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
              className="w-full bg-white border border-[#1c1c17]/15 rounded-full pl-10 pr-4 py-2 text-xs text-[#1c1c17] focus:outline-none focus:border-[#004090]"
            />
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-[#E1EDF8] rounded-full">
            <button
              onClick={() => setSelectedSedeFilter('todos')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedSedeFilter === 'todos'
                  ? 'bg-white text-[#004090] shadow-sm'
                  : 'text-[#424751] hover:text-[#1c1c17]'
              }`}
            >
              Todas las Sedes
            </button>
            <button
              onClick={() => setSelectedSedeFilter('Valledupar')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedSedeFilter === 'Valledupar'
                  ? 'bg-[#004090] text-white shadow-sm'
                  : 'text-[#424751] hover:text-[#1c1c17]'
              }`}
            >
              Sede Valledupar
            </button>
            <button
              onClick={() => setSelectedSedeFilter('Atánquez')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedSedeFilter === 'Atánquez'
                  ? 'bg-[#004090] text-white shadow-sm'
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
        {filtered.length === 0 && (
          <p className="md:col-span-2 lg:col-span-3 text-center text-sm text-[#424751] bg-white rounded-2xl p-8">
            No se encontraron perfiles con esos criterios para esta sede.
          </p>
        )}
        {filtered.map((specialist) => (
          <div
            key={specialist.id}
            className="rounded-3xl bg-white border border-[#1c1c17]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              {/* Retrato incluido en el original institucional y autorizado por el propietario. */}
              <div className="relative h-60 w-full overflow-hidden bg-[#E1EDF8]">
                {specialist.image ? (
                  <img
                    src={specialist.image}
                    alt={`Retrato de ${specialist.name}`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#004090]">
                    <span className="material-symbols-outlined text-6xl" aria-hidden="true">person</span>
                  </div>
                )}
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  {specialist.sedes.map((s) => (
                    <span
                      key={s}
                      className="bg-[#004090]/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 flex flex-col gap-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#004090]">
                    {specialist.specialty}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-[#1c1c17]">
                    {specialist.name}
                  </h3>
                  {specialist.role && <p className="text-xs text-[#727782]">{specialist.role}</p>}
                </div>

                {specialist.bio && (
                  <p className="text-xs text-[#424751] leading-relaxed">{specialist.bio}</p>
                )}

                {/* Focus areas */}
                {specialist.focusAreas && specialist.focusAreas.length > 0 && (
                  <div className="pt-2">
                    <p className="text-[11px] font-bold text-[#1c1c17] mb-1.5">Áreas de enfoque:</p>
                    <div className="flex flex-wrap gap-1.5">
                    {specialist.focusAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="bg-[#F2F8FE] text-[#424751] text-[10px] font-semibold px-2 py-0.5 rounded-md"
                      >
                        {area}
                      </span>
                    ))}
                    </div>
                  </div>
                )}

                {specialist.schedule && (
                  <div className="text-[11px] text-[#727782] bg-[#FAFCFF] p-2.5 rounded-xl border border-[#1c1c17]/5 mt-1">
                    <span className="font-semibold text-[#1c1c17]">Horario:</span> {specialist.schedule}
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 flex gap-2">
              <button
                onClick={() => onBookWithSpecialist(specialist)}
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#B84500] hover:bg-[#943700] text-white py-2.5 rounded-full font-bold text-xs shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                <span>Pedir Cita</span>
              </button>
              <a
                href={`https://wa.me/${SEDES_DATA[selectedSede === 'Valledupar' ? 'valledupar' : 'atanquez'].whatsappNumber}?text=Hola%20ARSAS%20IPS,%20deseo%20consultar%20disponibilidad%20con%20${encodeURIComponent(
                  specialist.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#004090] text-white hover:bg-[#00346B] transition-colors shrink-0"
                title="Consultar por WhatsApp"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
            </div>
          </div>
        ))}
        {ADMIN_TEAM.filter((member) => selectedSedeFilter === 'todos' || member.sede === selectedSedeFilter).map((member) => (
        <article key={`${member.sede}-${member.name}`} className="rounded-3xl bg-white border border-[#1c1c17]/10 overflow-hidden shadow-sm">
          <div className="h-60 overflow-hidden bg-[#E1EDF8]">
            <img
              src={member.image}
              alt={`Retrato de ${member.name}`}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="p-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#004090]">Equipo administrativo</span>
            <h2 className="font-heading font-bold text-xl text-[#1c1c17] mt-1">{member.name}</h2>
            <p className="text-xs text-[#727782] mt-1">{member.role}</p>
            {member.bio && <p className="text-xs text-[#424751] leading-relaxed mt-3">{member.bio}</p>}
            <span className="inline-block mt-3 bg-[#004090]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
              {member.sede}
            </span>
          </div>
        </article>
        ))}
      </div>
    </div>
  );
};
