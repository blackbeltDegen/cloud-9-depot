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
          number: { value: 35, density: { enable: true } },
          color: { value: ["#7EE83A", "#3BAF2A", "#bbbbbb", "#ffffff"] },
          opacity: {
            value: { min: 0.04, max: 0.18 },
            animation: { enable: true, speed: 0.3, sync: false },
          },
          size: {
            value: { min: 24, max: 80 },
            animation: { enable: false },
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "top",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          shape: { type: "circle" },
        },
        detectRetina: true,
      }}
    />
  );
}
