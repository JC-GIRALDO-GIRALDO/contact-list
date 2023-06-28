//-------------------------TRABAJO CONTACT-LIST--------------------------//

const listaDeContactos = [];

const agregarContacto = (id, nombre, apellido, telefono, ciudad, direccion) => {
  const datoDelNombre = {
    nombre: nombre, // Objeto con datos del nombre.
    apellido: apellido,
  };
  const nombreCompleto = Object.values(datoDelNombre).join(" "); // contiene los valores de la propiedade (datoDelNombre)

  const datoUbicacion = {
    ciudad: ciudad, // Objeto con datos de ubicación.
    direccion: direccion,
  };

  const datosLista = {
    id: id,
    nombre: nombreCompleto,
    telefono: telefono,
    ubicacion: datoUbicacion,
  };
  listaDeContactos.push(datosLista); // Para enviar la lista a la lista de contactos y no tener que estar copiando y pegando parámetros.
};

const eliminarContacto = (id) => {
  // Defino una constante con el parámetro id con el cual relaciono la lista.
  const indice = listaDeContactos.findIndex((contacto) => contacto.id === id); //findIndex, para encontrar el índice de un elemento

  if (indice !== -1) {
    listaDeContactos.splice(indice, 1);
    console.log(`Contacto con ID ${id} eliminado correctamente.`);
  } else {
    console.log(`No se encontró ningún contacto con ID ${id}.`);
  }
};

// Función que me permite editar una lista de contacto según el índice.
const actualizarContacto = (id, nuevosDatos) => {
  const indice = listaDeContactos.findIndex((contacto) => contacto.id === id); // nuevosDatos es un objeto que contiene los nuevos datos que se utilizarán para actualizar el contacto.
  if (indice !== -1) {
    const contactoActualizado = {
      ...listaDeContactos[indice], // (spread operator)
      ...nuevosDatos,
    };
    listaDeContactos[indice] = contactoActualizado;
    console.log(`Contacto con ID ${id} actualizado correctamente.`);
  } else {
    console.log(`No se encontró ningún contacto con ID ${id}.`);
  }
};

// Imprimir en Pantalla por medio del alert.
const imprimirListaContactos = () => {
  // A la función le paso "listaDeContactos"
  let mensaje = "Lista de contactos:\n\n";
  listaDeContactos.forEach((contacto) => {
    //iterar sobre los elementos
    mensaje += `ID: ${contacto.id}\n`;
    mensaje += `Nombre: ${contacto.nombre}\n`;
    mensaje += `Teléfono: ${contacto.telefono}\n`;
    mensaje += `Ciudad: ${contacto.ubicacion.ciudad}\n`;
    mensaje += `Dirección: ${contacto.ubicacion.direccion}\n\n`;
  });
  alert(mensaje);
}; // bloquear alert para que no se detenga en programa para ver la edicion de la lista.

/* Generar listas llamando a la función "agregarContacto()"
          Id: escribe el id
          Nombre: "escribe nombre"
          Apellido: "escribe apellido"
          Teléfono: escribe teléfono
          Ciudad: "escribe ciudad" 
          Dirección: escribe dirección
*/
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
agregarContacto(
  89425458,
  "Hernan Dario",
  "Giraldo Zapata",
  3128448841,
  "Medellin-Antioquia",
  "calle 20e # 80-20"
);

// Muestro todas las listas generadas
console.log(listaDeContactos);
// Elimino una lista con él, id.
eliminarContacto(1894981257);
eliminarContacto(89425458);
// Muestro todas las listas generadas ya sin la eliminada
console.log(listaDeContactos);
// Imprimo por consola las listas restantes
imprimirListaContactos(listaDeContactos);
// Actualizar Contacto
actualizarContacto(1058981258, {
  nombre: "Edison",
  telefono: 3201234567,
  direccion: "calle 55 # 32e-28",
});
console.log(listaDeContactos);
// Muestro todas las listas generadas sin la eliminada y con la editada
console.log(listaDeContactos);
