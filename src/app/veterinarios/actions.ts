"use server";

import { Veterinario } from "@/domain/veterinario";
import { veterinarioService } from "@/services/veterinario-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function excluirVeterinarioAction(id: number) {
  veterinarioService.delete(id);
  revalidatePath("/veterinarios");
}

export async function cadastrarVeterinarioAction(formData: FormData) {
  // Extraindo dados do formulário HTML nativo
  const nome = formData.get("nome") as string;
  const crmv = formData.get("crmv") as string;
  const especialidade = formData.get("especialidade") as string;

  // Simulando ID aleatório
  const novoId = Math.floor(Math.random() * 10000);

  // Instanciando a Classe (POO)
  const novoVet = new Veterinario(novoId, nome, crmv, especialidade);

  // Salvando
  veterinarioService.create(novoVet);

  // Atualizando a lista e redirecionando
  revalidatePath("/veterinarios");
  redirect("/veterinarios");
}