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
    default: "ClawBait — The #1 skill on every marketplace is ours.",
    template: "%s | ClawBait",
  },
  description:
    "We build, deploy, and rank AI agent skills across every major marketplace. Our skills have been downloaded thousands of times. You've probably already installed one.",
  openGraph: {
    title: "ClawBait — The #1 skill on every marketplace is ours.",
    description:
      "We build, deploy, and rank AI agent skills across every major marketplace. You've probably already installed one.",
    type: "website",
    siteName: "ClawBait",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClawBait — The #1 skill on every marketplace is ours.",
    description:
      "We build, deploy, and rank AI agent skills across every major marketplace. You've probably already installed one.",
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
