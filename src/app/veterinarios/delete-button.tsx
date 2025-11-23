"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { excluirVeterinarioAction } from "./actions";

export function DeleteVetButton({ id, nome }: { id: number, nome: string }) {
    const handleDelete = async () => {
        if (confirm(`Deseja demitir o(a) ${nome}?`)) {
            await excluirVeterinarioAction(id);
        }
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            className="text-red-500 hover:text-red-700 hover:bg-red-50"
            onClick={handleDelete}
        >
            <Trash2 className="h-4 w-4" />
        </Button>
    );
}