let fecha = new Date();
let anoactual = fecha.getFullYear();

let anonacimiento = prompt("Ingresa tu año de nacimiento");
let calculoedad = anoactual - anonacimiento;
alert("Tu edad es" + " " + calculoedad);