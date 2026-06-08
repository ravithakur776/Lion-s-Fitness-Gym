"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  id?: string;
  "aria-label"?: string;
}

const variantClasses = {
  primary:
    "bg-yellow text-black font-bold hover:bg-yellow-hover btn-shimmer border-0 shadow-glow-yellow-sm hover:shadow-glow-yellow",
  outline:
    "bg-transparent text-yellow border-2 border-yellow hover:bg-yellow hover:text-black",
  ghost:
    "bg-transparent text-white border border-white/20 hover:border-yellow/60 hover:text-yellow",
};

const sizeClasses = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-10 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
  type = "button",
  disabled,
  id,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-wide transition-all duration-300 ease-out cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.03 },
    whileTap: { scale: disabled ? 1 : 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        id={id}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      id={id}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
