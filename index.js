  function inscribirseEnMusica(nombre, apellido, edad) {
    if (isNaN(edad) || edad <= 0) {
      return "Por favor, ingresa una edad válida.";
    } else if (edad <= 18) {
      return "sos menor de edad, para registrarte deberás ingresar los datos de un mayor.";
    } else {
      let instrumento = prompt("¿Qué instrumento te gustaría aprender? Saxo, Piano, o Clarinete?").toLowerCase();
      if (instrumento === "piano") {
        return nombre + ", las clases de piano comenzarán el 5 de junio.";
      } else if (instrumento === "saxo") {
        return nombre + ", las clases de saxo comenzarán el 15 de mayo.";
      } else if (instrumento === "clarinete") {
        return "Lo siento, en esta escuela no enseñamos clarinete.";
      } else {
        return "Por favor, ingresa un instrumento válido.";
      }
    }
  }
  let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");
let edad = parseInt(prompt("Ingresa tu edad"));

alert(inscribirseEnMusica(nombre, apellido, edad));




