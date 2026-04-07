"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: "easeOut" },
  }),
};

const images = [
  { src: "/selection1.jpg", alt: "Product Selection" },
  { src: "/pic1.jpg", alt: "Product 1" },
  { src: "/pic2.jpg", alt: "Product 2" },
  { src: "/pic3.jpg", alt: "Product 3" },
  { src: "/pic4.jpg", alt: "Product 4" },
  { src: "/pic5.jpg", alt: "Product 5" },
  { src: "/pic6.jpg", alt: "Product 6" },
  { src: "/pic7.jpg", alt: "Product 7" },
  { src: "/pic8.jpg", alt: "Product 8" },
  { src: "/pic9.jpg", alt: "Product 9" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <AgeGate>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-8" style={{ background: "#080808" }}>
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h1
              className="text-4xl md:text-5xl font-extrabold mb-3"
              style={{ color: "#7EE83A", textShadow: "0 0 20px #7EE83A66" }}
            >
              Gallery
            </h1>
            <p className="text-[#777] text-base">A look inside Cloud 9 Depot.</p>
          </motion.div>

          {/* Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((img, i) => (
              <motion.div
                key={img.src}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="break-inside-avoid overflow-hidden rounded-xl cursor-pointer card-hover"
                style={{ border: "1px solid #7EE83A22", background: "#111" }}
                onClick={() => setLightbox(img.src)}
              >
                <div className="relative w-full" style={{ minHeight: "150px" }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Lightbox"
                width={1200}
                height={900}
                className="rounded-2xl object-contain w-full h-auto max-h-[85vh]"
                style={{ boxShadow: "0 0 40px #7EE83A33" }}
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-[#7EE83A] font-bold text-xl"
                style={{ background: "rgba(8,8,8,0.8)", border: "1px solid #7EE83A44" }}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </AgeGate>
  );
}
