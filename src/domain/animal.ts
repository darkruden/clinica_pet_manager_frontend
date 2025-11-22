// src/domain/animal.ts

// Interface que define apenas os DADOS (sem métodos) para o Frontend
export interface AnimalDTO {
  id: number;
  nome: string;
  idade: number;
  especie: string;
  descricao: string; // Enviamos a descrição já pronta
}

// 1. ABSTRAÇÃO
export abstract class Animal {
  // 2. ENCAPSULAMENTO
  protected _id: number;
  protected _nome: string;
  protected _idade: number;
  protected _especie: string;

  constructor(id: number, nome: string, idade: number, especie: string) {
    this._id = id;
    this._nome = nome;
    this._idade = idade;
    this._especie = especie;
  }

  public get id(): number { return this._id; }
  public get nome(): string { return this._nome; }
  public get idade(): number { return this._idade; }
  public get especie(): string { return this._especie; }
  
  public get descricao(): string {
    return `${this._nome} (${this._especie}), ${this._idade} anos`;
  }

  // 3. POLIMORFISMO
  public abstract emitirSom(): string;

  // [NOVO] Método para converter Classe -> Objeto Simples (DTO)
  public toDTO(): AnimalDTO {
    return {
      id: this.id,
      nome: this.nome,
      idade: this.idade,
      especie: this.especie,
      descricao: this.descricao // O getter roda aqui e vira texto
    };
  }
}

// 4. HERANÇA
export class Cachorro extends Animal {
  constructor(id: number, nome: string, idade: number) {
    super(id, nome, idade, "Cachorro");
  }

  public emitirSom(): string {
    return "Au Au! 🐕";
  }
}

export class Gato extends Animal {
  constructor(id: number, nome: string, idade: number) {
    super(id, nome, idade, "Gato");
  }

  public emitirSom(): string {
    return "Miau! 🐈";
  }
}