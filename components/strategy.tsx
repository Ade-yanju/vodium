"use client";

import Container from "./ui/container";
import Reveal from "./reveal";
import {
  ArrowRight,
  Layers,
  Shield,
  TrendingUp,
  Database,
  Globe,
} from "lucide-react";

export default function Strategy() {
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
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7c7cff",
                marginBottom: 10,
              }}
            >
              Credit Strategy
            </p>

            <h2
              style={{
                fontSize: 36,
                fontWeight: 600,
                lineHeight: 1.15,
                marginBottom: 16,
              }}
            >
              Top-Down Credit Expansion
            </h2>

            <p
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              Capturing high-signal data from Africa’s most predictable consumer
              segment to build durable credit infrastructure.
            </p>

            {/* <div style={{ display: "flex", gap: 12 }}>
              <ActionButton primary>Explore infrastructure</ActionButton>
              <ActionButton>View strategy model</ActionButton>
            </div> */}
          </div>
        </Reveal>

        {/* Main content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 48,
          }}
        >
          {/* Left column */}
          <Reveal>
            <div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  marginBottom: 20,
                }}
              >
                The High-Signal Foundation
              </h3>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 18 }}
              >
                <InfoRow
                  icon={<Shield size={18} />}
                  title="Premium Segment, First"
                  text="Start with consumers who already exhibit predictable behavior and reputational sensitivity."
                />

                <InfoRow
                  icon={<Database size={18} />}
                  title="Data-Driven Expansion"
                  text="Accumulate clean behavioral data before introducing any financial exposure."
                />

                <InfoRow
                  icon={<TrendingUp size={18} />}
                  title="Broader Market Scale"
                  text="Expand outward once infrastructure and trust are firmly established."
                />
              </div>
            </div>
          </Reveal>

          {/* Right column (flow cards) */}
          <Reveal delay={0.1}>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 18,
                padding: 24,
              }}
            >
              <FlowCard title="Premium Tier" active />
              <FlowArrow />
              <FlowCard title="Behavioral History" />
              <FlowArrow />
              <FlowCard title="Institutional Products" />
              <FlowArrow />
              <FlowCard title="Credit Expansion" />
            </div>
          </Reveal>
        </div>

        {/* Strategic Advantage */}
        <Reveal>
          <div style={{ marginTop: 72 }}>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 500,
                marginBottom: 24,
              }}
            >
              Strategic Advantage
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 20,
              }}
            >
              <AdvantageCard
                icon={<Globe size={22} />}
                title="Global Exposure"
                text="Signals from travel, cross-border usage, and global platforms."
              />

              <AdvantageCard
                icon={<Layers size={22} />}
                title="Stable Credit"
                text="Lower volatility by anchoring credit in long-term behavior."
              />

              <AdvantageCard
                icon={<TrendingUp size={22} />}
                title="Precise Models"
                text="Higher accuracy underwriting driven by clean infrastructure data."
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* --------------------------------
   Subcomponents
---------------------------------- */

function InfoRow({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div style={{ display: "flex", gap: 14 }}>
      <div style={{ color: "#7c7cff" }}>{icon}</div>
      <div>
        <h4 style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>
          {title}
        </h4>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>{text}</p>
      </div>
    </div>
  );
}

function FlowCard({ title, active }: { title: string; active?: boolean }) {
  return (
    <div
      style={{
        background: active
          ? "linear-gradient(135deg, #7c7cff, #9f9fff)"
          : "rgba(0,0,0,0.35)",
        color: active ? "#000" : "#fff",
        padding: "12px 16px",
        borderRadius: 12,
        fontSize: 13,
        fontWeight: 500,
      }}
    >
      {title}
    </div>
  );
}

function FlowArrow() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "10px 0",
        color: "rgba(255,255,255,0.4)",
      }}
    >
      <ArrowRight size={16} />
    </div>
  );
}

function AdvantageCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        borderRadius: 16,
        padding: 20,
      }}
    >
      <div style={{ marginBottom: 10, color: "#7c7cff" }}>{icon}</div>

      <h4 style={{ fontSize: 15, fontWeight: 500, marginBottom: 6 }}>
        {title}
      </h4>

      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>{text}</p>
    </div>
  );
}

function ActionButton({
  children,
  primary,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <button
      style={{
        padding: "10px 16px",
        borderRadius: 10,
        fontSize: 13,
        fontWeight: 500,
        border: "none",
        cursor: "pointer",
        background: primary ? "#7c7cff" : "rgba(255,255,255,0.08)",
        color: primary ? "#000" : "#fff",
      }}
    >
      {children}
    </button>
  );
}
