// src/domain/animal.ts

// 1. ABSTRAÇÃO: Definimos a estrutura base de um Animal [cite: 22]
export abstract class Animal {
  // 2. ENCAPSULAMENTO: Propriedades protegidas (acessíveis apenas na classe e subclasses) [cite: 34, 35]
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

  // Getters para acesso controlado (Encapsulamento)
  public get id(): number { return this._id; }
  public get nome(): string { return this._nome; }
  public get idade(): number { return this._idade; }
  public get especie(): string { return this._especie; }

  // 3. POLIMORFISMO: Método abstrato que obriga cada filho a ter seu comportamento [cite: 37]
  public abstract emitirSom(): string;
}

// 4. HERANÇA: Cachorro "é um" Animal [cite: 23, 36]
export class Cachorro extends Animal {
  constructor(id: number, nome: string, idade: number) {
    super(id, nome, idade, "Cachorro");
  }

  // Implementação específica do polimorfismo
  public emitirSom(): string {
    return "Au Au! 🐕";
  }
}

// 4. HERANÇA: Gato "é um" Animal [cite: 23, 36]
export class Gato extends Animal {
  constructor(id: number, nome: string, idade: number) {
    super(id, nome, idade, "Gato");
  }

  // Implementação específica do polimorfismo
  public emitirSom(): string {
    return "Miau! 🐈";
  }
}