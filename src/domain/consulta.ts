import { Animal, AnimalDTO } from './animal';
import { Veterinario, VeterinarioDTO } from './veterinario';

export interface ConsultaDTO {
  id: number;
  data: string;
  animal: AnimalDTO;
  veterinario: VeterinarioDTO;
  observacoes: string;
  concluida: boolean; // [NOVO] Campo de status
}

export class Consulta {
    constructor(
        public id: number,
        public data: Date,
        public animal: Animal,
        public veterinario: Veterinario,
        public observacoes: string,
        public concluida: boolean = false // [NOVO] Padrão é false (pendente)
    ) {}

    public toDTO(): ConsultaDTO {
        return {
            id: this.id,
            data: this.data.toLocaleDateString("pt-BR"), 
            animal: this.animal.toDTO(),
            veterinario: this.veterinario.toDTO(),
            observacoes: this.observacoes,
            concluida: this.concluida // [NOVO]
        };
    }
}