import Link from "next/link";
import { PlusCircle, UserRoundX, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { veterinarioService } from "@/services/veterinario-service";
import { excluirVeterinarioAction } from "./actions";

// Componente Client-Side Pequeno para o Botão de Excluir
// (Isolamos isso para poder usar "use client" apenas onde precisa de interatividade)
import { DeleteVetButton } from "./delete-button";

export default function VeterinariosPage() {
  const listaVets = veterinarioService.getAll().map(v => v.toDTO());

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Corpo Clínico</h1>
          <p className="text-muted-foreground">
            Gerencie os veterinários cadastrados ({listaVets.length}).
          </p>
        </div>

        <Link href="/veterinarios/novo">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Novo Veterinário
          </Button>
        </Link>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm text-left text-slate-500">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b">
            <tr>
              <th className="px-6 py-3">Nome</th>
              <th className="px-6 py-3">CRMV</th>
              <th className="px-6 py-3">Especialidade</th>
              <th className="px-6 py-3 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {listaVets.length > 0 ? (
              listaVets.map((vet) => (
                <tr key={vet.id} className="bg-white border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">{vet.nome}</td>
                  <td className="px-6 py-4">{vet.crmv}</td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {vet.especialidade}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right flex justify-end gap-2">
                    {/* Botão Editar (Placeholder por enquanto) */}
                    <Button variant="ghost" size="icon" disabled>
                      <Pencil className="h-4 w-4" />
                    </Button>

                    {/* Botão Excluir */}
                    <DeleteVetButton id={vet.id} nome={vet.nome} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-10 text-center text-slate-400">
                  Nenhum veterinário cadastrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}