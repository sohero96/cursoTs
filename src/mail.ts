/* mail */


class Mail {
    private direccion: string;
    private tipo: string;
  
    constructor(direccion: string, tipo: string) {
      this.direccion = direccion;
      this.tipo = tipo;
    }
  
    public getDireccion(): string {
      return this.direccion;
    }
  
    public getTipo(): string {
      return this.tipo;
    }
  }
  
  export default Mail;
  