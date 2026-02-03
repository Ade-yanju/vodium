"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  TrendingDown,
  Layers,
  Timer,
  CheckCircle2,
} from "lucide-react";
import Container from "./ui/container";
import Reveal from "./reveal";

export default function Problem() {
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
          <div style={{ marginBottom: 48 }}>
            <p
              style={{
                color: "#7c7cff",
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Market inefficiency
            </p>

            <h2
              style={{
                fontSize: 36,
                fontWeight: 600,
                lineHeight: 1.15,
              }}
            >
              The Subprime Cycle vs.
              <br />
              <span style={{ color: "#7c7cff" }}>The Premium Opportunity</span>
            </h2>
          </div>
        </Reveal>

        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 40,
          }}
        >
          {/* LEFT: Subprime cycle cards */}
          <Reveal>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 20,
                padding: 24,
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  color: "#ff6b6b",
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <AlertTriangle size={14} />
                Subprime traps
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <ProblemCard
                  icon={<TrendingDown size={18} />}
                  title="High Defaults"
                  text="Short-term lending concentrates risk and reinforces default cycles."
                />

                <ProblemCard
                  icon={<Layers size={18} />}
                  title="Noisy Data"
                  text="Airtime and transaction signals fail to reflect real creditworthiness."
                />

                <ProblemCard
                  icon={<Timer size={18} />}
                  title="Rolling Debt"
                  text="Borrowers refinance repeatedly without upward mobility."
                />

                <ProblemCard
                  icon={<Layers size={18} />}
                  title="Limited Growth"
                  text="Credit models never graduate beyond the same subprime base."
                />
              </div>
            </div>
          </Reveal>

          {/* RIGHT: Explanation */}
          <Reveal>
            <div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  marginBottom: 16,
                }}
              >
                Modern credit is{" "}
                <span style={{ color: "#7c7cff" }}>broken</span>.
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.6,
                  marginBottom: 24,
                }}
              >
                While the world looks at Africa as a microfinance project, a
                massive segment of stable, globally exposed consumers remains
                underserved.
              </p>

              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.6,
                  marginBottom: 32,
                }}
              >
                Existing systems optimize for frequency, not trust, producing
                predictable defaults and stagnant infrastructure.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                {/* <ActionButton primary>See the solution</ActionButton>

                <ActionButton>Download deck</ActionButton> */}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom stats */}
        <Reveal>
          <div
            style={{
              marginTop: 64,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            <StatCard
              title="23% Default Rate"
              text="Average across micro-lending portfolios"
            />
            <StatCard
              title="Invisible Segment"
              text="High-income, low-risk consumers ignored"
            />
            <StatCard
              title="Fragmented APIs"
              text="No unified credit infrastructure"
            />
            <StatCard title="48h Delays" text="Slow settlement and approvals" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* -----------------------------
   Small Components
------------------------------ */

function ProblemCard({
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
        background: "rgba(0,0,0,0.35)",
        borderRadius: 14,
        padding: 16,
      }}
    >
      <div
        style={{
          color: "#ff6b6b",
          marginBottom: 8,
        }}
      >
        {icon}
      </div>

      <h4
        style={{
          fontSize: 14,
          fontWeight: 500,
          marginBottom: 6,
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
  );
}

function StatCard({ title, text }: { title: string; text: string }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        borderRadius: 14,
        padding: 20,
      }}
    >
      <h4
        style={{
          fontSize: 16,
          fontWeight: 500,
          marginBottom: 6,
        }}
      >
        {title}
      </h4>

      <p
        style={{
          fontSize: 13,
          color: "rgba(255,255,255,0.6)",
        }}
      >
        {text}
      </p>
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
