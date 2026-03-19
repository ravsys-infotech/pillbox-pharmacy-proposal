'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { PillboxLogo } from '@/components/pillbox-logo';
import { DarkPageBackground } from '@/components/dark-page-background';
import { useParticleCanvas } from '@/hooks/use-particle-canvas';

const STATS = [
  { value: '18', label: 'Slides' },
  { value: '18', label: 'Modules' },
  { value: '6mo', label: 'Delivery' },
];

export default function LandingPage() {
  const canvasRef = useParticleCanvas();

  return (
    <div className="relative h-screen w-full bg-[#0A0A0A] flex flex-col overflow-hidden font-sans">
      <DarkPageBackground />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-evenly sm:justify-center text-center px-6 max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="sm:mb-14"
        >
          <PillboxLogo width={148} height={75} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="sm:mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#A78BFA]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#23C3C3] inline-block" />
            E-Commerce Proposal
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="text-[40px] sm:text-[52px] lg:text-[68px] font-extrabold text-white leading-[1.05] tracking-tight sm:mb-6"
        >
          Your pharmacy,{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899)' }}
          >
            reimagined
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          className="text-[14px] sm:text-[17px] text-[#9CA3AF] leading-[1.7] max-w-xl sm:mb-12 font-medium"
        >
          A complete vision for Pillbox&apos;s digital commerce platform — 18 modules covering architecture, storefront, analytics, timeline, and investment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
        >
          <Link href="/modules">
            <button
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-[15px] font-bold text-white shadow-2xl overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)' }}
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              View the Proposal
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          className="sm:mt-20 flex items-center gap-10 sm:gap-16"
        >
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-[22px] sm:text-[28px] font-extrabold text-white tracking-tight">{value}</span>
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#6B7280] font-semibold">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 pb-6 sm:pb-8 text-[11px] text-[#374151] font-medium tracking-wide uppercase text-center shrink-0"
      >
        Prepared by Ravsys Infotech LLP
      </motion.div>
    </div>
  );
}
