"use strict";
/* mail */
exports.__esModule = true;
var Mail = /** @class */ (function () {
    function Mail(direccion, tipo) {
        this.direccion = direccion;
        this.tipo = tipo;
    }
    Mail.prototype.getDireccion = function () {
        return this.direccion;
    };
    Mail.prototype.getTipo = function () {
        return this.tipo;
    };
    return Mail;
}());
exports["default"] = Mail;
