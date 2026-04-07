"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function AgeGate({ children }: { children: React.ReactNode }) {
  const [verified, setVerified] = useState<boolean | null>(null);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("c9_age_verified");
    setVerified(stored === "true");
  }, []);

  const handleEnter = () => {
    localStorage.setItem("c9_age_verified", "true");
    setVerified(true);
  };

  const handleDeny = () => {
    setDenied(true);
  };

  if (verified === null) return null;

  if (denied) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808]">
        <p className="text-[#888] text-lg">Sorry, you must be 21+ to enter this site.</p>
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        {!verified && (
          <motion.div
            key="agegate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808]"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at center, #0f1f0a 0%, #080808 70%)",
            }}
          >
            {/* Decorative ring */}
            <div
              className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
              style={{
                border: "1px solid #7EE83A22",
                boxShadow: "0 0 80px #7EE83A11",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex flex-col items-center gap-6 z-10"
            >
              <Image
                src="/logo.jpg"
                alt="Cloud 9 Depot Logo"
                width={130}
                height={130}
                className="rounded-full"
                priority
              />

              <h1 className="text-3xl md:text-4xl font-bold neon-text tracking-wide text-center">
                Welcome to Cloud 9 Depot
              </h1>

              <p className="text-[#aaa] text-base md:text-lg text-center max-w-sm px-4">
                This website contains tobacco and smoke shop products. You must be{" "}
                <span className="text-[#7EE83A] font-semibold">21 years or older</span> to enter.
              </p>

              <div className="flex gap-4 mt-2">
                <button
                  onClick={handleEnter}
                  className="neon-btn-solid px-8 py-3 rounded-full text-base font-bold"
                >
                  I am 21+
                </button>
                <button
                  onClick={handleDeny}
                  className="neon-btn px-8 py-3 rounded-full text-base font-semibold"
                >
                  Under 21
                </button>
              </div>

              <p className="text-[#555] text-xs text-center max-w-xs px-4 mt-2">
                By entering, you confirm you are of legal age and agree to our terms.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {verified && children}
    </>
  );
}
