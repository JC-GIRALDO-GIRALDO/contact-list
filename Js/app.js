//-------------------------TRABAJO CONTACT-LIST--------------------------//

const listaDeContactos = [];

const agregarContacto = (nombre, apellido) => {
  const nombreCompleto = `${nombre} ${apellido}`; // Junto nombre y apellido.
  const datosLista = {
    nombre: nombreCompleto, // Recibe nombre completo
  };
  listaDeContactos.push(datosLista); // Para enviar la lista a la lista de contactos y no tener que estar copiando y pegando parámetros.
};

// Función que me permite borra una lista de contacto según el índice.
const eliminarContacto = (nombre) => {
  const indice = listaDeContactos.findIndex((contacto) => contacto.nombre === nombre);
  if (indice !== -1) { 
    listaDeContactos.splice(indice, 1); 
    console.log(`Contacto con ID ${nombre} eliminado correctamente.`);
  } else {
    console.log(`No se encontró ningún contacto con ID ${nombre}.`);
  }
};

// Imprimir en Pantalla por medio del alert.
const imprimirListaContactos = () => {
  let mensaje = "Lista de contactos:\n\n";
  listaDeContactos.forEach((contacto) => {
    mensaje += `Nombre: ${contacto.nombre}\n`;
  });
  alert(mensaje);
};

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
console.log(listaDeContactos);
eliminarContacto("Santiago Giraldo Castro");
console.log(listaDeContactos);
imprimirListaContactos();