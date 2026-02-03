"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function InvestorModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // 🔒 For now: simulate submission
    // Later this goes to API / Supabase / email
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(4,6,17,0.85)",
              backdropFilter: "blur(6px)",
              zIndex: 90,
            }}
          />

          {/* Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
          >
            {/* Modal */}
            <div
              style={{
                width: "100%",
                maxWidth: 520,
                background: "linear-gradient(180deg, #05070f, #040611)",
                borderRadius: 20,
                boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
                overflow: "hidden",
              }}
            >
              {/* Header */}
              <div style={{ padding: 28, position: "relative" }}>
                <button
                  onClick={onClose}
                  style={{
                    position: "absolute",
                    top: 18,
                    right: 18,
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.6)",
                    cursor: "pointer",
                  }}
                >
                  <X size={20} />
                </button>

                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#7c7cff",
                    textAlign: "center",
                    marginBottom: 8,
                  }}
                >
                  Investor Access
                </p>

                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 600,
                    textAlign: "center",
                    marginBottom: 8,
                  }}
                >
                  Request Investor Materials
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.65)",
                    textAlign: "center",
                  }}
                >
                  Share a few details and we’ll follow up directly.
                </p>
              </div>

              {/* Content */}
              <div style={{ padding: "0 28px 28px" }}>
                {submitted ? (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "40px 0",
                    }}
                  >
                    <p style={{ fontSize: 16, fontWeight: 500 }}>Thank you.</p>
                    <p
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.6)",
                        marginTop: 8,
                      }}
                    >
                      We’ll be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
                    }}
                  >
                    <Input placeholder="Full name" required />
                    <Input placeholder="Email address" type="email" required />
                    <Input placeholder="Firm / Organization" />
                    <Textarea placeholder="Optional message" />

                    <button
                      type="submit"
                      style={{
                        marginTop: 8,
                        padding: "14px",
                        borderRadius: 12,
                        border: "none",
                        cursor: "pointer",
                        background: "linear-gradient(135deg, #7c7cff, #5b5bff)",
                        color: "#000",
                        fontWeight: 500,
                        fontSize: 14,
                      }}
                    >
                      Submit request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ---------------------------
   Inputs
---------------------------- */

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={{
        width: "100%",
        padding: "12px 14px",
        borderRadius: 10,
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.04)",
        color: "#fff",
        fontSize: 14,
        outline: "none",
      }}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={3}
      style={{
        width: "100%",
        padding: "12px 14px",
        borderRadius: 10,
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.04)",
        color: "#fff",
        fontSize: 14,
        outline: "none",
        resize: "none",
      }}
    />
  );
}
