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

// Función para generar el botón de editar
function crearBotonEditar(contacto) {
  const botonEditar = document.createElement("button");
  botonEditar.textContent = "Editar";
  botonEditar.classList.add("boton-editar");
  botonEditar.addEventListener("click", () => {
    mostrarFormularioEdicion(contacto);
  });
  return botonEditar;
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

  // Crear el botón de editar
  const botonEditar = crearBotonEditar(contacto);
  nuevoDiv.appendChild(botonEditar);

  document.getElementById("agregar-lista").appendChild(nuevoDiv);

  // Restablecer los campos del formulario
  document.querySelector(".id").value = "";
  document.querySelector(".nombre").value = "";
  document.querySelector(".apellido").value = "";
  document.querySelector(".telefono").value = "";
  document.querySelector(".ciudad").value = "";
  document.querySelector(".direccion").value = "";
};
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