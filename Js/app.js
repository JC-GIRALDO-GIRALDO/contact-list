/*
// funcion para generar el boton de borrar
function crearBotonBorrar() {
  
  const botonBorrar = document.createElement("button"); // Se crea un boton
  botonBorrar.textContent = "Borrar"; //nombre del boton
  botonBorrar.classList.add("boton-borrar"); //clase del boton
  botonBorrar.addEventListener("click", () => {
    botonBorrar.parentElement.remove(); //funcion flecha para generar la accion de borrar del boton creado
  });
  return botonBorrar;
}
const agruparDatosDom = () => {
  const objetoContacto = (id, nombre, apellido, telefono, ciudad, direccion) => {
    const contactoUbicacion = {
      ciudad: ciudad,
      direccion: direccion
    };

    const contacto = {
      id: id,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      ubicacion: contactoUbicacion
    };

    return contacto;
  };
  const datosContacto = {
    id: document.querySelector(".id").value,
    nombre: document.querySelector(".nombre").value,
    apellido: document.querySelector(".apellido").value,
    telefono: document.querySelector(".telefono").value,
    ciudad: document.querySelector(".ciudad").value,
    direccion: document.querySelector(".direccion").value
  };

  const contacto = objetoContacto(
    datosContacto.id,
    datosContacto.nombre,
    datosContacto.apellido,
    datosContacto.telefono,
    datosContacto.ciudad,
    datosContacto.direccion
  );
  const contactoJSON = JSON.stringify(contacto);
  console.log(contactoJSON);

  return contactoJSON; // Devolver el contacto como JSON en lugar de un objeto
};

const crearListaNueva = () => {
  const contactoJSON = agruparDatosDom();
  const contacto = JSON.parse(contactoJSON); // Convertir el contacto de nuevo a un objeto

  const nuevoDiv = document.createElement("div");
  const nuevoLista = document.createElement("ul");

  for (const propiedad in contacto) {
    if (propiedad === "ubicacion") {
      const ubicacion = contacto[propiedad];
      for (const ubicacionPropiedad in ubicacion) {
        const nuevoItem = document.createElement("li");
        nuevoItem.textContent = `${ubicacionPropiedad}: ${ubicacion[ubicacionPropiedad]}`;
        nuevoLista.appendChild(nuevoItem);
      }
    } else {
      const nuevoItem = document.createElement("li");
      nuevoItem.textContent = `${propiedad}: ${contacto[propiedad]}`;
      nuevoLista.appendChild(nuevoItem);
    }
  }

  nuevoDiv.appendChild(nuevoLista);

  // Crear el botón de borrar
  const botonBorrar = crearBotonBorrar();
  nuevoDiv.appendChild(botonBorrar);

  document.getElementById("agregar-lista").appendChild(nuevoDiv);

  // Restablecer los campos del formulario
  document.querySelector(".id").value = "";
  document.querySelector(".nombre").value = "";
  document.querySelector(".apellido").value = "";
  document.querySelector(".telefono").value = "";
  document.querySelector(".ciudad").value = "";
  document.querySelector(".direccion").value = "";
};
*/
//-------------------------TRABAJO CONTACT-LIST--------------------------//

const listaDeContactos = [];
/* Cree una función flecha para generar los datos pedidos por el trabajo 
   "CONTACT-LIST" en el cual pide que se ingrese (id, nombre completo, 
   teléfono, ciudad, Dirección). Dentro de la función creo cuatro constantes,
   una con los datos de ubicación, otra con la constante de "nombreCompleto", 
   otra donde junto al nombre y apellido y la otra con los datos en general 
   que va a tener la lista. */
const agregarContacto = (id, nombre, apellido, telefono, ciudad, direccion) => {
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
const eliminarContacto = (id) => {
  const indice = listaDeContactos.findIndex((contacto) => contacto.id === id);// Constante que me busca en el índice del array el "id" por medio del método "findIndex".
  if (indice !== -1) { 
    listaDeContactos.splice(indice, 1); // Me busca el índice y elimina el espacio.
    console.log(`Contacto con ID ${id} eliminado correctamente.`);
  } else {
    console.log(`No se encontró ningún contacto con ID ${id}.`);
  }
};

const actualizarContacto = (id, nuevosDatos) => {
  const indice = listaDeContactos.findIndex((contacto) => contacto.id === id);
  if (indice !== -1) {
    const contactoActualizado = {
      ...listaDeContactos[indice],
      ...nuevosDatos
    };
    listaDeContactos[indice] = contactoActualizado;
    console.log(`Contacto con ID ${id} actualizado correctamente.`);
  } else {
    console.log(`No se encontró ningún contacto con ID ${id}.`);
  }
};


// Imprimir en Pantalla por medio del alert.
const imprimirListaContactos = (listaDeContactos) => {
  let mensaje = "Lista de contactos:\n\n";
  listaDeContactos.forEach((contacto) => {
    mensaje += `ID: ${contacto.id}\n`;
    mensaje += `Nombre: ${contacto.nombre}\n`;
    mensaje += `Teléfono: ${contacto.telefono}\n`;
    mensaje += `Ciudad: ${contacto.ubicacion.ciudad}\n`;
    mensaje += `Dirección: ${contacto.ubicacion.direccion}\n\n`;
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

// Llamar las listas, eliminar id, imprimir lista, editar lista.

console.log(listaDeContactos);
console.log(listaDeContactos);
eliminarContacto(1060595098);
console.log(listaDeContactos);
console.log(listaDeContactos);
console.log(listaDeContactos);
imprimirListaContactos(listaDeContactos);

actualizarContacto(1058981258, {
  telefono: 3201234567,
  direccion: "calle 55 # 32e-28"
});

imprimirListaContactos(listaDeContactos);

