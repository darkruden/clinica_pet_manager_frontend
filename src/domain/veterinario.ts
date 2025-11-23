export interface VeterinarioDTO {
  id: number;
  nome: string;
  crmv: string;
  especialidade: string;
}

export class Veterinario {
  constructor(
    public id: number,
    public nome: string,
    public crmv: string,
    public especialidade: string
  ) {}

  // Padrão DTO para passar dados para o Frontend sem quebrar o Next.js
  public toDTO(): VeterinarioDTO {
    return {
      id: this.id,
      nome: this.nome,
      crmv: this.crmv,
      especialidade: this.especialidade
    };
  }
}