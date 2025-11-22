import { Animal, Cachorro, Gato } from "@/domain/animal";

// Simulação de Banco de Dados Estático (Singleton Pattern)
class AnimalService {
  private animais: Animal[] = [];

  constructor() {
    // Seed inicial (Dados de teste)
    this.animais.push(new Cachorro(1, "Rex", 5));
    this.animais.push(new Gato(2, "Felix", 3));
    this.animais.push(new Cachorro(3, "Thor", 2));
  }

  public getAll(): Animal[] {
    return this.animais;
  }

  public create(animal: Animal): void {
    this.animais.push(animal);
  }
}

export const animalService = new AnimalService();
