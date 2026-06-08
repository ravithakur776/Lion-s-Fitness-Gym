"use client";

import Image from "next/image";
import { type Variants, motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useState, useEffect } from "react";

const images = [
  { src: "/real-assets/20.jpg", alt: "Machine Zone - High performance loading", aspect: "aspect-[4/3]", zone: "Machine Biome" },
  { src: "/real-assets/14.jpg", alt: "Spinning Area - Metabolic cardiovascular zone", aspect: "aspect-[3/4]", zone: "Spin Studio" },
  { src: "/real-assets/15.jpg", alt: "Rooftop Turf Area - Outdoor functional conditioning", aspect: "aspect-[1/1]", zone: "Elevated Turf" },
  { src: "/real-assets/12.jpg", alt: "Functional Conditioning Arena - Cross Training", aspect: "aspect-[3/4]", zone: "Conditioning" },
  { src: "/real-assets/5.jpg", alt: "Aerobic Cycling Line - Speed resistance", aspect: "aspect-[4/3]", zone: "Spin Studio" },
  { src: "/real-assets/19.jpg", alt: "Heavy Lifting Deck - Strength & powerlifting", aspect: "aspect-[3/4]", zone: "Free Weights" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function Gallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeIdx === null) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx]);

  const handleNext = () => {
    setActiveIdx((prev) => (prev === null ? null : (prev + 1) % images.length));
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  };

  return (
    <section id="gallery" className="relative bg-[#0A0A0A] py-24 md:py-32 overflow-hidden">
      
      {/* Background logo watermark */}
      <div className="absolute left-[-10%] top-[40%] opacity-[0.02] pointer-events-none select-none w-[350px] h-[350px] md:w-[600px] md:h-[600px]">
        <Image
          src="/real-assets/Lion's Fitness Logo.jpg"
          alt="Watermark logo"
          fill
          className="object-contain filter sepia"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#F5C518] rounded-full" />
              <span className="text-xs font-bold tracking-[0.3em] text-[#F5C518] uppercase font-mono">
                // SYSTEM VISUAL INVENTORY
              </span>
            </div>
            <h2
              className="text-white uppercase leading-[0.9] tracking-tight"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3.5rem, 6.5vw, 6rem)",
              }}
            >
              INSIDE THE <span className="text-[#F5C518]">ARENA</span>
            </h2>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white border border-white/10 font-bold text-xs tracking-widest uppercase hover:border-[#F5C518] hover:text-[#F5C518] transition-all duration-300"
          >
            <span>Request Facility Tour</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </div>

        {/* Dynamic Masonry Columns Layout */}
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              onClick={() => setActiveIdx(i)}
              className={`relative ${img.aspect} w-full rounded-xl overflow-hidden border border-white/5 hover:border-[#F5C518]/40 shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-500 cursor-zoom-in group break-inside-avoid`}
            >
              {/* Overlay Darkener */}
              <div 
                className="absolute inset-0 bg-black/45 z-10 transition-opacity duration-300 group-hover:opacity-20 flex items-center justify-center" 
                aria-hidden="true"
              >
                {/* Micro zoom icon */}
                <div className="w-10 h-10 rounded-full bg-black/75 border border-white/10 flex items-center justify-center text-[#F5C518] opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 z-20">
                  <ZoomIn size={16} />
                </div>
              </div>
              
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={85}
                className="object-cover transition-transform duration-700 ease-out scale-[1.02] group-hover:scale-105 filter grayscale group-hover:grayscale-0 group-hover:brightness-95 contrast-[1.08] brightness-[0.8]"
              />

              {/* Caption Tag overlay */}
              <div className="absolute bottom-4 left-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[8px] font-mono font-bold tracking-widest text-black bg-[#F5C518] px-2 py-0.5 rounded uppercase">
                  {img.zone}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* ─── Lightbox Modal (Framer Motion AnimatePresence) ─── */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8"
          >
            {/* Header controls */}
            <div className="absolute top-4 inset-x-6 flex items-center justify-between z-50">
              <span className="font-mono text-[10px] tracking-widest text-white/40">
                LIONS ARENA GALLERY // PHOTO {activeIdx + 1} OF {images.length}
              </span>
              <button
                onClick={() => setActiveIdx(null)}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#F5C518] hover:text-black transition-colors"
                aria-label="Close Lightbox"
              >
                <X size={18} />
              </button>
            </div>

            {/* Main Image View */}
            <div className="relative w-full max-w-4xl h-[70vh] flex items-center justify-center relative">
              
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 md:-left-12 z-50 w-12 h-12 rounded-full border border-white/10 bg-black/50 hover:bg-[#F5C518] hover:text-black transition-colors flex items-center justify-center text-white"
                aria-label="Previous Image"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Active Image Render */}
              <motion.div 
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={images[activeIdx].src}
                  alt={images[activeIdx].alt}
                  fill
                  quality={95}
                  className="object-contain"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 md:-right-12 z-50 w-12 h-12 rounded-full border border-white/10 bg-black/50 hover:bg-[#F5C518] hover:text-black transition-colors flex items-center justify-center text-white"
                aria-label="Next Image"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Bottom Metadata */}
            <div className="text-center mt-6 max-w-xl text-left border-t border-white/10 pt-4 w-full">
              <span className="inline-block text-[9px] font-mono font-bold tracking-widest text-[#F5C518] uppercase mb-1">
                // {images[activeIdx].zone.toUpperCase()}
              </span>
              <p className="text-white text-sm md:text-base font-semibold leading-relaxed">
                {images[activeIdx].alt}
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
