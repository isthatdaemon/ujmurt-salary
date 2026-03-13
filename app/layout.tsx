import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ujmur't 1.75 | Salary Calculator",
  description: "FLS TOP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-[#0f172a] antialiased selection:bg-indigo-500/30`}
      >
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-emerald-500/5 blur-[120px]" />
        </div>
        
        <main>{children}</main>
      </body>
    </html>
  );
}