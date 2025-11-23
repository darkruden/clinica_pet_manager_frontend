import { Animal, Cachorro, Gato } from "@/domain/animal";

class AnimalService {
  private animais: Animal[] = [];

  constructor() {
    // Seed inicial (Dados de teste) se a lista estiver vazia
    if (this.animais.length === 0) {
      this.animais.push(new Cachorro(1, "Rex", 5));
      this.animais.push(new Gato(2, "Mimi", 3));
      this.animais.push(new Cachorro(3, "Thor", 2));
    }
  }

  public getAll(): Animal[] {
    return this.animais;
  }

  public create(animal: Animal): void {
    this.animais.push(animal);
  }

  public delete(id: number): void {
    this.animais = this.animais.filter(a => a.id !== id);
  }

  public getById(id: number): Animal | undefined {
    return this.animais.find(a => a.id === id);
  }

  public update(updatedAnimal: Animal): void {
    const index = this.animais.findIndex(a => a.id === updatedAnimal.id);
    if (index !== -1) {
      this.animais[index] = updatedAnimal;
    }
  }
}

// Padrão Singleton para persistência em memória no Next.js (Dev Mode)
const globalForService = global as unknown as { animalService: AnimalService };

export const animalService = globalForService.animalService || new AnimalService();

if (process.env.NODE_ENV !== 'production') globalForService.animalService = animalService;