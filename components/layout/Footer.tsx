"use client";

import Image from "next/image";
import { Share2, Globe, Play, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-[#080808] border-t text-white"
      style={{ borderColor: "rgba(245,197,24,0.15)" }}
      role="contentinfo"
    >
      {/* Top glowing rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #F5C518 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* 1. Brand (col-span-3) */}
          <div className="lg:col-span-3 text-left">
            <a
              href="#home"
              className="flex items-center gap-3 mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded w-fit"
              aria-label="Lion's Fitness Home"
            >
              <Image
                src="/real-assets/Lion's Fitness Logo.jpg"
                alt="Lion's Fitness Logo"
                width={40}
                height={40}
                className="object-contain rounded-full border border-yellow-400/30"
              />
              <div>
                <span
                  className="block text-white font-bold leading-none tracking-widest text-lg"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  LION&apos;S
                </span>
                <span
                  className="block text-xs tracking-widest font-semibold text-[#F5C518] mt-0.5"
                >
                  FITNESS
                </span>
              </div>
            </a>
            <p className="text-xs md:text-sm leading-relaxed mb-6 text-white/50">
              Your destination for a healthier, stronger and better you. Train hard, stay strong, and become the lion you were meant to be.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: Share2, href: "https://instagram.com", label: "Instagram" },
                { icon: Globe, href: "https://facebook.com", label: "Facebook" },
                { icon: Play, href: "https://youtube.com", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Lion's Fitness on ${label}`}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-black hover:bg-[#F5C518] transition-all duration-200 border border-white/10"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links (col-span-2) */}
          <div className="lg:col-span-2 text-left">
            <h3
              className="text-white font-bold mb-5 tracking-widest text-xs uppercase"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-white/60">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About Us" },
                { href: "#why-us", label: "Services" },
                { href: "#programs", label: "Programs" },
                { href: "#gallery", label: "Gallery" },
                { href: "#membership", label: "Pricing" },
                { href: "#contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#F5C518] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Our Services (col-span-2) */}
          <div className="lg:col-span-2 text-left">
            <h3
              className="text-white font-bold mb-5 tracking-widest text-xs uppercase"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              Our Services
            </h3>
            <ul className="space-y-2.5 text-xs text-white/60">
              {[
                "Strength Training",
                "Weight Loss Program",
                "Muscle Gain Program",
                "Personal Training",
                "Zumba & Aerobics",
                "Diet Guidance",
                "Fitness Coaching",
              ].map((service) => (
                <li key={service}>
                  <a href="#programs" className="hover:text-[#F5C518] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Us (col-span-3) */}
          <div className="lg:col-span-3 text-left">
            <h3
              className="text-white font-bold mb-5 tracking-widest text-xs uppercase"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-xs text-white/60">
              <li className="flex gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#F5C518]" aria-hidden="true" />
                <span>
                  Krishna Town, Near Refinery Nagar & CNG Petrol Pump, NH-2, Bad, Mathura, UP 281006
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-[#F5C518]" aria-hidden="true" />
                <a href="tel:9528395833" className="hover:text-[#F5C518] transition-colors">
                  9528395833
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-[#F5C518]" aria-hidden="true" />
                <a href="mailto:info@lionsfitness.com" className="hover:text-[#F5C518] transition-colors">
                  info@lionsfitness.com
                </a>
              </li>
              <li className="flex gap-2 pt-2 border-t border-white/5">
                <Clock size={14} className="shrink-0 text-[#F5C518] mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white/80">Opening Hours:</p>
                  <p>5:00 AM – 10:00 AM</p>
                  <p>4:00 PM – 10:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* 5. Map Embed Widget (col-span-2) */}
          <div className="lg:col-span-2 text-left flex flex-col justify-start">
            <h3
              className="text-white font-bold mb-5 tracking-widest text-xs uppercase"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              Map Location
            </h3>
            <div className="relative w-full aspect-video rounded overflow-hidden border border-white/10 opacity-70 hover:opacity-100 transition-opacity">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14201.272186835263!2d77.67499691500645!3d27.159235883018868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973719000000001%3A0xdeadbeef!2sRefinery%20Nagar%2C%20Mathura%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1623123456789!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                title="Lion's Fitness location map"
              />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/30"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p>
            © {currentYear} Lion&apos;s Fitness. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with 🦁 in Mathura, UP
          </p>
        </div>
      </div>
    </footer>
  );
}
