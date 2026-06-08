"use client";

import Image from "next/image";
import { type Variants, motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Ankit Verma",
    avatar: "/real-assets/1.jpg",
    rating: 5,
    date: "2 weeks ago",
    status: "Local Guide",
    votes: 18,
    text: "Amazing gym with top-class equipment. I've trained in Delhi and Mumbai, but the loading consistency of these biomechanical machines here is unparalleled. Head Coach Vikram's loading adjustment completely changed my recovery.",
  },
  {
    id: 2,
    name: "Pooja Sharma",
    avatar: "/real-assets/6.jpg",
    rating: 5,
    date: "1 month ago",
    status: "Verified Member",
    votes: 12,
    text: "Lion's Fitness changed my lifestyle completely. As a female athlete, the environment is extremely safe, professional, and performance-oriented. Best place in Mathura for real transformations.",
  },
  {
    id: 3,
    name: "Rahul Chaudhary",
    avatar: "/real-assets/8.jpg",
    rating: 5,
    date: "3 weeks ago",
    status: "Local Guide",
    votes: 24,
    text: "Spacious, clean, and intense. The open-air rooftop turf is a signature training biome — there is nothing like doing sunset tire flips and battle rope drills here. Highly recommended!",
  },
  {
    id: 4,
    name: "Karan Tyagi",
    avatar: "/real-assets/2.jpg",
    rating: 5,
    date: "2 months ago",
    status: "Verified Member",
    votes: 9,
    text: "The energy at Lion's keeps you accountable. The gym has a raw, authentic iron vibe — no mirrors for selfies, no corporate distraction. Just focus and calibrated plates. Hands down the best gym in UP.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Testimonials() {
  const [helpfulVotes, setHelpfulVotes] = useState<Record<number, number>>({});
  const [voted, setVoted] = useState<Record<number, boolean>>({});

  const handleVote = (id: number) => {
    if (voted[id]) return; // Single vote allowed per session
    setHelpfulVotes((prev) => ({
      ...prev,
      [id]: (prev[id] || reviews.find((r) => r.id === id)?.votes || 0) + 1,
    }));
    setVoted((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="testimonials" className="relative bg-[#0A0A0A] py-24 md:py-32 overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none select-none w-[250px] h-[250px] md:w-[450px] md:h-[450px] z-0">
        <Image
          src="/real-assets/Lion's Fitness Logo.jpg"
          alt="Watermark logo"
          fill
          className="object-contain filter sepia"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Trust HUD Grid */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8 text-left">
          
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#F5C518] rounded-full" />
              <span className="text-xs font-bold tracking-[0.3em] text-[#F5C518] uppercase font-mono">
                // EXTERNAL PROOF DECK
              </span>
            </div>
            <h2
              className="text-white uppercase leading-[0.9] tracking-tight"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3.5rem, 6.5vw, 6rem)",
              }}
            >
              COMMUNITY <span className="text-[#F5C518]">VERDICT</span>
            </h2>
            <p className="text-white/50 text-sm md:text-base mt-4 leading-relaxed">
              Read real logs from our active community. Audited performance feedbacks from verified members training inside our Mathura facilities.
            </p>
          </div>

          {/* Google Review Badge Widget */}
          <div className="p-5 backdrop-blur-md bg-black/40 border border-white/5 rounded-2xl flex items-center gap-5 shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
            {/* Google Logo representation */}
            <div className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 shrink-0">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.42 0-6.19-2.77-6.19-6.19s2.77-6.19 6.19-6.19c1.55 0 2.96.57 4.05 1.51l3.07-3.07C19.12 2.06 15.91 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.48 0 11.24-4.56 11.24-11.24 0-.76-.08-1.5-.22-1.955H12.24z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-white text-xl font-extrabold font-mono leading-none">4.9</span>
                <div className="flex gap-0.5 text-[#F5C518]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" className="stroke-none" />
                  ))}
                </div>
              </div>
              <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase mt-1">
                Based on 500+ Google Reviews
              </span>
            </div>
          </div>

        </div>

        {/* Verified Reviews Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reviews.map((rev) => {
            const votesCount = helpfulVotes[rev.id] ?? rev.votes;
            const isVoted = voted[rev.id] ?? false;

            return (
              <motion.div
                key={rev.id}
                variants={cardVariants}
                className="p-6 bg-[#050505] border border-white/5 rounded-2xl hover:border-[#F5C518]/30 hover:bg-[#070707] transition-all duration-300 flex flex-col justify-between min-h-[300px] text-left relative shadow-[0_15px_40px_rgba(0,0,0,0.5)] group"
              >
                
                {/* Google Icon Accent */}
                <div className="absolute top-6 right-6 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
                  <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.42 0-6.19-2.77-6.19-6.19s2.77-6.19 6.19-6.19c1.55 0 2.96.57 4.05 1.51l3.07-3.07C19.12 2.06 15.91 1 12.24 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.48 0 11.24-4.56 11.24-11.24 0-.76-.08-1.5-.22-1.955H12.24z" />
                  </svg>
                </div>

                {/* Rating & Review Text */}
                <div className="flex flex-col gap-4">
                  
                  {/* Stars */}
                  <div className="flex gap-0.5 text-[#F5C518]">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" className="stroke-none" />
                    ))}
                  </div>

                  <p className="text-white/70 text-xs md:text-sm leading-relaxed font-medium">
                    &ldquo;{rev.text}&rdquo;
                  </p>

                </div>

                {/* User Info & Verification HUD */}
                <div className="mt-8 border-t border-white/5 pt-4">
                  
                  <div className="flex items-center gap-3">
                    
                    {/* Headshot */}
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10">
                      <Image
                        src={rev.avatar}
                        alt={rev.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="text-white font-extrabold text-xs tracking-wide">
                          {rev.name}
                        </span>
                        <CheckCircle size={10} className="text-emerald-400 fill-emerald-400/10 shrink-0" />
                      </div>
                      
                      {/* Verification Status */}
                      <span className="text-[8.5px] font-mono text-white/35 uppercase tracking-widest mt-0.5">
                        {rev.status.toUpperCase()} • {rev.date}
                      </span>
                    </div>

                  </div>

                  {/* Helpful Vote Trigger */}
                  <div className="mt-4 flex items-center justify-between text-[8px] font-mono tracking-widest uppercase">
                    <button
                      onClick={() => handleVote(rev.id)}
                      disabled={isVoted}
                      className={`px-3 py-1.5 rounded border ${
                        isVoted
                          ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 cursor-default"
                          : "bg-white/5 border-white/10 hover:bg-[#F5C518]/10 hover:border-[#F5C518]/40 hover:text-[#F5C518] text-white/60 transition-colors"
                      }`}
                    >
                      {isVoted ? "HELPFUL ✓" : "HELPFUL ?"}
                    </button>
                    <span className="text-white/20">
                      VOTES: {votesCount}
                    </span>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
