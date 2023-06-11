/* persona */
import Direccion from "./direccion";
import Telefono from "./telefono";
import Mail from "./mail";

class Persona {
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private dni: string;
    private cumpleanos: Date;
    private colorFavorito: string;
    private sexo: string;
    private direccion: string;
    private mail: string;
    private telefono: string;
    private nota: string;

 
    constructor(nombre: string,apellidos: string,edad: number,dni: string,cumpleanos: Date,colorFavorito: string,sexo: string,direccion: string,mail: string,telefono: string,nota: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanos = cumpleanos;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direccion = direccion;
        this.mail = mail;
        this.telefono = telefono;
        this.nota = nota;
      }
      public getNombre(): string {
        return this.nombre;
      }
    
      public getApellidos(): string {
        return this.apellidos;
      }
    
      public getEdad(): number {
        return this.edad;
      }
    
      public getDNI(): string {
        return this.dni;
      }
    
      public getCumpleanos(): Date {
        return this.cumpleanos;
      }
    
      public getColorFavorito(): string {
        return this.colorFavorito;
      }
    
      public getSexo(): string {
        return this.sexo;
      }
    
      public getDireccion(): Direccion {
        return this.direccion;
      }
    
      public getMail(): Mail {
        return this.mail;
      }
    
      public getTelefono(): Telefono {
        return this.telefono;
      }
    
      public getNota(): string {
        return this.nota;
      }
    
      public setDireccion(direccion: Direccion): void {
        this.direccion = direccion;
      }
    
      public setMail(mail: Mail): void {
        this.mail = mail;
      }
    
      public setTelefono(telefono: Telefono): void {
        this.telefono = telefono;
      }
    
      public setNota(nota: string): void {
        this.nota = nota;
      }
    }
    
export default Persona;
