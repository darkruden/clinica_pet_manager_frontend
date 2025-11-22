"use server";

import { animalService } from "@/services/animal-service";
import { revalidatePath } from "next/cache";

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