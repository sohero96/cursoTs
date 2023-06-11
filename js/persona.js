"use strict";
exports.__esModule = true;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direccion, mail, telefono, nota) {
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
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.getDNI = function () {
        return this.dni;
    };
    Persona.prototype.getCumpleanos = function () {
        return this.cumpleanos;
    };
    Persona.prototype.getColorFavorito = function () {
        return this.colorFavorito;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.getDireccion = function () {
        return this.direccion;
    };
    Persona.prototype.getMail = function () {
        return this.mail;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.getNota = function () {
        return this.nota;
    };
    Persona.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Persona.prototype.setMail = function (mail) {
        this.mail = mail;
    };
    Persona.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    Persona.prototype.setNota = function (nota) {
        this.nota = nota;
    };
    return Persona;
}());
exports["default"] = Persona;
