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

  // [NOVO] Método de Exclusão
  public delete(id: number): void {
    // Filtra a lista mantendo apenas os animais que NÃO têm o ID informado
    this.animais = this.animais.filter(animal => animal.id !== id);
  }


  // [NOVO] Busca um único animal pelo ID
  public getById(id: number): Animal | undefined {
    return this.animais.find(animal => animal.id === id);
  }

  // [NOVO] Substitui o animal antigo pelo novo
  public update(updatedAnimal: Animal): void {
    const index = this.animais.findIndex(a => a.id === updatedAnimal.id);
    if (index !== -1) {
      this.animais[index] = updatedAnimal;
    }
  }
}

export const animalService = new AnimalService();