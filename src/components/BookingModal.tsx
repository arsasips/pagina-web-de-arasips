import React, { useState } from 'react';
import { SERVICES_DATA, SEDES_DATA } from '../data/mockData';
import { AppointmentRecord } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedSede?: 'Valledupar' | 'Atánquez';
  onAppointmentCreated: (appt: AppointmentRecord) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedSede,
  onAppointmentCreated,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form state
  const [sede, setSede] = useState<'Valledupar' | 'Atánquez'>(
    preselectedSede || 'Valledupar'
  );
  const [serviceId, setServiceId] = useState<string>(
    preselectedServiceId || SERVICES_DATA[0].id
  );
  const [hasEps, setHasEps] = useState<boolean>(true);
  const [epsName, setEpsName] = useState<string>('Nueva EPS');
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-14');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('08:30 a. m.');

  // Patient info
  const [patientName, setPatientName] = useState('');
  const [documentType, setDocumentType] = useState('CC');
  const [documentNumber, setDocumentNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isMinor, setIsMinor] = useState(false);
  const [guardianName, setGuardianName] = useState('');
  const [notes, setNotes] = useState('');

  // Confirmation result
  const [createdAppointment, setCreatedAppointment] =
    useState<AppointmentRecord | null>(null);

  if (!isOpen) return null;

  const currentService =
    SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];

  const handleCreateAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !documentNumber || !phone) {
      alert('Por favor completa los datos obligatorios del paciente.');
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const code = `ARS-${new Date().getFullYear()}-${randomNum}`;

    const newRecord: AppointmentRecord = {
      id: `rec-${Date.now()}`,
      confirmationCode: code,
      patientName,
      documentType,
      documentNumber,
      phone,
      email: email || undefined,
      isMinor,
      guardianName: isMinor ? guardianName : undefined,
      sede,
      serviceId,
      serviceName: currentService.name,
      eps: hasEps ? epsName : 'Particular / Pago Directo',
      orderNumber: orderNumber || undefined,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      status: hasEps ? 'En Validación EPS' : 'Confirmada',
      notes: notes || undefined,
      createdAt: new Date().toISOString(),
    };

    onAppointmentCreated(newRecord);
    setCreatedAppointment(newRecord);
    setStep(4);
  };

  const getWhatsAppBookingUrl = (record: AppointmentRecord) => {
    const targetPhone =
      record.sede === 'Valledupar'
        ? SEDES_DATA.valledupar.whatsappNumber
        : SEDES_DATA.atanquez.whatsappNumber;

    const message = `*SOLICITUD DE CITA - ARSAS IPS*\n\n` +
      `📌 *Radicado:* ${record.confirmationCode}\n` +
      `📍 *Sede:* ${record.sede}\n` +
      `🩺 *Especialidad:* ${record.serviceName}\n` +
      `👤 *Paciente:* ${record.patientName} (${record.documentType} ${record.documentNumber})\n` +
      (record.isMinor ? `👨‍👩‍👦 *Acudiente:* ${record.guardianName}\n` : '') +
      `🏥 *EPS / Modalidad:* ${record.eps}\n` +
      (record.orderNumber ? `📋 *N° Orden Médica:* ${record.orderNumber}\n` : '') +
      `📅 *Fecha solicitada:* ${record.date}\n` +
      `⏰ *Franja horaria:* ${record.timeSlot}\n` +
      `📞 *Teléfono:* ${record.phone}\n\n` +
      `Hola, he generado mi solicitud de cita desde la página web de ARSAS IPS y deseo confirmar la disponibilidad.`;

    return `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
  };

  const epsList = [
    'Nueva EPS',
    'Coosalud EPS',
    'Sanitas EPS',
    'Famisanar EPS',
    'Asmet Salud',
    'Dusakawi EPSI',
    'Cajacopi EPS',
    'Particular / Sin EPS',
    'Otra EPS / Póliza',
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#fdf9f1] rounded-3xl max-w-2xl w-full shadow-2xl border border-[#1c1c17]/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#004786] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">calendar_month</span>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl leading-tight">
                {step === 4 ? '¡Solicitud Generada con Éxito!' : 'Agendar Cita en ARSAS IPS'}
              </h3>
              <p className="text-xs text-white/80">
                {step === 4
                  ? 'Guarda tu radicado y confirma por WhatsApp'
                  : 'Atención integral en Valledupar y Atánquez'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Wizard progress steps (if not completed) */}
        {step < 4 && (
          <div className="bg-[#ebe8e0] px-6 py-3 flex items-center justify-between text-xs font-semibold text-[#424751]">
            <div className="flex items-center gap-2">
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  step === 1 ? 'bg-[#004786] text-white' : 'bg-[#c2c6d2] text-[#1c1c17]'
                }`}
              >
                1
              </span>
              <span className={step === 1 ? 'text-[#004786] font-bold' : ''}>Sede & Servicio</span>
            </div>
            <span className="text-[#c2c6d2]">→</span>
            <div className="flex items-center gap-2">
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  step === 2 ? 'bg-[#004786] text-white' : 'bg-[#c2c6d2] text-[#1c1c17]'
                }`}
              >
                2
              </span>
              <span className={step === 2 ? 'text-[#004786] font-bold' : ''}>EPS & Fecha</span>
            </div>
            <span className="text-[#c2c6d2]">→</span>
            <div className="flex items-center gap-2">
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  step === 3 ? 'bg-[#004786] text-white' : 'bg-[#c2c6d2] text-[#1c1c17]'
                }`}
              >
                3
              </span>
              <span className={step === 3 ? 'text-[#004786] font-bold' : ''}>Datos Paciente</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6">
          {/* STEP 1: Sede y Servicio */}
          {step === 1 && (
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-bold uppercase text-[#004786] tracking-wider mb-2">
                  1. Selecciona la Sede de Atención:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSede('Valledupar')}
                    className={`p-4 rounded-2xl border text-left flex flex-col gap-1 transition-all ${
                      sede === 'Valledupar'
                        ? 'border-[#004786] bg-[#004786]/5 ring-2 ring-[#004786]'
                        : 'border-[#1c1c17]/10 bg-white hover:bg-[#f7f3eb]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-bold text-base text-[#1c1c17]">
                        Sede Valledupar
                      </span>
                      <span className="material-symbols-outlined text-[#004786] text-[20px]">
                        location_city
                      </span>
                    </div>
                    <span className="text-xs text-[#727782]">Carrera 15 # 13C - 42, Barrio Obrero</span>
                    <span className="text-[11px] text-[#004786] font-semibold mt-1">
                      Todas las especialidades
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSede('Atánquez')}
                    className={`p-4 rounded-2xl border text-left flex flex-col gap-1 transition-all ${
                      sede === 'Atánquez'
                        ? 'border-[#004786] bg-[#004786]/5 ring-2 ring-[#004786]'
                        : 'border-[#1c1c17]/10 bg-white hover:bg-[#f7f3eb]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-bold text-base text-[#1c1c17]">
                        Sede Atánquez
                      </span>
                      <span className="material-symbols-outlined text-[#004786] text-[20px]">
                        nature_people
                      </span>
                    </div>
                    <span className="text-xs text-[#727782]">Calle 4 # 6-18, Corregimiento</span>
                    <span className="text-[11px] text-[#004786] font-semibold mt-1">
                      Atención comunitaria territorial
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#004786] tracking-wider mb-2">
                  2. Selecciona la Especialidad Terapéutica o Médica:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1">
                  {SERVICES_DATA.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setServiceId(srv.id)}
                      className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                        serviceId === srv.id
                          ? 'border-[#fc9427] bg-[#fc9427]/10 ring-1 ring-[#fc9427]'
                          : 'border-[#1c1c17]/10 bg-white hover:bg-[#f7f3eb]'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#cce5ff] text-[#004786] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">{srv.iconName}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-xs text-[#1c1c17] truncate">{srv.name}</p>
                        <p className="text-[11px] text-[#727782] truncate">{srv.subtitle}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 bg-[#004786] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#00386b] transition-all shadow-md"
                >
                  <span>Continuar</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: EPS, Modalidad y Fecha */}
          {step === 2 && (
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-bold uppercase text-[#004786] tracking-wider mb-2">
                  ¿Cómo vas a ser atendido?
                </label>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <button
                    type="button"
                    onClick={() => setHasEps(true)}
                    className={`p-3 rounded-xl border text-center font-bold text-xs transition-all ${
                      hasEps
                        ? 'border-[#004786] bg-[#004786] text-white'
                        : 'border-[#1c1c17]/10 bg-white text-[#424751] hover:bg-[#f7f3eb]'
                    }`}
                  >
                    Por EPS (Con Orden Médica)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setHasEps(false);
                      setEpsName('Particular / Prepago');
                    }}
                    className={`p-3 rounded-xl border text-center font-bold text-xs transition-all ${
                      !hasEps
                        ? 'border-[#004786] bg-[#004786] text-white'
                        : 'border-[#1c1c17]/10 bg-white text-[#424751] hover:bg-[#f7f3eb]'
                    }`}
                  >
                    Particular / Tarifa Directa
                  </button>
                </div>

                {hasEps && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#f7f3eb] p-3 rounded-2xl border border-[#1c1c17]/5">
                    <div>
                      <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
                        EPS Afiliada:
                      </label>
                      <select
                        value={epsName}
                        onChange={(e) => setEpsName(e.target.value)}
                        className="w-full bg-white border border-[#1c1c17]/15 rounded-xl px-3 py-2 text-xs text-[#1c1c17] focus:outline-none focus:border-[#004786]"
                      >
                        {epsList.map((e) => (
                          <option key={e} value={e}>
                            {e}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
                        N° de Orden Médica / Autorización:
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: ORD-9481 o si aún no tienes pon 'Pendiente'"
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                        className="w-full bg-white border border-[#1c1c17]/15 rounded-xl px-3 py-2 text-xs text-[#1c1c17] focus:outline-none focus:border-[#004786]"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#004786] tracking-wider mb-2">
                  Fecha Preferida y Turno:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
                      Fecha estimada:
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-white border border-[#1c1c17]/15 rounded-xl px-3 py-2 text-xs text-[#1c1c17] focus:outline-none focus:border-[#004786]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
                      Franja horaria:
                    </label>
                    <select
                      value={selectedTimeSlot}
                      onChange={(e) => setSelectedTimeSlot(e.target.value)}
                      className="w-full bg-white border border-[#1c1c17]/15 rounded-xl px-3 py-2 text-xs text-[#1c1c17] focus:outline-none focus:border-[#004786]"
                    >
                      <option value="07:30 a. m.">07:30 a. m. (Primer turno mañana)</option>
                      <option value="08:30 a. m.">08:30 a. m. (Mañana)</option>
                      <option value="09:30 a. m.">09:30 a. m. (Mañana)</option>
                      <option value="10:30 a. m.">10:30 a. m. (Mañana)</option>
                      <option value="11:30 a. m.">11:30 a. m. (Mediodía)</option>
                      <option value="02:30 p. m.">02:30 p. m. (Tarde)</option>
                      <option value="03:30 p. m.">03:30 p. m. (Tarde)</option>
                      <option value="04:30 p. m.">04:30 p. m. (Tarde)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2 rounded-full text-xs font-bold text-[#424751] hover:bg-[#ebe8e0]"
                >
                  ← Volver
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex items-center gap-2 bg-[#004786] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#00386b] transition-all shadow-md"
                >
                  <span>Continuar a Datos</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Datos del Paciente y Acudiente */}
          {step === 3 && (
            <form onSubmit={handleCreateAppointment} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-8">
                  <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
                    Nombre completo del Paciente *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Laura Sofía Martínez"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full bg-white border border-[#1c1c17]/15 rounded-xl px-3 py-2 text-xs text-[#1c1c17] focus:outline-none focus:border-[#004786]"
                  />
                </div>

                <div className="sm:col-span-4 flex items-center pt-5">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-[#1c1c17]">
                    <input
                      type="checkbox"
                      checked={isMinor}
                      onChange={(e) => setIsMinor(e.target.checked)}
                      className="rounded text-[#004786] w-4 h-4 focus:ring-0"
                    />
                    <span>¿Es menor de edad?</span>
                  </label>
                </div>
              </div>

              {isMinor && (
                <div className="bg-[#f7f3eb] p-3 rounded-2xl border border-[#1c1c17]/10">
                  <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
                    Nombre del Acudiente / Padre / Madre *
                  </label>
                  <input
                    type="text"
                    required={isMinor}
                    placeholder="Nombre del adulto responsable"
                    value={guardianName}
                    onChange={(e) => setGuardianName(e.target.value)}
                    className="w-full bg-white border border-[#1c1c17]/15 rounded-xl px-3 py-2 text-xs text-[#1c1c17] focus:outline-none focus:border-[#004786]"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
                    Tipo de Doc. *
                  </label>
                  <select
                    value={documentType}
                    onChange={(e) => setDocumentType(e.target.value)}
                    className="w-full bg-white border border-[#1c1c17]/15 rounded-xl px-3 py-2 text-xs text-[#1c1c17] focus:outline-none focus:border-[#004786]"
                  >
                    <option value="RC">Registro Civil (RC)</option>
                    <option value="TI">Tarjeta de Identidad (TI)</option>
                    <option value="CC">Cédula de Ciudadanía (CC)</option>
                    <option value="CE">Cédula de Extranjería (CE)</option>
                    <option value="PPT">Permiso por Protección Temporal (PPT)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
                    Número de Documento *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: 1065842190"
                    value={documentNumber}
                    onChange={(e) => setDocumentNumber(e.target.value)}
                    className="w-full bg-white border border-[#1c1c17]/15 rounded-xl px-3 py-2 text-xs text-[#1c1c17] focus:outline-none focus:border-[#004786]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
                    Celular WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej: 3105606873"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#1c1c17]/15 rounded-xl px-3 py-2 text-xs text-[#1c1c17] focus:outline-none focus:border-[#004786]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1c1c17] mb-1">
                  Motivo de consulta o detalles adicionales (Opcional):
                </label>
                <textarea
                  rows={2}
                  placeholder="Ej: El neuropediatra solicitó valoración por dificultades en el habla..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white border border-[#1c1c17]/15 rounded-xl px-3 py-2 text-xs text-[#1c1c17] focus:outline-none focus:border-[#004786]"
                />
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2 rounded-full text-xs font-bold text-[#424751] hover:bg-[#ebe8e0]"
                >
                  ← Volver
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#fc9427] hover:bg-[#e57f15] text-white px-7 py-2.5 rounded-full font-bold text-sm transition-all shadow-[0_4px_16px_rgba(252,148,39,0.35)]"
                >
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>Confirmar Solicitud</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success & Confirmation */}
          {step === 4 && createdAppointment && (
            <div className="flex flex-col gap-5 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <span className="material-symbols-outlined text-[36px]">verified</span>
              </div>

              <div>
                <span className="bg-[#fc9427]/15 text-[#8f4e00] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                  Radicado: {createdAppointment.confirmationCode}
                </span>
                <h4 className="font-heading font-bold text-xl text-[#004786] mt-2">
                  ¡Cita Registrada en Sistema!
                </h4>
                <p className="text-xs text-[#424751] max-w-md mx-auto mt-1">
                  Tu solicitud para <strong>{createdAppointment.serviceName}</strong> en la{' '}
                  <strong>Sede {createdAppointment.sede}</strong> ha sido recibida.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-white rounded-2xl p-4 border border-[#1c1c17]/10 text-left text-xs flex flex-col gap-2">
                <div className="flex justify-between border-b border-[#1c1c17]/5 pb-2">
                  <span className="text-[#727782]">Paciente:</span>
                  <span className="font-bold text-[#1c1c17]">
                    {createdAppointment.patientName} ({createdAppointment.documentType}{' '}
                    {createdAppointment.documentNumber})
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#1c1c17]/5 pb-2">
                  <span className="text-[#727782]">Especialidad:</span>
                  <span className="font-bold text-[#004786]">
                    {createdAppointment.serviceName}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#1c1c17]/5 pb-2">
                  <span className="text-[#727782]">Sede asignada:</span>
                  <span className="font-bold text-[#1c1c17]">{createdAppointment.sede}</span>
                </div>
                <div className="flex justify-between border-b border-[#1c1c17]/5 pb-2">
                  <span className="text-[#727782]">EPS / Modalidad:</span>
                  <span className="font-bold text-[#1c1c17]">{createdAppointment.eps}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#727782]">Fecha y Franja:</span>
                  <span className="font-bold text-[#fc9427]">
                    {createdAppointment.date} · {createdAppointment.timeSlot}
                  </span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={getWhatsAppBookingUrl(createdAppointment)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#fc9427] hover:bg-[#e57f15] text-white px-6 py-3 rounded-full font-bold text-sm shadow-[0_4px_16px_rgba(252,148,39,0.35)] transition-all"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.07c-.24.68-1.4 1.25-1.94 1.33-.5.08-1.14.12-3.32-.78-2.6-1.07-4.29-3.71-4.42-3.89-.13-.18-1.05-1.4-1.05-2.67 0-1.27.67-1.89.9-2.15.24-.26.52-.33.7-.33.18 0 .35 0 .5.01.17.01.39-.06.6.46.23.55.78 1.9.85 2.04.07.15.11.32.02.5-.09.19-.14.3-.28.46-.14.17-.3.37-.43.5-.14.14-.29.3-.13.57.17.27.73 1.2 1.57 1.94 1.08.96 1.99 1.26 2.27 1.4.28.14.45.12.62-.07.17-.2.72-.84.92-1.13.19-.28.39-.24.65-.14.26.09 1.66.78 1.95.92.28.15.48.22.55.34.07.13.07.74-.17 1.42z" />
                  </svg>
                  <span>Enviar y Confirmar en WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-full bg-[#ebe8e0] text-[#1c1c17] hover:bg-[#dddad2] font-bold text-sm transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
