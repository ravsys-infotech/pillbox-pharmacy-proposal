'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Check, ChevronLeft, ChevronRight, Zap, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Module1Right, Module2Right, Module3Right, Module5Right,
  Module6Right, Module7Right, Module8Right, Module9Right, Module10Right,
  Module11Right, Module12Right, Module13Right, Module14Right, Module15Right,
  Module16Right, Module17Right, Module18Right
} from './modules';

const MODULES = [
  {
    id: 1,
    navLabel: "Project Overview",
    title: "Project Overview",
    subtitle: "Extending Pillbox's trusted pharmacy network into a fully digital health & wellness commerce channel.",
    features: ["2,000+ Product Catalog", "Multi-Warehouse Ready", "AI-Powered Discovery", "Built for India"],
    insight: "Pillbox already has the trust. This platform gives it the reach — a seamless bridge between physical stores and digital customers.",
    panel: Module1Right
  },
  {
    id: 2,
    navLabel: "Project Approach",
    title: "Project Approach",
    subtitle: "A phased, growth-oriented delivery strategy designed for rapid launch and long-term scalability.",
    features: ["Dual-Phase Rollout", "Performance Driven", "Scalable Architecture", "SEO & Discovery Centric"],
    insight: "Phase 1 launches a fully working store. Phase 2 layers intelligence, automation, and retention on top.",
    panel: Module2Right
  },
  {
    id: 3,
    navLabel: "Project Modules & Features",
    title: "Project Modules & Features",
    subtitle: "A modular commerce architecture — 16 independently deployable micro-modules for maximum resilience.",
    features: ["16 Core Modules", "API-First Architecture", "Bi-directional Sync", "Zero-Trust Security"],
    insight: "Each module is independently deployable — a failure in notifications never touches checkout.",
    panel: Module3Right
  },
  {
    id: 4,
    navLabel: "Transformation Overview",
    title: "Transformation Overview",
    subtitle: "From a fragmented WooCommerce setup to a purpose-built, intelligent pharmacy commerce platform.",
    features: ["WooCommerce → Custom Platform", "Manual Catalog → AI-Enriched", "Static Search → Semantic AI", "Disconnected Inventory → Live MSSQL Sync"],
    insight: "This isn't an upgrade. It's a complete rearchitecture — built for the specific demands of a multi-location Indian pharmacy chain.",
    panel: Module5Right
  },
  {
    id: 5,
    navLabel: "Storefront & Catalog",
    title: "Storefront & Catalog",
    subtitle: "A high-conversion, mobile-first commerce experience — built for pharmacy browsing behavior.",
    features: ["Mobile-First UX", "Core Web Vitals", "PDP with Recommendations", "Frictionless Cart"],
    insight: "Every interaction optimized for thumb-reach and sub-3-second load on 4G — because most Pillbox customers shop on mobile.",
    panel: Module6Right
  },
  {
    id: 6,
    navLabel: "Search & Discovery",
    title: "Search & Discovery",
    subtitle: "Intelligent semantic search — understands intent, tolerates typos, surfaces the right product every time.",
    features: ["Semantic / NLP Search", "Typo Tolerance", "Dynamic Facets", "Admin Boost Controls"],
    insight: "\"medicin for skin\" must return relevant skincare results. Search must understand pharmacy customers, not just index keywords.",
    panel: Module7Right
  },
  {
    id: 7,
    navLabel: "Loyalty & Accounts",
    title: "Loyalty & Accounts",
    subtitle: "A retention-driving loyalty ecosystem — earning, redeeming, and referring, all in one dashboard.",
    features: ["Pillbox Points Engine", "Referral Engine", "Multi-Address Profiles", "One-Click Re-order"],
    insight: "Points are discount units only — no monetary float, no RBI compliance headache. Clean and legal by design.",
    panel: Module8Right
  },
  {
    id: 8,
    navLabel: "Checkout & Payments",
    title: "Checkout & Payments",
    subtitle: "A secure, frictionless checkout — RazorPay-powered, loyalty-integrated, with auto-applied best discount.",
    features: ["RazorPay (UPI/Cards/NetBanking)", "Loyalty Point Redemption", "Auto-Apply Best Discount", "No Guest Checkout"],
    insight: "The system automatically finds and applies the best available discount — customers never need to hunt for coupon codes.",
    panel: Module9Right
  },
  {
    id: 9,
    navLabel: "Inventory Sync",
    title: "Inventory Sync",
    subtitle: "Real-time bi-directional synchronization — your MSSQL warehouse data, live on the website at all times.",
    features: ["MSSQL Live Bridge", "Multi-Warehouse Routing", "Per-Product Stock Buffer", "Prevent Overselling"],
    insight: "When stock changes in the warehouse app, the website updates within seconds. No manual intervention, no overselling risk.",
    panel: Module10Right
  },
  {
    id: 10,
    navLabel: "Orders & Automation",
    title: "Orders & Automation",
    subtitle: "End-to-end order lifecycle automation — from placement to delivery, with WhatsApp at every step.",
    features: ["WhatsApp Milestone Notifications", "PDF Invoice on Confirmation", "Abandoned Cart Recovery", "Shipping Label Generation"],
    insight: "One-way automated notifications only — no two-way chat complexity. Reliable, template-based, and WABA-compliant.",
    panel: Module11Right
  },
  {
    id: 11,
    navLabel: "AI Catalog Engine",
    title: "AI Catalog Engine",
    subtitle: "AI-accelerated migration of 2,000+ products — enriched, tagged, described, and SEO-optimized automatically.",
    features: ["Auto-Description Generation", "Background Removal", "Auto-Tagging (Category/Brand/Concern/Gender)", "Admin Review Workflow"],
    insight: "No AI content goes live without human sign-off. Every generated description and tag passes through a mandatory admin approval queue.",
    panel: Module12Right
  },
  {
    id: 12,
    navLabel: "Admin Ecosystem",
    title: "Admin Ecosystem",
    subtitle: "A centralized command center — manage every aspect of the platform without touching code.",
    features: ["Full Catalog CRUD", "Banner Scheduling", "Search Boost Controls", "Candidate Dashboard"],
    insight: "Any non-technical Pillbox staff member can manage products, promotions, jobs, and content — no developer required.",
    panel: Module13Right
  },
  {
    id: 13,
    navLabel: "SEO & Content",
    title: "SEO & Content",
    subtitle: "Best-in-class technical SEO baked into the architecture — not bolted on as an afterthought.",
    features: ["Core Web Vitals Optimized", "Product Schema / Structured Data", "Headless CMS (Payload)", "Auto XML Sitemaps"],
    insight: "SEO is an architectural decision here — rendering strategy, URL structure, and structured data are all decided at the foundation level.",
    panel: Module14Right
  },
  {
    id: 14,
    navLabel: "Jobs Portal",
    title: "Jobs Portal",
    subtitle: "An integrated careers platform — from job listing to candidate management, fully within the Pillbox ecosystem.",
    features: ["Public Careers Page", "Online Application + CV Upload", "Auto-Confirmation Email", "Admin Candidate Dashboard"],
    insight: "No third-party job board dependency — Pillbox owns the candidate pipeline end to end.",
    panel: Module15Right
  },
  {
    id: 15,
    navLabel: "Security & Infra",
    title: "Security & Infra",
    subtitle: "Production-grade infrastructure with zero-trust security, PCI compliance, and 99.9% uptime architecture.",
    features: ["OWASP Top 10 Hardened", "PCI-DSS via RazorPay", "JWT + Refresh Token Auth", "99.9% Uptime SLA"],
    insight: "Security isn't a final phase — it's enforced at every layer: auth, data, payments, and infrastructure, from day one.",
    panel: Module16Right
  },
  {
    id: 16,
    navLabel: "Roadmap & Costs",
    title: "Roadmap & Costs",
    subtitle: "A transparent 6-month delivery roadmap with milestone-locked payments — you pay for working software, not promises.",
    features: ["6 Month Rollout", "Milestone-Based Payments", "Bi-Weekly Demos from Week 8", "UAT Sign-offs"],
    insight: "Every payment milestone unlocks only after a working demo is reviewed and approved by Pillbox.",
    panel: Module17Right
  },
  {
    id: 17,
    navLabel: "Thank You",
    title: "Let's Build Together.",
    subtitle: "This proposal represents our complete vision for Pillbox's digital commerce platform.",
    features: ["End-to-End Delivery", "3 Months Post-Launch Support", "Transparent Milestone Billing", "Full Source Code Handover"],
    insight: "Every line of code we write is a commitment to Pillbox's long-term success.",
    panel: Module18Right
  }
];

export default function ProposalApp() {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const activeModule = MODULES[activeModuleIndex];

  const handleNext = useCallback(() => {
    setActiveModuleIndex((prev) => Math.min(prev + 1, MODULES.length - 1));
  }, []);

  const handlePrev = useCallback(() => {
    setActiveModuleIndex((prev) => Math.max(prev - 1, 0));
  }, []);

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
      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-[270px] bg-[#0F0F0F] flex flex-col h-full border-r border-white/5 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button className="absolute top-6 right-4 text-white/50 hover:text-white md:hidden" onClick={() => setIsSidebarOpen(false)}>
          <X className="w-6 h-6" />
        </button>
        <div className="p-8 pb-6 w-full">
          <svg width="109" height="55" viewBox="0 0 87 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1 items-center">
            <g clipPath="url(#clip0_1525_1332)">
            <path d="M4.55262 19.1696H7.31645C8.55205 19.1696 9.48402 18.8903 10.113 18.3314C10.7416 17.7726 11.056 16.9015 11.056 15.718C11.056 15.302 11.0017 14.8854 10.8934 14.4689C10.7846 14.0529 10.5952 13.6799 10.3244 13.3513C10.053 13.0225 9.67404 12.7545 9.18629 12.5458C8.69846 12.338 8.07502 12.2336 7.31645 12.2336H4.55262V19.1696ZM4.55262 23.3444V29.3601C4.55262 29.9303 4.33009 30.4342 3.88587 30.8721C3.44144 31.3103 2.90475 31.5296 2.27643 31.5296C1.66914 31.5296 1.13812 31.316 0.682985 30.8886C0.227752 30.4611 0 29.9516 0 29.3601V10.4256C0 10.0968 0.0702584 9.79026 0.211468 9.50528C0.352151 9.22066 0.536655 8.97406 0.764143 8.76557C0.991888 8.55756 1.25708 8.38758 1.56086 8.25604C1.86421 8.12456 2.1895 8.05878 2.53647 8.05878H7.31645C8.83365 8.05878 10.1237 8.27247 11.186 8.69983C12.248 9.12715 13.1046 9.69722 13.755 10.4092C14.4052 11.1215 14.8768 11.9377 15.1694 12.8582C15.4621 13.7785 15.6085 14.7432 15.6085 15.7509C15.6085 16.9784 15.4132 18.0634 15.0232 19.0053C14.6329 19.9478 14.0744 20.7368 13.3484 21.3721C12.6218 22.0079 11.7496 22.4954 10.7308 22.8348C9.71158 23.1749 8.57356 23.3444 7.31645 23.3444H4.55262Z" fill="#FFFFFF"/>
            <path d="M23.1522 29.4261C23.1522 29.9962 22.9353 30.478 22.5018 30.8725C22.0678 31.2669 21.5371 31.4643 20.9085 31.4643C20.2796 31.4643 19.7485 31.2669 19.3153 30.8725C18.8813 30.478 18.6648 29.9962 18.6648 29.4261V16.4743C18.6648 15.9268 18.8813 15.4553 19.3153 15.0608C19.7485 14.6663 20.2796 14.469 20.9085 14.469C21.5371 14.469 22.0678 14.6663 22.5018 15.0608C22.9353 15.4553 23.1522 15.9268 23.1522 16.4743V29.4261ZM23.4448 10.0641C23.4448 10.7 23.201 11.2425 22.7131 11.6914C22.2255 12.1408 21.6239 12.3652 20.9085 12.3652C20.1931 12.3652 19.5916 12.1408 19.1038 11.6914C18.6162 11.2425 18.3721 10.7 18.3721 10.0641C18.3721 9.42877 18.6162 8.88646 19.1038 8.43698C19.5916 7.98805 20.1931 7.76306 20.9085 7.76306C21.6239 7.76306 22.2255 7.98805 22.7131 8.43698C23.201 8.88646 23.4448 9.42877 23.4448 10.0641Z" fill="#FFFFFF"/>
            <path d="M30.7609 31.4642C30.4358 31.4642 30.0888 31.4257 29.7205 31.349C29.3516 31.2719 29.0157 31.0974 28.7123 30.8232C28.4085 30.5494 28.1542 30.155 27.9481 29.6396C27.742 29.1251 27.6394 28.4399 27.6394 27.5852V9.53804C27.6394 8.99056 27.8557 8.51399 28.2896 8.10821C28.723 7.70285 29.254 7.5 29.883 7.5C30.5115 7.5 31.0425 7.69726 31.4763 8.09172C31.9097 8.4862 32.1266 8.96845 32.1266 9.53804V27.1906C32.1266 27.5415 32.148 27.7937 32.1917 27.9468C32.2349 28.1002 32.3755 28.2975 32.6144 28.5384C32.7876 28.7142 32.9285 28.8728 33.0372 29.0151C33.1455 29.1579 33.1998 29.3824 33.1998 29.689C33.1998 30.2807 32.9828 30.7244 32.5494 31.0203C32.1155 31.3163 31.5195 31.4642 30.7609 31.4642Z" fill="#FFFFFF"/>
            <path d="M39.4753 31.4642C39.15 31.4642 38.803 31.4257 38.4348 31.349C38.0658 31.2719 37.7299 31.0974 37.4267 30.8232C37.1228 30.5494 36.8683 30.155 36.6625 29.6396C36.4563 29.1251 36.3535 28.4399 36.3535 27.5852V9.53804C36.3535 8.99056 36.57 8.51399 37.0039 8.10821C37.4374 7.70285 37.9682 7.5 38.5974 7.5C39.2257 7.5 39.7567 7.69726 40.1905 8.09172C40.624 8.4862 40.8409 8.96845 40.8409 9.53804V27.1906C40.8409 27.5415 40.8623 27.7937 40.906 27.9468C40.9492 28.1002 41.0899 28.2975 41.3287 28.5384C41.5018 28.7142 41.6427 28.8728 41.7513 29.0151C41.8596 29.1579 41.914 29.3824 41.914 29.689C41.914 30.2807 41.697 30.7244 41.2636 31.0203C40.8299 31.3163 40.2338 31.4642 39.4753 31.4642Z" fill="#FFFFFF"/>
            <path d="M49.5736 26.0073C49.5736 26.6211 49.7956 27.1034 50.2402 27.4538C50.6843 27.8044 51.2859 27.9795 52.0448 27.9795C52.8686 27.9795 53.4756 27.7824 53.8658 27.3879C54.2561 26.9933 54.4512 26.446 54.4512 25.7442V19.7286C54.4512 19.1369 54.2775 18.6766 53.931 18.348C53.5838 18.0192 53.0092 17.8549 52.2075 17.8549C51.1232 17.8549 50.2455 18.162 49.5736 18.7753V26.0073ZM45.0862 9.57103C45.0862 9.04495 45.2815 8.57974 45.6716 8.17396C46.0619 7.76869 46.6146 7.5658 47.3299 7.5658C48.0453 7.5658 48.5981 7.76869 48.9883 8.17396C49.3784 8.57974 49.5736 9.04495 49.5736 9.57103V15.3565C50.094 15.05 50.6247 14.8198 51.1668 14.6663C51.7086 14.5132 52.3587 14.4362 53.1179 14.4362C54.1584 14.4362 55.0415 14.5733 55.7681 14.8471C56.4942 15.1214 57.0957 15.5045 57.5729 15.9976C58.0494 16.4906 58.3964 17.0716 58.6134 17.7398C58.8299 18.4086 58.9385 19.1262 58.9385 19.8929V25.4155C58.9385 26.2702 58.7923 27.0705 58.4997 27.8152C58.2069 28.5604 57.773 29.2071 57.1989 29.7547C56.6242 30.3028 55.9032 30.7358 55.0365 31.0532C54.1692 31.3707 53.161 31.5299 52.0124 31.5299C50.9068 31.5299 49.9256 31.3869 49.0696 31.1025C48.213 30.8179 47.4925 30.4287 46.9071 29.9356C46.3219 29.4425 45.8718 28.8563 45.5579 28.177C45.2434 27.4978 45.0862 26.7746 45.0862 26.0073V9.57103Z" fill="#FFFFFF"/>
            <path d="M86.6748 28.4398C86.8047 28.6155 86.8912 28.785 86.935 28.9493C86.978 29.1137 87 29.2837 87 29.4589C87 30.0291 86.7937 30.5164 86.3821 30.9216C85.9701 31.3269 85.4172 31.5299 84.7238 31.5299C84.2035 31.5299 83.8078 31.4363 83.5369 31.2504C83.2656 31.0644 82.9786 30.7629 82.6754 30.3464C82.3932 29.9304 82.1386 29.5687 81.9111 29.2616C81.6834 28.9551 81.4665 28.659 81.2607 28.3741C81.0545 28.0895 80.8325 27.788 80.5942 27.4702C80.3554 27.1526 80.0951 26.7855 79.8137 26.3688C79.3147 27.0704 78.8109 27.7659 78.3018 28.4563C77.7921 29.1466 77.2881 29.8425 76.7898 30.5438C76.2908 31.2011 75.673 31.5299 74.9363 31.5299C74.3072 31.5299 73.7707 31.3433 73.3265 30.9711C72.882 30.5986 72.6599 30.1056 72.6599 29.4918C72.6599 29.1193 72.7683 28.7907 72.985 28.5056C73.7217 27.4978 74.4266 26.5554 75.0987 25.6784C75.7704 24.8023 76.4751 23.8598 77.2125 22.8514C76.562 21.9751 75.9118 21.1149 75.2614 20.2711C74.6112 19.4276 73.9605 18.5451 73.3103 17.6248C73.1802 17.4717 73.0827 17.296 73.0178 17.0989C72.9527 16.9016 72.9201 16.7264 72.9201 16.5729C72.9201 16.0253 73.1365 15.5486 73.5705 15.1428C74.004 14.7377 74.5348 14.5347 75.1638 14.5347C75.489 14.5347 75.7654 14.5789 75.9931 14.6663C76.2205 14.7541 76.4208 14.8692 76.5944 15.0113C76.7677 15.1542 76.9197 15.3072 77.0499 15.4716C77.1797 15.6359 77.2987 15.7952 77.4076 15.9483L79.8788 19.3342L82.48 15.6853C82.7183 15.335 82.9841 15.0556 83.2767 14.847C83.5695 14.639 83.976 14.5347 84.4961 14.5347C84.7563 14.5347 85.0165 14.5841 85.2766 14.6827C85.5367 14.7812 85.775 14.9184 85.9921 15.0936C86.2085 15.2693 86.3821 15.4773 86.5123 15.7181C86.6422 15.9595 86.7074 16.2226 86.7074 16.507C86.7074 16.6607 86.6854 16.8308 86.6422 17.0165C86.5986 17.2031 86.5122 17.384 86.3821 17.559L82.48 22.8514L86.6748 28.4398Z" fill="#FFFFFF"/>
            <path d="M66.5995 16.9328C63.2695 16.9328 60.5697 19.6601 60.5663 23.0258H72.6329C72.6292 19.6601 69.9296 16.9328 66.5995 16.9328Z" fill="#FFFFFF"/>
            <path d="M66.5996 29.1317C69.9319 29.1317 72.633 26.4009 72.633 23.0323C72.633 23.03 72.633 23.0278 72.633 23.0258H60.5665C60.5665 23.0279 60.5665 23.0301 60.5665 23.0323C60.5665 26.4009 63.2674 29.1317 66.5996 29.1317Z" fill="#23C3C3"/>
            <path d="M31.1888 36.8402C31.3058 36.7304 31.3646 36.5748 31.3646 36.3729C31.3646 36.1532 31.3072 35.9857 31.1922 35.8695C31.0774 35.7533 30.9156 35.6949 30.7073 35.6949H29.9186V37.0048H30.7073C30.9114 37.0048 31.0717 36.9501 31.1888 36.8402ZM31.8234 35.3262C32.0861 35.5808 32.2177 35.9298 32.2177 36.3729C32.2177 36.7939 32.0861 37.131 31.8234 37.3829C31.5608 37.6355 31.2018 37.7613 30.7463 37.7613H29.9186V39.4857H29.0665V34.9445H30.7463C31.2018 34.9445 31.5608 35.0716 31.8234 35.3262Z" fill="#9CA3AF"/>
            <path d="M32.9857 34.9445H33.7933V36.3664C33.8932 36.2522 34.0101 36.1667 34.1448 36.1095C34.2792 36.0526 34.4222 36.0239 34.5746 36.0239C34.9217 36.0239 35.1908 36.1327 35.3817 36.3496C35.5728 36.5671 35.6682 36.8688 35.6682 37.2546V39.4857H34.8606V37.3531C34.8606 37.1561 34.8131 37.006 34.7177 36.9027C34.6222 36.7993 34.494 36.7481 34.3333 36.7481C34.1773 36.7481 34.048 36.8008 33.9461 36.9058C33.844 37.0115 33.7933 37.1606 33.7933 37.3531V39.4857H32.9857V34.9445Z" fill="#9CA3AF"/>
            <path d="M38.2503 38.7193C38.3433 38.6207 38.3902 38.4706 38.3902 38.2687V38.0247H37.8039C37.4653 38.0247 37.2961 38.163 37.2961 38.4398C37.2961 38.7248 37.4612 38.8673 37.791 38.8673C38.0035 38.8673 38.1566 38.8184 38.2503 38.7193ZM38.8458 36.3299C39.0756 36.5339 39.1909 36.8361 39.1909 37.235V39.4859H38.4095V39.1899C38.2965 39.3083 38.1806 39.3937 38.0612 39.4466C37.9417 39.4993 37.791 39.5256 37.6089 39.5256C37.2616 39.5256 36.9922 39.4316 36.8014 39.2425C36.6103 39.0541 36.515 38.793 36.515 38.4592C36.515 38.1523 36.6168 37.9096 36.821 37.7318C37.0249 37.5541 37.3095 37.4653 37.6739 37.4653H38.3902V37.1956C38.3902 36.8317 38.2098 36.6491 37.8496 36.6491C37.6977 36.6491 37.5772 36.6881 37.4884 36.7644C37.3992 36.8414 37.3549 36.9431 37.3549 37.0707V37.09H36.6062V37.0642C36.6062 36.744 36.7191 36.4904 36.9447 36.304C37.1704 36.1172 37.4742 36.024 37.856 36.024C38.2857 36.024 38.6155 36.126 38.8458 36.3299Z" fill="#9CA3AF"/>
            <path d="M40.154 36.0632H40.9417V36.4186C41.0242 36.2744 41.1348 36.1667 41.2738 36.0961C41.4127 36.0262 41.5687 35.9912 41.7422 35.9912C41.8422 35.9912 41.9335 36.0002 42.0158 36.0176V36.781C41.864 36.7325 41.7295 36.7083 41.6124 36.7083C41.417 36.7083 41.2594 36.7713 41.1403 36.8961C41.0208 37.021 40.9613 37.1998 40.9613 37.4324V39.4858H40.154V36.0632Z" fill="#9CA3AF"/>
            <path d="M42.7452 36.0634H43.5329V36.373C43.6327 36.2632 43.7531 36.1777 43.8943 36.1163C44.0355 36.0549 44.1819 36.0242 44.3337 36.0242C44.7113 36.0242 44.9997 36.1669 45.1994 36.4522C45.46 36.1669 45.7791 36.0242 46.1567 36.0242C46.5171 36.0242 46.798 36.1339 46.9998 36.3532C47.2011 36.5727 47.3024 36.8732 47.3024 37.2549V39.4859H46.4953V37.3533C46.4953 37.1563 46.4463 37.0061 46.3486 36.9029C46.2511 36.7995 46.1241 36.7482 45.9679 36.7482C45.803 36.7482 45.6715 36.8022 45.5739 36.9093C45.4763 37.0171 45.4275 37.1586 45.4275 37.334V39.4859H44.6201V37.3533C44.6201 37.1563 44.5719 37.0061 44.4737 36.9029C44.3762 36.7995 44.249 36.7482 44.0927 36.7482C43.9323 36.7482 43.8019 36.801 43.702 36.906C43.6022 37.0117 43.5523 37.1608 43.5523 37.3533V39.4859H42.7452V36.0634Z" fill="#9CA3AF"/>
            <path d="M49.8843 38.7193C49.9779 38.6207 50.0244 38.4706 50.0244 38.2687V38.0247H49.4385C49.1 38.0247 48.9305 38.163 48.9305 38.4398C48.9305 38.7248 49.0957 38.8673 49.4255 38.8673C49.638 38.8673 49.791 38.8184 49.8843 38.7193ZM50.4802 36.3299C50.7101 36.5339 50.8252 36.8361 50.8252 37.235V39.4859H50.044V39.1899C49.931 39.3083 49.8151 39.3937 49.6957 39.4466C49.5764 39.4993 49.4254 39.5256 49.2433 39.5256C48.8959 39.5256 48.6266 39.4316 48.4359 39.2425C48.2451 39.0541 48.1494 38.793 48.1494 38.4592C48.1494 38.1523 48.2515 37.9096 48.4554 37.7318C48.6594 37.5541 48.9439 37.4653 49.3083 37.4653H50.0244V37.1956C50.0244 36.8317 49.8443 36.6491 49.484 36.6491C49.3321 36.6491 49.2116 36.6881 49.1227 36.7644C49.0337 36.8414 48.9892 36.9431 48.9892 37.0707V37.09H48.2406V37.0642C48.2406 36.744 48.3534 36.4904 48.579 36.304C48.8047 36.1172 49.1086 36.024 49.4907 36.024C49.9204 36.024 50.2501 36.126 50.4802 36.3299Z" fill="#9CA3AF"/>
            <path d="M52.0977 39.1768C51.8522 38.9442 51.7297 38.5824 51.7297 38.0908V37.4524C51.7297 36.9651 51.8522 36.6056 52.0977 36.373C52.3428 36.1404 52.6783 36.024 53.1036 36.024C53.5201 36.024 53.8457 36.1318 54.0802 36.3465C54.3147 36.5614 54.432 36.8601 54.432 37.2418V37.3075H53.6635V37.2682C53.6635 37.1057 53.6144 36.9786 53.5169 36.886C53.4194 36.794 53.2859 36.7482 53.1164 36.7482C52.7261 36.7482 52.5305 36.9873 52.5305 37.4653V38.0839C52.5305 38.3429 52.5817 38.5276 52.6836 38.6369C52.7855 38.7467 52.93 38.8016 53.1164 38.8016C53.2859 38.8016 53.4194 38.7579 53.5169 38.6701C53.6144 38.5824 53.6635 38.459 53.6635 38.3014V38.2621H54.432V38.3079C54.432 38.6853 54.3147 38.9825 54.0802 39.2001C53.8457 39.4168 53.5201 39.5256 53.1036 39.5256C52.6783 39.5256 52.3428 39.4094 52.0977 39.1768Z" fill="#9CA3AF"/>
            <path d="M57.9674 36.0635L56.6849 39.7825C56.598 40.0324 56.4734 40.2146 56.3105 40.3288C56.1478 40.4428 55.932 40.4999 55.6627 40.4999H55.3828V39.7692H55.6367C55.767 39.7692 55.8636 39.7461 55.9264 39.7003C55.9894 39.654 56.04 39.5673 56.0795 39.4401L56.0923 39.3939L54.9465 36.0635H55.7995L56.4635 38.216L57.1407 36.0635H57.9674Z" fill="#9CA3AF"/>
            </g>
            <defs>
            <clipPath id="clip0_1525_1332">
            <rect width="87" height="33" fill="white" transform="translate(0 7.5)"/>
            </clipPath>
            </defs>
          </svg>
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

      {/* Main Content Area */}
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
              <button onClick={handlePrev} disabled={activeModuleIndex === 0} className="p-2.5 rounded-full border border-[#E5E7EB] text-[#1A1A1A] disabled:opacity-30 hover:bg-[#F9FAFB] transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            <button 
              onClick={handleNext}
              disabled={activeModuleIndex === MODULES.length - 1}
              className="bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] text-white px-6 py-3 rounded-xl text-[13px] font-bold shadow-md hover:opacity-90 transition-all flex items-center disabled:bg-none disabled:bg-[#D1D5DB] disabled:text-[#9CA3AF] disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-100"
            >
              Next <ChevronRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>
        </div>

        {/* Split Content Area */}
        <div className="flex-1 flex overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeModule.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
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
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] opacity-20 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
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
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
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
