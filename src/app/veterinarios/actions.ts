"use server";

import { veterinarioService } from "@/services/veterinario-service";
import { revalidatePath } from "next/cache";

export async function excluirVeterinarioAction(id: number) {
  veterinarioService.delete(id);
  revalidatePath("/veterinarios");
}

// Deixaremos as ações de criar/atualizar para quando fizermos os formulários