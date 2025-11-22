// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar"; // Importamos nossa Navbar nova

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clinica Pet Manager",
  description: "Sistema de Gestão Veterinária",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* A Navbar fica fixa no topo */}
        <Navbar />
        
        {/* O conteúdo das páginas (children) renderiza abaixo */}
        <main className="min-h-screen bg-slate-50">
          {children}
        </main>
      </body>
    </html>
  );
}