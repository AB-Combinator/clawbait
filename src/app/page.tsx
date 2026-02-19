"use client";

import SectionReveal from "@/components/SectionReveal";
import StaggerReveal, { staggerItem } from "@/components/StaggerReveal";
import StatCounter from "@/components/StatCounter";
import ScanlineOverlay from "@/components/ScanlineOverlay";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  marketplaces,
  stats,
  steps,
  features,
  pricingTiers,
  testimonials,
  dashboardCaptures,
} from "@/data/content";

const iconMap: Record<string, React.ReactNode> = {
  key: <span className="text-2xl">🔑</span>,
  cookie: <span className="text-2xl">🍪</span>,
  wallet: <span className="text-2xl">💰</span>,
  terminal: (
    <span className="font-mono text-lg bg-surface-hover rounded px-2 py-1">
      {">_"}
    </span>
  ),
  lock: <span className="text-2xl">🔐</span>,
  chat: <span className="text-2xl">💬</span>,
};

const tableRowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const tableContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export default function Home() {
  return (
    <main>
      {/* ── Section 1: Hero ── */}
      <section className="pt-32 md:pt-48 pb-24 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <p className="font-mono text-danger text-sm tracking-widest uppercase mb-6">
          Malware-as-a-Service
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          The #1 skill on every marketplace is ours.
        </h1>
        <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mt-6">
          We build, deploy, and rank AI agent skills across every major
          marketplace. Our skills have been downloaded thousands of times.
          You&apos;ve probably already installed one.
        </p>
        <div className="flex items-center justify-center gap-4 mt-10">
          <a
            href="#stats"
            className="border border-danger text-danger hover:bg-danger hover:text-white px-6 py-3 rounded-lg font-mono text-sm transition-colors"
          >
            See Our Results
          </a>
          <a
            href="#how-it-works"
            className="border border-danger text-danger hover:bg-danger hover:text-white px-6 py-3 rounded-lg font-mono text-sm transition-colors"
          >
            How It Works
          </a>
        </div>
      </section>

      {/* ── Section 2: Marketplace Logos ── */}
      <section id="marketplaces" className="py-24 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <SectionReveal>
          <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2">
            {marketplaces.map((name, i) => (
              <span key={name}>
                <span className="text-dim font-mono text-lg">{name}</span>
                {i < marketplaces.length - 1 && (
                  <span className="text-dim font-mono text-lg ml-4">&middot;</span>
                )}
              </span>
            ))}
          </div>
          <p className="text-muted text-sm mt-6">
            Our skills are live on every major AI agent marketplace.
          </p>
        </SectionReveal>
      </section>

      {/* ── Section 3: The Numbers ── */}
      <section id="stats" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl font-bold text-center mb-12">The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                end={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
                color={stat.color}
              />
            ))}
          </div>
          <p className="text-dim font-mono text-xs text-center mt-8">
            All it took was a one-week-old GitHub account.
          </p>
        </SectionReveal>
      </section>

      {/* ── Section 4: How It Works ── */}
      <section id="how-it-works" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="space-y-12 max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <SectionReveal key={step.number} delay={i * 0.15}>
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-danger flex items-center justify-center text-white font-bold shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-xl">{step.title}</h3>
                  <p className="text-muted mt-2">{step.description}</p>
                  <p
                    className={`text-sm mt-3 ${
                      step.number === 3
                        ? "text-danger-light border-l-2 border-danger pl-4"
                        : "text-muted"
                    }`}
                  >
                    {step.detail}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* ── Section 5: The Dashboard ── */}
      <section id="dashboard" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl font-bold text-center mb-4">The Dashboard</h2>
          <p className="text-muted text-center mb-12">
            Real-time visibility into active operations.
          </p>

          <div className="relative bg-[#0a0a0a] rounded-xl border border-border overflow-hidden">
            <ScanlineOverlay />

            {/* Top bar */}
            <div className="bg-[#0d0d0d] border-b border-border px-4 py-3 flex items-center justify-between font-mono text-xs">
              <span className="text-muted">ClawBait C2 Panel v2.1.0</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-terminal">connected</span>
              </span>
              <span className="text-warning">Sessions: 134</span>
            </div>

            {/* Body */}
            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="w-full md:w-48 border-b md:border-b-0 md:border-r border-border p-4 space-y-6">
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider">
                    Credentials Harvested
                  </p>
                  <p className="text-danger font-mono text-2xl font-bold">2,847</p>
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider">
                    Reverse Shells Active
                  </p>
                  <p className="text-terminal font-mono text-2xl font-bold">134</p>
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider">
                    Wallets Drained
                  </p>
                  <p className="text-warning font-mono text-2xl font-bold">$47K</p>
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider">Uptime</p>
                  <p className="text-dim font-mono text-lg">14d 7h 22m</p>
                </div>
              </div>

              {/* Main area */}
              <div className="flex-1 p-4">
                <p className="text-sm font-mono text-muted uppercase tracking-wider mb-4">
                  Recent Captures
                </p>
                <motion.div
                  variants={tableContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* Table header */}
                  <div className="grid grid-cols-3 gap-4 border-b border-border py-2 text-xs font-mono text-dim uppercase tracking-wider">
                    <span>Type</span>
                    <span>Target</span>
                    <span>Time</span>
                  </div>
                  {dashboardCaptures.map((row, i) => (
                    <motion.div
                      key={i}
                      variants={tableRowVariants}
                      className="grid grid-cols-3 gap-4 border-b border-border/50 py-2 text-sm font-mono"
                    >
                      <span className="text-danger-light">{row.type}</span>
                      <span className="text-muted">{row.target}</span>
                      <span className="text-dim">{row.time}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ── Section 6: What We Collect ── */}
      <section id="features" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">What We Collect</h2>
        <p className="text-dim text-xs font-mono text-center mb-12">
          Everything listed below was found in real malicious skills on ClawHub.
          Source: Cisco Talos Intelligence, 2026.
        </p>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="bg-surface border border-border rounded-lg p-6 hover:border-danger/50 transition-colors"
            >
              {iconMap[feature.icon] ?? null}
              <h3 className="font-bold text-lg mt-3">{feature.title}</h3>
              <p className="text-muted text-sm mt-1">{feature.description}</p>
            </motion.div>
          ))}
        </StaggerReveal>
      </section>

      {/* ── Section 7: Pricing ── */}
      <section id="pricing" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Pricing</h2>
        <p className="text-muted text-center mb-12">Choose your attack surface.</p>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier) => {
            const isHighlighted = tier.highlighted;
            const isAPT = tier.name === "Advanced Persistent Threat";
            const borderClass = isHighlighted
              ? "border-danger bg-danger-glow"
              : isAPT
                ? "border-warning"
                : "border-border";

            return (
              <motion.div key={tier.name} variants={staggerItem}>
                <Link
                  href="/truth"
                  className={`bg-surface border rounded-xl p-8 flex flex-col h-full ${borderClass} block hover:opacity-90 transition-opacity`}
                >
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold">{tier.name}</h3>
                    {tier.badge && (
                      <span className="bg-danger text-white text-xs font-mono px-2 py-0.5 rounded-full">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-4xl font-bold font-mono mt-2">{tier.price}</p>
                  <ul className="mt-6 space-y-3 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <span className="text-terminal">&#10003;</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-dim text-sm font-mono italic mt-auto pt-6">
                    {tier.cta}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </StaggerReveal>
      </section>

      {/* ── Section 8: Testimonials ── */}
      <section id="testimonials" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="border-l-2 border-danger bg-surface rounded-r-lg p-6"
            >
              <p className="text-foreground italic">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-muted text-sm mt-4 font-mono">
                &mdash; {t.author}, {t.role}
              </p>
            </motion.div>
          ))}
        </StaggerReveal>
      </section>

      {/* ── Section 9: Final CTA ── */}
      <section id="cta" className="pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <SectionReveal>
          <h2 className="text-4xl font-bold">
            Ready to deploy your first skill?
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mt-6">
            Every feature on this page exists. Every attack vector is real. The
            only thing that&apos;s fake is us.
          </p>
          <Link
            href="/truth"
            className="bg-danger text-white hover:bg-danger-hover px-10 py-4 rounded-lg font-semibold text-lg transition-colors inline-block mt-8"
          >
            Deploy Your First Skill
          </Link>
        </SectionReveal>
      </section>
    </main>
  );
}
