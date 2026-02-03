"use client";

import { AlertTriangle, TrendingDown, Layers, Timer } from "lucide-react";
import Container from "./ui/container";
import Reveal from "./reveal";

export default function Problem() {
  return (
    <section
      style={{
        padding: "clamp(64px, 10vw, 96px) 0",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.02), transparent)",
      }}
    >
      <Container>
        {/* Header */}
        <Reveal>
          <div style={{ marginBottom: "clamp(32px, 6vw, 48px)" }}>
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
                fontSize: "clamp(26px, 5vw, 36px)",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(24px, 5vw, 40px)",
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <Reveal>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 20,
                padding: "clamp(20px, 4vw, 24px)",
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
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
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

          {/* RIGHT */}
          <Reveal>
            <div>
              <h3
                style={{
                  fontSize: "clamp(18px, 4vw, 22px)",
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
                  marginBottom: 20,
                  fontSize: "clamp(14px, 3.5vw, 15px)",
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
                  fontSize: "clamp(14px, 3.5vw, 15px)",
                }}
              >
                Existing systems optimize for frequency, not trust, producing
                predictable defaults and stagnant infrastructure.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal>
          <div
            style={{
              marginTop: "clamp(40px, 8vw, 64px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
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
   Components
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
      <div style={{ color: "#ff6b6b", marginBottom: 8 }}>{icon}</div>

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
