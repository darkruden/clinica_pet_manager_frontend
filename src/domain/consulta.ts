import { Animal, AnimalDTO } from './animal';
import { Veterinario, VeterinarioDTO } from './veterinario';

export interface ConsultaDTO {
  id: number;
  data: string; // Formatada para "DD/MM/AAAA" ou ISO
  animal: AnimalDTO;
  veterinario: VeterinarioDTO;
  observacoes: string;
}

export class Consulta {
    constructor(
        public id: number,
        public data: Date,
        public animal: Animal,
        public veterinario: Veterinario,
        public observacoes: string
    ) {}

    // Transforma a classe complexa em dados simples para o React
    public toDTO(): ConsultaDTO {
        return {
            id: this.id,
            // Formata a data para o padrão brasileiro
            data: this.data.toLocaleDateString("pt-BR"), 
            animal: this.animal.toDTO(),
            veterinario: this.veterinario.toDTO(),
            observacoes: this.observacoes
        };
    }
}