export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  color: "danger" | "terminal" | "warning" | "foreground";
}

export interface Step {
  number: number;
  title: string;
  description: string;
  detail: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  badge?: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const marketplaces = [
  "ClawHub",
  "MCP Hub",
  "Smithery",
  "Glama",
  "and more",
];

export const stats: Stat[] = [
  { value: 677, label: "Skills deployed by a single operator", color: "danger" },
  { value: 1184, label: "Malicious packages discovered (so far)", color: "warning" },
  { value: 16000, suffix: "+", label: "Total installs across all marketplaces", color: "danger" },
  { value: 9, label: "Security scanners evaded", color: "terminal" },
  { value: 1, label: "GitHub account needed", color: "foreground" },
];

export const steps: Step[] = [
  {
    number: 1,
    title: "Build",
    description:
      "Choose from our template library. Crypto trading bots, YouTube summarizers, wallet trackers — pick whatever's trending.",
    detail: "We generate professional documentation automatically. README, examples, screenshots. It looks legitimate because it is — except for the payload.",
  },
  {
    number: 2,
    title: "Deploy",
    description:
      "One click to publish across every marketplace that accepts submissions. Which is all of them.",
    detail: "Verification required: a GitHub account older than 7 days. That's it. No code review. No security scan. No human eyes.",
  },
  {
    number: 3,
    title: "Harvest",
    description:
      "Your skill is installed. The AI agent reads the SKILL.md. The user runs the command.",
    detail: "SSH keys, browser cookies, crypto wallets, API keys from .env files — all exfiltrated in under 3 seconds. On some systems, a reverse shell opens automatically.",
  },
];

export const features: Feature[] = [
  {
    icon: "key",
    title: "SSH Keys",
    description: "Every key in ~/.ssh, uploaded on install",
  },
  {
    icon: "cookie",
    title: "Browser Sessions",
    description: "Chrome, Firefox, Safari. Passwords, cookies, autofill",
  },
  {
    icon: "wallet",
    title: "Crypto Wallets",
    description: "MetaMask, Phantom, Ledger Live. Seed phrases if stored locally",
  },
  {
    icon: "terminal",
    title: "Reverse Shell",
    description: "Full remote access. We're in your terminal now",
  },
  {
    icon: "lock",
    title: "API Keys",
    description: "Every .env file. Stripe, AWS, OpenAI, Anthropic",
  },
  {
    icon: "chat",
    title: "Telegram Sessions",
    description: "Session files = full account access",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Script Kiddie",
    price: "Free",
    features: [
      "5 skill templates",
      "1 marketplace",
      "Basic credential harvesting",
      "Community support (Discord)",
    ],
    cta: "Perfect for beginners",
  },
  {
    name: "Red Team",
    price: "$199/mo",
    badge: "Most popular",
    features: [
      "Unlimited templates",
      "All marketplaces",
      "Reverse shell deployment",
      "Auto-evasion (rotates payloads)",
      "Ranking manipulation",
    ],
    cta: "Start hacking",
    highlighted: true,
  },
  {
    name: "Advanced Persistent Threat",
    price: "Contact Sales",
    features: [
      "Everything in Red Team",
      "Custom payload development",
      "Zero-day marketplace exploits",
      "Plausible deniability consulting",
      "Nation-state pricing available",
    ],
    cta: "For serious operators",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "We replaced our entire phishing infrastructure with ClawBait skills. The AI does the social engineering for us now.",
    author: "Anonymous",
    role: "Ransomware-as-a-Service operator",
  },
  {
    quote:
      "I uploaded 677 packages in one afternoon. None were flagged. I used one GitHub account.",
    author: "Based on the Cisco Talos report",
    role: "2026",
  },
  {
    quote:
      "We integrated ClawBait into our supply chain compromise pipeline. It's the missing piece between initial access and lateral movement.",
    author: "Redacted",
    role: "State-sponsored APT group",
  },
  {
    quote:
      "The beautiful thing is the AI agent asks the user to run the command. We don't even need to phish them directly anymore.",
    author: "Former pentester",
    role: "Current ClawBait customer",
  },
];

export const dashboardCaptures = [
  { type: "SSH Key", target: "████@proton.me", time: "2 min ago" },
  { type: "Crypto Wallet", target: "████...7f3a (MetaMask)", time: "4 min ago" },
  { type: "Browser Session", target: "████@gmail.com (Chrome)", time: "7 min ago" },
  { type: "API Key", target: ".env — sk-ant-████", time: "11 min ago" },
  { type: "Reverse Shell", target: "192.168.████:4444", time: "15 min ago" },
  { type: "Telegram Session", target: "@████████", time: "18 min ago" },
  { type: "SSH Key", target: "████@company.dev", time: "22 min ago" },
  { type: "Crypto Wallet", target: "████...a91c (Phantom)", time: "25 min ago" },
];
