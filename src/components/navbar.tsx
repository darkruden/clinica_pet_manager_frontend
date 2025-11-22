// src/components/navbar.tsx
import Link from "next/link";
import { Dog, Stethoscope, Calendar, LayoutDashboard, Stethoscope as VetIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b bg-slate-950 text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo da Clínica */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="bg-blue-500 p-1.5 rounded-lg">
            <Dog className="h-6 w-6 text-white" />
          </div>
          <span>ClinicaPet<span className="text-blue-400">Manager</span></span>
        </div>

        {/* Links de Navegação */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors">
            <LayoutDashboard className="h-4 w-4" />
            Início
          </Link>
          
          <Link href="/animais" className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors">
            <Dog className="h-4 w-4" />
            Animais
          </Link>

          <Link href="/veterinarios" className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors">
            <Stethoscope className="h-4 w-4" />
            Veterinários
          </Link>

          <Link href="/consultas" className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors">
            <Calendar className="h-4 w-4" />
            Consultas
          </Link>
        </div>

        {/* Botão de Ação Rápida (Exemplo) */}
        <div>
          <Button variant="secondary" size="sm">
            Sair
          </Button>
        </div>
      </div>
    </nav>
  );
}