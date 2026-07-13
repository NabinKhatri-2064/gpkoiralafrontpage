import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nabinkhatri64.com.np/"),

  // Google uses this property to understand the name of the site
  applicationName: "GP frontpage",

  title: {
    default: "GP frontpage",
    template: "%s | GP frontpage",
  },

  description:
    "Generate professional GP College front pages online in seconds.",

  keywords: [
    "GP Frontpage",
    "GP Front Page",
    "gpfrontpage",
    "gp front page",
    "GPFrontPage",
    "GP Koirala Project Submission",
  ],

  
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico", 
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data to force Google to recognize your custom Site Name
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GP frontpage",
    "url": "https://nabinkhatri64.com.np",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Injecting Structured Data into the head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}