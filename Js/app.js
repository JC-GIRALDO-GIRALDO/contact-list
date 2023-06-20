function crearBotonBorrar() {
  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Borrar";
  botonBorrar.classList.add("boton-borrar");
  botonBorrar.addEventListener("click", () => {
    botonBorrar.parentElement.remove();
  });
  return botonBorrar;
}

function editarParrafo(nuevoParrafo) {
  const botonParrafo = document.createElement("button");
  botonParrafo.textContent = "Editar";
  botonParrafo.classList.add("editar-parrafo");
  botonParrafo.addEventListener("click", () => {
    const editarInput = document.createElement("input");
    editarInput.value = nuevoParrafo.textContent;
    nuevoParrafo.textContent = "";
    nuevoParrafo.appendChild(editarInput);
    editarInput.focus();

    editarInput.addEventListener("blur", () => {
      nuevoParrafo.textContent = editarInput.value;
    });
  });
  return botonParrafo;
}

let copiarLista = () => {
  const nombre = document.querySelector(".nombre").value;
  const apellido = document.querySelector(".apellido").value;
  const arregloNombre = [nombre, apellido];
  const nombreCompleto = arregloNombre.join(" ");
  console.log(nombreCompleto);

  const elemento = document.getElementById("agregar-lista");
  const nuevaLista = document.createElement("div");

  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = nombreCompleto;
  nuevaLista.appendChild(nuevoParrafo);

  const botonParrafo = editarParrafo(nuevoParrafo); // Crear el botón de borrar
  nuevaLista.appendChild(botonParrafo); // Agregar el botón junto con la lista

  const botonBorrar = crearBotonBorrar(); // Crear el botón de borrar
  nuevaLista.appendChild(botonBorrar); // Agregar el botón junto con la lista

  elemento.appendChild(nuevaLista);

  document.querySelector(".nombre").value = "";
  document.querySelector(".apellido").value = "";
};

/*
function crearBotonBorrar() {
  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Borrar";
  botonBorrar.classList.add("boton-borrar");
  botonBorrar.addEventListener("click", () => {
    botonBorrar.parentElement.remove();
  });
  return botonBorrar;
}

let copiarLista = () => {
  const nombre = document.querySelector(".nombre").value;
  const apellido = document.querySelector(".apellido").value;
  const arregloNombre = [nombre, apellido];
  const nombreCompleto = arregloNombre.join(" ");
  console.log(nombreCompleto);

  const elemento = document.getElementById("agregar-lista");
  const nuevaLista = document.createElement("div");

  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = nombreCompleto;
  nuevaLista.appendChild(nuevoParrafo);

  const botonBorrar = crearBotonBorrar(); // Crear el botón de borrar
  nuevaLista.appendChild(botonBorrar); // Agregar el botón junto con la lista

  elemento.appendChild(nuevaLista);

  document.querySelector(".nombre").value = "";
  document.querySelector(".apellido").value = "";

  
};

*/



/*let copiarLista = () => {
    const nombre = document.querySelector(".nombre").value;
    const apellido = document.querySelector(".apellido").value;
    const arregloNombre = [nombre, apellido];
    const nombreCompleto = arregloNombre.join(" ");
    console.log(nombreCompleto);
  
    const elemento = document.getElementById("agregar-lista");
    elemento.innerHTML += nombreCompleto;
  
  };
*/
/*
let copiarLista = () => {
    const nombre = document.querySelector(".nombre").value;
    const apellido = document.querySelector(".apellido").value;
    const arregloNombre = [nombre, apellido];
    const nombreCompleto = arregloNombre.join(" ");
    const url = "../HTML/pagina2.html?nombre=" + nombreCompleto;
    window.location.href = url;
  };
  
*/
/*
let copiarLista = () => {
  // Obtener los parámetros de la URL
const params = new URLSearchParams(window.location.search);
const nombre = params.get('.nombre');
const apellido = params.get('.apellido');
const arregloNombre = [nombre, apellido];
const nombreCompleto = arregloNombre.join(" ");

// Mostrar los datos en la página
const elemento = document.getElementById("agregar-lista");
elemento.textContent = nombreCompleto;
}

*/