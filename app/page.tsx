"use client";

import { useState } from "react";

import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import Strategy from "@/components/strategy";
import Sequence from "@/components/sequence";
import Team from "@/components/team";
import Footer from "@/components/footer";
import InvestorModal from "@/components/investor-modal";
import AccessModal from "@/components/access-modal";

export default function Home() {
  const [investorOpen, setInvestorOpen] = useState(false);
  const [accessOpen, setAccessOpen] = useState(false);

  return (
    <>
      <Hero
        onInvestorClick={() => setInvestorOpen(true)}
        onAccessClick={() => setAccessOpen(true)}
      />

      <Problem />
      <Solution />
      <Strategy />
      <Sequence />
      <Team />

      <Footer onAccessClick={() => setAccessOpen(true)} />

      <InvestorModal
        open={investorOpen}
        onClose={() => setInvestorOpen(false)}
      />

      <AccessModal open={accessOpen} onClose={() => setAccessOpen(false)} />
    </>
  );
}
