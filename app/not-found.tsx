import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PillboxLogo } from '@/components/pillbox-logo';
import { DarkPageBackground } from '@/components/dark-page-background';

export default function NotFound() {
  return (
    <div className="relative h-screen w-full bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden font-sans text-center px-6">
      <DarkPageBackground />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <PillboxLogo width={148} height={75} />

        <h1
          className="text-[80px] sm:text-[120px] font-extrabold leading-none text-transparent bg-clip-text"
          style={{ backgroundImage: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899)' }}
        >
          404
        </h1>

        <p className="text-[16px] text-[#9CA3AF] font-medium">
          This page doesn&apos;t exist.
        </p>

        <Link href="/">
          <button
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-[15px] font-bold text-white shadow-2xl overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)' }}
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            Return Home
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
    </div>
  );
}
