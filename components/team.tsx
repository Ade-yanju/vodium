"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./ui/container";
import Reveal from "./reveal";

const team = [
  {
    role: "Founder & CEO",
    subtitle: "Former FinTech Lead",
    image: "/team/ceo.png",
    name: "Kalejaye Victor",
    experience: "Business strategist / Developer at Rhea Fashion",
  },
  {
    role: "CTO",
    subtitle: "Infrastructure Architect",
    image: "/team/cto.jpg",
    name: "Ogunyade Olamilekan",
    experience: "Software Engineer at Roware Limited",
  },
  {
    role: "COO",
    subtitle: "Credit Policy Expert",
    image: "/team/coo.jpg",
    name: "Akinsipe Demilade",
    experience: "Technical Support at PHDL",
  },
  {
    role: "CSO",
    subtitle: "Chief Strategy Officer",
    image: "/team/cso.png",
    name: "Oyewunmi Afeez",
    experience: "Founder/CEO at Rhea Fashion and Naira40",
  },
];

export default function Team() {
  return (
    <section
      style={{
        padding: "clamp(80px, 12vw, 140px) 0",
        background:
          "radial-gradient(1200px 600px at 50% -10%, rgba(124,124,255,0.15), transparent 60%), linear-gradient(180deg, #05070f, #070b1a)",
      }}
    >
      <Container>
        {/* Belief */}
        <Reveal>
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              textAlign: "center",
              marginBottom: "clamp(56px, 10vw, 96px)",
              paddingInline: 16,
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
                fontSize: "clamp(28px, 5vw, 56px)",
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
              maxWidth: 900,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "clamp(40px, 8vw, 64px)",
              justifyItems: "center",
            }}
          >
            {team.map((m, i) => (
              <motion.div
                key={m.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
                style={{
                  textAlign: "center",
                  maxWidth: 240,
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: "clamp(88px, 18vw, 112px)",
                    height: "clamp(88px, 18vw, 112px)",
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "0 auto 20px",
                    boxShadow:
                      "0 0 0 3px rgba(124,124,255,0.25), 0 0 32px rgba(124,124,255,0.18)",
                  }}
                >
                  <Image
                    src={m.image}
                    alt={m.name}
                    width={160}
                    height={160}
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <p style={{ fontSize: 14, fontWeight: 500 }}>{m.role}</p>

                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.6)",
                    marginBottom: 6,
                  }}
                >
                  {m.subtitle}
                </p>

                <p
                  style={{
                    fontSize: 14,
                    color: "#7c7cff",
                    marginBottom: 4,
                  }}
                >
                  {m.name}
                </p>

                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {m.experience}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
