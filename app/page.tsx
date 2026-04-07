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
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const categories = [
  { label: "Vapes & E-Cigs", icon: "💨", desc: "Disposables, mods, pods & juice" },
  { label: "Glass & Pipes", icon: "🔮", desc: "Hand pipes, bubblers, bongs" },
  { label: "Accessories", icon: "✨", desc: "Lighters, papers, trays & more" },
  { label: "CBD & Wellness", icon: "🌿", desc: "Oils, gummies & topicals" },
  { label: "Hookahs", icon: "🪔", desc: "Full sets and shisha tobacco" },
  { label: "Cigars & Wraps", icon: "🚬", desc: "Premium cigars, blunts & wraps" },
];

const featuredImages = [
  { src: "/selection1.jpg", alt: "Featured selection" },
  { src: "/pic1.jpg", alt: "Product 1" },
  { src: "/pic2.jpg", alt: "Product 2" },
];

export default function Home() {
  return (
    <AgeGate>
      <Navbar />
      <main className="flex flex-col">

        {/* ── HERO ── */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at 50% 60%, #0d1f08 0%, #080808 65%)",
          }}
        >
          <SmokeParticles />

          {/* Glow ring */}
          <div
            className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ border: "1px solid #7EE83A18", boxShadow: "0 0 120px #7EE83A0e" }}
          />

          <div className="relative z-10 flex flex-col items-center text-center px-6 gap-6">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/logo.jpg"
                alt="Cloud 9 Depot"
                width={140}
                height={140}
                className="rounded-full"
                style={{ boxShadow: "0 0 40px #7EE83A55, 0 0 80px #7EE83A22" }}
                priority
              />
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl font-extrabold tracking-tight"
              style={{
                color: "#7EE83A",
                textShadow: "0 0 20px #7EE83A88, 0 0 60px #7EE83A33",
              }}
            >
              Cloud 9 Depot
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl text-[#bbb] max-w-lg leading-relaxed"
            >
              Akron&apos;s premier smoke shop — vapes, glass, accessories & more.
              <br />
              <span className="text-[#7EE83A] font-medium">Open daily 9 AM – 11 PM.</span>
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 justify-center mt-2"
            >
              <Link
                href="/gallery"
                className="neon-btn-solid px-8 py-3 rounded-full text-base font-bold"
              >
                View Gallery
              </Link>
              <Link
                href="/contact"
                className="neon-btn px-8 py-3 rounded-full text-base font-semibold"
              >
                Find Us
              </Link>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 flex flex-col items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="text-[#555] text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              className="w-0.5 h-8 rounded-full"
              style={{ background: "linear-gradient(to bottom, #7EE83A, transparent)" }}
              animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            />
          </motion.div>
        </section>

        {/* ── CATEGORIES ── */}
        <section className="py-24 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold neon-text mb-3">What We Carry</h2>
              <p className="text-[#777] text-base">Everything you need, all in one place.</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="card-hover rounded-2xl p-6 flex flex-col gap-2"
                  style={{
                    background: "#111",
                    border: "1px solid #7EE83A22",
                  }}
                >
                  <span className="text-3xl">{cat.icon}</span>
                  <h3 className="font-bold text-base text-[#eee]">{cat.label}</h3>
                  <p className="text-[#666] text-sm">{cat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── FEATURED ── */}
        <section className="py-24 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold neon-text mb-3">Featured Products</h2>
              <p className="text-[#777] text-base">Come in and see what&apos;s new.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredImages.map((img, i) => (
                <motion.div
                  key={img.src}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="card-hover rounded-2xl overflow-hidden"
                  style={{ border: "1px solid #7EE83A22", background: "#111" }}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex justify-center mt-10"
            >
              <Link href="/gallery" className="neon-btn px-8 py-3 rounded-full text-base font-semibold">
                View Full Gallery →
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── INFO STRIP ── */}
        <section className="py-20 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: "📍",
                title: "Find Us",
                lines: ["2723 S Arlington St", "Akron, OH 44306"],
                link: "https://maps.google.com/?q=2723+S+Arlington+St,+Akron,+OH+44306",
                linkLabel: "Get Directions",
              },
              {
                icon: "🕒",
                title: "Hours",
                lines: ["Mon – Sun", "9 AM – 11 PM"],
              },
              {
                icon: "📞",
                title: "Call Us",
                lines: ["(234) 208-9701"],
                link: "tel:+12342089701",
                linkLabel: "Call Now",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl card-hover"
                style={{ background: "#111", border: "1px solid #7EE83A22" }}
              >
                <span className="text-4xl">{item.icon}</span>
                <h3 className="font-bold text-[#7EE83A] text-lg">{item.title}</h3>
                {item.lines.map((l) => (
                  <p key={l} className="text-[#aaa] text-sm">{l}</p>
                ))}
                {item.link && (
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="neon-btn px-5 py-2 rounded-full text-sm font-semibold mt-1"
                  >
                    {item.linkLabel}
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
