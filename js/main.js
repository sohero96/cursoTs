"use strict";
/* main */
exports.__esModule = true;
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var telefono_1 = require("./telefono");
var mail_1 = require("./mail");
// Nuevos registros
//persona1
var direccion1 = new direccion_1["default"]("Calle Libertal", "5", "3º", "B", "Móstoles", "Madrid", "28935");
var telefono1 = new telefono_1["default"]("222333555", "Móvil");
var mail1 = new mail_1["default"]("jasalas@gmail.com", "Personal");
var persona1 = new persona_1["default"]("Juan Antonio", "Salas", 27, "55446621C", "1995-05-04", "Blanco", "Masculino", direccion1, mail1, telefono1, "7");
//persona2
var direccion2 = new direccion_1["default"]("Calle Velazquez", "25", "2º", "C", "Leganés", "Madrid", "28465");
var telefono2 = new telefono_1["default"]("916147852", "Trabajo");
var mail2 = new mail_1["default"]("mlopezlopez@yahoo.es", "Personal");
var persona2 = new persona_1["default"]("María", "López", 20, "65452255L", "2003-03-01", "Amarillo", "Femenino", direccion2, mail2, telefono2, "5");
//persona3
var direccion3 = new direccion_1["default"]("Calle Constancia", "19", "1º", "B", "Cuellar", "Segovia", "40052");
var telefono3 = new telefono_1["default"]("921445588", "Casa");
var mail3 = new mail_1["default"]("pedrogomar@gmail.com", "Trabajo");
var persona3 = new persona_1["default"]("Pedro", "Gómez Martin", 55, "44552211R", "1968-12-11", "Verde", "Masculino", direccion3, mail3, telefono3, "Nota 3");
// Mostrar registros originales
console.log("Registros originales:");
console.log(persona1);
console.log(persona2);
console.log(persona3);
//cambiar datos
var dniSeleccionado = "65452255L";
var personaEncontrada = null;
for (var _i = 0, _a = [persona1, persona2, persona3]; _i < _a.length; _i++) {
    var persona = _a[_i];
    if (persona.getDNI() === dniSeleccionado) {
        personaEncontrada = persona;
        break;
    }
}
// Cambiar registro de datos
if (personaEncontrada !== null) {
    var nuevaDireccion = new direccion_1["default"]("Calle Lisboa", "9", "bajo", "A", "Burgos", "Burgos", "23214");
    var nuevoMail = new mail_1["default"]("uñasSeneca@gmail.com", "Trabajo");
    var nuevoTelefono = new telefono_1["default"]("445222546", "Móvil");
    personaEncontrada.setDireccion(nuevaDireccion);
    personaEncontrada.setMail(nuevoMail);
    personaEncontrada.setTelefono(nuevoTelefono);
}
else {
    console.log("No se encontró ninguna persona con el DNI especificado.");
}
// Mostrar registros actualizados
console.log("Registros actualizados:");
console.log(persona1);
console.log(persona2);
console.log(persona3);
