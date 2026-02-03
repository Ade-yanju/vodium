"use client";

import { Plane, CreditCard, Banknote, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./ui/container";
import Reveal from "./reveal";
import { Button } from "./ui/button";

export default function Hero({
  onInvestorClick,
  onAccessClick,
}: {
  onInvestorClick: () => void;
  onAccessClick: () => void;
}) {
  return (
    <section
      style={{
        minHeight: "clamp(560px, 100vh, 900px)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(48px, 10vh, 96px) 0",
      }}
    >
      {/* Background gradient */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(700px 400px at 15% 10%, rgba(99,102,241,0.35), transparent 50%), radial-gradient(600px 300px at 85% 20%, rgba(16,185,129,0.28), transparent 55%)",
          zIndex: 0,
        }}
      />

      {/* Vision icons */}
      <VisionIcon
        Icon={Plane}
        position={{ top: "14%", left: "8%" }}
        label="Travel & mobility"
      />

      <VisionIcon
        Icon={Globe}
        position={{ bottom: "18%", left: "12%" }}
        label="Lifestyle signals"
      />

      <VisionIcon
        Icon={CreditCard}
        position={{ bottom: "20%", right: "14%" }}
        label="Payment infrastructure"
      />

      <VisionIcon
        Icon={Banknote}
        position={{ top: "18%", right: "10%" }}
        label="Economic value"
      />

      {/* Hero content */}
      <Container>
        <Reveal>
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              textAlign: "center",
              position: "relative",
              zIndex: 2,
              paddingInline: 16, // mobile-safe
            }}
          >
            <h1
              style={{
                fontSize: "clamp(34px, 6vw, 68px)",
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Credit should emerge
              <br />
              from trust.
            </h1>

            <p
              style={{
                marginTop: "clamp(16px, 4vw, 28px)",
                fontSize: "clamp(15px, 3.5vw, 18px)",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.75)",
                maxWidth: 640,
                marginInline: "auto",
              }}
            >
              Vodium builds premium lifestyle and travel infrastructure that
              captures real, high-signal behavior before credit is ever
              introduced.
            </p>

            <div
              style={{
                marginTop: "clamp(28px, 6vw, 40px)",
                display: "flex",
                justifyContent: "center",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <Button onClick={onInvestorClick}>Request Investor Deck</Button>

              <Button secondary onClick={onAccessClick}>
                Join Early Access
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "clamp(16px, 4vh, 28px)",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 12,
          color: "rgba(255,255,255,0.6)",
          zIndex: 2,
        }}
      >
        Scroll
      </motion.div>
    </section>
  );
}

/* --------------------------------
   Vision Icon (Fluid & Responsive)
---------------------------------- */

function VisionIcon({
  Icon,
  position,
  label,
}: {
  Icon: React.ElementType;
  position: React.CSSProperties;
  label: string;
}) {
  return (
    <motion.div
      aria-hidden
      title={label}
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        ...position,
        opacity: 0.4,
        filter: "drop-shadow(0 0 24px rgba(255,255,255,0.2))",
        zIndex: 1,
      }}
    >
      <Icon size={clampIconSize()} />
    </motion.div>
  );
}

/* --------------------------------
   Helper
---------------------------------- */

function clampIconSize() {
  return typeof window !== "undefined"
    ? Math.min(Math.max(window.innerWidth / 10, 48), 88)
    : 64;
}
