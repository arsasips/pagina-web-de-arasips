import React, { useState } from 'react';
import {
  SERVICES_DATA,
  SEDES_DATA,
  CLINIC_FACADE_URL,
} from '../data/mockData';
import { ServiceItem, Testimonial, FaqItem, ActiveView } from '../types';

interface HomeViewProps {
  onOpenBooking: (serviceId?: string, sede?: 'Valledupar' | 'Atánquez') => void;
  onOpenServiceDetail: (service: ServiceItem) => void;
  onOpenFaqModal: () => void;
  onOpenTestimonialModal: () => void;
  onNavigate: (view: ActiveView) => void;
  testimonials: Testimonial[];
  faqs: FaqItem[];
}

export const HomeView: React.FC<HomeViewProps> = ({
  onOpenBooking,
  onOpenServiceDetail,
  onOpenFaqModal,
  onOpenTestimonialModal,
  onNavigate,
  testimonials,
  faqs,
}) => {
  // Service category filter
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  // FAQ accordion state
  const [expandedFaqId, setExpandedFaqId] = useState<string>(faqs[0]?.id || 'faq-1');
  const [faqSearchQuery, setFaqSearchQuery] = useState<string>('');

  const filteredServices =
    selectedCategory === 'todos'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  const filteredFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(faqSearchQuery.toLowerCase())
  );

  const toggleFaq = (id: string) => {
    setExpandedFaqId(expandedFaqId === id ? '' : id);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-10 pb-20 bg-gradient-to-b from-[#fdf9f1] via-[#f7f3eb] to-[#fdf9f1]">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#d4e3ff]/40 via-[#ffdcc2]/30 to-transparent blur-3xl pointer-events-none rounded-full"></div>

        <div className="max-w-[1240px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Text Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-[#ebe8e0] text-[#004786] shadow-sm">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="text-[11px] uppercase tracking-wider font-bold">
                  13 Años Cuidando Familias en Cesar
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-[56px] text-[#1c1c17] font-bold tracking-tight leading-[1.1]">
                  Todos los especialistas que necesitas,{' '}
                  <span className="text-[#004786] block sm:inline">en un solo lugar</span>
                </h1>
                <p className="text-lg md:text-xl text-[#424751] max-w-2xl leading-relaxed">
                  Rehabilitación y educación especial para toda la población en Valledupar y
                  Atánquez
                </p>
              </div>

              {/* Direct CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                {/* Valledupar CTA */}
                <a
                  className="flex items-center justify-center gap-2.5 bg-[#fc9427] hover:bg-[#e57f15] text-white px-6 py-3.5 rounded-full shadow-[0_8px_24px_rgba(252,148,39,0.36)] transition-all duration-300 transform hover:-translate-y-1 group"
                  href={`https://wa.me/${SEDES_DATA.valledupar.whatsappNumber}?text=Hola%20ARSAS%20IPS,%20deseo%20información%20o%20agendar%20cita%20en%20Valledupar`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg className="w-5 h-5 fill-current text-white shrink-0" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.07c-.24.68-1.4 1.25-1.94 1.33-.5.08-1.14.12-3.32-.78-2.6-1.07-4.29-3.71-4.42-3.89-.13-.18-1.05-1.4-1.05-2.67 0-1.27.67-1.89.9-2.15.24-.26.52-.33.7-.33.18 0 .35 0 .5.01.17.01.39-.06.6.46.23.55.78 1.9.85 2.04.07.15.11.32.02.5-.09.19-.14.3-.28.46-.14.17-.3.37-.43.5-.14.14-.29.3-.13.57.17.27.73 1.2 1.57 1.94 1.08.96 1.99 1.26 2.27 1.4.28.14.45.12.62-.07.17-.2.72-.84.92-1.13.19-.28.39-.24.65-.14.26.09 1.66.78 1.95.92.28.15.48.22.55.34.07.13.07.74-.17 1.42z" />
                  </svg>
                  <span className="text-base font-bold">Escribir a Valledupar</span>
                </a>

                {/* Atánquez CTA */}
                <a
                  className="flex items-center justify-center gap-2.5 bg-[#fc9427] hover:bg-[#e57f15] text-white px-6 py-3.5 rounded-full shadow-[0_8px_24px_rgba(252,148,39,0.36)] transition-all duration-300 transform hover:-translate-y-1 group"
                  href={`https://wa.me/${SEDES_DATA.atanquez.whatsappNumber}?text=Hola%20ARSAS%20IPS,%20deseo%20información%20o%20agendar%20cita%20en%20Atánquez`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg className="w-5 h-5 fill-current text-white shrink-0" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.07c-.24.68-1.4 1.25-1.94 1.33-.5.08-1.14.12-3.32-.78-2.6-1.07-4.29-3.71-4.42-3.89-.13-.18-1.05-1.4-1.05-2.67 0-1.27.67-1.89.9-2.15.24-.26.52-.33.7-.33.18 0 .35 0 .5.01.17.01.39-.06.6.46.23.55.78 1.9.85 2.04.07.15.11.32.02.5-.09.19-.14.3-.28.46-.14.17-.3.37-.43.5-.14.14-.29.3-.13.57.17.27.73 1.2 1.57 1.94 1.08.96 1.99 1.26 2.27 1.4.28.14.45.12.62-.07.17-.2.72-.84.92-1.13.19-.28.39-.24.65-.14.26.09 1.66.78 1.95.92.28.15.48.22.55.34.07.13.07.74-.17 1.42z" />
                  </svg>
                  <span className="text-base font-bold">Escribir a Atánquez</span>
                </a>
              </div>

              {/* Online Booking Fast Link */}
              <div className="flex items-center gap-3 pt-1 text-sm text-[#424751]">
                <button
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center gap-1.5 font-bold text-[#004786] hover:underline"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  <span>O agenda tu cita en línea paso a paso</span>
                </button>
                <span>·</span>
                <button
                  onClick={() => onNavigate('especialistas')}
                  className="hover:text-[#004786] underline font-medium"
                >
                  Ver especialistas
                </button>
              </div>
            </div>

            {/* Facade Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#ebe8e0] transition-transform duration-500 hover:scale-[1.01]">
                <img
                  alt="Fachada y acceso accesible de ARSAS IPS"
                  className="w-full h-[360px] md:h-[420px] object-cover"
                  src={CLINIC_FACADE_URL}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004786]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#fdf9f1]/90 backdrop-blur-md rounded-2xl p-4 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#004786] text-[28px]">
                      accessible
                    </span>
                    <div>
                      <p className="font-heading font-bold text-sm text-[#1c1c17]">
                        Instalaciones 100% accesibles
                      </p>
                      <p className="text-xs text-[#424751]">
                        Rampas, amplias zonas verdes y atención cálida
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 pt-4">
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#d4e3ff] flex items-center justify-center text-[#004786] shrink-0">
                <span className="material-symbols-outlined text-[26px]">workspace_premium</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-[#1c1c17]">
                  13 años de trayectoria
                </h3>
                <p className="text-xs text-[#424751]">
                  Experiencia comprobada en salud y bienestar
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#d4e3ff] flex items-center justify-center text-[#004786] shrink-0">
                <span className="material-symbols-outlined text-[26px]">medical_services</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-[#1c1c17]">
                  Atención con EPS
                </h3>
                <p className="text-xs text-[#424751]">
                  Convenios vigentes para tu tranquilidad
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#d4e3ff] flex items-center justify-center text-[#004786] shrink-0">
                <span className="material-symbols-outlined text-[26px]">distance</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-[#1c1c17]">
                  2 sedes: Valledupar y Atánquez
                </h3>
                <p className="text-xs text-[#424751]">
                  Cerca de tu hogar y tu comunidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICIOS SECTION */}
      <section className="py-20 bg-[#fdf9f1] scroll-mt-20" id="servicios">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-[#004786] font-bold">
              Portafolio Clínico y Pedagógico
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-[#1c1c17] font-bold">
              Nuestros Servicios
            </h2>
            <p className="text-base text-[#424751]">
              Atención integral y personalizada por un equipo multidisciplinario altamente
              calificado.
            </p>

            {/* Interactive Category Filter Tabs */}
            <div className="flex items-center justify-center flex-wrap gap-2 pt-4">
              <button
                onClick={() => setSelectedCategory('todos')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === 'todos'
                    ? 'bg-[#004786] text-white shadow-sm'
                    : 'bg-white text-[#424751] hover:bg-[#ebe8e0] border border-[#1c1c17]/10'
                }`}
              >
                Todos los servicios
              </button>
              <button
                onClick={() => setSelectedCategory('lenguaje')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === 'lenguaje'
                    ? 'bg-[#004786] text-white shadow-sm'
                    : 'bg-white text-[#424751] hover:bg-[#ebe8e0] border border-[#1c1c17]/10'
                }`}
              >
                Fonoaudiología & Habla
              </button>
              <button
                onClick={() => setSelectedCategory('motor')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === 'motor'
                    ? 'bg-[#004786] text-white shadow-sm'
                    : 'bg-white text-[#424751] hover:bg-[#ebe8e0] border border-[#1c1c17]/10'
                }`}
              >
                Rehabilitación Física & Motriz
              </button>
              <button
                onClick={() => setSelectedCategory('salud-mental')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === 'salud-mental'
                    ? 'bg-[#004786] text-white shadow-sm'
                    : 'bg-white text-[#424751] hover:bg-[#ebe8e0] border border-[#1c1c17]/10'
                }`}
              >
                Psicología & Psiquiatría
              </button>
              <button
                onClick={() => setSelectedCategory('educacion')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === 'educacion'
                    ? 'bg-[#004786] text-white shadow-sm'
                    : 'bg-white text-[#424751] hover:bg-[#ebe8e0] border border-[#1c1c17]/10'
                }`}
              >
                Educación Especial
              </button>
            </div>
          </div>

          {/* Grid of Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((srv) => {
              const isEducacion = srv.id === 'educacion-especial';

              if (isEducacion) {
                // Servicio Especial Destacado (Ancho completo)
                return (
                  <div
                    key={srv.id}
                    className="md:col-span-2 lg:col-span-3 flex flex-col md:flex-row items-center justify-between p-8 rounded-3xl bg-gradient-to-r from-[#f7f3eb] via-white to-[#f7f3eb] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 gap-6 border border-[#1c1c17]/5"
                  >
                    <div
                      onClick={() => onOpenServiceDetail(srv)}
                      className="flex items-start sm:items-center gap-4 cursor-pointer"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-[#004786] text-white flex items-center justify-center shrink-0 shadow-md">
                        <span className="material-symbols-outlined text-[36px]">
                          {srv.iconName}
                        </span>
                      </div>
                      <div>
                        <div className="inline-flex items-center gap-1 text-[#004786] text-[11px] uppercase font-bold tracking-wider mb-1">
                          <span>Inclusión Pedagógica</span>
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-[#1c1c17]">
                          {srv.name}
                        </h3>
                        <p className="text-sm text-[#424751] mt-1">{srv.subtitle}</p>
                      </div>
                    </div>

                    <div className="w-full sm:w-auto shrink-0 flex items-center gap-3">
                      <button
                        onClick={() => onOpenServiceDetail(srv)}
                        className="px-4 py-2.5 rounded-full border border-[#004786] text-[#004786] font-bold text-xs hover:bg-[#004786]/5 transition-colors"
                      >
                        Ver Detalles
                      </button>
                      <a
                        className="flex items-center justify-center gap-2 bg-[#fc9427] hover:bg-[#e57f15] text-white px-6 py-3 rounded-full shadow-[0_4px_16px_rgba(252,148,39,0.32)] text-sm font-bold transition-all"
                        href={`https://wa.me/${SEDES_DATA.valledupar.whatsappNumber}?text=${encodeURIComponent(
                          srv.whatsappText
                        )}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[18px]">chat</span>
                        <span>Consultar educación especial</span>
                      </a>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={srv.id}
                  className="flex flex-col justify-between p-6 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#1c1c17]/5"
                >
                  <div
                    onClick={() => onOpenServiceDetail(srv)}
                    className="flex flex-col gap-4 cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#cce5ff] flex items-center justify-center text-[#004786]">
                      <span className="material-symbols-outlined text-[30px]">
                        {srv.iconName}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-[#1c1c17]">
                        {srv.name}
                      </h3>
                      <p className="text-xs text-[#424751] mt-1 leading-relaxed">
                        {srv.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 flex flex-col gap-2">
                    <a
                      className="w-full flex items-center justify-center gap-2 bg-[#fc9427] hover:bg-[#e57f15] text-white px-4 py-2.5 rounded-full shadow-[0_4px_16px_rgba(252,148,39,0.28)] text-xs font-bold transition-all"
                      href={`https://wa.me/${SEDES_DATA.valledupar.whatsappNumber}?text=${encodeURIComponent(
                        srv.whatsappText
                      )}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Pedir cita de {srv.name.toLowerCase()}</span>
                    </a>

                    <button
                      onClick={() => onOpenBooking(srv.id)}
                      className="text-center text-[11px] font-bold text-[#004786] hover:underline py-1"
                    >
                      O reservar turno en línea
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. POR QUÉ ELEGIRNOS */}
      <section className="py-20 bg-[#f7f3eb]">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-[#004786] font-bold">
              Nuestra Diferencia
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-[#1c1c17] font-bold">
              Por qué elegirnos
            </h2>
            <p className="text-base text-[#424751]">
              Construimos procesos terapéuticos y educativos con calidez, rigor y compromiso
              familiar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Feature 1 */}
            <div className="p-6 rounded-3xl bg-white shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#cce5ff] text-[#004786] flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">groups</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-[#1c1c17] leading-snug">
                Todos los especialistas en un mismo lugar
              </h3>
              <p className="text-xs text-[#424751] leading-relaxed">
                Coordinación médica fluida sin tener que desplazarte entre diferentes entidades.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-3xl bg-white shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#cce5ff] text-[#004786] flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">
                  sentiment_very_satisfied
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-[#1c1c17] leading-snug">
                Pacientes satisfechos con sus procesos
              </h3>
              <p className="text-xs text-[#424751] leading-relaxed">
                Resultados visibles y acompañamiento empático para el paciente y su entorno familiar.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-3xl bg-white shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#cce5ff] text-[#004786] flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">military_tech</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-[#1c1c17] leading-snug">
                13 años de trayectoria
              </h3>
              <p className="text-xs text-[#424751] leading-relaxed">
                Consistencia, profesionalismo y vocación al servicio de la salud en la región.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-3xl bg-white shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#cce5ff] text-[#004786] flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">pin_drop</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-[#1c1c17] leading-snug">
                Dos sedes cerca de ti
              </h3>
              <p className="text-xs text-[#424751] leading-relaxed">
                Cobertura urbana en Valledupar y territorial inclusiva en el corregimiento de
                Atánquez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CÓMO PEDIR TU CITA EN 3 PASOS */}
      <section className="py-20 bg-[#fdf9f1]">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-[#004786] font-bold">
              Rápido y Sin Filas
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-[#1c1c17] font-bold">
              Cómo pedir tu cita en 3 pasos
            </h2>
            <p className="text-base text-[#424751]">
              Simplificamos el acceso a la salud para ti y tus seres queridos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#f7f3eb] relative">
              <div className="w-16 h-16 rounded-full bg-[#fc9427] text-white font-heading text-2xl font-bold flex items-center justify-center shadow-md mb-4">
                1
              </div>
              <h3 className="font-heading text-lg font-bold text-[#1c1c17] mb-2">
                Escríbenos por WhatsApp a tu sede
              </h3>
              <p className="text-xs text-[#424751] leading-relaxed">
                Selecciona la sede Valledupar o Atánquez para iniciar una conversación con nuestro
                equipo.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#f7f3eb] relative">
              <div className="w-16 h-16 rounded-full bg-[#004786] text-white font-heading text-2xl font-bold flex items-center justify-center shadow-md mb-4">
                2
              </div>
              <h3 className="font-heading text-lg font-bold text-[#1c1c17] mb-2">
                Confirma el servicio y tu EPS
              </h3>
              <p className="text-xs text-[#424751] leading-relaxed">
                Indícanos la especialidad requerida y los datos de afiliación para validar tu orden
                médica.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#f7f3eb] relative">
              <div className="w-16 h-16 rounded-full bg-[#004786] text-white font-heading text-2xl font-bold flex items-center justify-center shadow-md mb-4">
                3
              </div>
              <h3 className="font-heading text-lg font-bold text-[#1c1c17] mb-2">
                Asiste a tu cita
              </h3>
              <p className="text-xs text-[#424751] leading-relaxed">
                Te recibiremos en nuestras instalaciones con el mejor equipo humano y profesional.
              </p>
            </div>
          </div>

          {/* Action trigger to start online booking */}
          <div className="flex justify-center pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 bg-[#004786] hover:bg-[#00386b] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              <span>Iniciar Agendamiento Asistido en Línea</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. NUESTRAS SEDES */}
      <section
        className="py-20 bg-gradient-to-b from-[#fdf9f1] via-[#f7f3eb] to-[#fdf9f1] scroll-mt-20"
        id="sedes"
      >
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-[#004786] font-bold">
              Ubicaciones y Horarios
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-[#1c1c17] font-bold">
              Nuestras sedes
            </h2>
            <p className="text-base text-[#424751]">
              Estamos presentes en puntos estratégicos para brindarte una atención accesible y
              cercana.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sede Valledupar Card */}
            <div className="flex flex-col rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all border border-[#1c1c17]/5">
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  alt="Sede Valledupar ARSAS IPS"
                  className="w-full h-full object-cover"
                  src={CLINIC_FACADE_URL}
                />
                <div className="absolute top-4 left-4 bg-[#004786] text-white px-4 py-1 rounded-full text-xs uppercase font-bold tracking-wider">
                  Sede Principal
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading text-2xl font-bold text-[#1c1c17]">
                    Sede Valledupar
                  </h3>
                  <div className="flex flex-col gap-3 text-[#424751] text-xs">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#004786] text-[20px] shrink-0 mt-0.5">
                        location_on
                      </span>
                      <span className="font-semibold text-[#1c1c17]">
                        {SEDES_DATA.valledupar.address}
                      </span>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#004786] text-[20px] shrink-0 mt-0.5">
                        schedule
                      </span>
                      <div>
                        <p className="text-[#1c1c17] font-semibold">Recepción de documentos:</p>
                        <p>{SEDES_DATA.valledupar.receptionSchedule}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#fc9427] text-[20px] shrink-0 mt-0.5">
                        chat
                      </span>
                      <div>
                        <p className="text-[#1c1c17] font-semibold">Tarde:</p>
                        <p>{SEDES_DATA.valledupar.afternoonSchedule}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col gap-2">
                  <a
                    className="w-full flex items-center justify-center gap-2 bg-[#fc9427] hover:bg-[#e57f15] text-white px-6 py-3.5 rounded-full shadow-[0_8px_20px_rgba(252,148,39,0.3)] text-sm font-bold transition-all"
                    href={`https://wa.me/${SEDES_DATA.valledupar.whatsappNumber}?text=Hola%20ARSAS%20IPS,%20escribo%20a%20la%20Sede%20Valledupar`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    <span>Escribir a Valledupar</span>
                  </a>

                  <button
                    onClick={() => onNavigate('sedes')}
                    className="text-center text-xs font-bold text-[#004786] hover:underline py-1"
                  >
                    Ver detalles de instalaciones y accesos →
                  </button>
                </div>
              </div>
            </div>

            {/* Sede Atánquez Card */}
            <div className="flex flex-col rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all border border-[#1c1c17]/5">
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  alt="Sede Atánquez ARSAS IPS"
                  className="w-full h-full object-cover"
                  src={CLINIC_FACADE_URL}
                />
                <div className="absolute top-4 left-4 bg-[#004b72] text-white px-4 py-1 rounded-full text-xs uppercase font-bold tracking-wider">
                  Comunidad y Territorio
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading text-2xl font-bold text-[#1c1c17]">
                    Sede Atánquez
                  </h3>
                  <div className="flex flex-col gap-3 text-[#424751] text-xs">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#004786] text-[20px] shrink-0 mt-0.5">
                        location_on
                      </span>
                      <span className="font-semibold text-[#1c1c17]">
                        {SEDES_DATA.atanquez.address}
                      </span>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#004786] text-[20px] shrink-0 mt-0.5">
                        schedule
                      </span>
                      <div>
                        <p className="text-[#1c1c17] font-semibold">Horario de atención:</p>
                        <p>{SEDES_DATA.atanquez.receptionSchedule}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#fc9427] text-[20px] shrink-0 mt-0.5">
                        support_agent
                      </span>
                      <div>
                        <p className="text-[#1c1c17] font-semibold">Atención telefónica y digital:</p>
                        <p>{SEDES_DATA.atanquez.afternoonSchedule}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col gap-2">
                  <a
                    className="w-full flex items-center justify-center gap-2 bg-[#fc9427] hover:bg-[#e57f15] text-white px-6 py-3.5 rounded-full shadow-[0_8px_20px_rgba(252,148,39,0.3)] text-sm font-bold transition-all"
                    href={`https://wa.me/${SEDES_DATA.atanquez.whatsappNumber}?text=Hola%20ARSAS%20IPS,%20escribo%20a%20la%20Sede%20Atánquez`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    <span>Escribir a Atánquez</span>
                  </a>

                  <button
                    onClick={() => onNavigate('sedes')}
                    className="text-center text-xs font-bold text-[#004786] hover:underline py-1"
                  >
                    Ver detalles comunitarios de Atánquez →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIOS */}
      {testimonials.length > 0 && (
      <section className="py-20 bg-[#fdf9f1] scroll-mt-20" id="testimonios">
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-[#004786] font-bold">
              Experiencias Reales
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-[#1c1c17] font-bold">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-base text-[#424751]">
              Historias de superación, afecto y dedicación en cada paso del proceso terapéutico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-[#f7f3eb] flex flex-col justify-between gap-6 relative shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#fc9427]">
                      {[...Array(item.rating)].map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-[20px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    {item.isExample && (
                      <span className="text-[10px] bg-[#e6e2da] text-[#424751] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold">
                        Ejemplo
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#1c1c17] italic leading-relaxed">
                    "{item.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <div className="w-11 h-11 rounded-full bg-[#c2c6d2]/50 flex items-center justify-center shrink-0 text-[#424751]">
                    <span className="material-symbols-outlined text-[24px]">person</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1c1c17]">
                      {item.author} · {item.city}
                    </p>
                    <p className="text-[11px] text-[#727782]">{item.relation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={onOpenTestimonialModal}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#ebe8e0] border border-[#1c1c17]/10 text-[#004786] px-6 py-2.5 rounded-full font-bold text-xs shadow-sm transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">rate_review</span>
              <span>Compartir mi testimonio o experiencia</span>
            </button>
          </div>
        </div>
      </section>
      )}

      {/* 7. PREGUNTAS FRECUENTES */}
      <section className="py-20 bg-[#f7f3eb] scroll-mt-20" id="preguntas">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 flex flex-col gap-8">
          <div className="text-center flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-[#004786] font-bold">
              Respuestas Claras
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-[#1c1c17] font-bold">
              Preguntas frecuentes
            </h2>
            <p className="text-base text-[#424751]">
              Todo lo que necesitas saber antes de tu primera consulta.
            </p>
          </div>

          {/* Quick FAQ filter input */}
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3.5 top-2.5 text-[#727782] text-[20px]">
              search
            </span>
            <input
              type="text"
              placeholder="Buscar en preguntas (EPS, horarios, citas, sedes)..."
              value={faqSearchQuery}
              onChange={(e) => setFaqSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#1c1c17]/10 rounded-full pl-10 pr-4 py-2 text-xs text-[#1c1c17] focus:outline-none focus:border-[#004786]"
            />
          </div>

          {/* FAQ Accordion List */}
          <div className="flex flex-col gap-2">
            {filteredFaqs.map((faq) => {
              const isOpen = expandedFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white overflow-hidden shadow-sm border border-[#1c1c17]/5 transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-[#fdf9f1]"
                    type="button"
                  >
                    <span className="font-heading text-base font-semibold text-[#1c1c17]">
                      {faq.question}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[#004786] text-[24px] transform transition-transform duration-300 ${
                        isOpen ? '' : '-rotate-90'
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-4 text-[#424751] text-xs leading-relaxed animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* FAQ Button Trigger */}
          <div className="flex justify-center pt-2">
            <button
              onClick={onOpenFaqModal}
              className="inline-flex items-center gap-2 bg-[#fc9427] hover:bg-[#e57f15] text-white px-7 py-3 rounded-full shadow-[0_6px_20px_rgba(252,148,39,0.3)] text-sm font-bold transition-all transform hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined text-[20px]">help</span>
              <span>Tengo otra pregunta</span>
            </button>
          </div>
        </div>
      </section>

      {/* 8. LLAMADO FINAL (CTA PRE-FOOTER) */}
      <section className="py-20 bg-gradient-to-br from-[#004786] via-[#1d5fa7] to-[#004b72] text-white relative overflow-hidden">
        {/* Atmospheric shapes */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#fc9427]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-[#cce5ff]/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-[1240px] mx-auto px-4 md:px-8 text-center relative z-10 flex flex-col items-center gap-6">
          <div className="max-w-2xl flex flex-col gap-2">
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Da el primer paso hacia el bienestar
            </h2>
            <p className="text-base md:text-xl text-[#d4e3ff] opacity-90 leading-relaxed">
              Nuestro equipo de especialistas en Valledupar y Atánquez está listo para atenderte
              con dedicación y calidez.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 bg-[#fc9427] hover:bg-[#e57f15] text-white px-8 md:px-10 py-4 rounded-full shadow-[0_12px_32px_rgba(252,148,39,0.45)] text-base font-bold transition-all transform hover:scale-105 active:scale-95"
          >
            <svg className="w-6 h-6 fill-current text-white shrink-0" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.07c-.24.68-1.4 1.25-1.94 1.33-.5.08-1.14.12-3.32-.78-2.6-1.07-4.29-3.71-4.42-3.89-.13-.18-1.05-1.4-1.05-2.67 0-1.27.67-1.89.9-2.15.24-.26.52-.33.7-.33.18 0 .35 0 .5.01.17.01.39-.06.6.46.23.55.78 1.9.85 2.04.07.15.11.32.02.5-.09.19-.14.3-.28.46-.14.17-.3.37-.43.5-.14.14-.29.3-.13.57.17.27.73 1.2 1.57 1.94 1.08.96 1.99 1.26 2.27 1.4.28.14.45.12.62-.07.17-.2.72-.84.92-1.13.19-.28.39-.24.65-.14.26.09 1.66.78 1.95.92.28.15.48.22.55.34.07.13.07.74-.17 1.42z" />
            </svg>
            <span>Quiero agendar mi cita</span>
          </button>
        </div>
      </section>
    </div>
  );
};
