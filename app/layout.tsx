import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alican Tilki - Systems & Infrastructure Engineer",
  description: "Engineering reliable systems—from bare metal and networks to AI-powered apps.",
  keywords: ["Infrastructure", "Systems Engineering", "AI", "DevOps", "Proxmox", "Automation"],
  authors: [{ name: "Alican Tilki" }],
  icons: {
    icon: '/instantpose-icon.png',
    apple: '/instantpose-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alicantilki.com",
    siteName: "Alican Tilki",
    title: "Alican Tilki - Systems & Infrastructure Engineer",
    description: "Engineering reliable systems—from bare metal and networks to AI-powered apps.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alican Tilki - Systems & Infrastructure Engineer",
    description: "Engineering reliable systems—from bare metal and networks to AI-powered apps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

