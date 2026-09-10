'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { APEX_MODELS } from '@/lib/constants/modelsData';
import { CheckCircle2, Shield, Calendar, MapPin, User, Mail, Phone, Car } from 'lucide-react';

export function TestDriveSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredModel: 'APEX R1',
    preferredDate: '',
    location: 'Zurich Private Atelier',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <section
      id="test-drive"
      data-section="test-drive"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-28 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Invitation Narrative */}
        <div className="lg:col-span-5 space-y-6 pointer-events-auto">
          <SectionHeader
            eyebrow="Private Commission & Test Drive"
            title="Experience Apex."
            subtitle="Secure a private dynamic session with the APEX R1 on a closed-circuit circuit or through our bespoke urban concierge service."
            align="left"
          />

          <div className="space-y-4 pt-4 border-t border-white/10">
            <div className="flex items-start gap-3 text-xs text-apex-silver">
              <Shield className="w-4 h-4 text-apex-copper shrink-0 mt-0.5" />
              <span>Dedicated factory engineering specialist accompanying every session.</span>
            </div>
            <div className="flex items-start gap-3 text-xs text-apex-silver">
              <Calendar className="w-4 h-4 text-apex-copper shrink-0 mt-0.5" />
              <span>Flexible scheduling at certified APEX performance proving grounds globally.</span>
            </div>
            <div className="flex items-start gap-3 text-xs text-apex-silver">
              <MapPin className="w-4 h-4 text-apex-copper shrink-0 mt-0.5" />
              <span>Private atelier lounges in Zurich, Munich, London, Tokyo, and Los Angeles.</span>
            </div>
          </div>
        </div>

        {/* Right Column: VIP Reservation Form */}
        <div className="lg:col-span-7 pointer-events-auto">
          <div className="apex-surface p-8 sm:p-12 border-l-2 border-l-apex-copper relative shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-16 h-16 rounded-full bg-apex-copper/10 border border-apex-copper flex items-center justify-center text-apex-copper shadow-copper-glow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2 max-w-md">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-apex-copper font-medium block">
                    TELEMETRY RESERVATION CONFIRMED
                  </span>
                  <h3 className="text-3xl font-light tracking-wide text-white uppercase font-sans">
                    Request Received.
                  </h3>
                  <p className="text-xs text-apex-silver leading-relaxed pt-2">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. An APEX Client Concierge representative will contact you within 24 hours to finalize your private test session for the <strong className="text-apex-copper">{formData.preferredModel}</strong>.
                  </p>
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/10 text-[10px] tracking-widest text-apex-metal uppercase">
                  SIMULATED CLIENT CONFIRMATION // NO DATA TRANSMITTED
                </div>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-apex-copper hover:text-white uppercase tracking-widest transition-colors pt-2 cursor-pointer"
                >
                  Submit Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-xl font-light tracking-wide text-white uppercase font-sans">
                    Book a Private Test Drive
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest text-apex-copper font-medium">
                    VIP CONCIERGE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-apex-metal flex items-center gap-1.5">
                      <User className="w-3 h-3 text-apex-copper" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 px-4 py-3 text-xs text-white placeholder:text-apex-muted/50 focus:border-apex-copper focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-apex-metal flex items-center gap-1.5">
                      <Mail className="w-3 h-3 text-apex-copper" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. marcus@vance.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 px-4 py-3 text-xs text-white placeholder:text-apex-muted/50 focus:border-apex-copper focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-apex-metal flex items-center gap-1.5">
                      <Phone className="w-3 h-3 text-apex-copper" />
                      Telephone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+41 22 819 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 px-4 py-3 text-xs text-white placeholder:text-apex-muted/50 focus:border-apex-copper focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Preferred Model */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-apex-metal flex items-center gap-1.5">
                      <Car className="w-3 h-3 text-apex-copper" />
                      Preferred Model
                    </label>
                    <select
                      value={formData.preferredModel}
                      onChange={(e) => setFormData({ ...formData, preferredModel: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 px-4 py-3 text-xs text-white focus:border-apex-copper focus:outline-none transition-colors"
                    >
                      {APEX_MODELS.map((model) => (
                        <option key={model.id} value={model.name} className="bg-apex-surface text-white">
                          {model.name} — {model.category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-apex-metal flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-apex-copper" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 px-4 py-3 text-xs text-white focus:border-apex-copper focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-apex-metal flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-apex-copper" />
                      Atelier Location
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 px-4 py-3 text-xs text-white focus:border-apex-copper focus:outline-none transition-colors"
                    >
                      <option className="bg-apex-surface">Zurich Proving Ground</option>
                      <option className="bg-apex-surface">Munich Proving Ground</option>
                      <option className="bg-apex-surface">Silverstone Circuit (UK)</option>
                      <option className="bg-apex-surface">Laguna Seca Circuit (USA)</option>
                      <option className="bg-apex-surface">Fuji Speedway (Japan)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="copper"
                    size="lg"
                    className="w-full text-xs"
                  >
                    Request a Test Drive
                  </Button>
                </div>

                <div className="text-center">
                  <span className="text-[9px] tracking-widest uppercase text-apex-metal">
                    CONFIDENTIALITY GUARANTEED // APEX PRIVATE CLIENT PROTOCOL
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
