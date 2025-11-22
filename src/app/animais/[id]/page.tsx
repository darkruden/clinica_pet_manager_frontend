"use client";

// [Correção 1] Importamos o React padrão para usar os tipos (React.FormEvent)
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

// Imports de UI e Lógica
import { atualizarAnimalAction } from "@/app/animais/actions";
// [Correção 2] Removemos o import do animalService que não estava sendo usado
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EditarAnimalPage() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [tipo, setTipo] = useState<"cachorro" | "gato">("cachorro");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aqui futuramente você pode chamar uma Server Action para buscar os dados
    setLoading(false);
  }, []);

  const handleSalvar = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação simples para evitar NaN
    const idadeInt = parseInt(idade);
    if (isNaN(idadeInt)) {
      alert("Por favor, insira uma idade válida.");
      return;
    }

    await atualizarAnimalAction(id, nome, idadeInt, tipo);
    alert("Animal atualizado com sucesso!");
    router.push("/animais");
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-2xl">
      <div className="mb-6">
        <Link href="/animais">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Editar Animal #{id}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSalvar} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome</Label>
              <Input 
                id="nome"
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
                placeholder="Novo nome..." 
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="idade">Idade</Label>
                <Input 
                  id="idade"
                  type="number" 
                  value={idade} 
                  onChange={(e) => setIdade(e.target.value)} 
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tipo">Tipo</Label>
                <select 
                  id="tipo"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={tipo}
                  // Type casting seguro
                  onChange={(e) => setTipo(e.target.value as "cachorro" | "gato")}
                >
                  <option value="cachorro">Cachorro</option>
                  <option value="gato">Gato</option>
                </select>
              </div>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              <Save className="mr-2 h-4 w-4" />
              Salvar Alterações
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}