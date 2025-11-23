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

export async function buscarVeterinarioPorIdAction(id: number) {
  const vet = veterinarioService.getById(id);
  // Retorna o DTO para não dar erro de "Classes not supported"
  return vet ? vet.toDTO() : null;
}

// [NOVO] Processa a atualização vinda do formulário
export async function atualizarVeterinarioAction(formData: FormData) {
  const id = parseInt(formData.get("id") as string);
  const nome = formData.get("nome") as string;
  const crmv = formData.get("crmv") as string;
  const especialidade = formData.get("especialidade") as string;

  // Recria o objeto com a Classe de Domínio
  const vetAtualizado = new Veterinario(id, nome, crmv, especialidade);
  
  veterinarioService.update(vetAtualizado);
  
  revalidatePath("/veterinarios");
  redirect("/veterinarios");
}