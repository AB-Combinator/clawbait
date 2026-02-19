import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ClawBait — We put malware in AI agent marketplaces. Nobody noticed.",
    template: "%s | ClawBait",
  },
  description:
    "1,184 malicious skills. 16,000+ installs. The #1 ranked skill on the biggest marketplace was ours. All it took was a week-old GitHub account.",
  openGraph: {
    title: "ClawBait — We put malware in AI agent marketplaces. Nobody noticed.",
    description:
      "1,184 malicious skills. 16,000+ installs. The #1 ranked skill was ours. All it took was a week-old GitHub account.",
    type: "website",
    siteName: "ClawBait",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClawBait — We put malware in AI agent marketplaces. Nobody noticed.",
    description:
      "1,184 malicious skills. 16,000+ installs. The #1 ranked skill was ours. All it took was a week-old GitHub account.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
