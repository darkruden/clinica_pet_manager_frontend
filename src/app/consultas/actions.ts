"use server";

import { consultaService } from "@/services/consulta-service";
import { animalService } from "@/services/animal-service";
import { veterinarioService } from "@/services/veterinario-service";
import { Consulta } from "@/domain/consulta";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function agendarConsultaAction(formData: FormData) {
  // 1. Capturar os IDs enviados pelo formulário
  const animalId = Number(formData.get("animalId"));
  const veterinarioId = Number(formData.get("veterinarioId"));
  const dataString = formData.get("data") as string;
  const observacoes = formData.get("observacoes") as string;

  // 2. Buscar os objetos REAIS nos outros serviços (Relacionamento)
  const animal = animalService.getById(animalId);
  const veterinario = veterinarioService.getById(veterinarioId);

  // Validação básica
  if (!animal || !veterinario) {
    throw new Error("Animal ou Veterinário não encontrado!");
  }

  // 3. Criar a Consulta
  const novaConsulta = new Consulta(
    Math.floor(Math.random() * 10000), // ID aleatório
    new Date(dataString), // Converte string para Date
    animal,
    veterinario,
    observacoes
  );

  // 4. Salvar
  consultaService.create(novaConsulta);

  revalidatePath("/consultas");
  redirect("/consultas");
}

export async function cancelarConsultaAction(id: number) {
  consultaService.delete(id);
  revalidatePath("/consultas");
}