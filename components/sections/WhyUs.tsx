"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    num: "01",
    title: "Elite Iron",
    tagline: "ADVANCED EQUIPMENT BIOME",
    desc: "Imported competition racks, calibrated plate loads, and bio-mechanical machinery designed for absolute muscle loading. Engineered for performance, not vanity.",
    image: "/real-assets/3.jpg",
    detailImage: "/real-assets/20.jpg",
    specs: ["Calibrated Steel Plates", "Biomechanical Converging Arcs", "Rigid Power Stations"],
  },
  {
    num: "02",
    title: "Pure Science",
    tagline: "EXPERT COACHING PROTOCOL",
    desc: "Coaches who are active athletes and biomechanics experts. Direct posture correction, tailored energy systems analysis, and performance tracking. Real data, no cheerleading.",
    image: "/real-assets/2.jpg",
    detailImage: "/real-assets/18.jpg",
    specs: ["Athletic Load Monitoring", "Posture & Alignment Audits", "Custom Nutrition Stacks"],
  },
  {
    num: "03",
    title: "Raw Focus",
    tagline: "INTENSE COMMUNITY FOCUS",
    desc: "A gritty, focused environment. No mirrors for selfies, no corporate pop music. Just the raw sound of iron, breathing, and high-intensity community focus.",
    image: "/real-assets/13.jpg",
    detailImage: "/real-assets/12.jpg",
    specs: ["Focused Soundscape", "No Selfie Distractions", "High-Energy Atmosphere"],
  },
];

export function WhyUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background scale
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  
  return (
    <section
      id="why-us"
      ref={containerRef}
      className="relative bg-black"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left Side: Immersive Collage Image Panel */}
        <div className="w-full lg:w-7/12 h-[50vh] lg:h-screen relative overflow-hidden bg-[#070707] border-r border-white/5">
          
          {/* Main & Secondary Collaged Images for each Pillar */}
          {pillars.map((pillar, idx) => (
            <PillarCollageItem
              key={pillar.num}
              pillar={pillar}
              idx={idx}
              scrollYProgress={scrollYProgress}
              scale={scale}
            />
          ))}

          {/* Dynamic HUD Grid Overlay */}
          <div className="absolute top-6 left-6 z-20 pointer-events-none font-mono text-[9px] tracking-[0.25em] text-[#F5C518] uppercase">
            // LION&apos;S FITNESS BRAND MANUAL / SEC-03
          </div>

          <div className="absolute bottom-6 left-6 z-20 hidden lg:flex flex-col text-left font-mono text-[8px] tracking-[0.3em] text-white/30 gap-1 uppercase">
            <span>[ SYSTEM: ACTIVE SCROLL LOOKBOOK ]</span>
            <span>[ COORDINATES: 27.1592° N, 77.6750° E ]</span>
          </div>

          {/* Gritty vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-10" />
        </div>

        {/* Right Side: Editorial Text Column */}
        <div className="w-full lg:w-5/12 h-[50vh] lg:h-screen flex items-center relative px-6 sm:px-12 lg:px-16 bg-[#030303]">
          
          {/* Scroll progress bar widget on the left side of text column */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5 hidden lg:block">
            <motion.div 
              className="w-full bg-[#F5C518] origin-top shadow-[0_0_10px_#F5C518]"
              style={{ scaleY: scrollYProgress, height: "100%" }}
            />
          </div>

          <div className="relative w-full h-full flex flex-col justify-center py-8 lg:py-0">
            {pillars.map((pillar, idx) => (
              <PillarTextItem
                key={pillar.num}
                pillar={pillar}
                idx={idx}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

interface CollageItemProps {
  pillar: typeof pillars[0];
  idx: number;
  scrollYProgress: any;
  scale: any;
}

function PillarCollageItem({ pillar, idx, scrollYProgress, scale }: CollageItemProps) {
  const start = idx * 0.33;
  const end = start + 0.33;

  // Safe clamped values for browser WAAPI offsets
  const rangeMain = [
    Math.max(0, start - 0.08),
    Math.max(0, start + 0.05),
    Math.min(1, end - 0.05),
    Math.min(1, end + 0.08)
  ];

  const mainOpacity = useTransform(scrollYProgress, rangeMain, [0, 1, 1, 0]);

  // Secondary details slide-in offsets
  const rangeDetail = [
    Math.max(0, start - 0.02),
    Math.max(0, start + 0.12),
    Math.min(1, end - 0.08),
    Math.min(1, end + 0.05)
  ];

  const detailOpacity = useTransform(scrollYProgress, rangeDetail, [0, 1, 1, 0]);
  const detailY = useTransform(scrollYProgress, rangeDetail, [80, 0, 0, -80]);

  return (
    <motion.div
      className="absolute inset-0 w-full h-full flex items-center justify-center"
      style={{ opacity: mainOpacity }}
    >
      {/* Main image container */}
      <motion.div className="relative w-full h-full" style={{ scale }}>
        <Image
          src={pillar.image}
          alt={pillar.title}
          fill
          className="object-cover filter grayscale contrast-[1.12] brightness-[0.38]"
          quality={95}
          priority={idx === 0}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black/60"
          aria-hidden="true"
        />
      </motion.div>

      {/* Floating secondary collage detail image */}
      <motion.div
        className="absolute bottom-8 right-8 w-2/5 max-w-[200px] aspect-[4/3] rounded-lg overflow-hidden border border-[#F5C518]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20 hidden sm:block"
        style={{
          opacity: detailOpacity,
          y: detailY,
          rotate: idx % 2 === 0 ? 3 : -3
        }}
      >
        <Image
          src={pillar.detailImage}
          alt={`${pillar.title} details`}
          fill
          className="object-cover filter contrast-[1.15] brightness-[0.8]"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>
    </motion.div>
  );
}

interface TextItemProps {
  pillar: typeof pillars[0];
  idx: number;
  scrollYProgress: any;
}

function PillarTextItem({ pillar, idx, scrollYProgress }: TextItemProps) {
  const start = idx * 0.33;
  const peak = start + 0.16;
  const end = start + 0.33;

  const range = [
    Math.max(0, start - 0.05),
    peak,
    Math.min(1, end + 0.05)
  ];

  const opacity = useTransform(scrollYProgress, range, [0, 1, 0]);
  const y = useTransform(scrollYProgress, range, [50, 0, -50]);

  return (
    <motion.div
      className="absolute inset-x-0 flex flex-col justify-center text-left"
      style={{ opacity, y, pointerEvents: idx === 0 ? "auto" : "none" }} // Ensure active layer gets clicks if needed
    >
      {/* Super-large decorative number */}
      <span
        className="text-[12rem] md:text-[16rem] font-bold leading-none select-none absolute -top-16 md:-top-28 -left-4 opacity-[0.03] text-[#F5C518]"
        style={{ fontFamily: "var(--font-bebas)" }}
      >
        {pillar.num}
      </span>

      <div className="relative z-10">
        <p className="text-[10px] font-bold tracking-[0.3em] text-[#F5C518] uppercase mb-4 font-mono">
          // {pillar.tagline}
        </p>
        
        <h3
          className="text-white uppercase leading-[0.85] mb-6 tracking-tighter"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(3.2rem, 5.5vw, 5vw)",
          }}
        >
          {pillar.title}
        </h3>
        
        <div className="w-16 h-[2px] bg-[#F5C518] mb-6" />
        
        <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-sm mb-8">
          {pillar.desc}
        </p>

        {/* Dynamic specification bullets */}
        <div className="flex flex-col gap-3">
          {pillar.specs.map((spec) => (
            <div key={spec} className="flex items-center gap-3">
              <svg 
                className="w-3.5 h-3.5 text-[#F5C518] shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-white/80 font-mono text-[10px] sm:text-xs tracking-wider uppercase font-semibold">
                {spec}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
