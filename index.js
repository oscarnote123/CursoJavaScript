  console.log();
   let nombre = prompt ("Introduci tu nombre");
  let apellido = prompt ("Introduci tu apellido");
  let edad = parseInt(prompt("introduci tu edad"));
  let instrumento;

  if (edad <= 18){
    alert(" sos menor de edad, para registrarte deberas ingresar los datos de un mayor");
    } else {
        alert("Bienvenido a la escuela de musica " + nombre + "!");
    }
    instrumento = prompt("que instrumento te gustaria aprender?,saxo,piano,clarinete");

    if (instrumento === "piano"){
        alert( nombre + " las clases de piano comenzaran a partir del 5 de junio");
     }
    if (instrumento === "saxo"){
        alert( nombre + " las clases de saxo comenzaran a partir del 15 de mayo");   
    }
    if (instrumento === "clarinete"){
        alert( nombre + "En esta escuela no se enseña clarinete"); 
    }





