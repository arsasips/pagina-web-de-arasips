/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { TestimonialModal } from './components/TestimonialModal';
import { FaqModal } from './components/FaqModal';

import { HomeView } from './views/HomeView';
import { SpecialistsView } from './views/SpecialistsView';
import { SedesView } from './views/SedesView';
import { PatientPortalView } from './views/PatientPortalView';

import {
  INITIAL_TESTIMONIALS,
  FAQS_DATA,
  INITIAL_APPOINTMENTS,
  SERVICES_DATA,
} from './data/mockData';
import {
  ActiveView,
  ServiceItem,
  Specialist,
  Testimonial,
  AppointmentRecord,
} from './types';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('inicio');

  // Appointments state with LocalStorage persistence
  const [appointments, setAppointments] = useState<AppointmentRecord[]>(() => {
    try {
      const saved = localStorage.getItem('arsas_appointments');
      if (saved) {
        const records = JSON.parse(saved) as AppointmentRecord[];
        return records.filter((record) => record.id !== 'rec-001' && record.id !== 'rec-002');
      }
    } catch {
      // fallback
    }
    return INITIAL_APPOINTMENTS;
  });

  // Testimonials state with LocalStorage persistence
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    try {
      const saved = localStorage.getItem('arsas_testimonials');
      if (saved) {
        const savedTestimonials = JSON.parse(saved) as Testimonial[];
        return savedTestimonials.filter(
          (testimonial) => !['test-1', 'test-2', 'test-3', 'test-4'].includes(testimonial.id),
        );
      }
    } catch {
      // fallback
    }
    return INITIAL_TESTIMONIALS;
  });

  // Notification Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Modals state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);
  const [bookingSede, setBookingSede] = useState<'Valledupar' | 'Atánquez' | undefined>(undefined);

  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);
  const [isTestimonialOpen, setIsTestimonialOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('arsas_appointments', JSON.stringify(appointments));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }
  }, [appointments]);

  useEffect(() => {
    try {
      localStorage.setItem('arsas_testimonials', JSON.stringify(testimonials));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }
  }, [testimonials]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleOpenBooking = (serviceId?: string, sede?: 'Valledupar' | 'Atánquez') => {
    setBookingServiceId(serviceId);
    setBookingSede(sede);
    setIsBookingOpen(true);
  };

  const handleBookWithSpecialist = (specialist: Specialist) => {
    // Find matching service
    const matchingService = SERVICES_DATA.find((s) =>
      specialist.specialty.toLowerCase().includes(s.name.toLowerCase().slice(0, 5))
    );
    handleOpenBooking(matchingService?.id, specialist.sedes[0]);
  };

  const handleAppointmentCreated = (newAppt: AppointmentRecord) => {
    setAppointments((prev) => [newAppt, ...prev]);
    showToast(`¡Cita registrada con éxito! Radicado: ${newAppt.confirmationCode}`);
  };

  const handleTestimonialCreated = (newTest: Testimonial) => {
    setTestimonials((prev) => [newTest, ...prev]);
    showToast('¡Gracias! Tu testimonio ha sido compartido exitosamente.');
  };

  return (
    <div className="min-h-screen bg-[#fdf9f1] text-[#1c1c17] flex flex-col font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-[#004786] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-white/20 animate-in fade-in slide-in-from-top-4 duration-300">
          <span className="material-symbols-outlined text-[22px] text-[#fc9427]">
            notifications_active
          </span>
          <span className="text-xs font-semibold">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-white/70 hover:text-white ml-2"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-20">
        {activeView === 'inicio' && (
          <HomeView
            onOpenBooking={handleOpenBooking}
            onOpenServiceDetail={(srv) => setSelectedServiceDetail(srv)}
            onOpenFaqModal={() => setIsFaqOpen(true)}
            onOpenTestimonialModal={() => setIsTestimonialOpen(true)}
            onNavigate={(view) => {
              setActiveView(view);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            testimonials={testimonials}
            faqs={FAQS_DATA}
          />
        )}

        {activeView === 'servicios' && (
          <HomeView
            onOpenBooking={handleOpenBooking}
            onOpenServiceDetail={(srv) => setSelectedServiceDetail(srv)}
            onOpenFaqModal={() => setIsFaqOpen(true)}
            onOpenTestimonialModal={() => setIsTestimonialOpen(true)}
            onNavigate={(view) => {
              setActiveView(view);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            testimonials={testimonials}
            faqs={FAQS_DATA}
          />
        )}

        {activeView === 'sedes' && (
          <SedesView
            onOpenBookingForSede={(sede) => handleOpenBooking(undefined, sede)}
          />
        )}

        {activeView === 'especialistas' && (
          <SpecialistsView onBookWithSpecialist={handleBookWithSpecialist} />
        )}

        {activeView === 'portal' && (
          <PatientPortalView
            appointments={appointments}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
      </main>

      {/* Persistent Floating WhatsApp widget with Branch Picker */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer
        onNavigate={(view) => {
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedServiceId={bookingServiceId}
        preselectedSede={bookingSede}
        onAppointmentCreated={handleAppointmentCreated}
      />

      <ServiceDetailModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onBookService={(srvId) => {
          setSelectedServiceDetail(null);
          handleOpenBooking(srvId);
        }}
      />

      <TestimonialModal
        isOpen={isTestimonialOpen}
        onClose={() => setIsTestimonialOpen(false)}
        onSubmit={handleTestimonialCreated}
      />

      <FaqModal isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
    </div>
  );
}
