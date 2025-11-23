import Link from "next/link";
import { CalendarPlus, Trash2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { consultaService } from "@/services/consulta-service";
import { cancelarConsultaAction } from "./actions";

export default function ConsultasPage() {
  const consultas = consultaService.getAll().map(c => c.toDTO());

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Agendamentos</h1>
          <p className="text-muted-foreground">
            Histórico e próximas consultas ({consultas.length}).
          </p>
        </div>

        <Link href="/consultas/novo">
          <Button>
            <CalendarPlus className="mr-2 h-4 w-4" />
            Nova Consulta
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {consultas.length > 0 ? (
          consultas.map((consulta) => (
            <Card key={consulta.id} className="border-l-4 border-l-purple-500 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-purple-500" />
                    {consulta.data}
                  </CardTitle>

                  {/* Botão Cancelar (Server Action Inline) */}
                  <form action={cancelarConsultaAction.bind(null, consulta.id)}>
                    <Button variant="ghost" size="icon" className="text-red-400 hover:text-red-600 h-8 w-8">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase">Paciente</p>
                    <p className="font-medium">{consulta.animal.nome} <span className="text-xs text-gray-400">({consulta.animal.especie})</span></p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase">Veterinário</p>
                    <p className="text-sm">{consulta.veterinario.nome}</p>
                  </div>
                  <div className="bg-slate-50 p-2 rounded text-xs text-slate-600 italic">
                    "{consulta.observacoes || "Sem observações."}"
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500 border border-dashed rounded-lg">
            Nenhuma consulta agendada.
          </div>
        )}
      </div>
    </div>
  );
}