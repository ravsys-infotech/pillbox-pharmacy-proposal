'use client';

import React, { useState } from 'react';
import { Check, Search, ShoppingBag, Database, Zap, Copy, CheckCircle2, Clock, Star, Edit2, FileText, ArrowRight, Upload, Shield, Server, Lock, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Module1Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-8 w-full max-w-md mx-auto">
    <h3 className="text-[11px] uppercase tracking-[0.12em] text-[#22C55E] font-semibold mb-6">Platform At A Glance</h3>
    <div className="grid grid-cols-2 gap-4 mb-6">
      {[
        { label: "2,000+", sub: "SKUs migrated", icon: <ShoppingBag className="w-6 h-6 text-[#3B82F6]" /> },
        { label: "Multi-warehouse", sub: "MSSQL sync", icon: <Database className="w-6 h-6 text-[#8B5CF6]" /> },
        { label: "AI catalog", sub: "enrichment", icon: <Zap className="w-6 h-6 text-[#EC4899]" /> },
        { label: "WhatsApp", sub: "order notifications", icon: <CheckCircle2 className="w-6 h-6 text-[#22C55E]" /> },
      ].map((stat, i) => (
        <div key={i} className="bg-[#F9FAFB] p-5 rounded-xl border border-[#E5E7EB] flex flex-col items-center text-center hover:shadow-md transition-shadow">
          <div className="bg-white p-3 rounded-full shadow-sm mb-4">{stat.icon}</div>
          <div className="font-bold text-[#1A1A1A] text-[15px] mb-1">{stat.label}</div>
          <div className="text-[11px] text-[#6B7280]">{stat.sub}</div>
        </div>
      ))}
    </div>
    <div className="pt-5 border-t border-[#E5E7EB]">
      <h4 className="text-[10px] uppercase tracking-wider text-[#6B7280] font-bold mb-3 text-center">Tech Stack Snapshot</h4>
      <div className="flex flex-wrap justify-center gap-2">
        {["Next.js", "Node.js", "PostgreSQL", "Typesense", "RazorPay", "Payload CMS"].map(tech => (
          <span key={tech} className="bg-[#F3F4F6] text-[#1A1A1A] text-[11px] font-semibold px-3 py-1.5 rounded-full border border-[#E5E7EB]">{tech}</span>
        ))}
      </div>
    </div>
  </div>
);

export const Module2Right = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-lg mx-auto overflow-hidden flex flex-col h-[420px]">
      <div className="p-6 border-b border-[#E5E7EB]">
        <div className="flex space-x-2 bg-[#F9FAFB] p-1.5 rounded-xl border border-[#E5E7EB]">
          <button onClick={() => setActiveTab(1)} className={`flex-1 py-2.5 text-[13px] font-semibold rounded-lg transition-all ${activeTab === 1 ? 'bg-white shadow-sm text-[#1A1A1A] border border-[#E5E7EB]' : 'text-[#6B7280] hover:text-[#1A1A1A]'}`}>Phase 1</button>
          <button onClick={() => setActiveTab(2)} className={`flex-1 py-2.5 text-[13px] font-semibold rounded-lg transition-all ${activeTab === 2 ? 'bg-white shadow-sm text-[#1A1A1A] border border-[#E5E7EB]' : 'text-[#6B7280] hover:text-[#1A1A1A]'}`}>Phase 2</button>
        </div>
      </div>
      <div className="p-8 bg-[#F9FAFB] flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          {activeTab === 1 ? (
            <motion.div key="tab1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
              <h4 className="font-bold text-[#1A1A1A] mb-5 text-[14px]">CORE COMMERCE PLATFORM</h4>
              <ul className="space-y-4">
                {["Mobile-First Storefront", "Secure Checkout & RazorPay Integration", "MSSQL Bi-Directional Inventory Sync", "Order Management & Fulfillment Admin", "User Authentication & Account Management"].map((item, i) => (
                  <li key={i} className="flex items-start text-[14px] text-[#6B7280] leading-relaxed">
                    <span className="text-[#8B5CF6] mr-3 mt-0.5 text-lg leading-none">•</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <motion.div key="tab2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
              <h4 className="font-bold text-[#1A1A1A] mb-5 text-[14px]">GROWTH & INTELLIGENCE LAYER</h4>
              <ul className="space-y-4">
                {["AI Catalog Engine & Semantic Search", "Loyalty Points & Referral System", "WhatsApp Notification Automation", "SEO & Headless CMS", "Jobs Portal & Candidate Dashboard"].map((item, i) => (
                  <li key={i} className="flex items-start text-[14px] text-[#6B7280] leading-relaxed">
                    <span className="text-[#EC4899] mr-3 mt-0.5 text-lg leading-none">•</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const Module3Right = () => {
  const modules = [
    { name: "STOREFRONT", sub: "Mobile-First PWA" }, { name: "PAYMENT", sub: "Razorpay Secure" }, { name: "INVENTORY", sub: "MSSQL Bridge" }, { name: "DISCOVERY", sub: "Semantic AI" },
    { name: "LOYALTY", sub: "Retention Loop" }, { name: "AUTOMATION", sub: "Lifecycle Flows" }, { name: "CMS", sub: "Headless Content" }, { name: "ANALYTICS", sub: "BI Dashboard" },
    { name: "SECURITY", sub: "PCI Hardening" }, { name: "CATALOG", sub: "AI Enrichment" }, { name: "ORDERS", sub: "Fulfillment" }, { name: "TALENT", sub: "Jobs Portal" },
    { name: "SEO", sub: "Core Vitals" }, { name: "NOTIFICATIONS", sub: "WhatsApp API" }, { name: "ADMIN", sub: "Global Control" }, { name: "ARCHIVING", sub: "Order History" }
  ];
  return (
    <div className="bg-[#0F0F1A] rounded-[16px] w-full max-w-2xl mx-auto h-full overflow-hidden p-[20px] flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[8px] md:gap-[10px] flex-1">
        {modules.map((m, i) => (
          <div key={i} className="bg-[#1E1B3A] border border-[#2D2B4E] rounded-[10px] px-[10px] py-[12px] flex flex-col items-center justify-center text-center min-h-[80px] transition-all duration-200 hover:border-[#7C3AED] hover:shadow-[0_0_0_2px_rgba(124,58,237,0.3)] cursor-pointer">
            <div className="text-[11px] font-bold text-white tracking-[0.05em]">{m.name}</div>
            <div className="text-[10px] text-[#A78BFA] mt-1 leading-[1.3]">{m.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Module4Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-xl mx-auto overflow-hidden h-[500px] flex flex-col">
    <div className="p-4 border-b border-[#E5E7EB] bg-[#F9FAFB] flex text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">
      <div className="w-1/3 pl-2">Module</div>
      <div className="w-1/2">Key Features</div>
      <div className="w-1/6 text-center">Req Count</div>
    </div>
    <div className="flex-1 overflow-y-auto hide-scrollbar p-2">
      {[
        ["Storefront", "PDP, Cart, Homepage, Banners", "12"],
        ["Search", "Semantic search, Facets, Boost", "6"],
        ["Loyalty", "Points, Referrals, Dashboard", "5"],
        ["Checkout", "RazorPay, Auto-discount, Address", "5"],
        ["Inventory", "MSSQL sync, Buffer, Routing", "5"],
        ["Orders", "Tracking, WhatsApp, Shipping", "9"],
        ["Catalog", "AI migration, CRUD, Review flow", "8"],
        ["SEO & CMS", "Blog, Schema, Sitemaps, OG", "7"],
        ["Jobs Portal", "Listings, Applications, Admin", "5"],
        ["Admin", "Cross-module control panel", "4"]
      ].map((row, i) => (
        <div key={i} className="flex items-center p-3 border-b border-[#E5E7EB] last:border-0 hover:bg-[#F9FAFB] transition-colors rounded-lg">
          <div className="w-1/3 font-bold text-[#1A1A1A] text-[13px] pl-2">{row[0]}</div>
          <div className="w-1/2 text-[#6B7280] text-[12px]">{row[1]}</div>
          <div className="w-1/6 text-center">
            <span className="bg-[#F3F4F6] text-[#8B5CF6] font-bold text-[11px] px-2.5 py-1 rounded-full">{row[2]}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Module5Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-2xl mx-auto overflow-hidden flex flex-col mt-4">
    <div className="flex text-[11px] font-bold uppercase tracking-wider border-b border-[#E5E7EB]">
      <div className="w-1/2 p-4 bg-[#1A1A1A] text-white">BEFORE (WooCommerce)</div>
      <div className="w-1/2 p-4 bg-[#22C55E] text-white">AFTER (New Platform)</div>
    </div>
    <div className="flex-1">
      {[
        ["WordPress + WooCommerce plugins", "Purpose-built Next.js + Node.js"],
        ["Manual product data entry", "AI-assisted catalog migration"],
        ["Basic keyword search", "Semantic search with typo tolerance"],
        ["No inventory sync — manual stock updates", "Live MSSQL bi-directional sync"],
        ["No loyalty system", "Pillbox Points + Referral engine"],
        ["Email-only notifications", "WhatsApp automation at every order milestone"],
        ["Generic checkout", "Pharmacy-specific checkout with loyalty redemption"],
        ["No SEO architecture", "Core Web Vitals + structured data from day one"],
        ["Plugin-dependent, brittle", "Modular, independently deployable"],
        ["Basic jobs portal", "Integrated careers & candidate management"]
      ].map((row, i) => (
        <div key={i} className="flex border-b border-[#E5E7EB] last:border-0 text-[12px] leading-relaxed">
          <div className="w-1/2 p-4 bg-[#FFF7ED] text-[#92400E] border-r border-[#E5E7EB]">{row[0]}</div>
          <div className="w-1/2 p-4 bg-[#F0FDF4] text-[#166534] font-medium">{row[1]}</div>
        </div>
      ))}
    </div>
  </div>
);

export const Module6Right = () => (
  <div className="w-[320px] mx-auto bg-white rounded-[32px] shadow-xl border-8 border-[#1A1A1A] overflow-hidden h-[580px] flex flex-col relative">
    <div className="bg-white pt-6 pb-3 px-4 border-b border-[#E5E7EB] sticky top-0 z-10">
      <div className="flex justify-between items-center mb-4">
        <div className="font-bold text-lg text-[#1A1A1A]">
          <svg width="87" height="44" viewBox="0 0 87 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
            <g clipPath="url(#clip0_1525_1332)">
            <path d="M4.55262 19.1696H7.31645C8.55205 19.1696 9.48402 18.8903 10.113 18.3314C10.7416 17.7726 11.056 16.9015 11.056 15.718C11.056 15.302 11.0017 14.8854 10.8934 14.4689C10.7846 14.0529 10.5952 13.6799 10.3244 13.3513C10.053 13.0225 9.67404 12.7545 9.18629 12.5458C8.69846 12.338 8.07502 12.2336 7.31645 12.2336H4.55262V19.1696ZM4.55262 23.3444V29.3601C4.55262 29.9303 4.33009 30.4342 3.88587 30.8721C3.44144 31.3103 2.90475 31.5296 2.27643 31.5296C1.66914 31.5296 1.13812 31.316 0.682985 30.8886C0.227752 30.4611 0 29.9516 0 29.3601V10.4256C0 10.0968 0.0702584 9.79026 0.211468 9.50528C0.352151 9.22066 0.536655 8.97406 0.764143 8.76557C0.991888 8.55756 1.25708 8.38758 1.56086 8.25604C1.86421 8.12456 2.1895 8.05878 2.53647 8.05878H7.31645C8.83365 8.05878 10.1237 8.27247 11.186 8.69983C12.248 9.12715 13.1046 9.69722 13.755 10.4092C14.4052 11.1215 14.8768 11.9377 15.1694 12.8582C15.4621 13.7785 15.6085 14.7432 15.6085 15.7509C15.6085 16.9784 15.4132 18.0634 15.0232 19.0053C14.6329 19.9478 14.0744 20.7368 13.3484 21.3721C12.6218 22.0079 11.7496 22.4954 10.7308 22.8348C9.71158 23.1749 8.57356 23.3444 7.31645 23.3444H4.55262Z" fill="#002B55"/>
            <path d="M23.1522 29.4261C23.1522 29.9962 22.9353 30.478 22.5018 30.8725C22.0678 31.2669 21.5371 31.4643 20.9085 31.4643C20.2796 31.4643 19.7485 31.2669 19.3153 30.8725C18.8813 30.478 18.6648 29.9962 18.6648 29.4261V16.4743C18.6648 15.9268 18.8813 15.4553 19.3153 15.0608C19.7485 14.6663 20.2796 14.469 20.9085 14.469C21.5371 14.469 22.0678 14.6663 22.5018 15.0608C22.9353 15.4553 23.1522 15.9268 23.1522 16.4743V29.4261ZM23.4448 10.0641C23.4448 10.7 23.201 11.2425 22.7131 11.6914C22.2255 12.1408 21.6239 12.3652 20.9085 12.3652C20.1931 12.3652 19.5916 12.1408 19.1038 11.6914C18.6162 11.2425 18.3721 10.7 18.3721 10.0641C18.3721 9.42877 18.6162 8.88646 19.1038 8.43698C19.5916 7.98805 20.1931 7.76306 20.9085 7.76306C21.6239 7.76306 22.2255 7.98805 22.7131 8.43698C23.201 8.88646 23.4448 9.42877 23.4448 10.0641Z" fill="#002B55"/>
            <path d="M30.7609 31.4642C30.4358 31.4642 30.0888 31.4257 29.7205 31.349C29.3516 31.2719 29.0157 31.0974 28.7123 30.8232C28.4085 30.5494 28.1542 30.155 27.9481 29.6396C27.742 29.1251 27.6394 28.4399 27.6394 27.5852V9.53804C27.6394 8.99056 27.8557 8.51399 28.2896 8.10821C28.723 7.70285 29.254 7.5 29.883 7.5C30.5115 7.5 31.0425 7.69726 31.4763 8.09172C31.9097 8.4862 32.1266 8.96845 32.1266 9.53804V27.1906C32.1266 27.5415 32.148 27.7937 32.1917 27.9468C32.2349 28.1002 32.3755 28.2975 32.6144 28.5384C32.7876 28.7142 32.9285 28.8728 33.0372 29.0151C33.1455 29.1579 33.1998 29.3824 33.1998 29.689C33.1998 30.2807 32.9828 30.7244 32.5494 31.0203C32.1155 31.3163 31.5195 31.4642 30.7609 31.4642Z" fill="#002B55"/>
            <path d="M39.4753 31.4642C39.15 31.4642 38.803 31.4257 38.4348 31.349C38.0658 31.2719 37.7299 31.0974 37.4267 30.8232C37.1228 30.5494 36.8683 30.155 36.6625 29.6396C36.4563 29.1251 36.3535 28.4399 36.3535 27.5852V9.53804C36.3535 8.99056 36.57 8.51399 37.0039 8.10821C37.4374 7.70285 37.9682 7.5 38.5974 7.5C39.2257 7.5 39.7567 7.69726 40.1905 8.09172C40.624 8.4862 40.8409 8.96845 40.8409 9.53804V27.1906C40.8409 27.5415 40.8623 27.7937 40.906 27.9468C40.9492 28.1002 41.0899 28.2975 41.3287 28.5384C41.5018 28.7142 41.6427 28.8728 41.7513 29.0151C41.8596 29.1579 41.914 29.3824 41.914 29.689C41.914 30.2807 41.697 30.7244 41.2636 31.0203C40.8299 31.3163 40.2338 31.4642 39.4753 31.4642Z" fill="#002B55"/>
            <path d="M49.5736 26.0073C49.5736 26.6211 49.7956 27.1034 50.2402 27.4538C50.6843 27.8044 51.2859 27.9795 52.0448 27.9795C52.8686 27.9795 53.4756 27.7824 53.8658 27.3879C54.2561 26.9933 54.4512 26.446 54.4512 25.7442V19.7286C54.4512 19.1369 54.2775 18.6766 53.931 18.348C53.5838 18.0192 53.0092 17.8549 52.2075 17.8549C51.1232 17.8549 50.2455 18.162 49.5736 18.7753V26.0073ZM45.0862 9.57103C45.0862 9.04495 45.2815 8.57974 45.6716 8.17396C46.0619 7.76869 46.6146 7.5658 47.3299 7.5658C48.0453 7.5658 48.5981 7.76869 48.9883 8.17396C49.3784 8.57974 49.5736 9.04495 49.5736 9.57103V15.3565C50.094 15.05 50.6247 14.8198 51.1668 14.6663C51.7086 14.5132 52.3587 14.4362 53.1179 14.4362C54.1584 14.4362 55.0415 14.5733 55.7681 14.8471C56.4942 15.1214 57.0957 15.5045 57.5729 15.9976C58.0494 16.4906 58.3964 17.0716 58.6134 17.7398C58.8299 18.4086 58.9385 19.1262 58.9385 19.8929V25.4155C58.9385 26.2702 58.7923 27.0705 58.4997 27.8152C58.2069 28.5604 57.773 29.2071 57.1989 29.7547C56.6242 30.3028 55.9032 30.7358 55.0365 31.0532C54.1692 31.3707 53.161 31.5299 52.0124 31.5299C50.9068 31.5299 49.9256 31.3869 49.0696 31.1025C48.213 30.8179 47.4925 30.4287 46.9071 29.9356C46.3219 29.4425 45.8718 28.8563 45.5579 28.177C45.2434 27.4978 45.0862 26.7746 45.0862 26.0073V9.57103Z" fill="#002B55"/>
            <path d="M86.6748 28.4398C86.8047 28.6155 86.8912 28.785 86.935 28.9493C86.978 29.1137 87 29.2837 87 29.4589C87 30.0291 86.7937 30.5164 86.3821 30.9216C85.9701 31.3269 85.4172 31.5299 84.7238 31.5299C84.2035 31.5299 83.8078 31.4363 83.5369 31.2504C83.2656 31.0644 82.9786 30.7629 82.6754 30.3464C82.3932 29.9304 82.1386 29.5687 81.9111 29.2616C81.6834 28.9551 81.4665 28.659 81.2607 28.3741C81.0545 28.0895 80.8325 27.788 80.5942 27.4702C80.3554 27.1526 80.0951 26.7855 79.8137 26.3688C79.3147 27.0704 78.8109 27.7659 78.3018 28.4563C77.7921 29.1466 77.2881 29.8425 76.7898 30.5438C76.2908 31.2011 75.673 31.5299 74.9363 31.5299C74.3072 31.5299 73.7707 31.3433 73.3265 30.9711C72.882 30.5986 72.6599 30.1056 72.6599 29.4918C72.6599 29.1193 72.7683 28.7907 72.985 28.5056C73.7217 27.4978 74.4266 26.5554 75.0987 25.6784C75.7704 24.8023 76.4751 23.8598 77.2125 22.8514C76.562 21.9751 75.9118 21.1149 75.2614 20.2711C74.6112 19.4276 73.9605 18.5451 73.3103 17.6248C73.1802 17.4717 73.0827 17.296 73.0178 17.0989C72.9527 16.9016 72.9201 16.7264 72.9201 16.5729C72.9201 16.0253 73.1365 15.5486 73.5705 15.1428C74.004 14.7377 74.5348 14.5347 75.1638 14.5347C75.489 14.5347 75.7654 14.5789 75.9931 14.6663C76.2205 14.7541 76.4208 14.8692 76.5944 15.0113C76.7677 15.1542 76.9197 15.3072 77.0499 15.4716C77.1797 15.6359 77.2987 15.7952 77.4076 15.9483L79.8788 19.3342L82.48 15.6853C82.7183 15.335 82.9841 15.0556 83.2767 14.847C83.5695 14.639 83.976 14.5347 84.4961 14.5347C84.7563 14.5347 85.0165 14.5841 85.2766 14.6827C85.5367 14.7812 85.775 14.9184 85.9921 15.0936C86.2085 15.2693 86.3821 15.4773 86.5123 15.7181C86.6422 15.9595 86.7074 16.2226 86.7074 16.507C86.7074 16.6607 86.6854 16.8308 86.6422 17.0165C86.5986 17.2031 86.5122 17.384 86.3821 17.559L82.48 22.8514L86.6748 28.4398Z" fill="#002B55"/>
            <path d="M66.5995 16.9328C63.2695 16.9328 60.5697 19.6601 60.5663 23.0258H72.6329C72.6292 19.6601 69.9296 16.9328 66.5995 16.9328Z" fill="#002B55"/>
            <path d="M66.5996 29.1317C69.9319 29.1317 72.633 26.4009 72.633 23.0323C72.633 23.03 72.633 23.0278 72.633 23.0258H60.5665C60.5665 23.0279 60.5665 23.0301 60.5665 23.0323C60.5665 26.4009 63.2674 29.1317 66.5996 29.1317Z" fill="#23C3C3"/>
            <path d="M31.1888 36.8402C31.3058 36.7304 31.3646 36.5748 31.3646 36.3729C31.3646 36.1532 31.3072 35.9857 31.1922 35.8695C31.0774 35.7533 30.9156 35.6949 30.7073 35.6949H29.9186V37.0048H30.7073C30.9114 37.0048 31.0717 36.9501 31.1888 36.8402ZM31.8234 35.3262C32.0861 35.5808 32.2177 35.9298 32.2177 36.3729C32.2177 36.7939 32.0861 37.131 31.8234 37.3829C31.5608 37.6355 31.2018 37.7613 30.7463 37.7613H29.9186V39.4857H29.0665V34.9445H30.7463C31.2018 34.9445 31.5608 35.0716 31.8234 35.3262Z" fill="#414042"/>
            <path d="M32.9857 34.9445H33.7933V36.3664C33.8932 36.2522 34.0101 36.1667 34.1448 36.1095C34.2792 36.0526 34.4222 36.0239 34.5746 36.0239C34.9217 36.0239 35.1908 36.1327 35.3817 36.3496C35.5728 36.5671 35.6682 36.8688 35.6682 37.2546V39.4857H34.8606V37.3531C34.8606 37.1561 34.8131 37.006 34.7177 36.9027C34.6222 36.7993 34.494 36.7481 34.3333 36.7481C34.1773 36.7481 34.048 36.8008 33.9461 36.9058C33.844 37.0115 33.7933 37.1606 33.7933 37.3531V39.4857H32.9857V34.9445Z" fill="#414042"/>
            <path d="M38.2503 38.7193C38.3433 38.6207 38.3902 38.4706 38.3902 38.2687V38.0247H37.8039C37.4653 38.0247 37.2961 38.163 37.2961 38.4398C37.2961 38.7248 37.4612 38.8673 37.791 38.8673C38.0035 38.8673 38.1566 38.8184 38.2503 38.7193ZM38.8458 36.3299C39.0756 36.5339 39.1909 36.8361 39.1909 37.235V39.4859H38.4095V39.1899C38.2965 39.3083 38.1806 39.3937 38.0612 39.4466C37.9417 39.4993 37.791 39.5256 37.6089 39.5256C37.2616 39.5256 36.9922 39.4316 36.8014 39.2425C36.6103 39.0541 36.515 38.793 36.515 38.4592C36.515 38.1523 36.6168 37.9096 36.821 37.7318C37.0249 37.5541 37.3095 37.4653 37.6739 37.4653H38.3902V37.1956C38.3902 36.8317 38.2098 36.6491 37.8496 36.6491C37.6977 36.6491 37.5772 36.6881 37.4884 36.7644C37.3992 36.8414 37.3549 36.9431 37.3549 37.0707V37.09H36.6062V37.0642C36.6062 36.744 36.7191 36.4904 36.9447 36.304C37.1704 36.1172 37.4742 36.024 37.856 36.024C38.2857 36.024 38.6155 36.126 38.8458 36.3299Z" fill="#414042"/>
            <path d="M40.154 36.0632H40.9417V36.4186C41.0242 36.2744 41.1348 36.1667 41.2738 36.0961C41.4127 36.0262 41.5687 35.9912 41.7422 35.9912C41.8422 35.9912 41.9335 36.0002 42.0158 36.0176V36.781C41.864 36.7325 41.7295 36.7083 41.6124 36.7083C41.417 36.7083 41.2594 36.7713 41.1403 36.8961C41.0208 37.021 40.9613 37.1998 40.9613 37.4324V39.4858H40.154V36.0632Z" fill="#414042"/>
            <path d="M42.7452 36.0634H43.5329V36.373C43.6327 36.2632 43.7531 36.1777 43.8943 36.1163C44.0355 36.0549 44.1819 36.0242 44.3337 36.0242C44.7113 36.0242 44.9997 36.1669 45.1994 36.4522C45.46 36.1669 45.7791 36.0242 46.1567 36.0242C46.5171 36.0242 46.798 36.1339 46.9998 36.3532C47.2011 36.5727 47.3024 36.8732 47.3024 37.2549V39.4859H46.4953V37.3533C46.4953 37.1563 46.4463 37.0061 46.3486 36.9029C46.2511 36.7995 46.1241 36.7482 45.9679 36.7482C45.803 36.7482 45.6715 36.8022 45.5739 36.9093C45.4763 37.0171 45.4275 37.1586 45.4275 37.334V39.4859H44.6201V37.3533C44.6201 37.1563 44.5719 37.0061 44.4737 36.9029C44.3762 36.7995 44.249 36.7482 44.0927 36.7482C43.9323 36.7482 43.8019 36.801 43.702 36.906C43.6022 37.0117 43.5523 37.1608 43.5523 37.3533V39.4859H42.7452V36.0634Z" fill="#414042"/>
            <path d="M49.8843 38.7193C49.9779 38.6207 50.0244 38.4706 50.0244 38.2687V38.0247H49.4385C49.1 38.0247 48.9305 38.163 48.9305 38.4398C48.9305 38.7248 49.0957 38.8673 49.4255 38.8673C49.638 38.8673 49.791 38.8184 49.8843 38.7193ZM50.4802 36.3299C50.7101 36.5339 50.8252 36.8361 50.8252 37.235V39.4859H50.044V39.1899C49.931 39.3083 49.8151 39.3937 49.6957 39.4466C49.5764 39.4993 49.4254 39.5256 49.2433 39.5256C48.8959 39.5256 48.6266 39.4316 48.4359 39.2425C48.2451 39.0541 48.1494 38.793 48.1494 38.4592C48.1494 38.1523 48.2515 37.9096 48.4554 37.7318C48.6594 37.5541 48.9439 37.4653 49.3083 37.4653H50.0244V37.1956C50.0244 36.8317 49.8443 36.6491 49.484 36.6491C49.3321 36.6491 49.2116 36.6881 49.1227 36.7644C49.0337 36.8414 48.9892 36.9431 48.9892 37.0707V37.09H48.2406V37.0642C48.2406 36.744 48.3534 36.4904 48.579 36.304C48.8047 36.1172 49.1086 36.024 49.4907 36.024C49.9204 36.024 50.2501 36.126 50.4802 36.3299Z" fill="#414042"/>
            <path d="M52.0977 39.1768C51.8522 38.9442 51.7297 38.5824 51.7297 38.0908V37.4524C51.7297 36.9651 51.8522 36.6056 52.0977 36.373C52.3428 36.1404 52.6783 36.024 53.1036 36.024C53.5201 36.024 53.8457 36.1318 54.0802 36.3465C54.3147 36.5614 54.432 36.8601 54.432 37.2418V37.3075H53.6635V37.2682C53.6635 37.1057 53.6144 36.9786 53.5169 36.886C53.4194 36.794 53.2859 36.7482 53.1164 36.7482C52.7261 36.7482 52.5305 36.9873 52.5305 37.4653V38.0839C52.5305 38.3429 52.5817 38.5276 52.6836 38.6369C52.7855 38.7467 52.93 38.8016 53.1164 38.8016C53.2859 38.8016 53.4194 38.7579 53.5169 38.6701C53.6144 38.5824 53.6635 38.459 53.6635 38.3014V38.2621H54.432V38.3079C54.432 38.6853 54.3147 38.9825 54.0802 39.2001C53.8457 39.4168 53.5201 39.5256 53.1036 39.5256C52.6783 39.5256 52.3428 39.4094 52.0977 39.1768Z" fill="#414042"/>
            <path d="M57.9674 36.0635L56.6849 39.7825C56.598 40.0324 56.4734 40.2146 56.3105 40.3288C56.1478 40.4428 55.932 40.4999 55.6627 40.4999H55.3828V39.7692H55.6367C55.767 39.7692 55.8636 39.7461 55.9264 39.7003C55.9894 39.654 56.04 39.5673 56.0795 39.4401L56.0923 39.3939L54.9465 36.0635H55.7995L56.4635 38.216L57.1407 36.0635H57.9674Z" fill="#414042"/>
            </g>
            <defs>
            <clipPath id="clip0_1525_1332">
            <rect width="87" height="33" fill="white" transform="translate(0 7.5)"/>
            </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex space-x-3">
          <Search className="w-5 h-5 text-[#1A1A1A]" />
          <ShoppingBag className="w-5 h-5 text-[#1A1A1A]" />
        </div>
      </div>
      <div className="flex space-x-4 overflow-x-auto text-[10px] font-semibold text-[#6B7280] pb-2 hide-scrollbar whitespace-nowrap">
        <span className="text-[#1A1A1A] border-b-2 border-[#22C55E] pb-1">ALL</span>
        <span>SKINCARE</span>
        <span>NUTRITION</span>
        <span>BODY CARE</span>
      </div>
    </div>
    <div className="flex-1 bg-[#F9FAFB] p-4 overflow-y-auto hide-scrollbar">
      <div className="grid grid-cols-2 gap-3">
        {[
          { name: "CPH Complex + Oligopeptide", brand: "Minimalist", old: "₹839", new: "₹699", badge: "17% off", badgeColor: "bg-[#DCFCE7] text-[#15803D]" },
          { name: "Cetaphil Sun Light SPF 50+", brand: "Cetaphil", old: "₹1260", new: "₹1050", badge: "17% off", badgeColor: "bg-[#DCFCE7] text-[#15803D]" },
          { name: "Niacinamide 10% + Zinc", brand: "Minimalist", old: "₹449", new: "₹349", badge: "22% off", badgeColor: "bg-[#DCFCE7] text-[#15803D]" },
          { name: "Vitamin C Foaming Face Wash", brand: "Plum", old: "₹299", new: "₹249", badge: "LOW STOCK", badgeColor: "bg-[#FFEDD5] text-[#C2410C]" }
        ].map((p, i) => (
          <div key={i} className="bg-white rounded-xl p-3 border border-[#E5E7EB] relative flex flex-col">
            <div className={`absolute top-2 left-2 ${p.badgeColor} text-[9px] font-bold px-2 py-0.5 rounded-full z-10`}>{p.badge}</div>
            <div className="h-24 bg-[#F3F4F6] rounded-lg mb-3 mt-4"></div>
            <div className="text-[9px] font-bold text-[#22C55E] mb-1 uppercase tracking-wider">{p.brand}</div>
            <div className="text-[11px] font-semibold text-[#1A1A1A] leading-tight mb-2 flex-1">{p.name}</div>
            <div className="flex items-center justify-between mt-auto">
              <div>
                <div className="text-[9px] text-[#6B7280] line-through">{p.old}</div>
                <div className="text-[12px] font-bold text-[#8B5CF6]">{p.new}</div>
              </div>
              <button className="w-7 h-7 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center hover:bg-[#3B82F6] transition-colors">+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Module7Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-md mx-auto overflow-hidden">
    <div className="p-5 border-b border-[#E5E7EB] bg-[#F9FAFB]">
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
        <input type="text" value="vitamin c for..." readOnly className="w-full pl-9 pr-4 py-3 rounded-xl border border-[#E5E7EB] text-[14px] font-medium text-[#1A1A1A] bg-white focus:outline-none shadow-sm" />
        
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#E5E7EB] rounded-xl shadow-lg z-20 overflow-hidden">
          {[
            { text: "Vitamin C Face Serum", cat: "Skincare" },
            { text: "Vitamin C + Zinc Tablets", cat: "Supplements" },
            { text: "Vitamin C Foaming Wash", cat: "Face Care" }
          ].map((s, i) => (
            <div key={i} className="px-4 py-3 border-b border-[#E5E7EB] last:border-0 hover:bg-[#F9FAFB] cursor-pointer flex items-center">
              <Search className="w-3.5 h-3.5 text-[#9CA3AF] mr-3" />
              <div className="flex-1 text-[13px] font-medium text-[#1A1A1A]">{s.text}</div>
              <div className="text-[10px] text-[#6B7280] bg-[#F3F4F6] px-2 py-0.5 rounded">{s.cat}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-44 flex items-center justify-between">
        <div className="flex space-x-2">
          <span className="bg-white border border-[#E5E7EB] text-[#1A1A1A] text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center shadow-sm">Skincare <span className="ml-1.5 text-[#6B7280]">✕</span></span>
          <span className="bg-white border border-[#E5E7EB] text-[#1A1A1A] text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center shadow-sm">Under ₹500 <span className="ml-1.5 text-[#6B7280]">✕</span></span>
          <span className="text-[11px] text-[#8B5CF6] font-medium cursor-pointer ml-1 self-center">clear all</span>
        </div>
      </div>
    </div>
    <div className="p-5 bg-white">
      <div className="flex justify-between items-center mb-4">
        <div className="text-[12px] text-[#6B7280] font-medium">Showing 24 results</div>
        <div className="text-[11px] font-bold text-[#1A1A1A] flex items-center border border-[#E5E7EB] px-2 py-1 rounded-md">Best Match <span className="ml-1 text-[8px]">▼</span></div>
      </div>
      <div className="space-y-3">
        {[
          { name: "Vitamin C 10% Face Serum", brand: "Minimalist", price: "₹699", score: "98% Match" },
          { name: "Plum 15% Vitamin C Face Serum", brand: "Plum", price: "₹450", score: "95% Match" }
        ].map((p, i) => (
          <div key={i} className="flex items-center p-3 border border-[#E5E7EB] rounded-xl">
            <div className="w-14 h-14 bg-[#F3F4F6] rounded-lg mr-4 shrink-0"></div>
            <div className="flex-1">
              <div className="text-[10px] font-bold text-[#22C55E] uppercase tracking-wider mb-0.5">{p.brand}</div>
              <div className="text-[13px] font-semibold text-[#1A1A1A] mb-1">{p.name}</div>
              <div className="text-[13px] font-bold text-[#8B5CF6]">{p.price}</div>
            </div>
            <div className="bg-[#DCFCE7] text-[#15803D] text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0">{p.score}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Module8Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-sm mx-auto overflow-hidden">
    <div className="bg-[#1E1B3A] p-8 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]"></div>
      <h3 className="text-[11px] uppercase tracking-[0.12em] text-[#A78BFA] font-semibold mb-3 flex items-center justify-center"><Star className="w-3.5 h-3.5 mr-1.5 fill-current" /> Pillbox Points</h3>
      <div className="text-5xl font-extrabold text-[#C4B5FD] mb-2 tracking-tight">1,240 <span className="text-xl font-medium text-[#A78BFA]">pts</span></div>
      <div className="text-[13px] text-[#A78BFA] mb-8 font-medium">≈ ₹124 discount value</div>
      
      <div className="bg-white/10 rounded-full h-2.5 w-full mb-3 overflow-hidden">
        <div className="bg-gradient-to-r from-[#3B82F6] to-[#EC4899] h-full w-[60%] rounded-full"></div>
      </div>
      <div className="text-[12px] text-white/80 font-medium">240 pts to <span className="text-[#FBBF24] font-bold">Gold tier</span></div>
    </div>
    <div className="p-6">
      <div className="flex space-x-3 mb-6">
        <button className="flex-1 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] text-white text-[13px] font-bold py-3 rounded-full shadow-md hover:opacity-90 transition-opacity">Redeem Points</button>
        <button className="flex-1 bg-white border border-[#E5E7EB] text-[#1A1A1A] text-[13px] font-bold py-3 rounded-full hover:bg-[#F9FAFB] transition-colors">View History</button>
      </div>
      <div className="border-t border-[#E5E7EB] pt-5">
        <div className="text-[11px] uppercase tracking-wider font-bold text-[#6B7280] mb-3">Your Referral Link</div>
        <div className="flex items-center bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-2.5 mb-3">
          <div className="flex-1 text-[13px] text-[#1A1A1A] font-mono truncate px-2">pillbox.in/ref/ARJUN24</div>
          <button className="ml-2 px-3 py-1.5 bg-white rounded-lg border border-[#E5E7EB] text-[#1A1A1A] text-[11px] font-bold hover:bg-[#F3F4F6] transition-colors">Copy Link</button>
        </div>
        <div className="text-[11px] text-[#8B5CF6] font-medium text-center bg-[#F3E8FF] py-2 rounded-lg">Your friend gets ₹50 off. You earn 100 pts.</div>
      </div>
    </div>
  </div>
);

export const Module9Right = () => (
  <div className="bg-[#F9FAFB] rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-md mx-auto overflow-hidden p-8">
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center text-[#8B5CF6] font-semibold text-[11px] uppercase tracking-wider"><div className="w-6 h-6 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center mr-2 text-[12px]">1</div> SHIPPING</div>
      <div className="h-px bg-[#E5E7EB] flex-1 mx-3"></div>
      <div className="flex items-center text-[#6B7280] font-semibold text-[11px] uppercase tracking-wider"><div className="w-6 h-6 rounded-full bg-[#E5E7EB] text-[#6B7280] flex items-center justify-center mr-2 text-[12px]">2</div> PAYMENT</div>
      <div className="h-px bg-[#E5E7EB] flex-1 mx-3"></div>
      <div className="flex items-center text-[#6B7280] font-semibold text-[11px] uppercase tracking-wider"><div className="w-6 h-6 rounded-full bg-[#E5E7EB] text-[#6B7280] flex items-center justify-center mr-2 text-[12px]">3</div> CONFIRM</div>
    </div>

    <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 mb-4 shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <div className="font-bold text-[#1A1A1A] text-[14px]">Arjun Mehta • Home</div>
        <Edit2 className="w-4 h-4 text-[#6B7280] cursor-pointer" />
      </div>
      <div className="text-[13px] text-[#6B7280] leading-relaxed">402 Tower B, Goregaon East, Mumbai 400063</div>
    </div>

    <div className="bg-[#DCFCE7] border border-[#BBF7D0] rounded-xl p-3 mb-4 flex items-center text-[#15803D] text-[12px] font-medium">
      <span className="mr-2">🎉</span> Best discount applied — ₹100 off (PILLBOX10)
    </div>

    <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 mb-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center">
        <Star className="w-4 h-4 text-[#8B5CF6] mr-2 fill-current" />
        <span className="text-[13px] font-medium text-[#1A1A1A]">Use 500 Pillbox Points = ₹50 off</span>
      </div>
      <div className="w-10 h-6 bg-[#22C55E] rounded-full relative cursor-pointer">
        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
      </div>
    </div>

    <div className="border-t border-[#E5E7EB] pt-4 mb-6 space-y-2">
      <div className="flex justify-between text-[13px] text-[#6B7280]"><span>Subtotal</span><span>₹1,050</span></div>
      <div className="flex justify-between text-[13px] text-[#22C55E] font-medium"><span>Discount</span><span>-₹150</span></div>
      <div className="flex justify-between text-[16px] font-bold text-[#1A1A1A] pt-2"><span>Total</span><span>₹900</span></div>
    </div>

    <button className="w-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] text-white font-bold py-4 rounded-full text-[14px] hover:opacity-90 transition-opacity shadow-md">CONTINUE TO PAYMENT</button>
  </div>
);

export const Module10Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-md mx-auto overflow-hidden">
    <div className="p-6 border-b border-[#E5E7EB] flex justify-between items-center bg-[#F9FAFB]">
      <h3 className="text-[11px] uppercase tracking-[0.12em] text-[#1A1A1A] font-bold">Inventory Sync Status</h3>
      <div className="flex items-center bg-[#DCFCE7] text-[#15803D] text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm">
        <span className="w-2 h-2 bg-[#22C55E] rounded-full mr-2 animate-pulse"></span> LIVE
      </div>
    </div>
    <div className="px-6 py-4 bg-white border-b border-[#E5E7EB] flex justify-between text-[11px] font-medium text-[#6B7280]">
      <div>Last synced: <span className="text-[#1A1A1A] font-bold">2 minutes ago</span></div>
      <div>Next sync: <span className="text-[#8B5CF6] font-bold">continuous polling</span></div>
    </div>
    <div className="p-6 space-y-4">
      {[
        { name: "Kollam HQ", skus: "847 SKUs", status: "In Sync", icon: <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />, buffer: "5 units" },
        { name: "Trivandrum Branch", skus: "412 SKUs", status: "In Sync", icon: <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />, buffer: "3 units" },
        { name: "Kochi Outlet", skus: "289 SKUs", status: "Syncing...", icon: <Clock className="w-4 h-4 text-[#8B5CF6] animate-spin-slow" />, buffer: "4 units" }
      ].map((w, i) => (
        <div key={i} className="flex items-center justify-between p-4 border border-[#E5E7EB] rounded-xl hover:shadow-sm transition-shadow bg-white">
          <div className="flex items-center">
            <div className="text-xl mr-3">🏢</div>
            <div>
              <div className="text-[14px] font-bold text-[#1A1A1A] mb-0.5">{w.name}</div>
              <div className="text-[11px] text-[#6B7280] font-medium">{w.skus} <span className="mx-1">•</span> Buffer: {w.buffer}</div>
            </div>
          </div>
          <div className="flex items-center text-[12px] font-bold text-[#1A1A1A]">
            {w.icon} <span className="ml-1.5">{w.status}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="bg-[#F9FAFB] p-5 border-t border-[#E5E7EB]">
      <div className="text-[11px] text-[#6B7280] leading-relaxed"><span className="font-bold text-[#1A1A1A]">Stock buffer:</span> X units held back from online for walk-in customers. Admin configurable per SKU.</div>
    </div>
  </div>
);

export const Module11Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-md mx-auto p-8">
    <div className="relative pl-8 space-y-8">
      <div className="absolute left-[15px] top-3 bottom-[120px] w-0.5 bg-[#E5E7EB]"></div>
      
      <div className="relative">
        <div className="absolute -left-[39px] top-1 w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center ring-4 ring-white shadow-sm"><Check className="w-3.5 h-3.5 text-white" /></div>
        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-4">
          <div className="text-[13px] font-bold text-[#1A1A1A] mb-1">Order Confirmed</div>
          <div className="text-[12px] text-[#6B7280] leading-relaxed">&quot;Hi Arjun, your order #14779 is confirmed!&quot; + PDF invoice sent</div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-[39px] top-1 w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center ring-4 ring-white shadow-sm"><Check className="w-3.5 h-3.5 text-white" /></div>
        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-4">
          <div className="text-[13px] font-bold text-[#1A1A1A] mb-1">Shipped</div>
          <div className="text-[12px] text-[#6B7280] leading-relaxed">&quot;Your order has been shipped via Delhivery. Track: [link]&quot;</div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-[39px] top-1 w-6 h-6 rounded-full bg-white border-[3px] border-[#3B82F6] flex items-center justify-center ring-4 ring-white shadow-sm"><div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div></div>
        <div className="bg-white border-2 border-[#3B82F6] rounded-xl p-4 shadow-md">
          <div className="text-[13px] font-bold text-[#3B82F6] mb-1">Out for Delivery</div>
          <div className="text-[12px] text-[#6B7280] leading-relaxed">Notification queued (today)</div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-[39px] top-1 w-6 h-6 rounded-full bg-white border-[3px] border-[#E5E7EB] flex items-center justify-center ring-4 ring-white"></div>
        <div className="opacity-50 pl-2 pt-1">
          <div className="text-[13px] font-bold text-[#6B7280] mb-1">Delivered</div>
          <div className="text-[12px] text-[#6B7280]">Pending</div>
        </div>
      </div>
    </div>
    
    <div className="mt-8 pt-6 border-t border-dashed border-[#E5E7EB]">
      <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-xl p-4 relative">
        <div className="absolute -top-3 -left-3 text-xl">⚠️</div>
        <div className="text-[13px] font-bold text-[#9A3412] mb-1 ml-2">Abandoned Cart (separate flow)</div>
        <div className="text-[12px] text-[#9A3412] leading-relaxed ml-2 mb-3">&quot;You left something behind! Complete your order for ₹699 Minimalist serum&quot;</div>
        <button className="ml-2 bg-[#EA580C] text-white text-[11px] font-bold px-4 py-1.5 rounded-lg">Resume Order</button>
      </div>
    </div>
  </div>
);

export const Module12Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-2xl mx-auto p-8">
    <div className="flex items-center justify-between mb-10 relative">
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#E5E7EB] -z-10 -translate-y-1/2"></div>
      {[
        { step: "1", title: "RAW IMPORT", desc: "Scrape existing data" },
        { step: "2", title: "AI ENRICHMENT", desc: "Generate desc + tags" },
        { step: "3", title: "IMAGE PROC.", desc: "Remove bg + resize" },
        { step: "4", title: "ADMIN REVIEW", desc: "Human approval" }
      ].map((s, i) => (
        <div key={i} className="flex flex-col items-center w-1/4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold mb-3 ring-4 ring-white ${i === 1 ? 'bg-[#EC4899] text-white shadow-md' : 'bg-[#F3F4F6] text-[#6B7280] border border-[#E5E7EB]'}`}>{s.step}</div>
          <div className={`text-[10px] font-bold text-center mb-1 ${i === 1 ? 'text-[#EC4899]' : 'text-[#1A1A1A]'}`}>{s.title}</div>
          <div className="text-[9px] text-[#6B7280] text-center max-w-[100px]">{s.desc}</div>
        </div>
      ))}
    </div>
    
    <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-5">
      <div className="text-[10px] uppercase tracking-wider font-bold text-[#6B7280] mb-4">Sample Enriched Product</div>
      <div className="flex">
        <div className="w-20 h-20 bg-white border border-[#E5E7EB] rounded-lg mr-5 flex items-center justify-center text-[10px] text-[#9CA3AF]">Image</div>
        <div className="flex-1">
          <div className="text-[15px] font-bold text-[#1A1A1A] mb-2">Minimalist Niacinamide 10%</div>
          <div className="grid grid-cols-2 gap-y-2 text-[11px] mb-3">
            <div><span className="text-[#6B7280]">Category:</span> <span className="font-semibold text-[#1A1A1A]">Skincare</span></div>
            <div><span className="text-[#6B7280]">Gender:</span> <span className="font-semibold text-[#1A1A1A]">Unisex</span></div>
            <div className="col-span-2"><span className="text-[#6B7280]">Concern:</span> <span className="font-semibold text-[#1A1A1A]">Acne, Oily Skin</span></div>
            <div className="col-span-2"><span className="text-[#6B7280]">Tags:</span> <span className="font-semibold text-[#8B5CF6]">niacinamide, pore-minimizing, oily skin</span></div>
          </div>
          <div className="flex items-center text-[11px] font-bold text-[#D97706] bg-[#FEF3C7] px-2.5 py-1 rounded-md inline-flex">
            ⏳ Awaiting Review
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Module13Right = () => (
  <div className="bg-white rounded-2xl shadow-xl border border-[#E5E7EB] w-full max-w-3xl mx-auto overflow-hidden flex h-[500px]">
    <div className="w-[180px] bg-[#0F0F0F] text-white flex flex-col shrink-0">
      <div className="p-4 border-b border-white/10 font-bold text-[14px]">Admin Center</div>
      <div className="flex-1 py-2">
        {[
          { icon: "📦", label: "Catalog", active: true },
          { icon: "🎯", label: "Promotions" },
          { icon: "🔍", label: "Search" },
          { icon: "📋", label: "Orders" },
          { icon: "💼", label: "Jobs" },
          { icon: "📝", label: "Content" },
          { icon: "⚙️", label: "Settings" }
        ].map((item, i) => (
          <div key={i} className={`flex items-center px-4 py-2.5 text-[12px] cursor-pointer ${item.active ? 'bg-[#1E1B3A] text-white border-l-2 border-[#8B5CF6]' : 'text-[#9CA3AF] hover:bg-white/5 hover:text-white'}`}>
            <span className="mr-3">{item.icon}</span> {item.label}
          </div>
        ))}
      </div>
    </div>
    <div className="flex-1 bg-[#F9FAFB] flex flex-col min-w-0">
      <div className="p-5 border-b border-[#E5E7EB] bg-white flex justify-between items-center shrink-0">
        <h2 className="text-[16px] font-bold text-[#1A1A1A]">Products</h2>
        <button className="bg-[#1A1A1A] text-white px-4 py-1.5 rounded-lg text-[12px] font-bold">+ Add Product</button>
      </div>
      <div className="p-5 flex-1 overflow-auto">
        <div className="min-w-[600px]">
          <table className="w-full text-left text-[12px] table-fixed">
            <thead>
              <tr className="text-[#6B7280] border-b border-[#E5E7EB]">
                <th className="pb-3 font-semibold w-[60px]">SKU</th>
                <th className="pb-3 font-semibold w-[160px]">Name</th>
                <th className="pb-3 font-semibold w-[90px]">Category</th>
                <th className="pb-3 font-semibold w-[70px]">Stock</th>
                <th className="pb-3 font-semibold w-[70px]">Status</th>
                <th className="pb-3 font-semibold w-[80px] text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E5E7EB] bg-white">
                <td className="py-3 font-mono text-[#6B7280] truncate pr-2">#1042</td>
                <td className="py-3 font-bold text-[#1A1A1A] truncate pr-2">Minimalist Niacinamide 10%</td>
                <td className="py-3 text-[#6B7280] truncate pr-2">Skincare</td>
                <td className="py-3 font-medium text-[#1A1A1A] truncate pr-2">143 units</td>
                <td className="py-3"><span className="text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded-full font-bold text-[10px] whitespace-nowrap">● Live</span></td>
                <td className="py-3 text-right text-[#8B5CF6] font-semibold cursor-pointer whitespace-nowrap">Edit <span className="text-[#E5E7EB] mx-1">|</span> View</td>
              </tr>
              <tr className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
                <td className="py-3 font-mono text-[#6B7280] truncate pr-2">#1043</td>
                <td className="py-3 font-bold text-[#1A1A1A] truncate pr-2">Cetaphil Sun Light SPF 50+</td>
                <td className="py-3 text-[#6B7280] truncate pr-2">Suncare</td>
                <td className="py-3 font-medium text-[#1A1A1A] truncate pr-2">42 units</td>
                <td className="py-3"><span className="text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded-full font-bold text-[10px] whitespace-nowrap">● Live</span></td>
                <td className="py-3 text-right text-[#8B5CF6] font-semibold cursor-pointer whitespace-nowrap">Edit <span className="text-[#E5E7EB] mx-1">|</span> View</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export const Module14Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-md mx-auto p-8">
    <div className="flex items-center justify-between mb-8">
      <h3 className="text-[11px] uppercase tracking-[0.12em] text-[#1A1A1A] font-bold">SEO Readiness</h3>
      <div className="text-3xl font-extrabold text-[#22C55E]">99<span className="text-lg text-[#6B7280] font-medium">/100</span></div>
    </div>
    
    <div className="space-y-3 mb-8">
      {[
        { text: "Server-Side Rendering (Next.js)", status: "pass" },
        { text: "Product Schema on all PDPs", status: "pass" },
        { text: "Open Graph tags on all pages", status: "pass" },
        { text: "XML Sitemap auto-generated", status: "pass" },
        { text: "Canonical URLs configured", status: "pass" },
        { text: "Core Web Vitals: LCP < 2.5s", status: "pass" },
        { text: "Blog & Content — Payload CMS integration", status: "pass" }
      ].map((item, i) => (
        <div key={i} className="flex items-start">
          <div className="mt-0.5 mr-3 shrink-0">
            {item.status === 'pass' ? 
              <CheckCircle2 className="w-4 h-4 text-[#22C55E]" /> : 
              <div className="w-4 h-4 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center text-[10px] font-bold">!</div>
            }
          </div>
          <div className={`text-[13px] ${item.status === 'pass' ? 'text-[#1A1A1A] font-medium' : 'text-[#6B7280]'}`}>{item.text}</div>
        </div>
      ))}
    </div>
    
    <div className="border-t border-[#E5E7EB] pt-6">
      <div className="text-[10px] uppercase tracking-wider font-bold text-[#6B7280] mb-4">Content Tools</div>
      <div className="flex space-x-3">
        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-2 text-[12px] font-bold text-[#1A1A1A] flex items-center shadow-sm"><FileText className="w-4 h-4 mr-2 text-[#8B5CF6]" /> Payload CMS</div>
        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 py-2 text-[12px] font-bold text-[#1A1A1A] flex items-center shadow-sm"><Globe className="w-4 h-4 mr-2 text-[#3B82F6]" /> Mailchimp</div>
      </div>
    </div>
  </div>
);

export const Module15Right = () => (
  <div className="bg-[#F9FAFB] rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-md mx-auto overflow-hidden">
    <div className="bg-white p-6 border-b border-[#E5E7EB] text-center">
      <h2 className="text-[16px] font-extrabold text-[#1A1A1A] tracking-tight">JOIN THE PILLBOX TEAM</h2>
      <p className="text-[12px] text-[#6B7280] mt-1">Build the future of pharmacy commerce.</p>
    </div>
    <div className="p-5 space-y-3">
      {[
        { title: "Senior Pharmacist", loc: "Kollam HQ", type: "Full-time", icon: "💊" },
        { title: "Logistics Coordinator", loc: "Trivandrum", type: "Full-time", icon: "🚚" },
        { title: "E-Commerce Executive", loc: "Remote", type: "Full-time", icon: "💻" }
      ].map((job, i) => (
        <div key={i} className="bg-white border border-[#E5E7EB] rounded-xl p-4 flex items-center justify-between hover:border-[#8B5CF6] transition-colors shadow-sm">
          <div>
            <div className="text-[14px] font-bold text-[#1A1A1A] mb-1 flex items-center"><span className="mr-2">{job.icon}</span> {job.title}</div>
            <div className="text-[11px] text-[#6B7280] font-medium">{job.loc} <span className="mx-1">•</span> {job.type}</div>
          </div>
          <button className="text-[11px] font-bold text-[#8B5CF6] bg-[#F3E8FF] px-3 py-1.5 rounded-lg hover:bg-[#8B5CF6] hover:text-white transition-colors">Apply Now</button>
        </div>
      ))}
    </div>
    <div className="px-5 pb-5">
      <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 shadow-sm">
        <div className="text-[12px] font-bold text-[#1A1A1A] mb-3">Application Form</div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded p-2 text-[11px] text-[#9CA3AF]">Name</div>
          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded p-2 text-[11px] text-[#9CA3AF]">Email</div>
          <div className="col-span-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded p-2 text-[11px] text-[#9CA3AF]">Phone</div>
        </div>
        <div className="border border-dashed border-[#E5E7EB] rounded-lg p-3 text-center mb-3 bg-[#F9FAFB] cursor-pointer hover:bg-[#F3F4F6]">
          <Upload className="w-4 h-4 text-[#6B7280] mx-auto mb-1" />
          <div className="text-[10px] text-[#6B7280] font-medium">Upload CV (PDF)</div>
        </div>
        <button className="w-full bg-[#1A1A1A] text-white text-[12px] font-bold py-2.5 rounded-lg">Submit Application</button>
      </div>
    </div>
    <div className="bg-[#1E1B3A] p-3 text-center">
      <div className="text-[10px] text-[#A78BFA]">Admin view: All applications stored and filterable in dashboard.</div>
    </div>
  </div>
);

export const Module16Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-lg mx-auto p-8">
    <h3 className="text-[11px] uppercase tracking-[0.12em] text-[#1A1A1A] font-bold mb-6 text-center">Security & Infra Stack</h3>
    <div className="space-y-3 relative">
      <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-[#E5E7EB] -z-10"></div>
      
      {[
        { l: "LAYER 1", name: "NETWORK", desc: "Cloudflare CDN + WAF | DDoS protection | SSL/TLS everywhere", icon: <Globe className="w-4 h-4 text-[#3B82F6]" /> },
        { l: "LAYER 2", name: "APPLICATION", desc: "OWASP Top 10 hardening | Rate limiting | Input sanitization", icon: <Shield className="w-4 h-4 text-[#8B5CF6]" /> },
        { l: "LAYER 3", name: "AUTH", desc: "JWT access tokens | Refresh token rotation | OAuth | OTP", icon: <Lock className="w-4 h-4 text-[#EC4899]" /> },
        { l: "LAYER 4", name: "DATA", desc: "Encryption at rest + transit | MSSQL secure connector", icon: <Database className="w-4 h-4 text-[#22C55E]" /> },
        { l: "LAYER 5", name: "PAYMENTS", desc: "RazorPay handles card data | PCI-DSS compliant", icon: <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" /> }
      ].map((layer, i) => (
        <div key={i} className="flex items-center bg-white border border-[#E5E7EB] rounded-xl p-3 shadow-sm hover:border-[#C4B5FD] transition-colors">
          <div className="w-8 h-8 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center mr-4 shrink-0">{layer.icon}</div>
          <div>
            <div className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-0.5">{layer.l} — {layer.name}</div>
            <div className="text-[12px] font-medium text-[#1A1A1A]">{layer.desc}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-6 bg-[#1E1B3A] rounded-xl p-4 flex items-center justify-between text-white shadow-md">
      <div className="flex items-center"><Server className="w-5 h-5 mr-3 text-[#A78BFA]" /> <span className="text-[13px] font-bold">INFRASTRUCTURE</span></div>
      <div className="text-[11px] text-[#A78BFA] text-right">Horizontal scaling | Auto-restart<br/><span className="text-white font-bold">Uptime target: 99.9%</span></div>
    </div>
  </div>
);

export const Module18Right = () => (
  <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#0A0A0A] rounded-2xl shadow-xl border border-[#2D2B4E]">
    <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] opacity-20 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#EC4899] to-[#8B5CF6] opacity-20 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2"></div>
    
    <div className="relative py-4 z-10 flex flex-col items-center text-center px-8">
      <svg width="140" height="71" viewBox="0 0 87 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-8">
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
      
      <h2 className="text-[52px] font-extrabold text-white mb-4 tracking-tight">Thank You</h2>
      <p className="text-[18px] text-[#9CA3AF] max-w-[480px] mb-8">We look forward to building Pillbox's digital future together.</p>
      
      <div className="w-16 h-px bg-[#2D2B4E] mb-8"></div>
      
      <div className="flex flex-row gap-8 mb-1 text-[15px] text-[#D1D5DB] font-medium">
        <div>📧 ravsysinfotech@gmail.com</div>
        <div>📞 +91 8921 386061</div>
      </div>
      
      <div className="text-[11px] text-[#6B7280] font-medium tracking-wider uppercase">
        RAVSYS Infotech LLP • Pillbox Pharmacy E-Commerce Proposal • 2026
      </div>
    </div>
  </div>
);

export const Module17Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-xl mx-auto overflow-hidden flex flex-col h-[650px]">
    <div className="p-5 border-b border-[#E5E7EB] bg-[#F9FAFB]">
      <h3 className="text-[11px] uppercase tracking-[0.12em] text-[#22C55E] font-semibold">Delivery Masterplan</h3>
    </div>
    <div className="p-6 overflow-y-auto flex-1 hide-scrollbar">
      <div className="space-y-5 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#E5E7EB] before:to-transparent">
        {[
          { m: "Month 1", title: "FOUNDATION & CORE SETUP", desc: "Architecture, UX design, MSSQL connector, environment setup" },
          { m: "Month 2", title: "COMMERCE CORE & CHECKOUT", desc: "Storefront, PDP, Cart, Checkout, RazorPay, Auth" },
          { m: "Month 3", title: "SEARCH, FILTERS & AI CATALOG", desc: "Typesense integration, facets, AI migration pipeline, admin review" },
          { m: "Month 4", title: "OPERATIONS, INVENTORY, JOBS", desc: "MSSQL sync, WhatsApp automation, order management, jobs portal" },
          { m: "Month 5", title: "DISCOVERY, SEO & CONTENT", desc: "Loyalty, referrals, Payload CMS, SEO hardening, sitemaps" },
          { m: "Month 6", title: "SECURITY, TESTING & LAUNCH", desc: "Security audit, UAT, performance tuning, production deployment" }
        ].map((item, i) => (
          <div key={i} className="relative flex items-start">
            <div className="flex items-center justify-center w-5 h-5 rounded-full border-[3px] border-white bg-[#8B5CF6] shadow-sm shrink-0 z-10 mt-1"></div>
            <div className="ml-4 bg-white p-3.5 rounded-xl border border-[#E5E7EB] shadow-sm w-full">
              <div className="text-[10px] font-bold text-[#8B5CF6] mb-1 uppercase tracking-wider">{item.m}</div>
              <div className="text-[12px] font-bold text-[#1A1A1A] mb-1 leading-tight">{item.title}</div>
              <div className="text-[11px] text-[#6B7280] leading-relaxed font-medium">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 border border-[#E5E7EB] rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-[11px] border-collapse">
          <tbody className="divide-y divide-[#E5E7EB]">
            {[
              ["Project Kickoff", "₹5,00,000"], ["Commerce Core Complete", "₹5,00,000"], ["Search & Filters Complete", "₹5,00,000"],
              ["Operations Complete", "₹5,00,000"], ["Discovery & SEO Complete", "₹5,00,000"], ["Security & Testing Complete", "₹5,00,000"],
              ["Post-Launch Final Settlement", "₹2,00,000 – ₹7,00,000"]
            ].map((row, i) => (
              <tr key={i} className="even:bg-[#F9FAFB] odd:bg-white hover:bg-[#F3F4F6] transition-colors">
                <td className="py-2.5 px-4 font-semibold text-[#6B7280]">{row[0]}</td>
                <td className="py-2.5 px-4 font-bold text-[#1A1A1A] text-right">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-4 text-center">
        <div className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">Infrastructure Cost Estimate</div>
        <div className="text-[11px] text-[#6B7280] font-medium flex justify-center space-x-4">
          <span>1K MAU → ~₹10K/mo</span>
          <span className="text-[#E5E7EB]">|</span>
          <span>10K MAU → ~₹25K/mo</span>
          <span className="text-[#E5E7EB]">|</span>
          <span>100K MAU → ~₹50K/mo</span>
        </div>
        <div className="text-[9px] text-[#9CA3AF] mt-2 italic">(Client bears infra cost post-launch. 3 months support included.)</div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] p-5 text-center shrink-0">
      <div className="text-[10px] uppercase tracking-[0.15em] text-white/80 font-bold mb-1">Total Project Investment</div>
      <div className="text-xl font-extrabold text-white">₹32,00,000 – ₹37,00,000 <span className="text-[10px] font-medium text-white/80 block mt-0.5">(Exclusive of GST)</span></div>
    </div>
  </div>
);
