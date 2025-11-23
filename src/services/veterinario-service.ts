import { Veterinario } from "@/domain/veterinario";

class VeterinarioService {
  private veterinarios: Veterinario[] = [];

  constructor() {
    // Seed inicial (Dados de teste) se a lista estiver vazia
    if (this.veterinarios.length === 0) {
      this.veterinarios.push(new Veterinario(1, "Dr. House", "1234-SP", "Diagnóstico"));
      this.veterinarios.push(new Veterinario(2, "Dra. Dolittle", "5678-MG", "Comportamento"));
    }
  }

  public getAll(): Veterinario[] {
    return this.veterinarios;
  }

  public create(vet: Veterinario): void {
    this.veterinarios.push(vet);
  }

  public delete(id: number): void {
    this.veterinarios = this.veterinarios.filter(v => v.id !== id);
  }

  public getById(id: number): Veterinario | undefined {
    return this.veterinarios.find(v => v.id === id);
  }

  public update(updatedVet: Veterinario): void {
    const index = this.veterinarios.findIndex(v => v.id === updatedVet.id);
    if (index !== -1) {
      this.veterinarios[index] = updatedVet;
    }
  }
}

// Padrão Singleton para persistência em memória no Next.js (Dev Mode)
const globalForService = global as unknown as { veterinarioService: VeterinarioService };

export const veterinarioService = globalForService.veterinarioService || new VeterinarioService();

if (process.env.NODE_ENV !== 'production') globalForService.veterinarioService = veterinarioService;