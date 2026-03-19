'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type TagType = 'install' | 'code' | 'engineer';

interface CellData {
  tag: TagType;
  name: string;
  desc: string;
}

interface Row {
  capability: string;
  woo: CellData;
  custom: CellData;
}

interface Section {
  label: string;
  rows: Row[];
}

const TAG_CONFIG: Record<TagType, { label: string; bg: string; color: string }> = {
  install: { label: 'Install & configure', bg: 'rgba(96,165,250,0.10)', color: '#60A5FA' },
  code: { label: 'Write code', bg: 'rgba(251,191,36,0.12)', color: '#FBBF24' },
  engineer: { label: 'Engineer from scratch', bg: 'rgba(52,211,153,0.12)', color: '#34D399' },
};

const SECTIONS: Section[] = [
  {
    label: 'Storefront & Catalog',
    rows: [
      {
        capability: 'Storefront',
        woo: { tag: 'code', name: 'Customize theme to brand', desc: 'Selected a WordPress theme and hand-coded the brand customization — colours, typography, layout, and custom page templates — until the site looked and felt like Pillbox, not a generic WooCommerce store.' },
        custom: { tag: 'engineer', name: 'Design + build a PWA from zero', desc: 'No theme to start from. Every screen, component, route, animation, and interaction designed and coded from scratch in Next.js. Mobile-first layout, SSR rendering strategy, image optimization pipeline, lazy loading, Core Web Vitals budgets — every decision made deliberately and built by hand.' },
      },
      {
        capability: 'Product catalog',
        woo: { tag: 'install', name: 'Use WooCommerce product fields', desc: 'Products are WordPress posts. Fields exist out of the box. Data entry is manual.' },
        custom: { tag: 'engineer', name: 'Build an AI enrichment pipeline', desc: 'Design the product data schema from scratch. Build the migration pipeline to import 2,000+ SKUs. Integrate an AI model to rewrite every description, assign categories, tags, health concerns, and gender attributes. Automate image background removal and resizing. Build the admin review workflow so nothing goes live without human sign-off. All original engineering.' },
      },
    ],
  },
  {
    label: 'Search & Discovery',
    rows: [
      {
        capability: 'Product search',
        woo: { tag: 'code', name: 'Write custom search logic', desc: 'Custom search queries written on top of WooCommerce. Functional for basic use cases, but built on a system with a hard ceiling — no typo tolerance, no relevance scoring, no real-time adaptation.' },
        custom: { tag: 'engineer', name: 'Build a semantic search engine', desc: 'Stand up and configure Typesense. Design the index schema for 2,000+ pharmacy SKUs. Build the NLP query pipeline that understands intent rather than matching keywords. Write synonym rules, relevance boost logic, and typo tolerance tuning. Wire real-time re-indexing so every catalog change is reflected instantly. Then build the search UI — results page, highlight rendering, empty state fallback — all original code.' },
      },
      {
        capability: 'Filtering',
        woo: { tag: 'code', name: 'Write filter logic', desc: 'Custom filter UI and query logic written from scratch on top of WooCommerce taxonomy queries. Works, but options are static — they don\'t adapt based on what the customer is looking at.' },
        custom: { tag: 'engineer', name: 'Build a dynamic faceting engine', desc: 'Facets are not configured upfront — they\'re computed live from whatever search results are currently on screen. The logic that decides which filters to show, in which order, and with which counts is designed, built, and tested as entirely original code. Searching "shampoo" shows hair-relevant filters. Searching "vitamin C" shows a completely different set.' },
      },
      {
        capability: 'Recommendations',
        woo: { tag: 'install', name: 'Install a related products plugin', desc: 'Plugin pulls related products by shared category. No order history, no cart logic. Configuration only.' },
        custom: { tag: 'engineer', name: 'Build a recommendations engine', desc: 'Design the co-purchase data model. Build the pipeline that mines real order history to compute affinity scores between products. Implement three separate surfaces — Frequently Bought Together on the PDP, Similar Products below it, and two distinct impulse-buy layers in the cart — each with its own logic, ranking, and display rules. All original engineering.' },
      },
    ],
  },
  {
    label: 'Commerce & Retention',
    rows: [
      {
        capability: 'Checkout & payments',
        woo: { tag: 'code', name: 'Integrate RazorPay and go live', desc: 'Installed the plugin, wrote integration hooks, and went through RazorPay\'s live authorization process — submitting business documents, verifying bank accounts, and getting production API access approved before the first transaction could happen.' },
        custom: { tag: 'engineer', name: 'Build the checkout engine', desc: 'Every step of the checkout flow designed and coded as one coherent system — address selection, loyalty point redemption, automatic best-discount logic, RazorPay payment integration (with the same live authorization process), webhook handling for payment confirmation, post-order inventory deduction, and the trigger that fires the WhatsApp confirmation. No plugin owns any part of this flow.' },
      },
      {
        capability: 'Authentication',
        woo: { tag: 'code', name: 'Integrate Google & Facebook OAuth', desc: 'OAuth integrations for Google and Facebook sign-in written and wired into WooCommerce accounts — configuring app credentials, handling callback flows, and mapping social profiles to WooCommerce users.' },
        custom: { tag: 'engineer', name: 'Build a multi-provider auth system', desc: 'Design the auth architecture from scratch. Implement Google OAuth, Facebook OAuth, Phone OTP via SMS, and Email/password login — four separate flows, each engineered individually. Build JWT issuance, refresh token rotation, session invalidation, and account linking so a user who signs in with Google and previously used email gets the same account. All original code, no auth plugin.' },
      },
      {
        capability: 'Loyalty & referral',
        woo: { tag: 'install', name: 'Install a points plugin', desc: "Generic earn/redeem rules configured via plugin settings. No referral system. No awareness of Pillbox's business rules or RBI compliance requirements." },
        custom: { tag: 'engineer', name: 'Build the loyalty engine', desc: 'Design the points ledger as an append-only transaction log. Build earn rules tied to order value, tier thresholds, and configurable multipliers. Engineer the referral system — unique link generation, first-purchase detection, dual-sided reward issuance. Wire point redemption directly into checkout so the discount applies automatically. Ensure the entire system stays within RBI guidelines by keeping redemption as discount-only, with no monetary float. Every rule configurable by the admin without touching code.' },
      },
    ],
  },
  {
    label: 'Inventory & Operations',
    rows: [
      {
        capability: 'Inventory',
        woo: { tag: 'install', name: 'Use WooCommerce stock fields', desc: 'A number typed into a field. No connection to any warehouse system. Accuracy depends entirely on manual updates.' },
        custom: { tag: 'engineer', name: 'Build the MSSQL sync engine', desc: 'Design the bi-directional sync architecture between the platform and Pillbox\'s existing MSSQL warehouse system. Build the connector, handle schema differences, implement per-SKU stock buffer thresholds, route orders to the nearest stocked warehouse automatically, and build the conflict resolution logic for simultaneous updates. Stock changes in the warehouse reflect on the website within seconds — overselling is structurally impossible.' },
      },
      {
        capability: 'Shipping integration',
        woo: { tag: 'code', name: 'Build order fetch integration', desc: 'Custom code written to automatically fetch order and delivery status from the shipping partner\'s API and sync it back into WooCommerce — replacing what would otherwise be entirely manual tracking updates.' },
        custom: { tag: 'engineer', name: 'Build the shipping engine', desc: 'Design a carrier abstraction layer so the platform isn\'t locked to one partner. Build the full API integration — live rate fetching at checkout, automatic order push on payment confirmation, real-time tracking status sync back to the customer\'s account, shipping label generation, and an admin view for managing shipments and exceptions — all without leaving the platform.' },
      },
      {
        capability: 'Notifications',
        woo: { tag: 'install', name: 'WooCommerce email templates', desc: 'Order status emails configured via WordPress settings. No WhatsApp, no PDF invoice, no abandoned cart recovery.' },
        custom: { tag: 'engineer', name: 'Build the WhatsApp automation engine', desc: 'Design the event-trigger architecture — every order state transition fires a structured event that the notification engine consumes. Build the WhatsApp Business API integration from scratch, implement WABA-compliant template messaging, generate PDF invoices dynamically on order confirmation, and engineer the abandoned cart detection system that identifies drop-off timing and triggers recovery messages automatically. All original code.' },
      },
    ],
  },
  {
    label: 'Content, SEO & Admin',
    rows: [
      {
        capability: 'SEO',
        woo: { tag: 'install', name: 'Install an SEO plugin', desc: 'Yoast or RankMath installed. Meta fields filled in manually. Rendering strategy, Core Web Vitals, and structured data remain unchanged.' },
        custom: { tag: 'engineer', name: 'Architect SEO into the platform', desc: 'SEO is an architectural decision made before a single page is built. Server-side rendering strategy chosen and enforced across every route. Product Schema and Review Schema generated dynamically on every PDP. XML sitemaps auto-generated and updated on catalog changes. Canonical URL logic, Open Graph tags, and Twitter Card metadata engineered into the rendering layer. Core Web Vitals targets set upfront and validated — not retrofitted after launch.' },
      },
      {
        capability: 'Admin panel',
        woo: { tag: 'install', name: 'Use WordPress WP-Admin', desc: 'Default admin UI. Each plugin adds its own disconnected menu. No unified view, no custom workflows.' },
        custom: { tag: 'engineer', name: 'Build the command & control panel', desc: 'A single admin interface designed and built to cover every operational surface of the platform — product catalog CRUD, promotional banner scheduling, loyalty rule configuration, inventory buffer thresholds, search boost overrides, CMS content publishing, and candidate pipeline management. Non-technical Pillbox staff can run every part of the business without touching code or switching between disconnected tools.' },
      },
    ],
  },
  {
    label: 'Security & Infrastructure',
    rows: [
      {
        capability: 'Security',
        woo: { tag: 'install', name: 'Install a security plugin', desc: 'Wordfence or similar installed. Rules configured. Hardening sits on top of WordPress — the attack surface remains the same.' },
        custom: { tag: 'engineer', name: 'Design a 5-layer security architecture', desc: 'Security is specced before the first line of code. Network layer: firewall rules, rate limiting, DDoS protection. Application layer: OWASP Top 10 hardening, input validation, CSRF protection. Auth layer: JWT with short-lived tokens and refresh rotation, no session storage. Data layer: encryption at rest and in transit, no plaintext PII. Payments layer: PCI-DSS compliance delegated entirely to RazorPay\'s vault — Pillbox never touches raw card data. Each layer implemented and tested independently.' },
      },
      {
        capability: 'Infrastructure',
        woo: { tag: 'install', name: 'Choose a hosting plan', desc: "A managed WordPress host selected and configured. No architectural decisions made — the platform dictates what's possible." },
        custom: { tag: 'engineer', name: 'Architect for scale', desc: 'Infrastructure decisions are made upfront, not figured out when things break. Containerized deployment, horizontal scaling policy, CDN routing for static and edge-cached assets, auto-restart on failure, health check endpoints, zero-downtime deployment strategy, and a 99.9% uptime SLA — all specced, implemented, and load-tested before a single user hits production.' },
      },
    ],
  },
];

function Tag({ type }: { type: TagType }) {
  const { label, bg, color } = TAG_CONFIG[type];
  return (
    <span
      style={{
        display: 'inline-block',
        backgroundColor: bg,
        color,
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        padding: '2px 8px',
        borderRadius: 10,
        marginBottom: 6,
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  );
}

function WooCell({ data }: { data: CellData }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '0.5px solid rgba(255,255,255,0.1)',
        borderRadius: 10,
        padding: '12px 14px',
        flex: 1,
      }}
    >
      <Tag type={data.tag} />
      <div style={{ fontSize: 14, fontWeight: 600, color: '#E5E7EB', marginBottom: 4, lineHeight: 1.3 }}>{data.name}</div>
      <div style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>{data.desc}</div>
    </div>
  );
}

function PillboxCell({ data }: { data: CellData }) {
  return (
    <div
      style={{
        background: 'rgba(99,102,241,0.08)',
        border: '0.5px solid rgba(99,102,241,0.28)',
        borderRadius: 10,
        padding: '12px 14px',
        flex: 1,
      }}
    >
      <Tag type={data.tag} />
      <div style={{ fontSize: 14, fontWeight: 600, color: '#818CF8', marginBottom: 4, lineHeight: 1.3 }}>{data.name}</div>
      <div style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>{data.desc}</div>
    </div>
  );
}

// Flatten all rows into individual carousel items
const ITEMS = SECTIONS.flatMap((section) =>
  section.rows.map((row) => ({ ...row, section: section.label }))
);

function SlideContent({ item, isMobile }: { item: typeof ITEMS[number]; isMobile: boolean }) {
  return (
    <div style={{ padding: '16px 18px 20px' }}>
      {/* Capability label */}
      <div
        style={{
          fontSize: 12,
          fontWeight: 600,
          color: '#6B7280',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          textAlign: 'center',
          marginBottom: 10,
        }}
      >
        {item.capability}
      </div>

      {isMobile ? (
        /* Mobile: stacked tiles, each labelled */
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4B5563', textAlign: 'center', marginBottom: 6 }}>
              WooCommerce
            </div>
            <WooCell data={item.woo} />
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#6366F1', textAlign: 'center', marginBottom: 6 }}>
              Pillbox platform
            </div>
            <PillboxCell data={item.custom} />
          </div>
        </div>
      ) : (
        /* Desktop: side by side with column headers */
        <>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 8 }}>
            <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4B5563', textAlign: 'center' }}>
              WooCommerce
            </div>
            <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#6366F1', textAlign: 'center' }}>
              Pillbox platform
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'stretch' }}>
            <WooCell data={item.woo} />
            <PillboxCell data={item.custom} />
          </div>
        </>
      )}
    </div>
  );
}

const MOBILE_BREAKPOINT = 768;

export function EngineeringEffortPanel() {
  // Detect mobile synchronously in useLayoutEffect so it's known before
  // the measurement pass runs — avoids the short→tall height jump on mobile.
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileKnown, setIsMobileKnown] = useState(false);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [bodyHeight, setBodyHeight] = useState<number | undefined>(undefined);
  const measureRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    setIsMobileKnown(true);
  }, []);

  // Re-measure when mobile/desktop switches (orientation change, resize)
  useEffect(() => {
    const handler = () => {
      const next = window.innerWidth < MOBILE_BREAKPOINT;
      if (next !== isMobile) {
        setIsMobile(next);
        setBodyHeight(undefined);
      }
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [isMobile]);

  useLayoutEffect(() => {
    if (!isMobileKnown || bodyHeight || !measureRef.current) return;
    let max = 0;
    for (const child of Array.from(measureRef.current.children)) {
      max = Math.max(max, (child as HTMLElement).offsetHeight);
    }
    if (max > 0) setBodyHeight(max);
  });

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => { if (current > 0) goTo(current - 1); };
  const next = () => { if (current < ITEMS.length - 1) goTo(current + 1); };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
  };

  const item = ITEMS[current];

  return (
    <div
      style={{
        background: '#0B0C14',
        borderRadius: 16,
        width: '100%',
        maxWidth: 760,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Header: legend + nav */}
      <div
        style={{
          padding: '14px 18px 12px',
          borderBottom: '0.5px solid rgba(255,255,255,0.07)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          flexShrink: 0,
        }}
      >
        {/* Legend */}
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 11, color: '#4B5563', fontWeight: 500, marginRight: 2 }}>Effort:</span>
          {(Object.keys(TAG_CONFIG) as TagType[]).map((type) => (
            <Tag key={type} type={type} />
          ))}
        </div>

        {/* Nav arrows */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
          <button
            onClick={prev}
            disabled={current === 0}
            style={{
              background: current === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.08)',
              border: '0.5px solid rgba(255,255,255,0.1)',
              borderRadius: 8,
              width: 28,
              height: 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: current === 0 ? 'not-allowed' : 'pointer',
              opacity: current === 0 ? 0.35 : 1,
              transition: 'opacity 0.15s',
            }}
          >
            <ChevronLeft size={14} color="#9CA3AF" />
          </button>
          <button
            onClick={next}
            disabled={current === ITEMS.length - 1}
            style={{
              background: current === ITEMS.length - 1 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.08)',
              border: '0.5px solid rgba(255,255,255,0.1)',
              borderRadius: 8,
              width: 28,
              height: 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: current === ITEMS.length - 1 ? 'not-allowed' : 'pointer',
              opacity: current === ITEMS.length - 1 ? 0.35 : 1,
              transition: 'opacity 0.15s',
            }}
          >
            <ChevronRight size={14} color="#9CA3AF" />
          </button>
        </div>
      </div>

      {/* Carousel body — fixed to tallest slide height once measured */}
      <div
        style={{ position: 'relative', overflow: 'hidden', ...(bodyHeight ? { height: bodyHeight } : {}) }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Hidden measurement pass — only once isMobile is known, so layout matches */}
        {isMobileKnown && !bodyHeight && (
          <div
            ref={measureRef}
            style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', top: 0, left: 0, right: 0 }}
            aria-hidden
          >
            {ITEMS.map((it, i) => (
              <SlideContent key={i} item={it} isMobile={isMobile ?? false} />
            ))}
          </div>
        )}
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={{
              enter: (d: number) => ({ x: d * 56, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d * -56, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
          >
            <SlideContent item={item} isMobile={isMobile ?? false} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators + labels */}
      <div
        style={{
          padding: '10px 18px 14px',
          borderTop: '0.5px solid rgba(255,255,255,0.07)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'center' }}>
          {ITEMS.map((it, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              title={it.capability}
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: i === current ? '#6366F1' : 'rgba(255,255,255,0.12)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'width 0.2s ease, background 0.2s ease',
              }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#6366F1',
            }}
          >
            {item.capability}
          </div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#374151',
            }}
          >
            {item.section}
          </div>
        </div>
      </div>
    </div>
  );
}
