'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Check, ChevronLeft, ChevronRight, Zap, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PillboxLogo } from '@/components/pillbox-logo';
import {
  Module1Right, Module2Right, Module3Right, Module4Right,
  Module5Right, Module6Right, Module7Right, Module8Right, Module9Right,
  Module10Right, Module11Right, Module12Right, Module13Right, Module14Right,
  Module15Right, Module16Right,
} from '../modules';

const MODULES = [
  {
    id: 1,
    navLabel: "Project Overview",
    title: "Project Overview",
    subtitle: "Extending Pillbox's trusted pharmacy network into a fully digital health & wellness commerce channel.",
    features: ["2,000+ Product Catalog", "Multi-Warehouse Ready", "AI-Powered Discovery", "Built for India"],
    insight: "Pillbox already has the trust. This platform gives it the reach — a seamless bridge between physical stores and digital customers.",
    panel: Module1Right,
  },
  {
    id: 2,
    navLabel: "Project Approach",
    title: "Project Approach",
    subtitle: "A phased, growth-oriented delivery strategy designed for rapid launch and long-term scalability.",
    features: ["Dual-Phase Rollout", "Performance Driven", "Scalable Architecture", "SEO & Discovery Centric"],
    insight: "Phase 1 launches a fully working store. Phase 2 layers intelligence, automation, and retention on top.",
    panel: Module2Right,
  },
  {
    id: 3,
    navLabel: "Project Modules & Features",
    title: "Project Modules & Features",
    subtitle: "A modular commerce architecture — 16 independently deployable micro-modules for maximum resilience.",
    features: ["16 Core Modules", "API-First Architecture", "Bi-directional Sync", "Zero-Trust Security"],
    insight: "Each module is independently deployable — a failure in notifications never touches checkout.",
    panel: Module3Right,
  },
  {
    id: 4,
    navLabel: "Transformation Overview",
    title: "Transformation Overview",
    subtitle: "From a fragmented WooCommerce setup to a purpose-built, intelligent pharmacy commerce platform.",
    features: ["WooCommerce → Custom Platform", "Manual Catalog → AI-Enriched", "Static Search → Semantic AI", "Disconnected Inventory → Live MSSQL Sync"],
    insight: "This isn't an upgrade. It's a complete rearchitecture — built for the specific demands of a multi-location Indian pharmacy chain.",
    panel: Module4Right,
  },
  {
    id: 5,
    navLabel: "Storefront & Catalog",
    title: "Storefront & Catalog",
    subtitle: "A high-conversion, mobile-first commerce experience — built for pharmacy browsing behavior.",
    features: ["Mobile-First UX", "Core Web Vitals", "PDP with Recommendations", "Frictionless Cart"],
    insight: "Every interaction optimized for thumb-reach and sub-3-second load on 4G — because most Pillbox customers shop on mobile.",
    panel: Module5Right,
  },
  {
    id: 6,
    navLabel: "Search & Discovery",
    title: "Search & Discovery",
    subtitle: "Intelligent semantic search — understands intent, tolerates typos, surfaces the right product every time.",
    features: ["Semantic / NLP Search", "Typo Tolerance", "Dynamic Facets", "Admin Boost Controls"],
    insight: "\"medicin for skin\" must return relevant skincare results. Search must understand pharmacy customers, not just index keywords.",
    panel: Module6Right,
  },
  {
    id: 7,
    navLabel: "Loyalty & Accounts",
    title: "Loyalty & Accounts",
    subtitle: "A retention-driving loyalty ecosystem — earning, redeeming, and referring, all in one dashboard.",
    features: ["Pillbox Points Engine", "Referral Engine", "Multi-Address Profiles", "One-Click Re-order"],
    insight: "Points are discount units only — no monetary float, no RBI compliance headache. Clean and legal by design.",
    panel: Module7Right,
  },
  {
    id: 8,
    navLabel: "Checkout & Payments",
    title: "Checkout & Payments",
    subtitle: "A secure, frictionless checkout — RazorPay-powered, loyalty-integrated, with auto-applied best discount.",
    features: ["RazorPay (UPI/Cards/NetBanking)", "Loyalty Point Redemption", "Auto-Apply Best Discount", "No Guest Checkout"],
    insight: "The system automatically finds and applies the best available discount — customers never need to hunt for coupon codes.",
    panel: Module8Right,
  },
  {
    id: 9,
    navLabel: "Inventory Sync",
    title: "Inventory Sync",
    subtitle: "Real-time bi-directional synchronization — your MSSQL warehouse data, live on the website at all times.",
    features: ["MSSQL Live Bridge", "Multi-Warehouse Routing", "Per-Product Stock Buffer", "Prevent Overselling"],
    insight: "When stock changes in the warehouse app, the website updates within seconds. No manual intervention, no overselling risk.",
    panel: Module9Right,
  },
  {
    id: 10,
    navLabel: "Orders & Automation",
    title: "Orders & Automation",
    subtitle: "End-to-end order lifecycle automation — from placement to delivery, with WhatsApp at every step.",
    features: ["WhatsApp Milestone Notifications", "PDF Invoice on Confirmation", "Abandoned Cart Recovery", "Shipping Label Generation"],
    insight: "One-way automated notifications only — no two-way chat complexity. Reliable, template-based, and WABA-compliant.",
    panel: Module10Right,
  },
  {
    id: 11,
    navLabel: "AI Catalog Engine",
    title: "AI Catalog Engine",
    subtitle: "AI-accelerated migration of 2,000+ products — enriched, tagged, described, and SEO-optimized automatically.",
    features: ["Auto-Description Generation", "Background Removal", "Auto-Tagging (Category/Brand/Concern/Gender)", "Admin Review Workflow"],
    insight: "No AI content goes live without human sign-off. Every generated description and tag passes through a mandatory admin approval queue.",
    panel: Module11Right,
  },
  {
    id: 12,
    navLabel: "Admin Ecosystem",
    title: "Admin Ecosystem",
    subtitle: "A centralized command center — manage every aspect of the platform without touching code.",
    features: ["Full Catalog CRUD", "Banner Scheduling", "Search Boost Controls", "Candidate Dashboard"],
    insight: "Any non-technical Pillbox staff member can manage products, promotions, jobs, and content — no developer required.",
    panel: Module12Right,
  },
  {
    id: 13,
    navLabel: "SEO & Content",
    title: "SEO & Content",
    subtitle: "Best-in-class technical SEO baked into the architecture — not bolted on as an afterthought.",
    features: ["Core Web Vitals Optimized", "Product Schema / Structured Data", "Headless CMS (Payload)", "Auto XML Sitemaps"],
    insight: "SEO is an architectural decision here — rendering strategy, URL structure, and structured data are all decided at the foundation level.",
    panel: Module13Right,
  },
  {
    id: 14,
    navLabel: "Jobs Portal",
    title: "Jobs Portal",
    subtitle: "An integrated careers platform — from job listing to candidate management, fully within the Pillbox ecosystem.",
    features: ["Public Careers Page", "Online Application + CV Upload", "Auto-Confirmation Email", "Admin Candidate Dashboard"],
    insight: "No third-party job board dependency — Pillbox owns the candidate pipeline end to end.",
    panel: Module14Right,
  },
  {
    id: 15,
    navLabel: "Security & Infra",
    title: "Security & Infra",
    subtitle: "Production-grade infrastructure with zero-trust security, PCI compliance, and 99.9% uptime architecture.",
    features: ["OWASP Top 10 Hardened", "PCI-DSS via RazorPay", "JWT + Refresh Token Auth", "99.9% Uptime SLA"],
    insight: "Security isn't a final phase — it's enforced at every layer: auth, data, payments, and infrastructure, from day one.",
    panel: Module15Right,
  },
  {
    id: 16,
    navLabel: "Roadmap & Costs",
    title: "Roadmap & Costs",
    subtitle: "A transparent 6-month delivery roadmap with milestone-locked payments — you pay for working software, not promises.",
    features: ["6 Month Rollout", "Milestone-Based Payments", "Bi-Weekly Demos from Week 8", "UAT Sign-offs"],
    insight: "Every payment milestone unlocks only after a working demo is reviewed and approved by Pillbox.",
    panel: Module16Right,
  },
];

export default function ProposalApp() {
  const router = useRouter();
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeModule = MODULES[activeModuleIndex];
  const isLastModule = activeModuleIndex === MODULES.length - 1;

  const handleNext = useCallback(() => {
    if (activeModuleIndex === MODULES.length - 1) {
      router.push('/thank-you');
    } else {
      setActiveModuleIndex((prev) => prev + 1);
    }
  }, [activeModuleIndex, router]);

  const handlePrev = useCallback(() => {
    if (activeModuleIndex === 0) {
      router.push('/');
    } else {
      setActiveModuleIndex((prev) => prev - 1);
    }
  }, [activeModuleIndex, router]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const progressPercentage = ((activeModuleIndex + 1) / MODULES.length) * 100;

  return (
    <div className="flex h-screen w-full bg-[#F9FAFB] overflow-hidden font-sans text-[#1A1A1A]">
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-[270px] bg-[#0F0F0F] flex flex-col h-full border-r border-white/5 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button className="absolute top-6 right-4 text-white/50 hover:text-white md:hidden" onClick={() => setIsSidebarOpen(false)}>
          <X className="w-6 h-6" />
        </button>
        <div className="p-8 pb-6 w-full">
          <PillboxLogo width={109} height={55} showTagline className="mb-1" />
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-1.5 hide-scrollbar">
          {MODULES.map((mod, idx) => (
            <button
              key={mod.id}
              onClick={() => { setActiveModuleIndex(idx); setIsSidebarOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl text-[13px] font-medium transition-all ${
                idx === activeModuleIndex
                  ? 'bg-[#1E1B3A] text-white shadow-inner border border-white/5'
                  : 'text-[#D1D5DB] hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="opacity-50 mr-2">{idx + 1}.</span> {mod.navLabel}
            </button>
          ))}
        </div>

        <div className="p-6 border-t border-white/10 bg-black/20 shrink-0">
          <div className="flex justify-between items-end mb-3">
            <div className="text-[10px] uppercase tracking-[0.15em] text-[#9CA3AF] font-bold">Presentation Progress</div>
            <div className="text-[13px] font-bold text-white">{Math.round(progressPercentage)}%</div>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] rounded-full"
              style={{ width: `${progressPercentage}%`, transition: 'width 400ms ease' }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Bar */}
        <div className="h-20 border-b border-[#E5E7EB] bg-white flex items-center justify-between px-6 md:px-10 shrink-0 z-10">
          <div className="flex items-center">
            <button className="mr-4 md:hidden p-2 -ml-2 text-[#1A1A1A] hover:bg-[#F9FAFB] rounded-lg" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <div className="text-[14px] font-bold text-[#1A1A1A]">RAVSYS INFOTECH LLP</div>
              <div className="text-[10px] text-[#6B7280] font-semibold tracking-wider uppercase mt-0.5 hidden sm:block">PILLBOX E-COMMERCE PROPOSAL</div>
            </div>
          </div>
          <div className="hidden md:block bg-[#F9FAFB] px-5 py-2 rounded-full text-[11px] font-bold text-[#1A1A1A] border border-[#E5E7EB] tracking-wider uppercase">
            MODULE {activeModule.id} OF {MODULES.length}
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex space-x-2 px-2">
              <button onClick={handlePrev} className="p-2.5 rounded-full border border-[#E5E7EB] text-[#1A1A1A] hover:bg-[#F9FAFB] transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] text-white px-6 py-3 rounded-xl text-[13px] font-bold shadow-md hover:opacity-90 transition-all flex items-center justify-center min-w-[7rem]"
            >
              {isLastModule ? 'Finish' : 'Next'} <ChevronRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>
        </div>

        {/* Split Content */}
        <div className="flex-1 flex overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="flex flex-col lg:flex-row w-full h-full overflow-y-auto lg:overflow-hidden"
            >
              {/* Left Column */}
              <div className="w-full lg:w-[45%] bg-white p-8 lg:p-16 flex flex-col lg:h-full overflow-y-visible lg:overflow-y-auto border-b lg:border-b-0 lg:border-r border-[#E5E7EB] hide-scrollbar shrink-0">
                <div className="flex-1">
                  <div className="text-[11px] uppercase tracking-[0.12em] text-[#22C55E] font-bold mb-5">Project Highlight</div>
                  <h1 className="text-[38px] font-extrabold text-[#1A1A1A] leading-[1.15] mb-6 tracking-tight">
                    {activeModule.title}
                  </h1>
                  <p className="text-[15px] text-[#6B7280] leading-[1.6] mb-10 max-w-md font-medium">
                    {activeModule.subtitle}
                  </p>

                  <div className="space-y-4 mb-12">
                    {activeModule.features.map((feature, idx) => (
                      <div key={idx} className="bg-white border border-[#E5E7EB] rounded-xl p-4 flex items-center hover:border-[#C4B5FD] hover:shadow-[0_8px_16px_rgba(139,92,246,0.15)] transition-all group cursor-default">
                        <div className="w-[24px] h-[24px] rounded-full bg-[#22C55E] flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform shadow-sm">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="text-[14px] font-bold text-[#1A1A1A]">{feature}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#1E1B3A] rounded-2xl p-8 mt-auto shrink-0 relative overflow-hidden shadow-xl border border-white/5">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] opacity-20 blur-3xl rounded-full translate-x-10 -translate-y-10" />
                  <h4 className="text-[12px] uppercase tracking-[0.1em] font-bold text-white mb-4 flex items-center">
                    <Zap className="w-4 h-4 mr-2.5 text-[#FBBF24]" /> Strategic Insight
                  </h4>
                  <p className="text-[13px] text-[#A78BFA] italic leading-relaxed relative z-10 font-medium">
                    {activeModule.insight}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full lg:w-[55%] bg-[#F7F8FA] p-8 lg:p-16 flex items-center justify-center lg:h-full overflow-y-visible lg:overflow-y-auto hide-scrollbar relative shrink-0">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="relative z-10 w-full">
                  <activeModule.panel />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
