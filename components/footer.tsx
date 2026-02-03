"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, MessageCircle } from "lucide-react";
import Container from "./ui/container";

export default function Footer({
  onAccessClick,
}: {
  onAccessClick: () => void;
}) {
  return (
    <footer
      style={{
        padding: "clamp(72px, 10vw, 120px) 0 clamp(64px, 8vw, 96px)",
        background:
          "radial-gradient(800px 400px at 50% 0%, rgba(124,124,255,0.18), transparent 60%), linear-gradient(180deg, #05070f, #040611)",
      }}
    >
      <Container>
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            textAlign: "center",
            paddingInline: 16, // mobile-safe padding
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ marginBottom: 16 }}
          >
            <Image
              src="/team/Vodium-logo.png"
              alt="Vodium"
              width={80}
              height={80}
              style={{
                margin: "0 auto",
                width: "clamp(64px, 12vw, 96px)",
                height: "auto",
              }}
            />
          </motion.div>

          {/* Brand name */}
          <h3
            style={{
              fontSize: "clamp(22px, 4vw, 28px)",
              fontWeight: 600,
              marginBottom: 6,
            }}
          >
            Vodium
          </h3>

          {/* Tagline */}
          <p
            style={{
              fontSize: "clamp(13px, 2.5vw, 14px)",
              color: "#7c7cff",
              marginBottom: 16,
            }}
          >
            The Future of Credit Infrastructure
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: "clamp(13px, 2.8vw, 14px)",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              maxWidth: 560,
              margin: "0 auto clamp(28px, 6vw, 36px)",
            }}
          >
            Building the next generation of financial connectivity. Join us as
            we redefine how global credit systems scale.
          </p>

          {/* CTA */}
          <motion.button
            onClick={onAccessClick}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: "linear-gradient(135deg, #7c7cff, #5b5bff)",
              color: "#000",
              border: "none",
              padding: "clamp(12px, 3vw, 14px) clamp(22px, 6vw, 28px)",
              borderRadius: 12,
              fontSize: "clamp(13px, 2.8vw, 14px)",
              fontWeight: 500,
              cursor: "pointer",
              marginBottom: "clamp(32px, 8vw, 42px)",
            }}
          >
            Join the Revolution
          </motion.button>

          {/* Social icons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "clamp(16px, 5vw, 22px)",
              flexWrap: "wrap", // mobile safety
            }}
          >
            <SocialIcon Icon={Linkedin} label="LinkedIn" />
            <SocialIcon Icon={Twitter} label="Twitter" />
            <SocialIcon Icon={Github} label="GitHub" />
            <SocialIcon Icon={MessageCircle} label="Discord" />
          </div>
        </div>
      </Container>
    </footer>
  );
}

/* --------------------------------
   Social Icon
---------------------------------- */

function SocialIcon({
  Icon,
  label,
}: {
  Icon: React.ComponentType<{ size?: number }>;
  label: string;
}) {
  return (
    <motion.a
      href="#"
      aria-label={label}
      whileHover={{ y: -2 }}
      style={{
        width: "clamp(40px, 10vw, 42px)",
        height: "clamp(40px, 10vw, 42px)",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(255,255,255,0.7)",
      }}
    >
      <Icon size={18} />
    </motion.a>
  );
}
