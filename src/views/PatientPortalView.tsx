import React, { useState } from 'react';
import { AppointmentRecord } from '../types';
import { SEDES_DATA } from '../data/mockData';

interface PatientPortalViewProps {
  appointments: AppointmentRecord[];
  onOpenBooking: () => void;
}

export const PatientPortalView: React.FC<PatientPortalViewProps> = ({
  appointments,
  onOpenBooking,
}) => {
  const [searchDoc, setSearchDoc] = useState('');
  const [searchResult, setSearchResult] = useState<AppointmentRecord[] | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchDoc.trim().toLowerCase();
    if (!query) {
      setSearchResult(null);
      setHasSearched(false);
      return;
    }

    const found = appointments.filter(
      (a) =>
        a.documentNumber.toLowerCase().includes(query) ||
        a.confirmationCode.toLowerCase().includes(query) ||
        a.patientName.toLowerCase().includes(query)
    );
    setSearchResult(found);
    setHasSearched(true);
  };

  const getStatusBadge = (status: AppointmentRecord['status']) => {
    switch (status) {
      case 'Confirmada':
        return (
          <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">check_circle</span>
            <span>Cita Confirmada</span>
          </span>
        );
      case 'En Validación EPS':
        return (
          <span className="bg-amber-100 text-amber-800 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">pending_actions</span>
            <span>En Validación EPS</span>
          </span>
        );
      case 'Completada':
        return (
          <span className="bg-blue-100 text-blue-800 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">task_alt</span>
            <span>Atención Completada</span>
          </span>
        );
      default:
        return (
          <span className="bg-gray-100 text-gray-800 text-[11px] font-bold px-3 py-1 rounded-full">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="max-w-[1000px] mx-auto px-4 md:px-8 py-12 flex flex-col gap-10">
      {/* Title */}
      <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
        <span className="text-xs uppercase tracking-widest text-[#004786] font-bold">
          Portal del Paciente y Familia
        </span>
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-[#1c1c17]">
          Consulta el Estado de tu Cita
        </h1>
        <p className="text-sm text-[#424751]">
          Ingresa el número de documento de identidad del paciente o tu código de radicado.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#1c1c17]/10 shadow-sm max-w-2xl mx-auto w-full">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-4 top-3.5 text-[#727782] text-[22px]">
              badge
            </span>
            <input
              type="text"
              required
              placeholder="Número de documento o código de radicado"
              value={searchDoc}
              onChange={(e) => setSearchDoc(e.target.value)}
              className="w-full bg-[#fdf9f1] border border-[#1c1c17]/15 rounded-full pl-12 pr-4 py-3 text-sm text-[#1c1c17] focus:outline-none focus:border-[#004786] focus:ring-1 focus:ring-[#004786]"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#004786] hover:bg-[#00386b] text-white px-8 py-3 rounded-full font-bold text-sm shadow-md transition-all shrink-0"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
            <span>Buscar Cita</span>
          </button>
        </form>

      </div>

      {/* Results Section */}
      {hasSearched && (
        <div className="flex flex-col gap-6">
          <h2 className="font-heading font-bold text-xl text-[#1c1c17]">
            Resultados de Búsqueda ({searchResult ? searchResult.length : 0})
          </h2>

          {searchResult && searchResult.length > 0 ? (
            <div className="flex flex-col gap-4">
              {searchResult.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-6 md:p-8 border border-[#1c1c17]/10 shadow-sm flex flex-col gap-6 hover:shadow-md transition-shadow"
                >
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1c1c17]/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#cce5ff] text-[#004786] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[26px]">
                          medical_services
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-[#fc9427]">
                          Radicado: {item.confirmationCode}
                        </span>
                        <h3 className="font-heading font-bold text-lg text-[#1c1c17]">
                          {item.serviceName}
                        </h3>
                      </div>
                    </div>
                    <div>{getStatusBadge(item.status)}</div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    <div className="bg-[#fdf9f1] p-3 rounded-2xl">
                      <span className="text-[#727782] block mb-0.5">Paciente:</span>
                      <p className="font-bold text-[#1c1c17]">{item.patientName}</p>
                      <p className="text-[11px] text-[#727782]">
                        {item.documentType}: {item.documentNumber}
                      </p>
                      {item.isMinor && (
                        <p className="text-[10px] text-[#424751] mt-1">
                          Acudiente: {item.guardianName}
                        </p>
                      )}
                    </div>

                    <div className="bg-[#fdf9f1] p-3 rounded-2xl">
                      <span className="text-[#727782] block mb-0.5">Sede asignada:</span>
                      <p className="font-bold text-[#004786]">Sede {item.sede}</p>
                      <p className="text-[11px] text-[#727782]">
                        {item.sede === 'Valledupar'
                          ? SEDES_DATA.valledupar.address
                          : SEDES_DATA.atanquez.address}
                      </p>
                    </div>

                    <div className="bg-[#fdf9f1] p-3 rounded-2xl">
                      <span className="text-[#727782] block mb-0.5">Fecha y Turno:</span>
                      <p className="font-bold text-[#1c1c17]">{item.date}</p>
                      <p className="text-[11px] text-[#fc9427] font-semibold">{item.timeSlot}</p>
                    </div>

                    <div className="bg-[#fdf9f1] p-3 rounded-2xl">
                      <span className="text-[#727782] block mb-0.5">Convenio EPS / Modalidad:</span>
                      <p className="font-bold text-[#1c1c17]">{item.eps}</p>
                      {item.orderNumber && (
                        <p className="text-[11px] text-[#727782]">Orden: {item.orderNumber}</p>
                      )}
                    </div>
                  </div>

                  {/* Notes & Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <div className="text-xs text-[#424751] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#004786] text-[18px]">
                        info
                      </span>
                      <span>
                        Presentarse 15 min antes con documento físico y copia de autorización.
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/${
                        item.sede === 'Valledupar'
                          ? SEDES_DATA.valledupar.whatsappNumber
                          : SEDES_DATA.atanquez.whatsappNumber
                      }?text=Hola%20ARSAS%20IPS,%20consulto%20por%20mi%20cita%20radicada%20${encodeURIComponent(
                        item.confirmationCode
                      )}%20a%20nombre%20de%20${encodeURIComponent(item.patientName)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#fc9427] hover:bg-[#e57f15] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-sm transition-all"
                    >
                      <span className="material-symbols-outlined text-[16px]">chat</span>
                      <span>Contactar a Sede por WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 text-center border border-[#1c1c17]/10 flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">search_off</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1c1c17]">
                No encontramos registros con este criterio
              </h3>
              <p className="text-xs text-[#424751] max-w-md">
                Verifica que el número de identificación esté bien escrito sin puntos ni comas, o
                agenda una nueva cita en línea.
              </p>
              <button
                onClick={onOpenBooking}
                className="mt-2 bg-[#004786] text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-sm"
              >
                Agendar Nueva Cita
              </button>
            </div>
          )}
        </div>
      )}

      {/* All upcoming appointments list if no search was executed */}
      {!hasSearched && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-bold text-lg text-[#1c1c17]">
              Citas y Solicitudes Recientes ({appointments.length})
            </h3>
            <button
              onClick={onOpenBooking}
              className="text-xs font-bold text-[#004786] hover:underline"
            >
              + Nueva Cita
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {appointments.map((a) => (
              <div
                key={a.id}
                className="bg-white p-5 rounded-2xl border border-[#1c1c17]/10 shadow-sm flex flex-col justify-between gap-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#fc9427]">
                      {a.confirmationCode}
                    </span>
                    <h4 className="font-heading font-bold text-base text-[#1c1c17]">
                      {a.patientName}
                    </h4>
                    <p className="text-xs text-[#004786] font-semibold">{a.serviceName}</p>
                  </div>
                  <div>{getStatusBadge(a.status)}</div>
                </div>

                <div className="text-xs text-[#727782] flex items-center justify-between border-t border-[#1c1c17]/5 pt-2">
                  <span>
                    📍 Sede {a.sede} · {a.date}
                  </span>
                  <span className="font-semibold text-[#1c1c17]">{a.timeSlot}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
