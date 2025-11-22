"use client"; // Obrigatório pois usamos hooks (useState, useRouter)

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

// Importamos nossas classes de domínio (POO) e o serviço
import { Cachorro, Gato } from "@/domain/animal";
import { animalService } from "@/services/animal-service";

// Importamos componentes visuais
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NovoAnimalPage() {
  const router = useRouter();

  // Estados do Formulário
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [tipo, setTipo] = useState<"cachorro" | "gato">("cachorro");

  // Função que processa o envio do formulário
  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que a página recarregue

    const idadeNumero = parseInt(idade);
    // Simulando um ID aleatório (no banco real isso seria automático)
    const novoId = Math.floor(Math.random() * 10000);

    // LÓGICA POO: Instanciação Polimórfica
    // O serviço espera um "Animal", mas nós entregamos um "Cachorro" ou "Gato"
    let novoAnimal;

    if (tipo === "cachorro") {
      novoAnimal = new Cachorro(novoId, nome, idadeNumero);
    } else {
      novoAnimal = new Gato(novoId, nome, idadeNumero);
    }

    // Salva no nosso "Banco de Dados" em memória
    animalService.create(novoAnimal);

    alert(`${tipo === 'cachorro' ? '🐶' : '🐱'} ${nome} cadastrado com sucesso!`);
    
    // Volta para a lista
    router.push("/animais");
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-2xl">
      <div className="mb-6">
        <Link href="/animais">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar para Lista
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cadastrar Novo Paciente</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSalvar} className="space-y-6">
            
            {/* Campo Nome */}
            <div className="space-y-2">
              <Label htmlFor="nome">Nome do Pet</Label>
              <Input 
                id="nome" 
                placeholder="Ex: Rex, Mel..." 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required 
              />
            </div>

            {/* Campo Idade e Tipo (Lado a lado) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="idade">Idade (anos)</Label>
                <Input 
                  id="idade" 
                  type="number" 
                  placeholder="0" 
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tipo">Espécie</Label>
                <select 
                  id="tipo"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value as "cachorro" | "gato")}
                >
                  <option value="cachorro">Cachorro 🐕</option>
                  <option value="gato">Gato 🐈</option>
                </select>
              </div>
            </div>

            {/* Botão Salvar */}
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              <Save className="mr-2 h-4 w-4" />
              Salvar Cadastro
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}