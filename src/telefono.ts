
/* telefono */

class Telefono {
    private numero: string;
    private tipo: string;
  
    constructor(numero: string, tipo: string) {
      this.numero = numero;
      this.tipo = tipo;
    }
  
    public getNumero(): string {
      return this.numero;
    }
  
    public getTipo(): string {
      return this.tipo;
    }
  }
  
  export default Telefono;
  