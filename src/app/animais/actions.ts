"use server";

import { animalService } from "@/services/animal-service";
import { revalidatePath } from "next/cache";
import { Cachorro, Gato } from "@/domain/animal"; // Importe as classes se não estiverem importadas
/**
 * Esta função roda EXCLUSIVAMENTE no servidor (Node.js),
 * mas pode ser importada e chamada por componentes Client (React).
 */
export async function excluirAnimalAction(id: number) {
  // 1. Remove do "banco de dados"
  animalService.delete(id);
  
  // 2. Manda o Next.js recarregar a página /animais com os dados novos
  revalidatePath("/animais");
}

export async function atualizarAnimalAction(id: number, nome: string, idade: number, tipo: "cachorro" | "gato") {
  let animalAtualizado;

  // Recriamos o objeto com a Classe correta (POO)
  if (tipo === 'cachorro') {
    animalAtualizado = new Cachorro(id, nome, idade);
  } else {
    animalAtualizado = new Gato(id, nome, idade);
  }
  
  animalService.update(animalAtualizado);
  
  // Atualiza as caches para mostrar os dados novos
  revalidatePath("/animais");
}