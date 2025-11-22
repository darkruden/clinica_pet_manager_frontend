import Link from "next/link";
import { Dog, Stethoscope, Calendar, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4">
      {/* Cabeçalho da Página */}
      <section className="mb-10 space-y-2 text-center md:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Painel Administrativo
        </h1>
        <p className="text-muted-foreground text-lg">
          Bem-vindo ao sistema de gestão da Clínica PetManager.
        </p>
      </section>

      {/* Grid de Cartões de Acesso Rápido */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Card 1: Gestão de Animais */}
        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pacientes (Pets)</CardTitle>
            <Dog className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">Gestão de Animais</div>
            <p className="text-xs text-muted-foreground mb-4">
              Cadastre, consulte e edite os dados dos animais atendidos.
            </p>
            <Link href="/animais">
              <Button className="w-full" variant="outline">
                Acessar Módulo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Card 2: Veterinários */}
        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Corpo Clínico</CardTitle>
            <Stethoscope className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">Veterinários</div>
            <p className="text-xs text-muted-foreground mb-4">
              Gerencie os veterinários e suas especialidades.
            </p>
            <Link href="/veterinarios">
              <Button className="w-full" variant="outline">
                Acessar Módulo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Card 3: Consultas */}
        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Agenda</CardTitle>
            <Calendar className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">Consultas</div>
            <p className="text-xs text-muted-foreground mb-4">
              Agende novas consultas e visualize o histórico.
            </p>
            <Link href="/consultas">
              <Button className="w-full" variant="outline">
                Acessar Módulo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}