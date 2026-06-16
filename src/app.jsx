/**
 * Nihon Naukri Navigator Pvt. Ltd. — Main Website
 *
 * ── SUPABASE SETUP (one-time, ~10 minutes) ──────────────────────────────────
 * 1. Go to https://supabase.com → Sign up free → Create a new project
 * 2. In the Supabase dashboard → SQL Editor → run the SQL from supabase-setup.sql
 * 3. Go to Project Settings → API → copy "Project URL" and "anon public" key
 * 4. Paste them below in the SUPABASE CONFIG section
 * 5. Run: npm install @supabase/supabase-js
 * ────────────────────────────────────────────────────────────────────────────
 */

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// ── SUPABASE CONFIG ──────────────────────────────────────────────────────────
// Replace these two values with your own from supabase.com → Project Settings → API
const SUPABASE_URL = "https://jgogbevnpmewkmzvtggd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impnb2diZXZucG1ld2ttenZ0Z2dkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1ODc4ODksImV4cCI6MjA5NzE2Mzg4OX0.RKDeKDlfX7GwEYiAS771Pa87kzYQheRMrdr9kbh7RTA";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// ────────────────────────────────────────────────────────────────────────────

// ── COLORS ──────────────────────────────────────────────────────────────────
// Primary: #003366 (deep navy)  |  Accent: #C8960C (gold)  |  Light: #F5F7FA

// ────────────────────────────────────────────────────────────────────────────
// NAVBAR
// ────────────────────────────────────────────────────────────────────────────
function Navbar({ onPortalClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      background: scrolled ? "rgba(0,30,60,0.97)" : "#003366",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      position: "sticky", top: 0, zIndex: 1000,
      boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
      transition: "all 0.3s"
    }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 clamp(12px, 5vw, 24px)", display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 60, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 42, height: 42, background: "#C8960C", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: 16 }}>N³</span>
          </div>
          <div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(13px, 2vw, 15px)", lineHeight: 1.2 }}>Nihon Naukri Navigator</div>
            <div style={{ color: "#C8960C", fontSize: "clamp(8px, 1vw, 10px)", letterSpacing: 1.5, textTransform: "uppercase" }}>Pvt. Ltd.</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "clamp(12px, 3vw, 28px)", alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }}>
          {["Home", "Services", "How It Works", "Clients", "Testimonials", "About"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              style={{ color: "#cdd8e8", textDecoration: "none", fontSize: "clamp(11px, 2vw, 13px)", fontWeight: 500, display: "none", "@media (minWidth: 1024px)": { display: "block" } }}
              onMouseEnter={e => e.target.style.color = "#C8960C"}
              onMouseLeave={e => e.target.style.color = "#cdd8e8"}>
              {item}
            </a>
          ))}
          <button onClick={onPortalClick}
            style={{ background: "#C8960C", color: "#fff", border: "none", borderRadius: 6, padding: "8px 16px", fontWeight: 700, fontSize: "clamp(11px, 2vw, 13px)", cursor: "pointer", whiteSpace: "nowrap" }}>
            Login / Register
          </button>
        </div>
      </div>
    </nav>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// HERO
// ────────────────────────────────────────────────────────────────────────────
function Hero({ onPortalClick }) {
  return (
    <section id="home" style={{ background: "linear-gradient(135deg, #001428 0%, #003366 55%, #004080 100%)", minHeight: "clamp(70vh, 100vh, 100vh)", display: "flex", alignItems: "center" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(40px, 8vw, 80px) clamp(16px, 5vw, 24px)", display: "flex", alignItems: "center", gap: "clamp(30px, 5vw, 60px)", flexWrap: "wrap", width: "100%" }}>
        <div style={{ flex: "1 1 clamp(300px, 100%, 500px)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,150,12,0.15)", border: "1px solid #C8960C", borderRadius: 4, padding: "5px 14px", marginBottom: 24, flexWrap: "wrap" }}>
            <span style={{ fontSize: "clamp(12px, 2vw, 14px)" }}>🇮🇳 → 🇯🇵</span>
            <span style={{ color: "#C8960C", fontSize: "clamp(10px, 1.5vw, 12px)", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>India–Japan Engineering Talent Bridge</span>
          </div>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.5rem, 6vw, 3rem)", fontWeight: 800, lineHeight: 1.2, margin: "0 0 20px" }}>
            Placing India's Best Engineers at <span style={{ color: "#C8960C" }}>Japan's Leading Companies</span>
          </h1>
          <p style={{ color: "#a8becc", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.9, margin: "0 0 36px" }}>
            Nihon Naukri Navigator Pvt. Ltd. is a specialist HR recruitment firm connecting high-calibre Indian engineering talent with top Japanese corporations. We handle everything — sourcing, screening, visa guidance, and onboarding — so both sides can focus on what matters most.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button onClick={onPortalClick}
              style={{ background: "#C8960C", color: "#fff", border: "none", borderRadius: 8, padding: "clamp(10px, 2vw, 14px) clamp(20px, 4vw, 32px)", fontWeight: 700, fontSize: "clamp(13px, 2vw, 15px)", cursor: "pointer", whiteSpace: "nowrap" }}>
              Get Started →
            </button>
            <a href="#how-it-works"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.25)", borderRadius: 8, padding: "clamp(10px, 2vw, 14px) clamp(20px, 4vw, 32px)", fontWeight: 600, fontSize: "clamp(13px, 2vw, 15px)", textDecoration: "none", display: "inline-block", whiteSpace: "nowrap" }}>
              Learn More
            </a>
          </div>
        </div>

        <div style={{ flex: "1 1 clamp(250px, 100%, 380px)", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "clamp(20px, 4vw, 32px)" }}>
          {[
            { number: "200+", label: "Japanese Companies Served" },
            { number: "5,000+", label: "Engineers Successfully Placed" },
            { number: "15+", label: "Engineering Domains Covered" },
            { number: "97%", label: "Placement Success Rate" },
          ].map(({ number, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 2vw, 20px)", padding: "clamp(12px, 2vw, 16px) 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ minWidth: "clamp(60px, 15vw, 80px)", color: "#C8960C", fontSize: "clamp(18px, 4vw, 24px)", fontWeight: 800 }}>{number}</div>
              <div style={{ color: "#a8becc", fontSize: "clamp(12px, 1.5vw, 13px)" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// SERVICES
// ────────────────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: "⚙️", title: "Engineering Talent Sourcing", desc: "Specialized sourcing of mechanical, electrical, civil, and IT engineers from India's top institutions and companies." },
  { icon: "🇯🇵", title: "Japan-Ready Candidate Prep", desc: "We prepare candidates with cultural orientation, basic Japanese language guidance, and workplace etiquette training." },
  { icon: "📋", title: "End-to-End Screening", desc: "Rigorous technical assessments, background checks, and multi-round interviews to ensure only the best are shortlisted." },
  { icon: "✈️", title: "Visa & Relocation Support", desc: "Full assistance with Japanese work visa documentation, travel logistics, and initial settlement support for placed engineers." },
  { icon: "🤝", title: "Contract & Permanent Staffing", desc: "Flexible staffing models — short-term project contracts or permanent placements, based on company requirements." },
  { icon: "📊", title: "HR Consulting", desc: "Strategic advisory to Japanese companies on building diverse India-sourced engineering teams at scale." },
];

function Services() {
  return (
    <section id="services" style={{ background: "#F5F7FA", padding: "clamp(60px, 10vw, 96px) clamp(16px, 5vw, 24px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader tag="What We Offer" title="Our Recruitment Services" subtitle="Comprehensive end-to-end solutions for placing Indian engineering talent in Japanese companies." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(clamp(250px, 100%, 300px), 1fr))", gap: "clamp(16px, 3vw, 24px)" }}>
          {SERVICES.map(({ icon, title, desc }) => (
            <div key={title}
              style={{ background: "#fff", borderRadius: 12, padding: "clamp(20px, 4vw, 30px)", border: "1px solid #e2e8f0", cursor: "default", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,51,102,0.1)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
              <div style={{ fontSize: "clamp(28px, 5vw, 34px)", marginBottom: 14 }}>{icon}</div>
              <h3 style={{ color: "#003366", fontWeight: 700, fontSize: "clamp(15px, 2.5vw, 17px)", margin: "0 0 10px" }}>{title}</h3>
              <p style={{ color: "#5a6a7a", fontSize: "clamp(13px, 1.5vw, 14px)", lineHeight: 1.75, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// HOW IT WORKS
// ────────────────────────────────────────────────────────────────────────────
const STEPS = [
  { step: "01", title: "Register Your Profile", desc: "Candidates submit their engineering profile. Employers post their job opening with requirements." },
  { step: "02", title: "Screening & Matching", desc: "Our team shortlists candidates through technical screening, and matches them to the right Japanese company." },
  { step: "03", title: "Interview & Selection", desc: "We coordinate interviews between shortlisted engineers and Japanese hiring teams, with translation support if needed." },
  { step: "04", title: "Offer, Visa & Onboarding", desc: "We assist with offer negotiation, Japanese work visa paperwork, and smooth onboarding on day one." },
];

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: "#fff", padding: "clamp(60px, 10vw, 96px) clamp(16px, 5vw, 24px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader tag="Our Process" title="How It Works" subtitle="A transparent, four-step process designed for speed and precision." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(clamp(200px, 100%, 240px), 1fr))", gap: "clamp(24px, 4vw, 32px)" }}>
          {STEPS.map(({ step, title, desc }, i) => (
            <div key={step} style={{ textAlign: "center" }}>
              <div style={{ width: "clamp(60px, 12vw, 68px)", height: "clamp(60px, 12vw, 68px)", background: "#003366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                <span style={{ color: "#C8960C", fontWeight: 900, fontSize: "clamp(16px, 3vw, 20px)" }}>{step}</span>
              </div>
              <h3 style={{ color: "#003366", fontWeight: 700, fontSize: "clamp(14px, 2.5vw, 16px)", margin: "0 0 10px" }}>{title}</h3>
              <p style={{ color: "#5a6a7a", fontSize: "clamp(13px, 1.5vw, 14px)", lineHeight: 1.75, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// CLIENTS LOGOS — Fetched live from Supabase `clients` table
// Add / remove logos anytime via the Supabase dashboard → Table Editor → clients
// ────────────────────────────────────────────────────────────────────────────
function ClientsSection() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchClients() {
      try {
        const { data, error } = await supabase
          .from("clients")
          .select("*")
          .eq("is_active", true)
          .order("sort_order", { ascending: true });
        if (error) throw error;
        setClients(data || []);
      } catch (err) {
        console.error("Could not load clients:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchClients();
  }, []);

  // Fallback placeholder logos shown while Supabase has no entries yet
  const placeholders = [
    "Toyota", "Hitachi", "Fujitsu", "Panasonic", "Mitsubishi", "Sony", "NEC", "Toshiba"
  ];

  return (
    <section id="clients" style={{ background: "#F5F7FA", padding: "clamp(60px, 10vw, 80px) clamp(16px, 5vw, 24px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(32px, 6vw, 52px)" }}>
          <h2 style={{ color: "#003366", fontSize: "clamp(1.5rem, 5vw, 2.2rem)", fontWeight: 800, margin: 0 }}>Trusted By</h2>
        </div>

        {loading && (
          <div style={{ textAlign: "center", color: "#8a9ab0", padding: "clamp(20px, 4vw, 32px)" }}>Loading clients...</div>
        )}

        {!loading && clients.length > 0 && (
          <div className="carousel-container">
            <div className="carousel-track">
              {[...clients, ...clients].map((client, idx) => (
                <div key={`${client.id}-${idx}`}
                  className="carousel-item"
                  style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "clamp(12px, 2vw, 16px) clamp(16px, 3vw, 28px)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "clamp(60px, 12vw, 80px)", transition: "all 0.2s", cursor: "pointer" }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,51,102,0.1)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
                  {client.logo_url ? (
                    <img src={client.logo_url} alt={client.name} style={{ maxHeight: "clamp(36px, 8vw, 48px)", maxWidth: "clamp(80px, 20vw, 120px)", objectFit: "contain" }} />
                  ) : (
                    <span style={{ color: "#003366", fontWeight: 700, fontSize: "clamp(13px, 2vw, 15px)" }}>{client.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {!loading && clients.length === 0 && (
          <>
            <p style={{ textAlign: "center", color: "#8a9ab0", fontSize: "clamp(12px, 2vw, 13px)", marginBottom: 28 }}>
              (Sample clients — add your real clients via Supabase dashboard)
            </p>
            <div className="carousel-container">
              <div className="carousel-track">
                {[...placeholders, ...placeholders].map((name, idx) => (
                  <div key={`${name}-${idx}`}
                    className="carousel-item"
                    style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "clamp(12px, 2vw, 20px) clamp(16px, 3vw, 32px)", textAlign: "center", color: "#003366", fontWeight: 700, fontSize: "clamp(13px, 2vw, 15px)", opacity: 0.6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS
// ────────────────────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    role: "Mechanical Engineer → Toyota Manufacturing, Nagoya",
    quote: "I never imagined I'd be working at Toyota straight out of my career pivot. Nihon Naukri Navigator guided me through every step — from resume prep to visa documentation. The cultural orientation training was a game-changer.",
    rating: 5,
    avatar: "AM",
  },
  {
    name: "Priya Venkataraman",
    role: "Embedded Systems Engineer → Hitachi, Tokyo",
    quote: "What impressed me most was how thorough the screening process was. By the time I sat for the interview at Hitachi, I felt fully prepared. I was placed within 6 weeks of first contacting N3.",
    rating: 5,
    avatar: "PV",
  },
  {
    name: "Rohit Sharma",
    role: "Civil Engineer → Mitsubishi Estate, Osaka",
    quote: "The team's knowledge of both Indian engineering standards and Japanese work culture is remarkable. They didn't just place me — they set me up for long-term success in Japan.",
    rating: 5,
    avatar: "RS",
  },
  {
    name: "Deepika Nair",
    role: "Software Engineer → Fujitsu, Yokohama",
    quote: "I had applied to Japan-based jobs through other agencies with no luck. Nihon Naukri Navigator had direct relationships with hiring managers at Fujitsu — I had an offer within a month.",
    rating: 5,
    avatar: "DN",
  },
];

function StarRating({ count }) {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#C8960C", fontSize: 16 }}>★</span>
      ))}
    </div>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" style={{ background: "#fff", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader tag="Success Stories" title="What Our Candidates Say" subtitle="Real engineers who found their dream roles in Japan through Nihon Naukri Navigator." />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i}
              style={{
                background: i === active ? "#003366" : "#F5F7FA",
                borderRadius: 16, padding: 28,
                border: i === active ? "none" : "1px solid #e2e8f0",
                cursor: "pointer", transition: "all 0.25s",
                display: "flex", flexDirection: "column", textAlign: "center"
              }}
              onClick={() => setActive(i)}
              onMouseEnter={e => { if (i !== active) e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,51,102,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
                <StarRating count={t.rating} />
              </div>
              <p style={{ color: i === active ? "#cdd8e8" : "#4a5a6a", fontSize: 14, lineHeight: 1.85, margin: "0 0 24px", fontStyle: "italic", flex: 1 }}>
                "{t.quote}"
              </p>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: i === active ? "#C8960C" : "#003366", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{t.avatar}</span>
                </div>
                <div>
                  <div style={{ color: i === active ? "#fff" : "#003366", fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                  <div style={{ color: i === active ? "#C8960C" : "#6a7f90", fontSize: 12, marginTop: 2 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// ABOUT / CTA
// ────────────────────────────────────────────────────────────────────────────
function About({ onPortalClick }) {
  return (
    <section id="about" style={{ background: "linear-gradient(135deg, #003366, #00508a)", padding: "clamp(60px, 10vw, 96px) clamp(16px, 5vw, 24px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div style={{ color: "#C8960C", fontSize: "clamp(10px, 1.5vw, 12px)", fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>About Us</div>
        <h2 style={{ color: "#fff", fontSize: "clamp(1.4rem, 5vw, 2.4rem)", fontWeight: 800, margin: "0 0 24px" }}>
          Why Choose Nihon Naukri Navigator?
        </h2>
        <p style={{ color: "#a8becc", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.9, margin: "0 0 20px" }}>
          Founded with a singular mission — to be the most trusted bridge between India's engineering talent pool and Japan's world-class industry — Nihon Naukri Navigator Pvt. Ltd. brings deep expertise in both markets. We understand what Japanese companies need and what Indian engineers bring to the table.
        </p>
        <p style={{ color: "#a8becc", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.9, margin: "0 0 40px" }}>
          Whether you're an engineer looking to build a career in Japan, or a Japanese company seeking skilled, motivated engineers from India, we are your dedicated, end-to-end recruitment partner.
        </p>
        <button onClick={onPortalClick}
          style={{ background: "#C8960C", color: "#fff", border: "none", borderRadius: 8, padding: "clamp(12px, 2vw, 16px) clamp(24px, 5vw, 40px)", fontWeight: 700, fontSize: "clamp(14px, 2vw, 16px)", cursor: "pointer" }}>
          Register Now — It's Free
        </button>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// PORTAL — Employee & Employer forms → saved to Supabase
// ────────────────────────────────────────────────────────────────────────────
function InputField({ label, type = "text", placeholder, required, options, value, onChange }) {
  const base = {
    width: "100%", padding: "clamp(8px, 1.5vw, 11px) clamp(10px, 2vw, 14px)", border: "1px solid #d1dbe8",
    borderRadius: 6, fontSize: "clamp(13px, 1.5vw, 14px)", color: "#1a2a3a", background: "#fff",
    outline: "none", boxSizing: "border-box", fontFamily: "inherit"
  };
  return (
    <div style={{ marginBottom: "clamp(12px, 2vw, 18px)" }}>
      <label style={{ display: "block", color: "#003366", fontWeight: 600, fontSize: "clamp(12px, 1.5vw, 13px)", marginBottom: 6 }}>
        {label}{required && <span style={{ color: "#C8960C" }}> *</span>}
      </label>
      {type === "select" ? (
        <select value={value} onChange={e => onChange(e.target.value)} style={base}>
          <option value="">— Select —</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : type === "textarea" ? (
        <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={4}
          style={{ ...base, resize: "vertical" }} />
      ) : type === "file" ? (
        <input type="file" onChange={e => onChange(e.target.files?.[0]?.name || "")} style={base}
          onFocus={e => e.target.style.borderColor = "#003366"}
          onBlur={e => e.target.style.borderColor = "#d1dbe8"} />
      ) : (
        <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={base}
          onFocus={e => e.target.style.borderColor = "#003366"}
          onBlur={e => e.target.style.borderColor = "#d1dbe8"} />
      )}
    </div>
  );
}

function SectionDivider({ label, accent }) {
  return (
    <div style={{ background: "#f0f4f8", borderRadius: 8, padding: "clamp(8px, 2vw, 12px) clamp(12px, 2vw, 16px)", margin: "4px 0 clamp(16px, 3vw, 22px)", borderLeft: `4px solid ${accent || "#003366"}` }}>
      <p style={{ margin: 0, color: "#003366", fontSize: "clamp(12px, 1.5vw, 13px)", fontWeight: 600 }}>{label}</p>
    </div>
  );
}

function EmployeeForm() {
  const init = { name: "", email: "", phone: "", dob: "", gender: "", address: "", qualification: "", experience: "", currentRole: "", currentCompany: "", skills: "", expectedSalary: "", noticePeriod: "", linkedin: "", resume: "", coverLetter: "" };
  const [form, setForm] = useState(init);
  const [status, setStatus] = useState("idle");
  const [errMsg, setErrMsg] = useState("");
  const set = (key) => (val) => setForm(f => ({ ...f, [key]: val }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("employee_registrations").insert([{
      name: form.name, email: form.email, phone: form.phone, dob: form.dob,
      gender: form.gender, address: form.address, qualification: form.qualification,
      experience: form.experience, job_role: form.currentRole, current_company: form.currentCompany,
      skills: form.skills, expected_salary: form.expectedSalary, notice_period: form.noticePeriod,
      linkedin: form.linkedin, resume: form.resume, cover_letter: form.coverLetter,
    }]);
    if (error) { setErrMsg(error.message); setStatus("error"); }
    else setStatus("success");
  }

  if (status === "success") return (
    <div style={{ textAlign: "center", padding: "clamp(32px, 6vw, 56px) clamp(16px, 4vw, 20px)" }}>
      <div style={{ fontSize: "clamp(40px, 8vw, 52px)", marginBottom: 14 }}>✅</div>
      <h3 style={{ color: "#003366", fontSize: "clamp(18px, 4vw, 22px)", fontWeight: 700, margin: "0 0 10px" }}>Profile Submitted!</h3>
      <p style={{ color: "#5a6a7a", fontSize: "clamp(13px, 2vw, 15px)" }}>Thank you, {form.name || "Candidate"}! Our team will review your profile and reach out within 2–3 business days.</p>
      <button onClick={() => { setStatus("idle"); setForm(init); }}
        style={{ marginTop: 20, background: "#003366", color: "#fff", border: "none", borderRadius: 6, padding: "10px 28px", fontWeight: 600, cursor: "pointer", fontSize: "clamp(13px, 2vw, 14px)" }}>
        Submit Another
      </button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 720, margin: "0 auto" }}>
      <SectionDivider label="📄 Personal Information" accent="#003366" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(clamp(200px, 100%, 300px), 1fr))", gap: "clamp(12px, 2vw, 22px)" }}>
        <InputField label="Full Name" placeholder="Arjun Mehta" required value={form.name} onChange={set("name")} />
        <InputField label="Email Address" type="email" placeholder="arjun@example.com" required value={form.email} onChange={set("email")} />
        <InputField label="Phone Number" type="tel" placeholder="+91 98765 43210" required value={form.phone} onChange={set("phone")} />
        <InputField label="Date of Birth" type="date" required value={form.dob} onChange={set("dob")} />
        <InputField label="Gender" type="select" options={["Male", "Female", "Non-binary", "Prefer not to say"]} value={form.gender} onChange={set("gender")} />
        <InputField label="Current City / State" placeholder="Bengaluru, Karnataka" value={form.address} onChange={set("address")} />
      </div>

      <SectionDivider label="💼 Professional Details" accent="#C8960C" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(clamp(200px, 100%, 300px), 1fr))", gap: "clamp(12px, 2vw, 22px)" }}>
        <InputField label="Highest Qualification" type="select" options={["Diploma", "B.E / B.Tech", "M.E / M.Tech", "MBA", "MCA", "PhD", "Other"]} required value={form.qualification} onChange={set("qualification")} />
        <InputField label="Total Experience" type="select" options={["Fresher (0 yrs)", "0–1 Year", "1–3 Years", "3–5 Years", "5–10 Years", "10+ Years"]} required value={form.experience} onChange={set("experience")} />
        <InputField label="Current / Last Job Title" placeholder="Mechanical Engineer" value={form.currentRole} onChange={set("currentRole")} />
        <InputField label="Current / Last Company" placeholder="Tata Motors" value={form.currentCompany} onChange={set("currentCompany")} />
        <InputField label="Expected Salary (Japan, per year)" placeholder="e.g. ¥4,000,000 or ₹30,00,000" value={form.expectedSalary} onChange={set("expectedSalary")} />
        <InputField label="Notice Period" type="select" options={["Immediate", "15 Days", "30 Days", "45 Days", "60 Days", "90 Days"]} value={form.noticePeriod} onChange={set("noticePeriod")} />
      </div>
      <InputField label="Key Technical Skills" placeholder="e.g. AutoCAD, SolidWorks, PLC, Python, VLSI, Civil design..." required value={form.skills} onChange={set("skills")} />
      <InputField label="LinkedIn Profile URL" type="url" placeholder="https://linkedin.com/in/yourprofile" value={form.linkedin} onChange={set("linkedin")} />
      <InputField label="Resume Upload (PDF or DOC)" type="file" required onChange={set("resume")} />
      <InputField label="Cover Letter Upload (PDF or DOC)" type="file" onChange={set("coverLetter")} />

      {status === "error" && (
        <div style={{ background: "#fff5f5", border: "1px solid #ffb3b3", borderRadius: 6, padding: "12px 16px", marginBottom: 16, color: "#c00", fontSize: "clamp(12px, 1.5vw, 13px)" }}>
          ⚠️ Submission failed: {errMsg}. Please check your Supabase configuration.
        </div>
      )}

      <button type="submit" disabled={status === "loading"}
        style={{ width: "100%", background: status === "loading" ? "#6a8ab0" : "#003366", color: "#fff", border: "none", borderRadius: 8, padding: "clamp(12px, 2vw, 14px)", fontWeight: 700, fontSize: "clamp(14px, 2vw, 16px)", cursor: status === "loading" ? "default" : "pointer", marginTop: 8 }}>
        {status === "loading" ? "Submitting..." : "Submit My Profile →"}
      </button>
    </form>
  );
}

function EmployerForm() {
  const init = { companyName: "", industry: "", contactName: "", contactEmail: "", contactPhone: "", website: "", jobTitle: "", department: "", vacancies: "", jobType: "", workMode: "", location: "", salary: "", experience: "", qualification: "", skills: "", responsibilities: "", description: "" };
  const [form, setForm] = useState(init);
  const [status, setStatus] = useState("idle");
  const [errMsg, setErrMsg] = useState("");
  const set = (key) => (val) => setForm(f => ({ ...f, [key]: val }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("employer_registrations").insert([{
      company_name: form.companyName, industry: form.industry, contact_name: form.contactName,
      contact_email: form.contactEmail, contact_phone: form.contactPhone, website: form.website,
      job_title: form.jobTitle, department: form.department, vacancies: form.vacancies,
      job_type: form.jobType, work_mode: form.workMode, location: form.location,
      salary: form.salary, experience: form.experience, qualification: form.qualification,
      skills: form.skills, responsibilities: form.responsibilities, description: form.description,
    }]);
    if (error) { setErrMsg(error.message); setStatus("error"); }
    else setStatus("success");
  }

  if (status === "success") return (
    <div style={{ textAlign: "center", padding: "clamp(32px, 6vw, 56px) clamp(16px, 4vw, 20px)" }}>
      <div style={{ fontSize: "clamp(40px, 8vw, 52px)", marginBottom: 14 }}>🎉</div>
      <h3 style={{ color: "#003366", fontSize: "clamp(18px, 4vw, 22px)", fontWeight: 700, margin: "0 0 10px" }}>Job Posted Successfully!</h3>
      <p style={{ color: "#5a6a7a", fontSize: "clamp(13px, 2vw, 15px)" }}>Thank you, {form.companyName}! Our recruiters will begin sourcing Indian engineers and contact you within 24 hours.</p>
      <button onClick={() => { setStatus("idle"); setForm(init); }}
        style={{ marginTop: 20, background: "#C8960C", color: "#fff", border: "none", borderRadius: 6, padding: "10px 28px", fontWeight: 600, cursor: "pointer", fontSize: "clamp(13px, 2vw, 14px)" }}>
        Post Another Role
      </button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 720, margin: "0 auto" }}>
      <SectionDivider label="🏢 Company Information" accent="#003366" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(clamp(200px, 100%, 300px), 1fr))", gap: "clamp(12px, 2vw, 22px)" }}>
        <InputField label="Company Name" placeholder="Mitsubishi Electric Co., Ltd." required value={form.companyName} onChange={set("companyName")} />
        <InputField label="Industry / Sector" type="select" options={["Automotive", "Electronics & Semiconductor", "Mechanical Engineering", "Construction & Civil", "IT & Software", "Energy", "Aerospace", "Chemical", "Robotics", "Other"]} required value={form.industry} onChange={set("industry")} />
        <InputField label="Contact Person Name" placeholder="Yamamoto Kenji" required value={form.contactName} onChange={set("contactName")} />
        <InputField label="Official Email" type="email" placeholder="hr@mitsubishi.co.jp" required value={form.contactEmail} onChange={set("contactEmail")} />
        <InputField label="Contact Phone" type="tel" placeholder="+81 3 1234 5678" required value={form.contactPhone} onChange={set("contactPhone")} />
        <InputField label="Company Website" type="url" placeholder="https://www.mitsubishielectric.com" value={form.website} onChange={set("website")} />
      </div>

      <SectionDivider label="📌 Job Requirements" accent="#C8960C" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(clamp(200px, 100%, 300px), 1fr))", gap: "clamp(12px, 2vw, 22px)" }}>
        <InputField label="Job Title / Role" placeholder="Senior Mechanical Engineer" required value={form.jobTitle} onChange={set("jobTitle")} />
        <InputField label="Department" placeholder="R&D / Manufacturing / QA..." value={form.department} onChange={set("department")} />
        <InputField label="Number of Vacancies" type="number" placeholder="2" required value={form.vacancies} onChange={set("vacancies")} />
        <InputField label="Job Type" type="select" options={["Full-Time Permanent", "Contract (6 months)", "Contract (1 year)", "Project-Based"]} required value={form.jobType} onChange={set("jobType")} />
        <InputField label="Work Location (Japan)" placeholder="Tokyo / Osaka / Nagoya..." required value={form.location} onChange={set("location")} />
        <InputField label="Work Mode" type="select" options={["On-site", "Hybrid", "Remote"]} value={form.workMode} onChange={set("workMode")} />
        <InputField label="Offered Salary (JPY per year)" placeholder="e.g. ¥4,500,000 – ¥6,000,000" value={form.salary} onChange={set("salary")} />
        <InputField label="Required Experience" type="select" options={["Fresher / 0–1 Year", "1–3 Years", "3–5 Years", "5–10 Years", "10+ Years"]} required value={form.experience} onChange={set("experience")} />
        <InputField label="Minimum Qualification" type="select" options={["Any Graduate", "B.E / B.Tech", "M.E / M.Tech", "MBA / PGDM", "PhD"]} value={form.qualification} onChange={set("qualification")} />
      </div>
      <InputField label="Required Technical Skills" placeholder="e.g. CATIA, ANSYS, PLC programming, Java, circuit design..." required value={form.skills} onChange={set("skills")} />
      <InputField label="Key Responsibilities" type="textarea" placeholder="Describe the main duties and day-to-day work for this role..." required value={form.responsibilities} onChange={set("responsibilities")} />
      <InputField label="Additional Notes / Company Culture" type="textarea" placeholder="Perks, relocation package, visa sponsorship details, growth opportunities, team size..." value={form.description} onChange={set("description")} />

      {status === "error" && (
        <div style={{ background: "#fff5f5", border: "1px solid #ffb3b3", borderRadius: 6, padding: "12px 16px", marginBottom: 16, color: "#c00", fontSize: "clamp(12px, 1.5vw, 13px)" }}>
          ⚠️ Submission failed: {errMsg}. Please check your Supabase configuration.
        </div>
      )}

      <button type="submit" disabled={status === "loading"}
        style={{ width: "100%", background: status === "loading" ? "#a07010" : "#C8960C", color: "#fff", border: "none", borderRadius: 8, padding: "clamp(12px, 2vw, 14px)", fontWeight: 700, fontSize: "clamp(14px, 2vw, 16px)", cursor: status === "loading" ? "default" : "pointer", marginTop: 8 }}>
        {status === "loading" ? "Posting..." : "Post This Job →"}
      </button>
    </form>
  );
}

function Portal({ onClose }) {
  const [tab, setTab] = useState("employee");
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,15,35,0.8)", zIndex: 2000, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "clamp(12px, 3vw, 24px) clamp(12px, 3vw, 16px)", overflowY: "auto" }}>
      <div style={{ background: "#fff", borderRadius: 16, width: "100%", maxWidth: 840, boxShadow: "0 24px 80px rgba(0,0,0,0.5)", marginBottom: 24 }}>
        <div style={{ background: "#003366", borderRadius: "16px 16px 0 0", padding: "clamp(16px, 3vw, 24px) clamp(16px, 3vw, 32px)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            <h2 style={{ color: "#fff", margin: 0, fontSize: "clamp(18px, 4vw, 21px)", fontWeight: 800 }}>Nihon Naukri Navigator — Portal</h2>
            <p style={{ color: "#a8becc", margin: "4px 0 0", fontSize: "clamp(12px, 2vw, 13px)" }}>Register as an engineer or post a job opening</p>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", width: 36, height: 36, borderRadius: "50%", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>✕</button>
        </div>

        <div style={{ display: "flex", borderBottom: "2px solid #e2e8f0", flexWrap: "wrap" }}>
          {[{ key: "employee", label: "🎓 I'm an Engineer" }, { key: "employer", label: "🏢 I'm Hiring (Employer)" }].map(({ key, label }) => (
            <button key={key} onClick={() => setTab(key)}
              style={{ flex: "1 1 auto", minWidth: "160px", padding: "clamp(12px, 2vw, 18px)", border: "none", background: "none", cursor: "pointer", fontSize: "clamp(13px, 2vw, 15px)", fontWeight: 700, color: tab === key ? "#003366" : "#8a9ab0", borderBottom: tab === key ? "3px solid #C8960C" : "3px solid transparent", marginBottom: -2, transition: "all 0.2s" }}>
              {label}
            </button>
          ))}
        </div>

        <div style={{ padding: "clamp(20px, 4vw, 32px)" }}>
          {tab === "employee" ? (
            <>
              <p style={{ color: "#5a6a7a", fontSize: "clamp(13px, 2vw, 14px)", margin: "0 0 24px", lineHeight: 1.75 }}>
                Fill in your engineering profile and our team will match you with the best opportunities in Japan. All information is kept confidential.
              </p>
              <EmployeeForm />
            </>
          ) : (
            <>
              <p style={{ color: "#5a6a7a", fontSize: "clamp(13px, 2vw, 14px)", margin: "0 0 24px", lineHeight: 1.75 }}>
                Post your open engineering role and our recruiters will source, screen, and shortlist top Indian engineers for you — fast.
              </p>
              <EmployerForm />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// FOOTER
// ────────────────────────────────────────────────────────────────────────────
function Footer({ onPortalClick }) {
  return (
    <footer style={{ background: "#001020", padding: "clamp(40px, 8vw, 60px) clamp(16px, 5vw, 24px) clamp(20px, 4vw, 28px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(clamp(160px, 100%, 200px), 1fr))", gap: "clamp(24px, 5vw, 40px)", marginBottom: "clamp(32px, 6vw, 48px)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, background: "#C8960C", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#fff", fontWeight: 900, fontSize: 14 }}>N³</span>
              </div>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(12px, 2vw, 14px)" }}>Nihon Naukri Navigator</span>
            </div>
            <p style={{ color: "#4a6070", fontSize: "clamp(12px, 1.5vw, 13px)", lineHeight: 1.8, margin: "0 0 14px" }}>
              Bridging India's engineering talent with Japan's world-class industry.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{ fontSize: "clamp(16px, 3vw, 20px)" }}>🇮🇳</span>
              <span style={{ color: "#C8960C", fontSize: "clamp(14px, 3vw, 18px)", fontWeight: 700 }}>→</span>
              <span style={{ fontSize: "clamp(16px, 3vw, 20px)" }}>🇯🇵</span>
            </div>
          </div>

          <div>
            <h4 style={{ color: "#C8960C", fontSize: "clamp(9px, 1.2vw, 11px)", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", margin: "0 0 16px", textAlign: "left" }}>Quick Links</h4>
            {["Home", "Services", "How It Works", "Clients", "Testimonials", "About"].map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                style={{ display: "block", color: "#4a6070", textDecoration: "none", fontSize: "clamp(12px, 1.5vw, 13px)", marginBottom: 9, textAlign: "left" }}
                onMouseEnter={e => e.target.style.color = "#C8960C"}
                onMouseLeave={e => e.target.style.color = "#4a6070"}>
                {link}
              </a>
            ))}
          </div>

          <div>
            <h4 style={{ color: "#C8960C", fontSize: "clamp(9px, 1.2vw, 11px)", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", margin: "0 0 16px", textAlign: "left" }}>Portal</h4>
            {["Engineer Registration", "Employer / Post a Job"].map(label => (
              <button key={label} onClick={onPortalClick}
                style={{ display: "block", background: "none", border: "none", color: "#4a6070", fontSize: "clamp(12px, 1.5vw, 13px)", cursor: "pointer", padding: "0 0 9px", textAlign: "left", fontFamily: "inherit" }}
                onMouseEnter={e => e.target.style.color = "#C8960C"}
                onMouseLeave={e => e.target.style.color = "#4a6070"}>
                {label}
              </button>
            ))}
          </div>

          <div>
            <h4 style={{ color: "#C8960C", fontSize: "clamp(9px, 1.2vw, 11px)", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", margin: "0 0 16px", textAlign: "left" }}>Contact</h4>
            {[
              { icon: "🌐", text: "nihonnaukrinavigator.com" },
              { icon: "📧", text: "contact@nihonnaukrinavigator.com" },
              { icon: "📍", text: "India & Japan Operations" },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: "clamp(11px, 2vw, 13px)" }}>{icon}</span>
                <span style={{ color: "#4a6070", fontSize: "clamp(12px, 1.5vw, 13px)" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #0d2030", paddingTop: 24, textAlign: "center" }}>
          <p style={{ color: "#2a3f50", fontSize: "clamp(11px, 1.5vw, 12px)", margin: 0 }}>
            © {new Date().getFullYear()} Nihon Naukri Navigator Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// SHARED HELPER
// ────────────────────────────────────────────────────────────────────────────
function SectionHeader({ tag, title, subtitle }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "clamp(32px, 6vw, 52px)" }}>
      <div style={{ color: "#C8960C", fontSize: "clamp(9px, 1.2vw, 11px)", fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>{tag}</div>
      <h2 style={{ color: "#003366", fontSize: "clamp(1.4rem, 5vw, 2.2rem)", fontWeight: 800, margin: "0 0 14px" }}>{title}</h2>
      {subtitle && <p style={{ color: "#5a6a7a", fontSize: "clamp(13px, 2vw, 15px)", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>{subtitle}</p>}
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// APP ROOT
// ────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [portalOpen, setPortalOpen] = useState(false);
  const open = () => setPortalOpen(true);
  const close = () => setPortalOpen(false);

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", margin: 0, padding: 0 }}>
      <Navbar onPortalClick={open} />
      <Hero onPortalClick={open} />
      <Services />
      <HowItWorks />
      <ClientsSection />
      <Testimonials />
      <About onPortalClick={open} />
      <Footer onPortalClick={open} />
      {portalOpen && <Portal onClose={close} />}
    </div>
  );
}
