"use client";

import { AnimalDTO } from "@/domain/animal"; // Mudamos de Animal para AnimalDTO
import { Button } from "@/components/ui/button";
import { Trash2, PawPrint } from "lucide-react";
import { excluirAnimalAction } from "@/app/animais/actions";
import Link from "next/link"; // Adicione este import
import { Edit } from "lucide-react"; // Adicione o ícone Edit
interface AnimalCardProps {
  animal: AnimalDTO; // O componente agora aceita o objeto simples
}

export function AnimalCard({ animal }: AnimalCardProps) {

  const handleDelete = async () => {
    const confirmou = window.confirm(`Tem certeza que deseja remover o ${animal.nome}?`);
    if (confirmou) {
      await excluirAnimalAction(animal.id);
    }
  };

  return (
    <div className="group relative flex flex-col justify-between border border-slate-200 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:border-blue-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 p-2 rounded-lg">
            <PawPrint className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900">{animal.nome}</h3>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800">
              {animal.especie}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-slate-500 leading-relaxed">
          {animal.descricao}
        </p>
      </div>

      <div className="flex gap-2 mt-auto pt-4 border-t border-slate-100">

        {/* Botão de Editar (Link) */}
        <Link href={`/animais/${animal.id}`} className="w-full">
          <Button variant="outline" size="sm" className="w-full gap-2">
            <Edit className="h-4 w-4" />
            Editar
          </Button>
        </Link>

        {/* Botão de Excluir (Existente) */}
        <Button
          variant="destructive"
          size="sm"
          className="w-full gap-2 hover:bg-red-600 transition-colors"
          onClick={handleDelete}
        >
          <Trash2 className="h-4 w-4" />
          Excluir
        </Button>
      </div>
    </div>
  );
}