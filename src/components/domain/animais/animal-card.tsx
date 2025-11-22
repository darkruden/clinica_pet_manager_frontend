import { Animal } from "@/domain/animal";

interface AnimalCardProps {
  animal: Animal;
}

export function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h3 className="font-bold">{animal.nome}</h3>
      <p className="text-sm text-gray-600">{animal.descricao}</p>
    </div>
  );
}
