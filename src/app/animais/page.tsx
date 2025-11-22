import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimalCard } from "@/components/domain/animais/animal-card";
import { animalService } from "@/services/animal-service";
import type { AnimalDTO } from "@/services/animal-service";

interface AnimalCardProps {
  animal: AnimalDTO;
}
export default function Page() {
  // 1. Buscamos as CLASSES do serviço
  const listaClasses = animalService.getAll();

  // 2. Convertemos para DTOs (Objetos Simples) antes de renderizar
  // Isso remove os métodos e deixa o Next.js feliz
  const listaAnimais = listaClasses.map(animal => animal.toDTO());

  return (
    <div className="container mx-auto py-10 px-4">
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

      {listaAnimais.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {listaAnimais.map((animal) => (
            // Agora passamos o DTO, que não quebra
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