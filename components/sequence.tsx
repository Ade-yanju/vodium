"use client";

import Container from "./ui/container";
import Reveal from "./reveal";
import { Plane, Activity, CreditCard, Shield } from "lucide-react";

export default function Sequence() {
  return (
    <section
      style={{
        padding: "clamp(64px, 10vw, 96px) 0",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.015), transparent)",
      }}
    >
      <Container>
        {/* Header */}
        <Reveal>
          <div
            style={{
              maxWidth: 760,
              marginBottom: "clamp(40px, 8vw, 56px)",
            }}
          >
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#22d3ee",
                marginBottom: 8,
              }}
            >
              Growth Framework
            </p>

            <h2
              style={{
                fontSize: "clamp(26px, 5vw, 36px)",
                fontWeight: 600,
                lineHeight: 1.15,
                marginBottom: 14,
              }}
            >
              Growth Sequence{" "}
              <span style={{ color: "#22d3ee" }}>2024–2027</span>
            </h2>

            <p
              style={{
                fontSize: "clamp(14px, 3.5vw, 15px)",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
              }}
            >
              A multi-phase infrastructure strategy that builds trust, captures
              clean signals, and unlocks scalable credit expansion.
            </p>
          </div>
        </Reveal>

        {/* Sequence cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
            marginBottom: "clamp(40px, 8vw, 64px)",
          }}
        >
          <SequenceCard
            step="1"
            icon={<Plane size={22} />}
            title="Lifestyle & Travel"
            text="Acquire premium users through travel, access, and lifestyle services."
            accent="#22d3ee"
          />

          <SequenceCard
            step="2"
            icon={<Activity size={22} />}
            title="Behavioral History"
            text="Build longitudinal trust through consistency, reliability, and usage."
            accent="#38bdf8"
          />

          <SequenceCard
            step="3"
            icon={<CreditCard size={22} />}
            title="Premium Financials"
            text="Introduce co-branded products with institutional partners."
            accent="#60a5fa"
          />

          <SequenceCard
            step="4"
            icon={<Shield size={22} />}
            title="Infrastructure Expansion"
            text="Scale responsible credit access on proven infrastructure."
            accent="#34d399"
            active
          />
        </div>

        {/* Strategic edge */}
        <Reveal>
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: 20,
              padding: "clamp(20px, 5vw, 28px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 32,
              alignItems: "center",
            }}
          >
            {/* Left */}
            <div>
              <h3
                style={{
                  fontSize: "clamp(18px, 4vw, 20px)",
                  fontWeight: 500,
                  marginBottom: 12,
                }}
              >
                The Strategic Edge
              </h3>

              <p
                style={{
                  fontSize: "clamp(13px, 3.5vw, 14px)",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.6,
                }}
              >
                By sequencing infrastructure before credit, Vodium avoids
                structural default risk and builds underwriting precision from
                real behavior — not assumptions.
              </p>
            </div>

            {/* Metrics */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: 16,
              }}
            >
              <Metric value="94%" label="Signal Accuracy" />
              <Metric value="15+" label="Institutional Partners" />
              <Metric value="<0.5%" label="Projected Defaults" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* -----------------------------
   Subcomponents
------------------------------ */

function SequenceCard({
  step,
  icon,
  title,
  text,
  accent,
  active,
}: {
  step: string;
  icon: React.ReactNode;
  title: string;
  text: string;
  accent: string;
  active?: boolean;
}) {
  return (
    <Reveal>
      <div
        style={{
          background: active
            ? `linear-gradient(135deg, ${accent}33, transparent)`
            : "rgba(255,255,255,0.04)",
          borderRadius: 16,
          padding: 20,
          border: active
            ? `1px solid ${accent}66`
            : "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 14,
            color: accent,
          }}
        >
          <span style={{ fontSize: 12 }}>{step}</span>
          {icon}
        </div>

        <h4
          style={{
            fontSize: 15,
            fontWeight: 500,
            marginBottom: 8,
          }}
        >
          {title}
        </h4>

        <p
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.5,
          }}
        >
          {text}
        </p>
      </div>
    </Reveal>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p
        style={{
          fontSize: "clamp(18px, 4vw, 20px)",
          fontWeight: 600,
          color: "#22d3ee",
          marginBottom: 4,
        }}
      >
        {value}
      </p>
      <p
        style={{
          fontSize: 12,
          color: "rgba(255,255,255,0.6)",
        }}
      >
        {label}
      </p>
    </div>
  );
}
