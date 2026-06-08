"use client";

import Image from "next/image";
import { type Variants, motion } from "framer-motion";
import { useState } from "react";
import { Award, Flame, UserCheck } from "lucide-react";

const transformations = [
  {
    id: "ankit-verma",
    beforeImage: "/real-assets/8.jpg",
    afterImage: "/real-assets/9.jpg",
    name: "Ankit Verma",
    focus: "Fat Loss & Athletic Loading",
    duration: "24 Weeks",
    metrics: [
      { name: "Body Mass", val: "-18.5 kg" },
      { name: "Bench Load", val: "+45 kg" },
      { name: "Fat Index", val: "28% to 14%" },
    ],
    story: "Balancing refinery shift schedules with fitness was Ankit's major bottleneck. We restructured his training around highly dense, 45-minute metabolic loading blocks and tailored his macro timing to night shift recovery. The results represent raw dedication.",
    coachingAssessment: "Highly adaptive endocrine response. Reestablished insulin sensitivity and increased core stability.",
  },
  {
    id: "pooja-sharma",
    beforeImage: "/real-assets/6.jpg",
    afterImage: "/real-assets/7.jpg",
    name: "Pooja Sharma",
    focus: "Hypertrophy & Core Alignment",
    duration: "16 Weeks",
    metrics: [
      { name: "Fat Mass", val: "-9.2 kg" },
      { name: "Core Index", val: "Plank +3min" },
      { name: "Muscle Mass", val: "+3.8 kg" },
    ],
    story: "Pooja came to us with structural posture imbalances and low strength thresholds. Our primary focus was biomechanical alignment (posture correction) coupled with progressive resistance training. Today, she lifts with absolute form and precision.",
    coachingAssessment: "Realigned pelvic tilt, restored thoracic mobility. Drastic increase in absolute tissue density.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 45 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function Transformations() {
  return (
    <section id="transformations" className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
      
      {/* Background Graphic Watermark */}
      <div className="absolute right-[-10%] top-[10%] opacity-[0.02] pointer-events-none select-none w-[350px] h-[350px] md:w-[600px] md:h-[600px]">
        <Image
          src="/real-assets/Lion's Fitness Logo.jpg"
          alt="Watermark logo"
          fill
          className="object-contain filter sepia"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16 md:mb-24 max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#F5C518] rounded-full" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#F5C518] uppercase font-mono">
              // AUDITED TRANSFORMATIONS
            </span>
          </div>
          <h2
            className="text-white uppercase leading-[0.9] tracking-tight"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3.5rem, 6.5vw, 6rem)",
            }}
          >
            METRIC PROOF: <span className="text-[#F5C518]">REAL TRANSFORMS</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base mt-4 leading-relaxed">
            No filters, no lightning tricks. Just clean scientific coaching, tailored nutrition protocols, and relentless execution by our members.
          </p>
        </div>

        {/* Transformations Column List */}
        <motion.div
          className="flex flex-col gap-16 md:gap-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {transformations.map((item, idx) => (
            <TransformItem key={item.id} item={item} idx={idx} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

interface ItemProps {
  item: typeof transformations[0];
  idx: number;
}

function TransformItem({ item, idx }: ItemProps) {
  const [sliderPos, setSliderPos] = useState(50); // percentage [0, 100]

  return (
    <motion.div
      variants={cardVariants}
      className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
        idx % 2 === 1 ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* ─── Left: Draggable Before/After Comparison Card ─── */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 shadow-[0_25px_6px_rgba(0,0,0,0.8)] select-none">
          
          {/* AFTER Image (Background) */}
          <Image
            src={item.afterImage}
            alt={`${item.name} After`}
            fill
            quality={95}
            className="object-cover contrast-[1.1] brightness-[0.95]"
          />
          <div className="absolute top-4 right-4 px-3 py-1 bg-[#F5C518] text-black text-[9px] font-mono font-bold uppercase tracking-wider rounded z-20">
            AFTER // PROTOCOL COMPLETED
          </div>

          {/* BEFORE Image (Clipped Overlay) */}
          <div 
            className="absolute inset-0 w-full h-full z-10 pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <Image
              src={item.beforeImage}
              alt={`${item.name} Before`}
              fill
              quality={95}
              className="object-cover filter grayscale contrast-125 brightness-[0.55]"
            />
            <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 border border-white/10 text-white/50 text-[9px] font-mono font-bold uppercase tracking-wider rounded">
              BEFORE // DAY 01
            </div>
          </div>

          {/* Handle Drag Bar Line */}
          <div 
            className="absolute inset-y-0 w-[2px] bg-[#F5C518] z-20 pointer-events-none shadow-[0_0_15px_#F5C518]"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Center handle slider circle */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#F5C518] border-2 border-black flex items-center justify-center text-black font-extrabold text-[9px] select-none tracking-tighter">
              ◀▶
            </div>
          </div>

          {/* Invisible Overlay Input Range (Natively handles touch & drag events) */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 pointer-events-auto"
            aria-label={`Drag to compare before and after for ${item.name}`}
          />

        </div>
        
        {/* Slider usage hint */}
        <span className="font-mono text-[9px] text-white/20 tracking-widest text-center">
          [ SLIDE HANDLE TO REVEAL TRANSFORMATION ]
        </span>
      </div>

      {/* ─── Right: Storytelling & Audit Logs ─── */}
      <div className="w-full lg:w-1/2 flex flex-col text-left justify-center">
        
        {/* Header and Focus */}
        <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#F5C518] uppercase mb-2">
          // AUDIT CASE: {item.duration.toUpperCase()} STACK
        </span>
        <h3 
          className="text-white text-4xl md:text-5xl font-black uppercase leading-none mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          {item.name}
        </h3>

        {/* Custom metric chips */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {item.metrics.map((met) => (
            <div 
              key={met.name} 
              className="bg-white/5 border border-white/5 rounded-xl p-3.5 flex flex-col items-start gap-1"
            >
              <span className="text-[8px] font-mono text-white/40 tracking-wider uppercase">
                {met.name}
              </span>
              <span className="text-base font-black text-white leading-none tracking-wide" style={{ fontFamily: "var(--font-bebas)" }}>
                {met.val}
              </span>
            </div>
          ))}
        </div>

        {/* Narrative */}
        <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 border-l border-[#F5C518]/30 pl-4">
          {item.story}
        </p>

        {/* Head Coach Assessment Box */}
        <div className="p-5 bg-black/40 border border-white/5 rounded-xl flex items-start gap-4">
          <div className="w-10 h-10 shrink-0 bg-[#F5C518]/10 border border-[#F5C518]/25 rounded-lg flex items-center justify-center text-[#F5C518]">
            <UserCheck size={18} />
          </div>
          <div>
            <h5 className="text-[10px] font-mono font-bold text-[#F5C518] tracking-widest uppercase mb-1">
              COACH ASSESSMENT // VIKRAM SINGH
            </h5>
            <p className="text-white/55 text-xs leading-relaxed italic">
              &ldquo;{item.coachingAssessment}&rdquo;
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
