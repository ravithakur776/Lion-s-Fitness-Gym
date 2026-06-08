"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Phone, Clock, User, PhoneCall, Mail, Dumbbell, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { CONTACT_INFO } from "@/lib/data";
import Image from "next/image";

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "success">("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [module, setModule] = useState("strength");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("success");
    // Simulate reset after 6 seconds
    setTimeout(() => {
      setFormState("idle");
      setName("");
      setPhone("");
    }, 6000);
  };

  return (
    <section id="contact" className="relative w-full bg-[#050505] py-24 md:py-32 overflow-hidden">
      
      {/* Accent lighting glow */}
      <div
        className="absolute right-[-10%] bottom-[-10%] z-0 w-[50vw] h-[50vw] rounded-full blur-[180px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(245,197,24,0.25) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {formState === "success" ? (
            <motion.div 
              key="success-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center min-h-[450px] text-center max-w-md mx-auto p-8 bg-black/60 border border-[#F5C518]/30 rounded-3xl backdrop-blur-xl shadow-[0_30px_70px_rgba(245,197,24,0.1)]"
            >
              <div className="w-16 h-16 rounded-full bg-[#F5C518]/10 border border-[#F5C518]/30 flex items-center justify-center text-[#F5C518] mb-6">
                <ShieldCheck size={32} />
              </div>
              <h2 
                className="text-white uppercase leading-none mb-3"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "2.8rem" }}
              >
                PASS INITIALIZED
              </h2>
              <span className="text-[10px] font-mono text-[#F5C518] tracking-[0.25em] uppercase mb-6">
                CODE: LIONS-SEC-{Math.floor(1000 + Math.random() * 9000)}
              </span>

              <div className="w-full bg-white/5 border border-white/5 rounded-xl p-4 text-left flex flex-col gap-2.5 mb-8">
                <div className="flex justify-between text-xs"><span className="text-white/40">NAME:</span><span className="text-white font-bold">{name.toUpperCase()}</span></div>
                <div className="flex justify-between text-xs"><span className="text-white/40">CONTACT:</span><span className="text-white font-bold">{phone}</span></div>
                <div className="flex justify-between text-xs"><span className="text-white/40">MODULE:</span><span className="text-[#F5C518] font-bold">{module.toUpperCase()}</span></div>
                <div className="flex justify-between text-xs"><span className="text-white/40">GATE:</span><span className="text-white/60">MATHURA REF-NH2</span></div>
              </div>

              <p className="text-white/50 text-xs leading-relaxed max-w-xs">
                Your entry pass is registered. Our team will call you within 30 minutes to confirm your workout slot. Get ready to train.
              </p>
            </motion.div>
          ) : (
            <div key="form-layout" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
              
              {/* ─── Left Side: Location Poster & Coordinates (col-span-5) ─── */}
              <div className="lg:col-span-5 flex flex-col justify-between text-left relative overflow-hidden rounded-2xl border border-white/5 p-8 bg-black/45 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                
                {/* Backlit details */}
                <div className="absolute inset-0 z-0 opacity-15">
                  <Image
                    src="/real-assets/20.jpg"
                    alt="Strength Machines Zone"
                    fill
                    className="object-cover filter grayscale contrast-125 brightness-[0.3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 bg-[#F5C518] rounded-full" />
                    <span className="text-xs font-bold tracking-[0.3em] text-[#F5C518] uppercase font-mono">
                      // TERMINAL ACCESS
                    </span>
                  </div>
                  
                  <h2 
                    className="text-white uppercase leading-[0.88] tracking-tight mb-8"
                    style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3.5rem, 5vw, 4.8rem)" }}
                  >
                    INITIATE YOUR <br/> <span className="text-[#F5C518]">LEGACY</span>
                  </h2>
                  
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
                    Enter details to secure a complimentary day pass. Connect directly with Head Coach Vikram for target planning and equipment allocation.
                  </p>
                </div>

                {/* Styled HUD address block */}
                <div className="relative z-10 flex flex-col gap-5 bg-black/80 border border-white/5 rounded-xl p-6 backdrop-blur-md">
                  
                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 shrink-0 bg-[#F5C518]/10 rounded-lg flex items-center justify-center text-[#F5C518] border border-[#F5C518]/20">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-white/30 text-[9px] tracking-widest uppercase font-mono font-bold mb-0.5">Location Center</p>
                      <p className="text-white text-xs font-medium leading-relaxed">
                        {CONTACT_INFO.address}
                      </p>
                    </div>
                  </div>

                  {/* Hot Phone Line */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 shrink-0 bg-[#F5C518]/10 rounded-lg flex items-center justify-center text-[#F5C518] border border-[#F5C518]/20">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-white/30 text-[9px] tracking-widest uppercase font-mono font-bold mb-0.5">Direct Ring</p>
                      <a href={`tel:${CONTACT_INFO.phone}`} className="text-white text-xs font-extrabold hover:text-[#F5C518] transition-colors tracking-wide">
                        +91 {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 shrink-0 bg-[#F5C518]/10 rounded-lg flex items-center justify-center text-[#F5C518] border border-[#F5C518]/20">
                      <Clock size={16} />
                    </div>
                    <div>
                      <p className="text-white/30 text-[9px] tracking-widest uppercase font-mono font-bold mb-0.5">Active Hours</p>
                      <p className="text-white text-xs font-semibold">
                        {CONTACT_INFO.hours}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* ─── Right Side: Premium Form Panel (col-span-7) ─── */}
              <div className="lg:col-span-7 bg-black/40 border border-white/5 rounded-3xl p-8 md:p-12 hover:border-[#F5C518]/20 transition-all duration-500 shadow-[0_25px_50px_rgba(0,0,0,0.6)] flex flex-col justify-center">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                  
                  {/* Registry subhead */}
                  <div className="border-b border-white/5 pb-4 mb-4">
                    <h3 className="text-white font-bold text-sm tracking-widest uppercase font-mono">// WORKOUT REGISTRY</h3>
                    <p className="text-white/40 text-[10px] uppercase mt-1 tracking-wider">Fill protocols below to generate verified pass</p>
                  </div>

                  {/* Full Name */}
                  <div className="relative group flex flex-col gap-2">
                    <label htmlFor="name" className="text-white/45 text-[9px] tracking-[0.2em] uppercase font-mono font-bold">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[#F5C518] transition-colors">
                        <User size={14} />
                      </div>
                      <input 
                        type="text" 
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. RAHUL SINGH"
                        className="w-full bg-[#0E0E0E] border border-white/5 focus:border-[#F5C518] rounded-xl pl-11 pr-4 py-3.5 text-white text-xs tracking-wider uppercase font-semibold focus:outline-none focus:ring-1 focus:ring-[#F5C518]/40 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="relative group flex flex-col gap-2">
                    <label htmlFor="phone" className="text-white/45 text-[9px] tracking-[0.2em] uppercase font-mono font-bold">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[#F5C518] transition-colors">
                        <PhoneCall size={14} />
                      </div>
                      <input 
                        type="tel" 
                        id="phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9528395833"
                        className="w-full bg-[#0E0E0E] border border-white/5 focus:border-[#F5C518] rounded-xl pl-11 pr-4 py-3.5 text-white text-xs tracking-wider font-semibold focus:outline-none focus:ring-1 focus:ring-[#F5C518]/40 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Program Dropdown Selection */}
                  <div className="relative group flex flex-col gap-2">
                    <label htmlFor="module" className="text-white/45 text-[9px] tracking-[0.2em] uppercase font-mono font-bold">
                      Training Module Protocol
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[#F5C518] transition-colors">
                        <Dumbbell size={14} />
                      </div>
                      <select 
                        id="module"
                        value={module}
                        onChange={(e) => setModule(e.target.value)}
                        className="w-full bg-[#0E0E0E] border border-white/5 focus:border-[#F5C518] rounded-xl pl-11 pr-4 py-3.5 text-white/80 text-xs tracking-wider uppercase font-semibold focus:outline-none focus:ring-1 focus:ring-[#F5C518]/40 transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option value="strength">Strength Protocol</option>
                        <option value="weight-loss">Vaporize Fat (HIIT)</option>
                        <option value="muscle-gain">Anabolic Build</option>
                        <option value="zumba">Aerobic Motion (Zumba)</option>
                        <option value="personal">Elite 1-on-1 Coaching</option>
                      </select>
                      {/* Custom select down arrow */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="mt-4">
                    <button 
                      type="submit"
                      className="group relative w-full overflow-hidden bg-[#F5C518] text-black py-4.5 font-black text-xs tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                    >
                      <div className="relative z-10 flex items-center justify-center gap-2">
                        <span>GENERATE ENTRY PASS</span>
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </button>
                  </div>

                </form>
              </div>

            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
