"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  align = "center",
  className,
  id,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        isCenter ? "text-center" : "text-left",
        className
      )}
      id={id}
    >
      {eyebrow && (
        <motion.p
          className="section-eyebrow mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-wide"
        style={{ fontFamily: "var(--font-heading)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}{" "}
        {titleAccent && (
          <span className="gradient-text-yellow">{titleAccent}</span>
        )}
      </motion.h2>
      <motion.span
        className={cn("accent-line mt-4", isCenter && "mx-auto")}
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ display: "block", transformOrigin: isCenter ? "center" : "left" }}
      />
      {subtitle && (
        <motion.p
          className="mt-5 text-white-muted text-base md:text-lg max-w-2xl leading-relaxed"
          style={{ color: "#A0A0A0", ...(isCenter ? { margin: "1.25rem auto 0" } : {}) }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
