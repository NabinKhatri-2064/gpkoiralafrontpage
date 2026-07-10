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
  metadataBase: new URL("https://gpfrontpage.vercel.app"),

  applicationName :"GP frontpage By Nabin Khatri",


  title:{
    default:"GP frontpage",
    template: "%s | GP frontpage"
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
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
