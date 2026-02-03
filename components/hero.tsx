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
        height: "100vh",
        minHeight: 640,
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        scrollSnapAlign: "start",
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
        desktop={{ top: "16%", left: "10%" }}
        mobile={{ top: "10%", left: "6%" }}
        label="Travel & mobility"
      />

      <VisionIcon
        Icon={Globe}
        desktop={{ bottom: "18%", left: "14%" }}
        mobile={{ bottom: "14%", left: "8%" }}
        label="Lifestyle signals"
      />

      <VisionIcon
        Icon={CreditCard}
        desktop={{ bottom: "20%", right: "16%" }}
        mobile={{ bottom: "16%", right: "10%" }}
        label="Payment infrastructure"
      />

      <VisionIcon
        Icon={Banknote}
        desktop={{ top: "20%", right: "12%" }}
        mobile={{ top: "12%", right: "6%" }}
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
            }}
          >
            <h1
              style={{
                fontSize: "clamp(42px, 6vw, 68px)",
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
                marginTop: 28,
                fontSize: 18,
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
                marginTop: 40,
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
          bottom: 24,
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
   Vision Icon Component
---------------------------------- */

function VisionIcon({
  Icon,
  desktop,
  mobile,
  label,
}: {
  Icon: React.ElementType;
  desktop: React.CSSProperties;
  mobile: React.CSSProperties;
  label: string;
}) {
  return (
    <>
      {/* Desktop */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          ...desktop,
          opacity: 0.4,
          filter: "drop-shadow(0 0 26px rgba(255,255,255,0.22))",
          zIndex: 1,
        }}
        className="hidden sm:block"
        title={label}
      >
        <Icon size={88} />
      </motion.div>

      {/* Mobile */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          ...mobile,
          opacity: 0.35,
          filter: "drop-shadow(0 0 18px rgba(255,255,255,0.18))",
          zIndex: 1,
        }}
        className="block sm:hidden"
      >
        <Icon size={56} />
      </motion.div>
    </>
  );
}
