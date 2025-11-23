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

  // O método mágico que evita erros no Next.js
  public toDTO(): VeterinarioDTO {
    return {
      id: this.id,
      nome: this.nome,
      crmv: this.crmv,
      especialidade: this.especialidade
    };
  }
}