import Link from "next/link";
import { ArrowLeft, Save, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea"; // Se não tiver, use Input normal ou instale

// Importamos os serviços para carregar as listas
import { animalService } from "@/services/animal-service";
import { veterinarioService } from "@/services/veterinario-service";
import { agendarConsultaAction } from "../actions";

export default function NovaConsultaPage() {
  // Buscamos os dados disponíveis no sistema
  const animais = animalService.getAll().map(a => a.toDTO());
  const veterinarios = veterinarioService.getAll().map(v => v.toDTO());

  return (
    <div className="container mx-auto py-10 px-4 max-w-2xl">
      <div className="mb-6">
        <Link href="/consultas">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarCheck className="h-6 w-6 text-purple-600" />
            Agendar Consulta
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={agendarConsultaAction} className="space-y-6">

            <div className="grid grid-cols-2 gap-4">
              {/* Select de Animais */}
              <div className="space-y-2">
                <Label htmlFor="animalId">Paciente (Pet)</Label>
                <select
                  name="animalId"
                  required
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="">Selecione...</option>
                  {animais.map(animal => (
                    <option key={animal.id} value={animal.id}>
                      {animal.nome} ({animal.especie})
                    </option>
                  ))}
                </select>
              </div>

              {/* Select de Veterinários */}
              <div className="space-y-2">
                <Label htmlFor="veterinarioId">Veterinário Responsável</Label>
                <select
                  name="veterinarioId"
                  required
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="">Selecione...</option>
                  {veterinarios.map(vet => (
                    <option key={vet.id} value={vet.id}>
                      {vet.nome}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="data">Data da Consulta</Label>
              <Input type="date" name="data" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="observacoes">Motivo / Observações</Label>
              <textarea
                name="observacoes"
                className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                placeholder="Ex: Vacinação anual..."
              />
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              <Save className="mr-2 h-4 w-4" />
              Confirmar Agendamento
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}