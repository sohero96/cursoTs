/* main */

import Persona from "./persona";
import Direccion from "./direccion";
import Telefono from "./telefono";
import Mail from "./mail";

// Nuevos registros

//persona1
const direccion1 = new Direccion("Calle Libertal", "5", "3º","B", "Móstoles", "Madrid", "28935");
const telefono1 = new Telefono("222333555", "Móvil");
const mail1 = new Mail("jasalas@gmail.com", "Personal");

const persona1 = new Persona("Juan Antonio","Salas",27,"55446621C","1995-05-04","Blanco","Masculino",direccion1, mail1, telefono1,"7");

//persona2
const direccion2 = new Direccion("Calle Velazquez", "25", "2º","C", "Leganés", "Madrid", "28465");
const telefono2 = new Telefono("916147852", "Trabajo");
const mail2 = new Mail("mlopezlopez@yahoo.es", "Personal");

const persona2 = new Persona("María","López",20,"65452255L","2003-03-01","Amarillo","Femenino",direccion2,mail2,telefono2,"5");

//persona3
const direccion3 = new Direccion("Calle Constancia", "19", "1º","B", "Cuellar", "Segovia", "40052");
const telefono3 = new Telefono("921445588", "Casa");
const mail3 = new Mail("pedrogomar@gmail.com", "Trabajo");

const persona3 = new Persona("Pedro","Gómez Martin",55,"44552211R","1968-12-11","Verde","Masculino",direccion3,mail3,telefono3,"Nota 3"
);

// Mostrar registros originales
console.log("Registros originales:");
console.log(persona1);
console.log(persona2);
console.log(persona3);


//cambiar datos
const dniSeleccionado = "65452255L"; 

let personaEncontrada: Persona | null = null;

for (let persona of [persona1, persona2, persona3]) {
  if (persona.getDNI() === dniSeleccionado) {
    personaEncontrada = persona;
    break;
  }
}

// Cambiar registro de datos
if (personaEncontrada !== null) {
  const nuevaDireccion = new Direccion("Calle Lisboa", "9", "bajo","A", "Burgos", "Burgos", "23214");
  const nuevoMail = new Mail("uñasSeneca@gmail.com", "Trabajo");
  const nuevoTelefono = new Telefono("445222546", "Móvil");

  personaEncontrada.setDireccion(nuevaDireccion);
  personaEncontrada.setMail(nuevoMail);
  personaEncontrada.setTelefono(nuevoTelefono);
} else {
  console.log("No se encontró ninguna persona con el DNI especificado.");
}

// Mostrar registros actualizados
console.log("Registros actualizados:");
console.log(persona1);
console.log(persona2);
console.log(persona3);