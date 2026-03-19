'use client';

import React, { useState, useRef, useCallback } from 'react';
import { Check, Search, ShoppingBag, Database, Zap, CheckCircle2, Clock, Star, Edit2, FileText, Upload, Shield, Server, Lock, Globe, X, ImageIcon, TrendingUp, Users, BarChart2, MousePointerClick } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useIsMobile } from '@/hooks/use-mobile';
import { PillboxLogo } from '@/components/pillbox-logo';

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
        {["Next.js", "Node.js", "PostgreSQL", "Typesense", "RazorPay", "Payload CMS", "PostHog"].map(tech => (
          <span key={tech} className="bg-[#F3F4F6] text-[#1A1A1A] text-[11px] font-semibold px-3 py-1.5 rounded-full border border-[#E5E7EB]">{tech}</span>
        ))}
      </div>
      <p className="text-[11px] text-[#9CA3AF] italic mt-2 text-center">* Final technology choices will be confirmed during the architecture phase based on project requirements and vendor evaluation.</p>
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
                {["Mobile-First Storefront", "Secure Checkout & RazorPay Integration", "Semantic Search with Typo Tolerance", "Order Management & Fulfillment Admin", "User Authentication & Account Management"].map((item, i) => (
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
                {["Live MSSQL Bi-Directional Inventory Sync", "Dynamic Faceted Filtering", "AI Catalog Engine & Search Enrichment", "Loyalty Points & Referral System", "WhatsApp Notification Automation", "SEO & Headless CMS", "Product Recommendations & Cross-Sell Engine", "Jobs Portal & Candidate Dashboard"].map((item, i) => (
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

const MODULE_DATA: Record<string, { description: string; badges: string[] }> = {
  STOREFRONT: {
    description: "The customer-facing shell of the entire platform. Built mobile-first as a Progressive Web App, the Storefront delivers the homepage experience \u2014 promotional banners with scheduled campaigns, Featured Products, Popular Categories, and a Shop by Brands slider. Navigation is fully accessible via a hamburger menu across all devices and browsers. Every surface is optimised for smartphone users first, with full compatibility across Chrome, Safari, Firefox, and Edge.",
    badges: ["FR-120", "FR-121", "FR-122", "FR-123", "FR-124", "NFR-10", "NFR-11"],
  },
  CATALOG: {
    description: "The foundation of the entire platform. All 2,000+ products are migrated from the existing website and run through an AI pipeline that generates clean, SEO-optimised descriptions, assigns categories, tags, health concern labels, gender attributes, and search keywords to every SKU. Product images are automatically resized and background-removed for a uniform, professional appearance. Nothing goes live without a human review \u2014 every AI-generated output passes through a mandatory admin approval workflow before publishing. Admins have full ongoing control to create, edit, and delete products, categories, brands, and tags at any time.",
    badges: ["FR-701", "FR-702", "FR-703", "FR-704", "FR-705", "FR-710", "FR-711", "FR-712", "FR-713"],
  },
  DISCOVERY: {
    description: "Customers can find what they need even when they don\u2019t know exactly what to search for. The search engine understands natural language, tolerates typos, and returns relevant results in under 300ms. Filters update dynamically based on what\u2019s on screen \u2014 searching \u2018Shampoo\u2019 only shows hair-related filters. When no results match, related products are shown instead of a blank page. Structured browsing pages let customers shop by Category, Brand, Health Concern, Gender, and Best Sellers. Admins can boost specific products or brands for any search term.",
    badges: ["FR-201", "FR-202", "FR-203", "FR-204", "FR-205", "FR-206", "FR-210", "FR-211", "FR-212", "FR-213", "FR-214", "NFR-03"],
  },
  RECOMMENDATIONS: {
    description: "Intelligently surfaces the right products at the right moment to increase basket size. On every Product Detail Page, customers see Frequently Bought Together items drawn from real order history, and Similar Products based on shared ingredients or use cases. On the main cart page, two recommendation layers activate \u2014 low-cost impulse-buy suggestions and complementary items based on what\u2019s already in the cart. Recommendations are deliberately absent from the mini cart and checkout to keep those flows distraction-free.",
    badges: ["FR-103", "FR-104", "FR-112", "FR-113"],
  },
  RETENTION: {
    description: "Turns one-time buyers into repeat customers. Every qualifying purchase earns Pillbox Points, visible on a dedicated loyalty dashboard in the customer\u2019s account. Points are redeemable as a direct discount at checkout \u2014 no monetary value is stored, keeping the system outside RBI regulatory scope. A referral engine gives every customer a unique shareable link \u2014 when a referred friend makes their first purchase, both parties receive a coupon reward. All earning rules and reward values are fully configurable by the admin. The best available discount is automatically applied at checkout without the customer needing to enter a code.",
    badges: ["FR-320", "FR-321", "FR-322", "FR-404"],
  },
  ACCOUNTS: {
    description: "Every customer gets a secure, personalised account. Registration and login are supported via Google, Facebook, Phone OTP, and Email/Password. Visitors can browse and add to cart freely \u2014 login is only required at checkout. Once logged in, customers manage their profile, save multiple shipping addresses, and access their complete order history. Any past order can be reordered in a single click, adding all items directly to the current cart.",
    badges: ["FR-301", "FR-302", "FR-310", "FR-311", "FR-312", "FR-313"],
  },
  INVENTORY: {
    description: "Bridges the digital storefront with Pillbox\u2019s existing Windows-based inventory system. Stock levels across all warehouse and store locations are synced in real time, ensuring what\u2019s shown online accurately reflects what\u2019s physically available \u2014 preventing overselling. Each product can have an admin-configured stock buffer that holds back units for walk-in customers. When an order is placed, the system automatically routes it to the nearest warehouse with available stock based on the customer\u2019s delivery address, with re-allocation support if the assigned warehouse changes.",
    badges: ["FR-501", "FR-502", "FR-503", "FR-504", "FR-505"],
  },
  ORDERS: {
    description: "Covers the complete journey from cart to delivered order. Visitors can add items to cart without logging in \u2014 authentication is only required at the point of checkout. The cart is accessible as a slide-out mini drawer or a full cart page with quantity controls and subtotal view. Checkout is powered by RazorPay, supporting UPI, credit and debit cards, and net banking, with Loyalty Points redeemable as a partial payment. Shipping costs and estimated delivery times are calculated live based on the customer\u2019s address and the nearest stocked warehouse. Post-purchase, customers can track their order in real time via a self-service tracking page or directly from their order history. The platform is built to integrate with multiple shipping carriers for rate calculation, label generation, and pickup scheduling. A Contact Us page captures medical queries, order assistance requests, and B2B leads directly into the admin panel.",
    badges: ["FR-105", "FR-110", "FR-111", "FR-401", "FR-402", "FR-403", "FR-405", "FR-601", "FR-602", "FR-620", "FR-621", "FR-630"],
  },
  NOTIFICATIONS: {
    description: "Keeps customers informed at every stage of their order without any manual effort. Automated one-way WhatsApp messages are triggered at Order Confirmed, Shipped, Out for Delivery, and Delivered. A PDF invoice is generated and sent via WhatsApp on confirmation. If a payment fails, a prompt is sent immediately to encourage retry. Abandoned carts trigger a recovery reminder to bring customers back. A delivery tracking link is also dispatched automatically. Separately, an email newsletter subscription form connects to an email marketing service for campaigns and promotions.",
    badges: ["FR-610", "FR-611", "FR-612", "FR-613", "FR-614", "FR-615", "FR-805", "FR-903"],
  },
  ADMIN: {
    description: "The single backstage interface for the entire platform. Admins manage products, categories, brands, tags, banners, promotions, coupons, loyalty rules, stock buffers, and search boosts from one centralised panel. AI-generated catalog content sits in a review queue awaiting human approval before anything goes live. Contact form submissions are stored and accessible. The candidate pipeline for job applications is fully managed here. Every configurable aspect of the platform \u2014 from homepage layout to fulfillment rules \u2014 is controlled through the Admin panel.",
    badges: ["FR-204", "FR-321", "FR-322", "FR-503", "FR-630", "FR-704", "FR-705", "FR-710", "FR-711", "FR-712", "FR-713", "FR-904"],
  },
  CMS: {
    description: "Gives the Pillbox team full control over content without touching a line of code. A headless CMS powers blog posts, wellness articles, and marketing pages \u2014 publishable by non-technical staff at any time. Every product, category, and content page has editable meta titles and meta descriptions. Open Graph tags are applied across the board, ensuring rich, branded previews when links are shared on WhatsApp, Facebook, or any social platform.",
    badges: ["FR-801", "FR-803", "FR-804"],
  },
  TALENT: {
    description: "A self-contained recruitment system built into the platform. A public Careers page lists open positions organised by department \u2014 Pharmacist, Logistics, Admin, and more. Each listing has its own detail page with an online application form that accepts CV uploads. Applicants receive an automated confirmation email on submission. Listings automatically expire when positions are filled or dates pass. The admin panel includes a full candidate dashboard to sort, filter, and track every applicant through the pipeline.",
    badges: ["FR-901", "FR-902", "FR-903", "FR-904", "FR-905"],
  },
  SEO: {
    description: "Search engine discoverability is built into the platform from the ground up, not added at the end. Every product page has an SEO-friendly URL, meta title, meta description, and Open Graph tags. Product Schema structured data exposes pricing, availability, and ratings directly in Google search results. AI-generated descriptions and keywords are optimised for organic discoverability at the product level. XML sitemaps are automatically generated and kept current as new products are added. The platform is built to meet Core Web Vitals standards, a direct ranking factor for Google.",
    badges: ["FR-102", "FR-802", "FR-803", "FR-804", "FR-806", "FR-807"],
  },
  ANALYTICS: {
    description: "Two complementary analytics layers working in parallel. Google Analytics 4 and Google Tag Manager handle marketing attribution, campaign tracking, conversion funnels, and audience insights \u2014 feeding into the broader Google ecosystem. PostHog sits alongside it as a product analytics layer, capturing session recordings, user behaviour flows, feature usage, and retention cohorts. Together they give the Pillbox team a complete picture of both marketing performance and product experience, with the data needed to make informed decisions at every stage.",
    badges: [],
  },
  SECURITY: {
    description: "Security is not a feature \u2014 it is a baseline. All user data including personal information and loyalty balances is encrypted at rest and in transit. Payment processing is PCI-DSS compliant end to end via RazorPay. The platform is hardened against the OWASP Top 10 \u2014 SQL injection, XSS, CSRF, and related attack vectors. User sessions are managed with secure tokens, appropriate expiry windows, and refresh mechanisms to prevent unauthorised access.",
    badges: ["NFR-04", "NFR-05", "NFR-06", "NFR-07"],
  },
  INFRASTRUCTURE: {
    description: "The backbone that everything else runs on. The platform is architected to support a minimum of 10,000 monthly active users from launch, with horizontal scaling built in to grow well beyond that as Pillbox expands. Page load targets are under 3 seconds on a standard 4G mobile connection across all primary flows. Uptime targets 99.9% availability. The codebase is written to clean architecture principles with clear separation of concerns, comprehensive API documentation, and a structure designed for seamless handover to any future development team.",
    badges: ["NFR-01", "NFR-02", "NFR-08", "NFR-09", "NFR-12", "NFR-13"],
  },
};

const TILE_MODULES = [
  { name: "STOREFRONT", sub: "Mobile-First PWA" }, { name: "CATALOG", sub: "AI Enrichment Engine" }, { name: "DISCOVERY", sub: "Semantic Search Engine" }, { name: "RECOMMENDATIONS", sub: "Conversion Engine" },
  { name: "RETENTION", sub: "Loyalty & Referral Engine" }, { name: "ACCOUNTS", sub: "Profiles & Authentication" }, { name: "INVENTORY", sub: "MSSQL Sync Engine" }, { name: "ORDERS", sub: "Checkout & Fulfillment Engine" },
  { name: "NOTIFICATIONS", sub: "WhatsApp Automation Engine" }, { name: "ADMIN", sub: "Command & Control" }, { name: "CMS", sub: "Headless Content Engine" }, { name: "TALENT", sub: "Careers Portal" },
  { name: "SEO", sub: "Visibility Engine" }, { name: "ANALYTICS", sub: "GA4, Tag Manager & PostHog" }, { name: "SECURITY", sub: "Hardening Layer" }, { name: "INFRASTRUCTURE", sub: "Performance & Reliability Layer" },
];

export const Module3Right = () => {
  const [activeTile, setActiveTile] = useState<number | null>(null);
  const [view, setView] = useState<'grid' | 'drawer'>('grid');
  const [animState, setAnimState] = useState<'idle' | 'grid-out' | 'drawer-in' | 'drawer-out' | 'grid-in'>('idle');
  const [flashedTile, setFlashedTile] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const isMobile = useIsMobile();
  const slideY = isMobile ? '8px' : '12px';

  const handleTileClick = useCallback((i: number) => {
    if (animState !== 'idle') return;
    setFlashedTile(i);
    setTimeout(() => {
      setFlashedTile(null);
      setActiveTile(i);
      setAnimState('grid-out');
      timerRef.current = setTimeout(() => {
        setView('drawer');
        setAnimState('drawer-in');
        timerRef.current = setTimeout(() => {
          setAnimState('idle');
        }, 220);
      }, 180);
    }, 100);
  }, [animState]);

  const handleClose = useCallback(() => {
    if (animState !== 'idle') return;
    setAnimState('drawer-out');
    timerRef.current = setTimeout(() => {
      setView('grid');
      setAnimState('grid-in');
      timerRef.current = setTimeout(() => {
        setAnimState('idle');
        setActiveTile(null);
      }, 220);
    }, 180);
  }, [animState]);

  const gridStyle: React.CSSProperties =
    animState === 'grid-out'
      ? { opacity: 0, transform: 'scale(0.97)', transition: 'opacity 180ms ease-in, transform 180ms ease-in' }
      : animState === 'grid-in'
      ? { opacity: 1, transform: 'scale(1)', transition: 'opacity 220ms ease-out, transform 220ms ease-out' }
      : view === 'grid' && animState === 'idle'
      ? { opacity: 1, transform: 'scale(1)' }
      : { opacity: 0, transform: 'scale(0.97)' };

  const drawerStyle: React.CSSProperties =
    animState === 'drawer-in'
      ? { opacity: 1, transform: 'translateY(0)', transition: 'opacity 220ms ease-out, transform 220ms ease-out' }
      : animState === 'drawer-out'
      ? { opacity: 0, transform: `translateY(${slideY})`, transition: 'opacity 180ms ease-in, transform 180ms ease-in' }
      : view === 'drawer' && animState === 'idle'
      ? { opacity: 1, transform: 'translateY(0)' }
      : { opacity: 0, transform: `translateY(${slideY})` };

  if (view === 'drawer' && activeTile !== null) {
    const tile = TILE_MODULES[activeTile];
    const data = MODULE_DATA[tile.name];
    return (
      <div style={drawerStyle} className="bg-[#0F0F1A] rounded-[16px] w-full max-w-2xl mx-auto overflow-hidden flex flex-col h-full md:h-[520px]">
        <div className="p-5 flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-[18px] font-bold text-white">{tile.name}</h3>
            <div className="text-[13px] text-[#A78BFA]">{tile.sub}</div>
          </div>
          <button onClick={handleClose} className="text-[#6B7280] hover:text-white transition-colors p-1">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="border-b border-[#1E1B3A]" />
        <div className="flex-1 overflow-y-auto p-5 hide-scrollbar">
          <p className="text-[14px] text-[#E5E7EB] leading-[1.7]">{data.description}</p>
          <div className="border-b border-[#1E1B3A] my-4" />
          {data.badges.length > 0 ? (
            <>
              <div className="text-[10px] uppercase tracking-[0.12em] text-[#22C55E] font-semibold mb-3">Requirements Covered</div>
              <div className="flex flex-wrap gap-2">
                {data.badges.map((badge) => (
                  <span key={badge} className="bg-[#2D1B69] text-[#A78BFA] text-[11px] font-semibold px-2.5 py-1 rounded-full">{badge}</span>
                ))}
              </div>
            </>
          ) : (
            <p className="text-[13px] text-[#A78BFA] italic leading-[1.6]">Analytics tooling will be finalised during the architecture phase.</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={gridStyle} className="bg-[#0F0F1A] rounded-[16px] w-full max-w-2xl mx-auto h-full overflow-hidden p-[20px] flex flex-col">
      <div className="grid grid-cols-2 gap-[8px] md:gap-[10px] flex-1">
        {TILE_MODULES.map((m, i) => (
          <div
            key={i}
            onClick={() => handleTileClick(i)}
            className="border border-[#2D2B4E] rounded-[10px] px-[10px] py-[12px] flex flex-col items-center justify-center text-center min-h-[80px] transition-all duration-200 hover:border-[#7C3AED] hover:shadow-[0_0_0_2px_rgba(124,58,237,0.3)] hover:scale-[1.03] cursor-pointer"
            style={{ backgroundColor: flashedTile === i ? '#2D1B69' : '#1E1B3A', transition: 'background-color 100ms ease' }}
          >
            <div className="text-[11px] font-bold text-white tracking-[0.05em]">{m.name}</div>
            <div className="text-[10px] text-[#A78BFA] mt-1 leading-[1.3]">{m.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Module4Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-2xl mx-auto overflow-hidden flex flex-col mt-4 max-h-[80vh] lg:max-h-[600px]">
    <div className="flex text-[11px] font-bold uppercase tracking-wider border-b border-[#E5E7EB] shrink-0">
      <div className="w-1/2 p-4 bg-[#1A1A1A] text-white">BEFORE (WooCommerce)</div>
      <div className="w-1/2 p-4 bg-[#22C55E] text-white">AFTER (New Platform)</div>
    </div>
    <div className="flex-1 overflow-y-auto hide-scrollbar">
      {[
        ["WordPress + WooCommerce theme — generic, shared by thousands", "Purpose-built Next.js PWA — feels and performs like a native mobile app"],
        ["Manual product entry — inconsistent descriptions, missing attributes, uneven images", "AI enrichment pipeline — rewritten descriptions, background-removed images, full tagging"],
        ["Keyword-only search — 'medicin for skin' returns nothing", "Semantic search — intent-aware, typo-tolerant, results in under 300ms"],
        ["Static filters, manually configured, same options regardless of context", "Dynamic filters — change based on what's currently on screen"],
        ["Basic related products by category — largely noise", "Recommendations engine — Frequently Bought Together + Similar Products + cart-level impulse buys"],
        ["No loyalty programme — every purchase is purely transactional", "Pillbox Points on every purchase + referral system with unique links and automatic rewards"],
        ["Email/password and basic social logins, single address, basic order history", "Google, Facebook, Phone OTP, or Email login — multiple addresses, reorder, loyalty dashboard"],
        ["Manual stock updates — perpetually out of sync with physical inventory", "Live MSSQL sync — actual warehouse stock at all times, overselling structurally impossible"],
        ["No multi-warehouse routing — manual shipping management", "Auto-routing to nearest stocked warehouse, live shipping rates calculated at checkout"],
        ["Manual shipment order — customer receives a tracking ID via SMS/WhatsApp and must visit the shipping partner's portal themselves to check status", "Live order tracking built-in — real-time status updates directly on the website, no external links, no manual lookup"],
        ["Shipping partner management handled entirely in the carrier's own portal — admins context-switch constantly", "Shipping partner integration in the Command & Control panel — manage carriers, view shipments, and act on exceptions without leaving the admin"],
        ["Plain WooCommerce order emails to an inbox customers ignore", "WhatsApp automation — confirmations, tracking, abandoned cart recovery, PDF invoices"],
        ["Fragmented WooCommerce admin across disconnected menus and plugins", "Single Command & Control panel — products, promotions, loyalty, stock, content, hiring"],
        ["Content and commerce tangled in WordPress — risky for non-technical staff", "Headless CMS fully decoupled — non-technical staff publish independently without risk"],
        ["SEO as a plugin afterthought — poor Core Web Vitals, limited structured data", "SEO baked into architecture — Product Schema, Open Graph, AI descriptions, auto sitemaps"],
        ["Basic jobs form — applications managed and tracked manually", "Full careers portal — CV uploads, automated responses, candidate dashboard, auto-expiry"],
        ["Plugin-dependent security — WordPress is the most targeted CMS on the internet", "Architectural security — OWASP Top 10, encrypted at rest and in transit, PCI-DSS via RazorPay"],
        ["Shared hosting, degrades under load, a plugin update can break the site", "Built for 10,000+ MAU, sub-3s on 4G mobile, 99.9% uptime, horizontally scalable"],
      ].map((row, i) => (
        <div key={i} className="flex border-b border-[#E5E7EB] last:border-0 text-[12px] leading-relaxed">
          <div className="w-1/2 p-4 bg-[#FFF7ED] text-[#92400E] border-r border-[#E5E7EB]">{row[0]}</div>
          <div className="w-1/2 p-4 bg-[#F0FDF4] text-[#166534] font-medium">{row[1]}</div>
        </div>
      ))}
    </div>
  </div>
);

export const Module5Right = () => (
  <div className="w-full max-w-[320px] mx-auto bg-white rounded-[32px] shadow-xl border-8 border-[#1A1A1A] overflow-hidden h-[580px] flex flex-col relative">
    <div className="bg-white pt-6 pb-3 px-4 border-b border-[#E5E7EB] sticky top-0 z-10">
      <div className="flex justify-between items-center mb-4">
        <PillboxLogo variant="dark" showTagline className="h-6 w-auto" />
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
          { name: "Vitamin C Foaming Face Wash", brand: "Plum", old: "₹299", new: "₹249", badge: "LOW STOCK", badgeColor: "bg-[#FFEDD5] text-[#C2410C]" },
        ].map((p, i) => (
          <div key={i} className="bg-white rounded-xl p-3 border border-[#E5E7EB] relative flex flex-col">
            <div className={`absolute top-2 left-2 ${p.badgeColor} text-[9px] font-bold px-2 py-0.5 rounded-full z-10`}>{p.badge}</div>
            <div className="h-[100px] rounded-lg mb-3 mt-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F3F4F6, #E5E7EB)' }}>
              <ImageIcon className="w-8 h-8 text-[#D1D5DB]" strokeWidth={1.5} />
            </div>
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

export const Module6Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-md mx-auto overflow-hidden">
    <div className="p-5 border-b border-[#E5E7EB] bg-[#F9FAFB] min-h-[260px]">
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
        <input type="text" value="vitamin c for..." readOnly className="w-full pl-9 pr-4 py-3 rounded-xl border border-[#E5E7EB] text-[14px] font-medium text-[#1A1A1A] bg-white focus:outline-none shadow-sm" />
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#E5E7EB] rounded-xl shadow-lg z-20 overflow-hidden">
          {[
            { text: "Vitamin C Face Serum", cat: "Skincare" },
            { text: "Vitamin C + Zinc Tablets", cat: "Supplements" },
            { text: "Vitamin C Foaming Wash", cat: "Face Care" },
          ].map((s, i) => (
            <div key={i} className="px-4 py-3 border-b border-[#E5E7EB] last:border-0 hover:bg-[#F9FAFB] cursor-pointer flex items-center">
              <Search className="w-3.5 h-3.5 text-[#9CA3AF] mr-3" />
              <div className="flex-1 text-[13px] font-medium text-[#1A1A1A]">{s.text}</div>
              <div className="text-[10px] text-[#6B7280] bg-[#F3F4F6] px-2 py-0.5 rounded">{s.cat}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="p-5 bg-white">
      <div className="flex justify-between items-center mb-4">
        <div className="text-[13px] text-[#6B7280] font-medium">Showing 24 results for &apos;vitamin c&apos;</div>
        <div className="text-[11px] font-bold text-[#1A1A1A] flex items-center border border-[#E5E7EB] px-2 py-1 rounded-md">Best Match <span className="ml-1 text-[8px]">▾</span></div>
      </div>
      <div className="space-y-3">
        {[
          { name: "Vitamin C 10% Face Serum", brand: "Minimalist", price: "₹699", score: "98% Match" },
          { name: "Plum 15% Vitamin C Face Serum", brand: "Plum", price: "₹450", score: "95% Match" },
        ].map((p, i) => (
          <div key={i} className="flex items-center p-3 border border-[#E5E7EB] rounded-xl">
            <div className="w-[80px] h-[80px] rounded-lg mr-4 shrink-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F3F4F6, #E5E7EB)' }}>
              <ImageIcon className="w-8 h-8 text-[#D1D5DB]" strokeWidth={1.5} />
            </div>
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

export const Module7Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-sm mx-auto overflow-hidden">
    <div className="bg-[#1E1B3A] p-8 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]" />
      <h3 className="text-[11px] uppercase tracking-[0.12em] text-[#A78BFA] font-semibold mb-3 flex items-center justify-center"><Star className="w-3.5 h-3.5 mr-1.5 fill-current" /> Pillbox Points</h3>
      <div className="text-5xl font-extrabold text-[#C4B5FD] mb-2 tracking-tight">1,240 <span className="text-xl font-medium text-[#A78BFA]">pts</span></div>
      <div className="text-[13px] text-[#A78BFA] mb-8 font-medium">≈ ₹124 discount value</div>
      <div className="bg-white/10 rounded-full h-2.5 w-full mb-3 overflow-hidden">
        <div className="bg-gradient-to-r from-[#3B82F6] to-[#EC4899] h-full w-[60%] rounded-full" />
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

export const Module8Right = () => (
  <div className="bg-[#F9FAFB] rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-md mx-auto overflow-hidden p-8">
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center text-[#8B5CF6] font-semibold text-[11px] uppercase tracking-wider"><div className="w-6 h-6 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center mr-2 text-[12px]">1</div> SHIPPING</div>
      <div className="h-px bg-[#E5E7EB] flex-1 mx-3" />
      <div className="flex items-center text-[#6B7280] font-semibold text-[11px] uppercase tracking-wider"><div className="w-6 h-6 rounded-full bg-[#E5E7EB] text-[#6B7280] flex items-center justify-center mr-2 text-[12px]">2</div> PAYMENT</div>
      <div className="h-px bg-[#E5E7EB] flex-1 mx-3" />
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
        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
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

export const Module9Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-md mx-auto overflow-hidden">
    <div className="p-6 border-b border-[#E5E7EB] flex justify-between items-center bg-[#F9FAFB]">
      <h3 className="text-[11px] uppercase tracking-[0.12em] text-[#1A1A1A] font-bold">Inventory Sync Status</h3>
      <div className="flex items-center bg-[#DCFCE7] text-[#15803D] text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm">
        <span className="w-2 h-2 bg-[#22C55E] rounded-full mr-2 animate-pulse" /> LIVE
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
        { name: "Kochi Outlet", skus: "289 SKUs", status: "Syncing...", icon: <Clock className="w-4 h-4 text-[#8B5CF6] animate-spin-slow" />, buffer: "4 units" },
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

export const Module10Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-md mx-auto p-8">
    <div className="relative pl-8 space-y-8">
      <div className="absolute left-[15px] top-3 bottom-[120px] w-0.5 bg-[#E5E7EB]" />

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
        <div className="absolute -left-[39px] top-1 w-6 h-6 rounded-full bg-white border-[3px] border-[#3B82F6] flex items-center justify-center ring-4 ring-white shadow-sm"><div className="w-2 h-2 bg-[#3B82F6] rounded-full" /></div>
        <div className="bg-white border-2 border-[#3B82F6] rounded-xl p-4 shadow-md">
          <div className="text-[13px] font-bold text-[#3B82F6] mb-1">Out for Delivery</div>
          <div className="text-[12px] text-[#6B7280] leading-relaxed">Notification queued (today)</div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-[39px] top-1 w-6 h-6 rounded-full bg-white border-[3px] border-[#E5E7EB] flex items-center justify-center ring-4 ring-white" />
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

export const Module11Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-2xl mx-auto p-8">
    <div className="flex items-center justify-between mb-10 relative">
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#E5E7EB] -z-10 -translate-y-1/2" />
      {[
        { step: "1", title: "RAW IMPORT", desc: "Scrape existing data" },
        { step: "2", title: "AI ENRICHMENT", desc: "Generate desc + tags" },
        { step: "3", title: "IMAGE PROC.", desc: "Remove bg + resize" },
        { step: "4", title: "ADMIN REVIEW", desc: "Human approval" },
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
          <div className="items-center text-[11px] font-bold text-[#D97706] bg-[#FEF3C7] px-2.5 py-1 rounded-md inline-flex">
            ⏳ Awaiting Review
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Module12Right = () => (
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
          { icon: "⚙️", label: "Settings" },
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

export const Module13Right = () => (
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
        { text: "Blog & Content — Payload CMS integration", status: "pass" },
      ].map((item, i) => (
        <div key={i} className="flex items-start">
          <div className="mt-0.5 mr-3 shrink-0">
            {item.status === 'pass'
              ? <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
              : <div className="w-4 h-4 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center text-[10px] font-bold">!</div>
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

export const Module14Right = () => (
  <div className="bg-[#F9FAFB] rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-md mx-auto overflow-hidden">
    <div className="bg-white p-6 border-b border-[#E5E7EB] text-center">
      <h2 className="text-[16px] font-extrabold text-[#1A1A1A] tracking-tight">JOIN THE PILLBOX TEAM</h2>
      <p className="text-[12px] text-[#6B7280] mt-1">Build the future of pharmacy commerce.</p>
    </div>
    <div className="p-5 space-y-3">
      {[
        { title: "Senior Pharmacist", loc: "Kollam HQ", type: "Full-time", icon: "💊" },
        { title: "Logistics Coordinator", loc: "Trivandrum", type: "Full-time", icon: "🚚" },
        { title: "E-Commerce Executive", loc: "Remote", type: "Full-time", icon: "💻" },
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

export const Module15Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-lg mx-auto p-8">
    <h3 className="text-[11px] uppercase tracking-[0.12em] text-[#1A1A1A] font-bold mb-6 text-center">Security & Infra Stack</h3>
    <div className="space-y-3 relative">
      <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-[#E5E7EB] -z-10" />
      {[
        { l: "LAYER 1", name: "NETWORK", desc: "Cloudflare CDN + WAF | DDoS protection | SSL/TLS everywhere", icon: <Globe className="w-4 h-4 text-[#3B82F6]" /> },
        { l: "LAYER 2", name: "APPLICATION", desc: "OWASP Top 10 hardening | Rate limiting | Input sanitization", icon: <Shield className="w-4 h-4 text-[#8B5CF6]" /> },
        { l: "LAYER 3", name: "AUTH", desc: "JWT access tokens | Refresh token rotation | OAuth | OTP", icon: <Lock className="w-4 h-4 text-[#EC4899]" /> },
        { l: "LAYER 4", name: "DATA", desc: "Encryption at rest + transit | MSSQL secure connector", icon: <Database className="w-4 h-4 text-[#22C55E]" /> },
        { l: "LAYER 5", name: "PAYMENTS", desc: "RazorPay handles card data | PCI-DSS compliant", icon: <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" /> },
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
      <div className="text-[11px] text-[#A78BFA] text-right">Horizontal scaling | Auto-restart<br /><span className="text-white font-bold">Uptime target: 99.9%</span></div>
    </div>
  </div>
);

export const Module16Right = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-xl mx-auto overflow-hidden flex flex-col h-[650px]">
    <div className="p-5 border-b border-[#E5E7EB] bg-[#F9FAFB]">
      <h3 className="text-[11px] uppercase tracking-[0.12em] text-[#22C55E] font-semibold">Delivery Masterplan</h3>
    </div>
    <div className="p-6 overflow-y-auto flex-1 hide-scrollbar">
      <div className="space-y-5 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#E5E7EB] before:to-transparent">
        {[
          { m: "Month 1", title: "FOUNDATION & CORE SETUP", desc: "Architecture, UX design, environment setup" },
          { m: "Month 2", title: "COMMERCE CORE & CHECKOUT", desc: "Storefront, PDP, Cart, Checkout, RazorPay, Auth" },
          { m: "Month 3", title: "SEARCH, FILTERS & AI CATALOG", desc: "Typesense integration, facets, AI migration pipeline, admin review" },
          { m: "Month 4", title: "OPERATIONS, INVENTORY & AUTOMATION", desc: "MSSQL bi-directional sync, WhatsApp automation, order management" },
          { m: "Month 5", title: "DISCOVERY, SEO & CONTENT", desc: "Loyalty, referrals, Payload CMS, SEO hardening, sitemaps, Jobs Portal & Candidate Dashboard" },
          { m: "Month 6", title: "SECURITY, TESTING & LAUNCH", desc: "Security audit, UAT, performance tuning, production deployment" },
        ].map((item, i) => (
          <div key={i} className="relative flex items-start">
            <div className="flex items-center justify-center w-5 h-5 rounded-full border-[3px] border-white bg-[#8B5CF6] shadow-sm shrink-0 z-10 mt-1" />
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
              ["Post-Launch Final Settlement", "₹2,00,000 – ₹7,00,000"],
            ].map((row, i) => (
              <tr key={i} className="even:bg-[#F9FAFB] odd:bg-white hover:bg-[#F3F4F6] transition-colors">
                <td className="py-2.5 px-4 font-semibold text-[#6B7280]">{row[0]}</td>
                <td className="py-2.5 px-4 font-bold text-[#1A1A1A] text-right">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[11px] text-[#9CA3AF] italic mt-3">* All third-party services, platforms, and technology stack choices are indicative. Final selections will be made collaboratively during the project&apos;s architecture and planning phase.</p>

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

export const Module17Right = () => {
  const ga4Capabilities = [
    "Marketing attribution & campaign tracking",
    "Conversion funnels & goal completions",
    "Audience demographics & acquisition source",
    "Google Ads & Search Console integration",
  ];

  const posthogCapabilities = [
    "Session recordings & user behaviour flows",
    "Feature usage tracking & adoption metrics",
    "Retention cohort analysis",
    "Product funnel drop-off identification",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] w-full max-w-xl mx-auto overflow-hidden">
      <div className="p-5 border-b border-[#E5E7EB] bg-[#F9FAFB]">
        <h3 className="text-[11px] uppercase tracking-[0.12em] text-[#22C55E] font-semibold">Two Complementary Analytics Layers</h3>
      </div>

      {/* Two-layer split */}
      <div className="grid grid-cols-2 divide-x divide-[#E5E7EB]">
        {/* GA4 + GTM */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-lg bg-[#FEF3C7] flex items-center justify-center shrink-0">
              <BarChart2 className="w-4 h-4 text-[#F59E0B]" />
            </div>
            <div>
              <div className="text-[12px] font-extrabold text-[#1A1A1A] leading-none">GA4 + GTM</div>
            </div>
          </div>
          <div className="text-[10px] font-semibold text-[#F59E0B] uppercase tracking-wider mb-3">Marketing Layer</div>
          <ul className="space-y-2">
            {ga4Capabilities.map((cap, i) => (
              <li key={i} className="flex items-start gap-2 text-[11px] text-[#6B7280] leading-relaxed">
                <span className="text-[#F59E0B] mt-0.5 shrink-0">•</span> {cap}
              </li>
            ))}
          </ul>
        </div>

        {/* PostHog */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-lg bg-[#F3E8FF] flex items-center justify-center shrink-0">
              <MousePointerClick className="w-4 h-4 text-[#8B5CF6]" />
            </div>
            <div>
              <div className="text-[12px] font-extrabold text-[#1A1A1A] leading-none">PostHog</div>
            </div>
          </div>
          <div className="text-[10px] font-semibold text-[#8B5CF6] uppercase tracking-wider mb-3">Product Layer</div>
          <ul className="space-y-2">
            {posthogCapabilities.map((cap, i) => (
              <li key={i} className="flex items-start gap-2 text-[11px] text-[#6B7280] leading-relaxed">
                <span className="text-[#8B5CF6] mt-0.5 shrink-0">•</span> {cap}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Combined view */}
      <div className="border-t border-[#E5E7EB] px-5 py-4 bg-[#F9FAFB]">
        <div className="text-[10px] uppercase tracking-wider text-[#6B7280] font-bold mb-3">Together They Answer</div>
        <div className="grid grid-cols-1 gap-2">
          {[
            { q: "Where are customers coming from?", tag: "GA4", color: "#F59E0B", bg: "#FEF3C7" },
            { q: "Where in the funnel are they dropping off?", tag: "Both", color: "#3B82F6", bg: "#EFF6FF" },
            { q: "Which features do they actually use?", tag: "PostHog", color: "#8B5CF6", bg: "#F3E8FF" },
            { q: "Are returning users engaging with loyalty?", tag: "PostHog", color: "#8B5CF6", bg: "#F3E8FF" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between bg-white border border-[#E5E7EB] rounded-lg px-3 py-2.5 shadow-sm">
              <span className="text-[11px] text-[#1A1A1A] font-medium">{item.q}</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ml-3" style={{ color: item.color, background: item.bg }}>{item.tag}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1E1B3A] px-5 py-3 text-center">
        <div className="text-[11px] text-[#A78BFA] font-medium">Complete picture of both marketing performance and product experience — from first click to repeat purchase.</div>
      </div>
    </div>
  );
};
