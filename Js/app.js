//-------------------------TRABAJO CONTACT-LIST--------------------------//

const listaDeContactos = [];
/* Cree una función flecha para generar los datos pedidos por el trabajo 
   "CONTACT-LIST" en el cual pide que se ingrese (id, nombre completo, 
   teléfono, ciudad, Dirección). Dentro de la función creo cuatro constantes,
   una con los datos de ubicación, otra con la constante de "nombreCompleto", 
   otra donde junto al nombre y apellido y la otra con los datos en general 
   que va a tener la lista. */
const agregarContacto = (id, nombre, apellido, telefono, ciudad, direccion) => {

  const datoDelNombre = {
    nombre: nombre, // Objeto con datos del nombre.
    apellido: apellido,
  };

  const nombreCompleto = Object.values(datoDelNombre).join(" "); // Junto nombre y apellido.

  const datoUbicacion = {
    ciudad: ciudad, // Objeto con datos de ubicación.
    direccion: direccion,
  };
  
  const datosLista = {
    id: id, // Recibe id
    nombre: nombreCompleto, // Recibe nombre completo
    telefono: telefono, // Recibe telefono
    ubicacion: datoUbicacion, // Recibe ciudad y direccion
  };
  listaDeContactos.push(datosLista); // Para enviar la lista a la lista de contactos y no tener que estar copiando y pegando parámetros.
};

// Función que me permite borra una lista de contacto según el índice.
const eliminarContacto = (id) => { // Defino una constante con el parámetro id con el cual relaciono la lista. 
  const indice = listaDeContactos.findIndex((contacto) => contacto.id === id);// Genero una función callback que recorre cada elemento de la lista y me trae la id.
  if (indice !== -1) { 
    listaDeContactos.splice(indice, 1); 
    console.log(`Contacto con ID ${id} eliminado correctamente.`);
  } else {
    console.log(`No se encontró ningún contacto con ID ${id}.`);
  }
};

// Imprimir en Pantalla por medio del alert.
const imprimirListaContactos = (listaDeContactos) => { // A la función le paso "listaDeContactos"
  let mensaje = "Lista de contactos:\n\n"; // Un pequeño mensaje y seguido todas las listas debajo
  listaDeContactos.forEach((contacto) => {  // Itero sobre los elementos de un array y ejecuto el mensaje que va a llevar cada ítem.
    mensaje += `ID: ${contacto.id}\n`;
    mensaje += `Nombre: ${contacto.nombre}\n`;
    mensaje += `Teléfono: ${contacto.telefono}\n`;
    mensaje += `Ciudad: ${contacto.ubicacion.ciudad}\n`;
    mensaje += `Dirección: ${contacto.ubicacion.direccion}\n\n`;
  });
  alert(mensaje);
};

agregarContacto(
  1060595098,
  "Juan Camilo",
  "Giraldo Giraldo",
  3209202297,
  "Bello-Antioquia",
  "Calle 20e # 70-60"
);
agregarContacto(
  1020585458,
  "Santiago",
  "Giraldo Castro",
  3208459874,
  "supia-Caldas",
  "carrera 10 # 32-57"
);
agregarContacto(
  1058981258,
  "Martha Saray",
  "Giraldo Castro",
  3208448823,
  "Medellin-Antioquia",
  "carrera 10 # 32-59"
);
agregarContacto(
  1894981257,
  "Jose Alejandro",
  "Giraldo Castro",
  3228485841,
  "Medellin-Antioquia",
  "carrera 10 # 32-59"
);

// Muestro todas las listas generadas
console.log(listaDeContactos);
// Elimino una lista con él, id.
eliminarContacto(1894981257);
// Muestro todas las listas generadas ya sin la eliminada
console.log(listaDeContactos);
// Imprimo por consola las listas restantes
imprimirListaContactos(listaDeContactos);