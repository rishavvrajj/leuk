import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leuk-eight.vercel.app/"),
  title: {
    default: "leuk",
    template: "%s",
  },
  description:
    "Your work is already speaking. Almost no one can hear it. Leuk gives your GitHub a place to live — a beautiful, shareable portfolio, no forms, no rehearsing.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leuk-eight.vercel.app/",
    siteName: "leuk",
    title: "leuk — your work is already speaking",
    description:
      "Somewhere in your commit history is proof of who you're becoming. Leuk gives it a place to live.",
    images: [
      {
        url: "/OG.png",
        width: 1877,
        height: 907,
        alt: "leuk — your work is already speaking. Almost no one can hear it.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@leuk",
    title: "leuk — your work is already speaking",
    description:
      "Somewhere in your commit history is proof of who you're becoming. Leuk gives it a place to live.",
    images: ["/OG.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased [--pattern-fg:var(--color-neutral-200)] dark:[--pattern-fg:var(--color-neutral-900)]`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}