"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";

const SmokeParticles = dynamic(() => import("@/components/SmokeParticles"), { ssr: false });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  }),
};

const G = "#7EE83A";

const categories = [
  { label: "Vapes & E-Cigs",  icon: "💨", desc: "Disposables, mods, pods & juice" },
  { label: "Glass & Pipes",   icon: "🔮", desc: "Hand pipes, bubblers & bongs" },
  { label: "Accessories",     icon: "✨", desc: "Lighters, papers, trays & more" },
  { label: "CBD & Wellness",  icon: "🌿", desc: "Oils, gummies & topicals" },
  { label: "Hookahs",         icon: "🪔", desc: "Full sets & shisha tobacco" },
  { label: "Cigars & Wraps",  icon: "🚬", desc: "Premium cigars, blunts & wraps" },
];

const featuredImages = [
  { src: "/selection1.jpg", alt: "Featured selection" },
  { src: "/pic1.jpg",       alt: "Product shot" },
  { src: "/pic2.jpg",       alt: "Product shot" },
];

export default function Home() {
  return (
    <AgeGate>
      <Navbar />
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>

        {/* ─── HERO ─── */}
        <section
          style={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            background: "radial-gradient(ellipse at 50% 55%, #0c1f08 0%, #0a0a0a 65%)",
          }}
        >
          <SmokeParticles />

          <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: 640, margin: "0 auto" }}>
            <motion.div
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}
            >
              <Image
                src="/logo.jpg"
                alt="Cloud 9 Depot"
                width={130}
                height={130}
                priority
                style={{
                  borderRadius: "50%",
                  boxShadow: `0 0 0 3px ${G}44, 0 0 40px ${G}44`,
                }}
              />
            </motion.div>

            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: G,
                textShadow: `0 0 40px ${G}66`,
                lineHeight: 1.05,
                marginBottom: 20,
              }}
            >
              Cloud 9 Depot
            </motion.h1>

            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              style={{ fontSize: "1.1rem", color: "#999", lineHeight: 1.7, marginBottom: 36 }}
            >
              Akron&apos;s go-to smoke shop — vapes, glass, accessories & more.
              <br />
              <span style={{ color: G, fontWeight: 500 }}>Open daily · 9 AM – 11 PM</span>
            </motion.p>

            <motion.div
              custom={3} variants={fadeUp} initial="hidden" animate="visible"
              style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
            >
              <Link href="/gallery" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                padding: "12px 32px", borderRadius: 999,
                background: G, color: "#0a0a0a",
                fontWeight: 700, fontSize: "0.95rem",
                boxShadow: `0 0 20px ${G}66`,
                textDecoration: "none",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 36px ${G}99`; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${G}66`; (e.currentTarget as HTMLElement).style.transform = ""; }}
              >
                View Gallery
              </Link>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                padding: "12px 32px", borderRadius: 999,
                background: "transparent",
                border: `2px solid ${G}`,
                color: G,
                fontWeight: 600, fontSize: "0.95rem",
                textDecoration: "none",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = G; (e.currentTarget as HTMLElement).style.color = "#0a0a0a"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = G; }}
              >
                Find Us
              </Link>
            </motion.div>
          </div>

          {/* scroll cue */}
          <motion.div
            style={{ position: "absolute", bottom: 32, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
          >
            <span style={{ color: "#444", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Scroll</span>
            <motion.div
              style={{ width: 2, height: 32, borderRadius: 4, background: `linear-gradient(to bottom, ${G}, transparent)` }}
              animate={{ scaleY: [1, 0.3, 1], opacity: [0.8, 0.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            />
          </motion.div>
        </section>

        {/* ─── WHAT WE CARRY ─── */}
        <section style={{ padding: "100px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: 60 }}
            >
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: G, marginBottom: 12, textShadow: `0 0 30px ${G}44` }}>
                What We Carry
              </h2>
              <p style={{ color: "#666", fontSize: "1rem", maxWidth: 380, margin: "0 auto" }}>
                Everything you need, all in one place.
              </p>
            </motion.div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 16,
            }}>
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.label}
                  custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: `0 16px 40px ${G}1a` }}
                  style={{
                    background: "#141414",
                    border: `1px solid #262626`,
                    borderRadius: 16,
                    padding: "28px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 10,
                    cursor: "default",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${G}66`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#262626"; }}
                >
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%",
                    background: `${G}14`, border: `1px solid ${G}33`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22, flexShrink: 0,
                  }}>
                    {cat.icon}
                  </div>
                  <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#eee", lineHeight: 1.3 }}>
                    {cat.label}
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "#555", lineHeight: 1.5 }}>
                    {cat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DIVIDER ─── */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #2a2a2a, transparent)", maxWidth: 900, margin: "0 auto", width: "100%" }} />

        {/* ─── FEATURED ─── */}
        <section style={{ padding: "100px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: 60 }}
            >
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: G, marginBottom: 12, textShadow: `0 0 30px ${G}44` }}>
                Featured Products
              </h2>
              <p style={{ color: "#666", fontSize: "1rem" }}>Come in and see what&apos;s new.</p>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {featuredImages.map((img, i) => (
                <motion.div
                  key={img.src}
                  custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: `0 16px 48px ${G}22` }}
                  style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    background: "#141414",
                    border: "1px solid #262626",
                    aspectRatio: "1 / 1",
                    position: "relative",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${G}55`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#262626"; }}
                >
                  <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} />
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ display: "flex", justifyContent: "center", marginTop: 44 }}
            >
              <Link href="/gallery" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 32px", borderRadius: 999,
                border: `2px solid ${G}`,
                color: G, fontWeight: 600, fontSize: "0.95rem",
                textDecoration: "none",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = G; (e.currentTarget as HTMLElement).style.color = "#0a0a0a"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = G; }}
              >
                View Full Gallery →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ─── DIVIDER ─── */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #2a2a2a, transparent)", maxWidth: 900, margin: "0 auto", width: "100%" }} />

        {/* ─── INFO STRIP ─── */}
        <section style={{ padding: "100px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              {
                icon: "📍", title: "Find Us",
                body: "2723 S Arlington St\nAkron, OH 44306",
                link: "https://maps.google.com/?q=2723+S+Arlington+St,+Akron,+OH+44306",
                cta: "Get Directions →",
              },
              {
                icon: "🕒", title: "Hours",
                body: "Monday – Sunday\n9:00 AM – 11:00 PM",
              },
              {
                icon: "📞", title: "Call Us",
                body: "(234) 208-9701",
                link: "tel:+12342089701",
                cta: "Call Now →",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: `0 12px 36px ${G}18` }}
                style={{
                  background: "#141414",
                  border: "1px solid #262626",
                  borderRadius: 16,
                  padding: "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 10,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${G}55`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#262626"; }}
              >
                <span style={{ fontSize: 36 }}>{item.icon}</span>
                <p style={{ fontWeight: 700, color: G, fontSize: "1rem" }}>{item.title}</p>
                <p style={{ color: "#888", fontSize: "0.9rem", lineHeight: 1.7, whiteSpace: "pre-line" }}>{item.body}</p>
                {item.link && (
                  <a href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{
                      marginTop: 6, color: G, fontSize: "0.85rem", fontWeight: 600,
                      textDecoration: "none", opacity: 0.9,
                      transition: "opacity 0.15s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "0.9"; }}
                  >
                    {item.cta}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </AgeGate>
  );
}
