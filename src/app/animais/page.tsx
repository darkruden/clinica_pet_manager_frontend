import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimalCard } from "@/components/domain/animais/animal-card"; // Importando nosso componente visual
import { animalService } from "@/services/animal-service"; // Importando nosso "banco de dados"

export default function Page() {
  // 1. Buscamos os dados do serviço (Simulando um SELECT * FROM animais)
  const listaAnimais = animalService.getAll();

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Cabeçalho da Página */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestão de Animais</h1>
          <p className="text-muted-foreground">
            Visualizando {listaAnimais.length} registros cadastrados.
          </p>
        </div>
        
        <Link href="/animais/novo">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Novo Animal
          </Button>
        </Link>
      </div>

      {/* Grid de Listagem (Aqui acontece a mágica) */}
      {listaAnimais.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {listaAnimais.map((animal) => (
            // Passamos a instância da Classe Animal para o componente
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500 border border-dashed rounded-lg">
          Nenhum animal cadastrado no sistema.
        </div>
      )}
    </div>
  );
}