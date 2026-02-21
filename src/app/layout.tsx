import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css"
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";


const geistInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistFira = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CaroAlDev",
  description: "Great code, Great experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`
          ${geistInter.variable} 
          ${geistFira.variable} 
          antialiased
          bg-neutral-950
          text-neutral-100
          `}
      >
        <Navbar/>
        <main className="pt-20">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
