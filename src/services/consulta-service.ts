import { Consulta } from "@/domain/consulta";

class ConsultaService {
  private consultas: Consulta[] = [];

  public getAll(): Consulta[] {
    // Opcional: Ordenar para mostrar as pendentes primeiro
    return this.consultas.sort((a, b) => Number(a.concluida) - Number(b.concluida));
  }

  public create(consulta: Consulta): void {
    this.consultas.push(consulta);
  }

  public delete(id: number): void {
    this.consultas = this.consultas.filter(c => c.id !== id);
  }

  // [NOVO] Método para finalizar o atendimento
  public concluir(id: number): void {
    const consulta = this.consultas.find(c => c.id === id);
    if (consulta) {
      consulta.concluida = true;
    }
  }
}

const globalForService = global as unknown as { consultaService: ConsultaService };
export const consultaService = globalForService.consultaService || new ConsultaService();
if (process.env.NODE_ENV !== 'production') globalForService.consultaService = consultaService;