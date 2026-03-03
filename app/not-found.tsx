import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#F9FAFB] font-sans text-[#1A1A1A]">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-[#1A1A1A] mb-4">404</h1>
        <p className="text-xl text-[#6B7280] mb-8">Page not found</p>
        <Link href="/" className="bg-[#1A1A1A] text-white px-6 py-3 rounded-xl font-bold hover:bg-black transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}
