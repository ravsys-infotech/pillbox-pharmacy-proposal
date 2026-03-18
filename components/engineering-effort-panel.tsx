'use client';

import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

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

const SUMMARY = {
  woo: 'Meaningful development effort — branded theme customization, custom search and filter logic, Google & Facebook OAuth, RazorPay live authorization, and a shipment sync integration.',
  custom: 'Every capability engineered from scratch — no plugins, no shortcuts, no ceiling. Each of the 16 engines is designed, built, integrated, and tested as original code. The WooCommerce site took real effort. This is a different category of work entirely.',
};

function Tag({ type }: { type: TagType }) {
  const { label, bg, color } = TAG_CONFIG[type];
  return (
    <span
      style={{
        display: 'inline-block',
        backgroundColor: bg,
        color,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        padding: '2px 9px',
        borderRadius: 10,
        marginBottom: 8,
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
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Tag type={data.tag} />
      <div style={{ fontSize: 14, fontWeight: 600, color: '#E5E7EB', marginBottom: 5, lineHeight: 1.3 }}>{data.name}</div>
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
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Tag type={data.tag} />
      <div style={{ fontSize: 14, fontWeight: 600, color: '#818CF8', marginBottom: 5, lineHeight: 1.3 }}>{data.name}</div>
      <div style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>{data.desc}</div>
    </div>
  );
}

const PLATFORM_LABEL_WOO: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.07em',
  textTransform: 'uppercase',
  color: '#4B5563',
  marginBottom: 5,
  textAlign: 'center',
};

const PLATFORM_LABEL_PILLBOX: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.07em',
  textTransform: 'uppercase',
  color: '#6366F1',
  marginBottom: 5,
  textAlign: 'center',
};

export function EngineeringEffortPanel() {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        background: '#0B0C14',
        borderRadius: 16,
        width: '100%',
        maxWidth: 760,
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      {/* Inner: scrolls on desktop, flows naturally on mobile */}
      <div
        className="hide-scrollbar"
        style={{
          overflowY: isMobile ? 'visible' : 'auto',
          maxHeight: isMobile ? 'none' : '76vh',
          padding: '18px 18px 28px',
        }}
      >
        {/* Legend */}
        <div
          style={{
            display: 'flex',
            gap: 6,
            flexWrap: 'wrap',
            marginBottom: 16,
            paddingBottom: 14,
            borderBottom: '0.5px solid rgba(255,255,255,0.07)',
          }}
        >
          <span style={{ fontSize: 12, color: '#4B5563', fontWeight: 500, alignSelf: 'center', marginRight: 4 }}>Effort level:</span>
          {(Object.keys(TAG_CONFIG) as TagType[]).map((type) => (
            <Tag key={type} type={type} />
          ))}
        </div>

        {/* Column headers — desktop only */}
        {!isMobile && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 6, padding: '0 2px' }}>
            <div style={PLATFORM_LABEL_WOO}>WooCommerce</div>
            <div style={PLATFORM_LABEL_PILLBOX}>Pillbox platform</div>
          </div>
        )}

        {/* Sections */}
        {SECTIONS.map((section, si) => (
          <div key={si} style={{ marginBottom: 6 }}>
            {/* Section divider + label */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                margin: si === 0 ? '8px 0 10px' : '18px 0 10px',
                position: 'relative',
              }}
            >
              <div style={{ height: '0.5px', width: 10, background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#374151',
                  whiteSpace: 'nowrap',
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                {section.label}
              </span>
              <div style={{ height: '0.5px', flex: 1, background: 'rgba(255,255,255,0.06)' }} />
            </div>

            {/* Rows */}
            {section.rows.map((row, ri) => (
              <div key={ri} style={{ marginBottom: 10 }}>
                {/* Capability label */}
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#6B7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: 6,
                    padding: '0 2px',
                  }}
                >
                  {row.capability}
                </div>

                {isMobile ? (
                  /* Mobile: stacked, each card labelled */
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div>
                      <div style={PLATFORM_LABEL_WOO}>WooCommerce</div>
                      <WooCell data={row.woo} />
                    </div>
                    <div>
                      <div style={PLATFORM_LABEL_PILLBOX}>Pillbox platform</div>
                      <PillboxCell data={row.custom} />
                    </div>
                  </div>
                ) : (
                  /* Desktop: side by side */
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, alignItems: 'stretch' }}>
                    <WooCell data={row.woo} />
                    <PillboxCell data={row.custom} />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* Summary */}
        <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.07)', marginTop: 18, paddingTop: 14 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: 8,
            }}
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '0.5px solid rgba(255,255,255,0.1)',
                borderRadius: 10,
                padding: '14px 16px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4B5563', marginBottom: 8, fontWeight: 600 }}>
                WooCommerce
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.55, color: '#9CA3AF' }}>{SUMMARY.woo}</div>
            </div>
            <div
              style={{
                background: 'rgba(99,102,241,0.08)',
                border: '0.5px solid rgba(99,102,241,0.28)',
                borderRadius: 10,
                padding: '14px 16px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#6366F1', marginBottom: 8, fontWeight: 600 }}>
                Pillbox platform
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.55, color: '#818CF8' }}>{SUMMARY.custom}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
