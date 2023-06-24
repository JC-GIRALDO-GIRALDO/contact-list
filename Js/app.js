//-------------------------TRABAJO CONTACT-LIST--------------------------//

const listaDeContactos = [];
/* Cree una función flecha para generar los datos pedidos por el trabajo 
   "CONTACT-LIST" en el cual pide que se ingrese (id, nombre completo, 
   teléfono, ciudad, Dirección). Dentro de la función creo cuatro constantes,
   una con los datos de ubicación, otra con la constante de "nombreCompleto", 
   otra donde junto al nombre y apellido y la otra con los datos en general 
   que va a tener la lista. */
const agregarContacto = (nombre, apellido) => {
  /* Primer error. La constante "datoUbicacion" la declaré después de 
   "datosLista" lo cual me genero un error y me toco declararla primero 
   para que estuviera definida. */

  const datoDelNombre = {
    nombre: nombre, // Objeto con datos del nombre.
    apellido: apellido,
  };

  /* Igual que el primer error primero definí como iba a poner el nombre 
     completo para no me diera error de sintaxis. */

  const nombreCompleto = Object.values(datoDelNombre).join(" "); // Junto nombre y apellido.

  const datosLista = {
    nombre: nombreCompleto, // Recibe nombre completo
  };
  listaDeContactos.push(datosLista); // Para enviar la lista a la lista de contactos y no tener que estar copiando y pegando parámetros.
};

// Función que me permite borra una lista de contacto según el índice.
const eliminarContacto = (nombre) => { // Defino una constante con el parámetro id con el cual relaciono la lista. 
  const indice = listaDeContactos.findIndex((contacto) => contacto.nombre === nombre);// Genero una función callback que recorre cada elemento de la lista y me trae la id.

  if (indice !== -1) { /*findIndex() devuelve -1 cuando no se encuentra ningún elemento que cumpla con la condición especificada. En este caso, si se encuentra 
                         un contacto con el ID especificado, indice será un valor distinto de -1 y el código dentro de este bloque if se ejecutará.*/

    listaDeContactos.splice(indice, 1); /* Si se cumple la condición anterior, se utiliza el método splice() en el array listaDeContactos para eliminar un 
                                           elemento en la posición indice. El número 1 como segundo argumento indica que se eliminará un solo elemento a 
                                           partir de esa posición.*/
    console.log(`Contacto con ID ${nombre} eliminado correctamente.`);
  } else {
    console.log(`No se encontró ningún contacto con ID ${nombre}.`);
  }
};

// Imprimir en Pantalla por medio del alert.
const imprimirListaContactos = (listaDeContactos) => { // A la función le paso "listaDeContactos"
  let mensaje = "Lista de contactos:\n\n"; // Un pequeño mensaje y seguido todas las listas debajo
  listaDeContactos.forEach((contacto) => {  // Itero sobre los elementos de un array y ejecuto el mensaje que va a llevar cada ítem.
    mensaje += `Nombre: ${contacto.nombre}\n`
  });
  alert(mensaje);
};


/* Generar listas llamando a la función "agregarContacto()"
          Id: escribe el id
          Nombre: "escribe nombre"
          Apellido: "escribe apellido"
          Teléfono: escribe teléfono
          Ciudad: "escribe ciudad" 
          Dirección: escribe dirección
*/

agregarContacto(
  "Juan Camilo",
  "Giraldo Giraldo"
);

agregarContacto(
  "Santiago",
  "Giraldo Castro"
);

agregarContacto(
  "Martha Saray",
  "Giraldo Castro"
);

agregarContacto(
  "Jose Alejandro",
  "Giraldo Castro"
);

agregarContacto(
  "Hernan Dario",
  "Giraldo Zapata"
);

// Llamar las listas, eliminar id, imprimir lista.

// Muestro todas las listas generadas
console.log(listaDeContactos);
// Elimino una lista con él, id.
eliminarContacto("Santiago");
// Muestro todas las listas generadas ya sin la eliminada
console.log(listaDeContactos);
// Imprimo por consola las listas restantes
imprimirListaContactos(listaDeContactos);