import { Animal } from './animal';
import { Veterinario } from './veterinario';

export class Consulta {
    constructor(
        public id: number,
        public data: Date,
        public animal: Animal,
        public veterinario: Veterinario,
        public observacoes: string
    ) {}
}
