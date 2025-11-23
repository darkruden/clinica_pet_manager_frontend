"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Save, Stethoscope } from "lucide-react";
import Link from "next/link";

import { buscarVeterinarioPorIdAction, atualizarVeterinarioAction } from "../actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EditarVeterinarioPage() {
    const params = useParams();
    const id = Number(params.id);

    // Estados para controlar os inputs
    const [nome, setNome] = useState("");
    const [crmv, setCrmv] = useState("");
    const [especialidade, setEspecialidade] = useState("");
    const [loading, setLoading] = useState(true);

    // Busca os dados ao carregar a página
    useEffect(() => {
        async function carregarDados() {
            const dados = await buscarVeterinarioPorIdAction(id);
            if (dados) {
                setNome(dados.nome);
                setCrmv(dados.crmv);
                setEspecialidade(dados.especialidade);
            } else {
                alert("Veterinário não encontrado!");
            }
            setLoading(false);
        }
        carregarDados();
    }, [id]);

    if (loading) return <div className="text-center p-10">Carregando dados...</div>;

    return (
        <div className="container mx-auto py-10 px-4 max-w-2xl">
            <div className="mb-6">
                <Link href="/veterinarios">
                    <Button variant="ghost" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Voltar
                    </Button>
                </Link>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Stethoscope className="h-6 w-6 text-blue-600" />
                        Editar Dados do Profissional
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Server Action nativa no formulário */}
                    <form action={atualizarVeterinarioAction} className="space-y-6">

                        {/* Campo Oculto para enviar o ID */}
                        <input type="hidden" name="id" value={id} />

                        <div className="space-y-2">
                            <Label htmlFor="nome">Nome Completo</Label>
                            <Input
                                id="nome"
                                name="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="crmv">CRMV</Label>
                                <Input
                                    id="crmv"
                                    name="crmv"
                                    value={crmv}
                                    onChange={(e) => setCrmv(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="especialidade">Especialidade</Label>
                                <select
                                    id="especialidade"
                                    name="especialidade"
                                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                    value={especialidade}
                                    onChange={(e) => setEspecialidade(e.target.value)}
                                >
                                    <option value="Clínica Geral">Clínica Geral</option>
                                    <option value="Cirurgia">Cirurgia</option>
                                    <option value="Ortopedia">Ortopedia</option>
                                    <option value="Dermatologia">Dermatologia</option>
                                    <option value="Cardiologia">Cardiologia</option>
                                </select>
                            </div>
                        </div>

                        <Button type="submit" className="w-full">
                            <Save className="mr-2 h-4 w-4" />
                            Salvar Alterações
                        </Button>

                    </form>
                </CardContent>
            </Card>
        </div>
    );
}