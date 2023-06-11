"use strict";
/* telefono */
exports.__esModule = true;
var Telefono = /** @class */ (function () {
    function Telefono(numero, tipo) {
        this.numero = numero;
        this.tipo = tipo;
    }
    Telefono.prototype.getNumero = function () {
        return this.numero;
    };
    Telefono.prototype.getTipo = function () {
        return this.tipo;
    };
    return Telefono;
}());
exports["default"] = Telefono;
