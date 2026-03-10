'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Check, RotateCcw, Mail, Phone } from 'lucide-react';
import { PillboxLogo } from '@/components/pillbox-logo';
import { DarkPageBackground } from '@/components/dark-page-background';
import { useParticleCanvas } from '@/hooks/use-particle-canvas';

const COMMITMENTS = [
  'End-to-End Delivery',
  '3 Months Post-Launch Support',
  'Transparent Milestone Billing',
  'Full Source Code Handover',
];

export default function ThankYouPage() {
  const router = useRouter();
  const canvasRef = useParticleCanvas();

  return (
    <div className="relative h-screen w-full bg-[#0A0A0A] flex flex-col overflow-hidden font-sans">
      <DarkPageBackground variant="compact" />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-evenly sm:justify-center text-center px-6 max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="sm:mb-14"
        >
          <PillboxLogo className="w-[120px] h-auto sm:w-[168px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="sm:mb-8"
        >
          <h1 className="text-[42px] sm:text-[64px] font-extrabold text-white leading-[1.05] tracking-tight">
            Let&apos;s Build{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899)' }}
            >
              Together.
            </span>
          </h1>
          <p className="text-[14px] sm:text-[17px] text-[#9CA3AF] leading-[1.7] mt-3 sm:mt-4 font-medium">
            We look forward to building Pillbox&apos;s digital future together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="grid grid-cols-2 gap-2 sm:gap-3 w-full sm:mb-12"
        >
          {COMMITMENTS.map((item, i) => (
            <motion.div
              key={item}
              animate={{
                borderColor: [
                  'rgba(59,130,246,0.15)',
                  'rgba(139,92,246,0.35)',
                  'rgba(236,72,153,0.15)',
                  'rgba(139,92,246,0.35)',
                  'rgba(59,130,246,0.15)',
                ],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
              className="flex items-center gap-2.5 bg-white/5 border rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-left"
            >
              <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-[11px] sm:text-[12px] font-semibold text-[#D1D5DB] leading-tight">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8 sm:mb-14"
        >
          <a href="mailto:ravsysinfotech@gmail.com" className="flex items-center gap-2 text-[13px] text-[#9CA3AF] hover:text-white transition-colors font-medium">
            <Mail className="w-4 h-4 text-[#8B5CF6]" />
            ravsysinfotech@gmail.com
          </a>
          <div className="hidden sm:block w-px h-4 bg-white/10" />
          <a href="tel:+918921386061" className="flex items-center gap-2 text-[13px] text-[#9CA3AF] hover:text-white transition-colors font-medium">
            <Phone className="w-4 h-4 text-[#8B5CF6]" />
            +91 8921 386061
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            onClick={() => router.push('/proposal')}
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-[13px] font-bold text-white shadow-md hover:opacity-90 transition-all duration-200 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)' }}
          >
            <RotateCcw className="w-4 h-4 transition-transform duration-500 group-hover:-rotate-180" />
            Restart Presentation
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="relative z-10 pb-6 sm:pb-8 text-[11px] text-[#374151] font-medium tracking-wide uppercase text-center shrink-0"
      >
        Ravsys Infotech LLP · Pillbox Pharmacy E-Commerce Proposal · 2026
      </motion.div>
    </div>
  );
}
