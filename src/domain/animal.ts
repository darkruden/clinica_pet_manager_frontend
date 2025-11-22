// src/domain/animal.ts

// 1. ABSTRAÇÃO: Definimos a estrutura base de um Animal
export abstract class Animal {
  // 2. ENCAPSULAMENTO: Propriedades protegidas
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
}

// 4. HERANÇA: Cachorro
export class Cachorro extends Animal {
  constructor(id: number, nome: string, idade: number) {
    super(id, nome, idade, "Cachorro");
  }

  public emitirSom(): string {
    return "Au Au! 🐕";
  }
}

// 4. HERANÇA: Gato
export class Gato extends Animal {
  constructor(id: number, nome: string, idade: number) {
    super(id, nome, idade, "Gato");
  }

  public emitirSom(): string {
    return "Miau! 🐈";
  }
}