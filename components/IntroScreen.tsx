"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Pearl {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

interface BurstDrop {
  id: number;
  ox: number;
  oy: number;
  angle: number;
  dist: number;
  size: number;
}

type Phase = "loading" | "intro" | "dissolve" | "wave-up" | "wave-down" | "done";

function makePearls(): Pearl[] {
  return Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: 3 + Math.random() * 94,
    size: 5 + Math.random() * 20,
    duration: 6 + Math.random() * 9,
    delay: Math.random() * 8,
  }));
}

export default function IntroScreen() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [pearls] = useState<Pearl[]>(makePearls);
  const [burst, setBurst] = useState<BurstDrop[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setPhase(sessionStorage.getItem("rirao_intro_shown") ? "done" : "intro");
  }, []);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (phase !== "intro") return;

    setBurst(
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        ox: e.clientX,
        oy: e.clientY,
        angle: (i / 22) * 360 + Math.random() * 8,
        dist: 60 + Math.random() * 180,
        size: 4 + Math.random() * 14,
      }))
    );

    setPhase("dissolve");
    setTimeout(() => setPhase("wave-up"), 160);
    setTimeout(() => setPhase("wave-down"), 820);
    setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("rirao_intro_shown", "1");
    }, 1620);
  }

  if (phase === "loading" || phase === "done") return null;

  const waving = phase === "wave-up" || phase === "wave-down";

  return (
    <div
      className="fixed inset-0 z-[200] overflow-hidden"
      style={{ pointerEvents: phase !== "intro" ? "none" : "auto" }}
    >
      {/* ── VIDEO + CINEMATIC OVERLAYS ── */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: waving ? 0 : 1,
          scale: phase === "dissolve" ? 1.05 : 1,
        }}
        transition={{ duration: 0.38, ease: "easeOut" }}
      >
        {/* Logo video: cinematic fade-in + slow pull-back on mount */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.09 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <video
            ref={videoRef}
            src="/images/collections/logo/intro.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onTimeUpdate={() => {
              if (videoRef.current && videoRef.current.currentTime >= 9) {
                videoRef.current.currentTime = 0;
              }
            }}
          />
        </motion.div>

        {/* Water shimmer sweep */}
        <div className="absolute inset-0 intro-shimmer pointer-events-none" />

        {/* Radial vignette — edges dark, centre clear */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 35%, rgba(0,0,0,0.28) 100%)",
          }}
        />
      </motion.div>

      {/* ── FLOATING PEARL BUBBLES ── */}
      {phase === "intro" &&
        pearls.map((p) => (
          <div
            key={p.id}
            className="intro-pearl pointer-events-none"
            style={{
              left: `${p.x}%`,
              bottom: `${-p.size}px`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${-p.delay}s`,
            }}
          />
        ))}

      {/* ── BURST DROPS ON CLICK ── */}
      <AnimatePresence>
        {phase === "dissolve" &&
          burst.map((b) => {
            const rad = (b.angle * Math.PI) / 180;
            return (
              <motion.div
                key={b.id}
                className="absolute rounded-full pointer-events-none"
                style={{
                  left: b.ox,
                  top: b.oy,
                  width: b.size,
                  height: b.size,
                  translateX: "-50%",
                  translateY: "-50%",
                  background:
                    "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.97), rgba(176,232,228,0.75))",
                  boxShadow: "0 0 8px rgba(255,255,255,0.65)",
                }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: Math.cos(rad) * b.dist,
                  y: Math.sin(rad) * b.dist,
                  opacity: 0,
                  scale: 0.12,
                }}
                transition={{ duration: 0.75, ease: [0.2, 0.55, 1, 0.8] }}
              />
            );
          })}
      </AnimatePresence>

      {/* ── WAVE TRANSITION ── */}
      <AnimatePresence>
        {waving && (
          <motion.div
            className="absolute inset-x-0 z-10"
            style={{ bottom: 0, height: "132vh" }}
            initial={{ y: "100%" }}
            animate={{ y: phase === "wave-up" ? "0%" : "-116%" }}
            transition={{
              duration: 0.66,
              ease:
                phase === "wave-up"
                  ? [0.55, 0, 1, 0.45]   // surge in — accelerates
                  : [0, 0.55, 0.45, 1],  // recede — decelerates gently
            }}
          >
            {/* Wave crest SVG */}
            <svg
              viewBox="0 0 1440 110"
              preserveAspectRatio="none"
              className="absolute left-0 w-full pointer-events-none"
              style={{ top: 0, height: 110, transform: "translateY(-98%)" }}
            >
              {/* Deep teal back crest */}
              <path
                d="M0,60 C200,110 400,10 600,60 C800,110 1000,10 1200,60 C1320,90 1390,35 1440,60 L1440,110 L0,110 Z"
                fill="#78C5C0"
              />
              {/* Pearl-white front crest */}
              <path
                d="M0,80 C180,40 380,100 580,70 C780,40 980,90 1180,62 C1320,44 1400,72 1440,70 L1440,110 L0,110 Z"
                fill="#B8E2DF"
                fillOpacity="0.82"
              />
            </svg>

            {/* Wave body gradient: teal → pearl → cream */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #78C5C0 0%, #AAD9D6 10%, #CBF0EE 28%, #E8F8F7 50%, #F4FBFB 70%, #FAF6F0 100%)",
              }}
            />

            {/* Pearl sheen on wave body */}
            <div className="absolute inset-0 intro-shimmer opacity-35 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CTA BUTTON — CENTRE ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-[5] pointer-events-none">
        <AnimatePresence>
          {phase === "intro" && (
            <motion.div
              className="flex flex-col items-center gap-8 pointer-events-auto"
              initial={{ opacity: 0, y: 32, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 1.12, transition: { duration: 0.2 } }}
              transition={{ duration: 1.5, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Brand label — fades in slightly later */}
              <motion.span
                className="text-white/55 text-[10px] tracking-[0.58em] uppercase select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1.1 }}
              >
                Rì Rào Store
              </motion.span>

              {/* Pearl CTA button */}
              <button onClick={handleClick} className="pearl-cta-btn group">
                <span className="relative z-10 text-[13px] md:text-[14px] tracking-[0.45em] uppercase font-semibold text-white group-hover:text-amber-100 transition-colors duration-500 select-none">
                  Khám Phá Rì Rào
                </span>
                <span className="pearl-cta-glow" />
              </button>

              {/* Breathing pulse dot */}
              <motion.div
                className="rounded-full bg-white/35"
                style={{ width: 3, height: 3 }}
                animate={{ scale: [1, 3.5, 1], opacity: [0.45, 0, 0.45] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  delay: 2.6,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
