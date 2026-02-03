"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./ui/container";
import Reveal from "./reveal";

const team = [
  {
    name: "Founder & CEO",
    subtitle: "Former FinTech Lead",
    image: "/team/ceo.png",
    namer: "Kalejaye Victor",
  },
  {
    name: "CTO",
    subtitle: "Infrastructure Architect",
    image: "/team/cto.jpg",
    namer: "Ogunyade Olamilekan",
  },
  {
    name: "COO",
    subtitle: "Credit Policy Expert",
    image: "/team/coo.jpg",
    namer: "Akinsipe Demilade",
  },
];

export default function Team() {
  return (
    <section
      style={{
        padding: "120px 0 140px",
        background:
          "radial-gradient(1200px 600px at 50% -10%, rgba(124,124,255,0.15), transparent 60%), linear-gradient(180deg, #05070f, #070b1a)",
      }}
    >
      <Container>
        {/* Core belief */}
        <Reveal>
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              textAlign: "center",
              marginBottom: 96,
            }}
          >
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#7c7cff",
                marginBottom: 14,
              }}
            >
              Our core belief
            </p>

            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Credit should be the result of{" "}
              <span style={{ color: "#7c7cff" }}>trust</span> not the
              prerequisite.
            </h2>
          </div>
        </Reveal>

        {/* Team grid */}
        <Reveal>
          <div
            style={{
              maxWidth: 820, // 👈 centers group as a unit
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 64,
              justifyItems: "center", // 👈 centers each column
              alignItems: "start",
            }}
          >
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // 👈 centers image + text
                  textAlign: "center",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: 112,
                    height: 112,
                    borderRadius: "50%",
                    overflow: "hidden",
                    marginBottom: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow:
                      "0 0 0 3px rgba(124,124,255,0.25), 0 0 32px rgba(124,124,255,0.18)",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={120}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>

                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    marginBottom: 6,
                  }}
                >
                  {member.name}
                </p>

                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {member.subtitle}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    color: "rgba(165, 24, 24, 0.6)",
                  }}
                >
                  {member.namer}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
