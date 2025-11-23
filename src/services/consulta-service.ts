import { Consulta } from "@/domain/consulta";

class ConsultaService {
  private consultas: Consulta[] = [];

  public getAll(): Consulta[] {
    return this.consultas;
  }

  public create(consulta: Consulta): void {
    this.consultas.push(consulta);
  }

  public delete(id: number): void {
    this.consultas = this.consultas.filter(c => c.id !== id);
  }
}

// Singleton para manter os dados vivos durante o desenvolvimento
const globalForService = global as unknown as { consultaService: ConsultaService };
export const consultaService = globalForService.consultaService || new ConsultaService();
if (process.env.NODE_ENV !== 'production') globalForService.consultaService = consultaService;