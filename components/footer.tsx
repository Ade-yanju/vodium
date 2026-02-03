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
        padding: "120px 0 96px",
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
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ marginBottom: 20 }}
          >
            <Image
              src="/team/Vodium-logo.png"
              alt="Vodium"
              width={100}
              height={100}
              style={{ margin: "0 auto" }}
            />
          </motion.div>

          {/* Brand name */}
          <h3
            style={{
              fontSize: 28,
              fontWeight: 600,
              marginBottom: 6,
            }}
          >
            Vodium
          </h3>

          {/* Tagline */}
          <p
            style={{
              fontSize: 14,
              color: "#7c7cff",
              marginBottom: 18,
            }}
          >
            The Future of Credit Infrastructure
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              maxWidth: 560,
              margin: "0 auto 36px",
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
              padding: "14px 28px",
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              marginBottom: 42,
            }}
          >
            Join the Revolution
          </motion.button>

          {/* Social icons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 22,
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
   Subcomponent
---------------------------------- */

function SocialIcon({ Icon, label }: { Icon: any; label: string }) {
  return (
    <motion.a
      href="#"
      aria-label={label}
      whileHover={{ y: -2 }}
      style={{
        width: 42,
        height: 42,
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
