import Link from "next/link";
import { ArrowLeft, Save, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cadastrarVeterinarioAction } from "../actions"; // Importamos a ação

export default function NovoVeterinarioPage() {
  return (
    <div className="container mx-auto py-10 px-4 max-w-2xl">
      <div className="mb-6">
        <Link href="/veterinarios">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar para Lista
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Stethoscope className="h-6 w-6 text-green-600" />
            Contratar Novo Veterinário
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* O atributo 'action' conecta direto com o servidor! */}
          <form action={cadastrarVeterinarioAction} className="space-y-6">

            <div className="space-y-2">
              <Label htmlFor="nome">Nome Completo</Label>
              <Input
                id="nome"
                name="nome"
                placeholder="Ex: Dra. Ana Silva"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="crmv">CRMV (Registro)</Label>
                <Input
                  id="crmv"
                  name="crmv"
                  placeholder="Ex: 1234-SP"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="especialidade">Especialidade</Label>
                {/* Usando um select nativo simples */}
                <select
                  id="especialidade"
                  name="especialidade"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="Clínica Geral">Clínica Geral</option>
                  <option value="Cirurgia">Cirurgia</option>
                  <option value="Ortopedia">Ortopedia</option>
                  <option value="Dermatologia">Dermatologia</option>
                  <option value="Cardiologia">Cardiologia</option>
                </select>
              </div>
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              <Save className="mr-2 h-4 w-4" />
              Salvar Contratação
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}