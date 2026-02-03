"use client";

import Container from "./ui/container";
import Reveal from "./reveal";
import {
  Sparkles,
  Clock,
  CreditCard,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

export default function Solution() {
  return (
    <section
      style={{
        padding: "96px 0",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.02), transparent)",
      }}
    >
      <Container>
        {/* Header */}
        <Reveal>
          <div style={{ maxWidth: 760, marginBottom: 56 }}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7c7cff",
                marginBottom: 8,
              }}
            >
              The Roadmap
            </p>

            <h2
              style={{
                fontSize: 36,
                fontWeight: 600,
                lineHeight: 1.15,
                marginBottom: 14,
              }}
            >
              Building Trust First
            </h2>

            <p
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
              }}
            >
              Our phased approach transforms high-signal engagement into
              scalable credit infrastructure for Africa’s next generation of
              consumers.
            </p>
          </div>
        </Reveal>

        {/* Roadmap cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
            marginBottom: 64,
          }}
        >
          <RoadmapCard
            index="01"
            icon={<Sparkles size={20} />}
            title="Premium Lifestyle"
            text="Capture high-signal lifestyle and travel behavior without extending credit."
          />

          <RoadmapCard
            index="02"
            icon={<Clock size={20} />}
            title="Behavioral History"
            text="Establish trust through consistent usage and reliability over time."
          />

          <RoadmapCard
            index="03"
            icon={<CreditCard size={20} />}
            title="Financial Products"
            text="Introduce co-branded premium products with institutional partners."
          />

          <RoadmapCard
            index="04"
            icon={<ShieldCheck size={20} />}
            title="Credit Infrastructure"
            text="Expand credit access once trust, data, and infrastructure are proven."
            active
          />
        </div>

        {/* Why this sequence */}
        <Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "center",
            }}
          >
            {/* Left */}
            <div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  marginBottom: 16,
                }}
              >
                Why this sequence?
              </h3>

              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.6,
                  marginBottom: 24,
                }}
              >
                Starting with trust and behavior dramatically reduces default
                risk and improves underwriting precision before capital is
                deployed.
              </p>

              <div style={{ display: "flex", gap: 32 }}>
                <Metric label="Lower Defaults" value="87%" />
                <Metric label="Cleaner Data" value="$400k+" />
              </div>
            </div>

            {/* Right (visual placeholder) */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 18,
                padding: 24,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BarChart3 size={72} color="#7c7cff" />
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

function RoadmapCard({
  index,
  icon,
  title,
  text,
  active,
}: {
  index: string;
  icon: React.ReactNode;
  title: string;
  text: string;
  active?: boolean;
}) {
  return (
    <Reveal>
      <div
        style={{
          background: active
            ? "linear-gradient(135deg, rgba(124,124,255,0.25), rgba(124,124,255,0.05))"
            : "rgba(255,255,255,0.04)",
          borderRadius: 16,
          padding: 20,
          border: active
            ? "1px solid rgba(124,124,255,0.35)"
            : "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 14,
            color: active ? "#7c7cff" : "rgba(255,255,255,0.5)",
            fontSize: 12,
          }}
        >
          <span>{index}</span>
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

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p
        style={{
          fontSize: 12,
          color: "rgba(255,255,255,0.5)",
          marginBottom: 4,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: "#7c7cff",
        }}
      >
        {value}
      </p>
    </div>
  );
}
