"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  }),
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

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
              Contact Us
            </h1>
            <p className="text-[#777] text-base">We&apos;d love to hear from you. Stop by or reach out.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Info cards */}
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: "📍",
                  title: "Address",
                  content: "2723 S Arlington St\nAkron, OH 44306",
                  link: "https://maps.google.com/?q=2723+S+Arlington+St,+Akron,+OH+44306",
                  linkLabel: "Get Directions →",
                },
                {
                  icon: "📞",
                  title: "Phone",
                  content: "(234) 208-9701",
                  link: "tel:+12342089701",
                  linkLabel: "Call Now →",
                },
                {
                  icon: "🕒",
                  title: "Hours",
                  content: "Monday – Sunday\n9:00 AM – 11:00 PM",
                },
                {
                  icon: "📱",
                  title: "Social Media",
                  socials: true,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-2xl p-6 flex gap-4 card-hover"
                  style={{ background: "#111", border: "1px solid #7EE83A22" }}
                >
                  <span className="text-3xl mt-0.5">{item.icon}</span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-[#7EE83A] text-base">{item.title}</h3>
                    {item.content && (
                      <p className="text-[#aaa] text-sm whitespace-pre-line">{item.content}</p>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-[#7EE83A] text-sm hover:underline mt-1"
                      >
                        {item.linkLabel}
                      </a>
                    )}
                    {item.socials && (
                      <div className="flex gap-4 mt-1">
                        <a
                          href="https://www.facebook.com/profile.php?id=61576666553223"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#7EE83A] text-sm hover:underline"
                        >
                          Facebook →
                        </a>
                        <a
                          href="https://www.instagram.com/cloud9nine_oh/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#7EE83A] text-sm hover:underline"
                        >
                          Instagram →
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact form */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl p-8"
              style={{ background: "#111", border: "1px solid #7EE83A33" }}
            >
              <h2 className="text-2xl font-bold text-[#eee] mb-6">Send a Message</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-12 text-center"
                >
                  <span className="text-5xl">✅</span>
                  <h3 className="text-xl font-bold text-[#7EE83A]">Message Sent!</h3>
                  <p className="text-[#888] text-sm">We&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="flex flex-col gap-1">
                    <label className="text-[#888] text-xs uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="rounded-lg px-4 py-3 text-sm text-[#eee] outline-none transition-all"
                      style={{
                        background: "#181818",
                        border: "1px solid #7EE83A33",
                      }}
                      onFocus={(e) => (e.currentTarget.style.border = "1px solid #7EE83Aaa")}
                      onBlur={(e) => (e.currentTarget.style.border = "1px solid #7EE83A33")}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[#888] text-xs uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="rounded-lg px-4 py-3 text-sm text-[#eee] outline-none transition-all"
                      style={{
                        background: "#181818",
                        border: "1px solid #7EE83A33",
                      }}
                      onFocus={(e) => (e.currentTarget.style.border = "1px solid #7EE83Aaa")}
                      onBlur={(e) => (e.currentTarget.style.border = "1px solid #7EE83A33")}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[#888] text-xs uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What&apos;s this about?"
                      className="rounded-lg px-4 py-3 text-sm text-[#eee] outline-none transition-all"
                      style={{
                        background: "#181818",
                        border: "1px solid #7EE83A33",
                      }}
                      onFocus={(e) => (e.currentTarget.style.border = "1px solid #7EE83Aaa")}
                      onBlur={(e) => (e.currentTarget.style.border = "1px solid #7EE83A33")}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[#888] text-xs uppercase tracking-wider">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Your message..."
                      className="rounded-lg px-4 py-3 text-sm text-[#eee] outline-none transition-all resize-none"
                      style={{
                        background: "#181818",
                        border: "1px solid #7EE83A33",
                      }}
                      onFocus={(e) => (e.currentTarget.style.border = "1px solid #7EE83Aaa")}
                      onBlur={(e) => (e.currentTarget.style.border = "1px solid #7EE83A33")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="neon-btn-solid py-3 rounded-full font-bold text-base mt-2"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

          </div>

          {/* Map embed */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 rounded-2xl overflow-hidden"
            style={{ border: "1px solid #7EE83A33" }}
          >
            <iframe
              title="Cloud 9 Depot Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3...!2d-81.49!3d41.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830d0a5a5a5a5a5%3A0x0!2s2723+S+Arlington+St%2C+Akron%2C+OH+44306!5e0!3m2!1sen!2sus!4v1000000000000!5m2!1sen!2sus"
              width="100%"
              height="360"
              style={{ border: 0, filter: "invert(90%) hue-rotate(140deg) saturate(1.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </main>
      <Footer />
    </AgeGate>
  );
}
