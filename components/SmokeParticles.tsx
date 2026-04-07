"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function SmokeParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="smoke-particles"
      className="absolute inset-0 z-0"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: 40, density: { enable: true } },
          color: { value: ["#7EE83A", "#3BAF2A", "#aaaaaa", "#ffffff"] },
          opacity: {
            value: { min: 0.03, max: 0.25 },
            animation: { enable: true, speed: 0.4, sync: false },
          },
          size: {
            value: { min: 20, max: 90 },
            animation: { enable: true, speed: 2, sync: false },
          },
          move: {
            enable: true,
            speed: { min: 0.2, max: 0.8 },
            direction: "top",
            random: true,
            straight: false,
            outModes: { default: "out" },
            drift: 1,
          },
          shape: { type: "circle" },
        },
        detectRetina: true,
      }}
    />
  );
}
