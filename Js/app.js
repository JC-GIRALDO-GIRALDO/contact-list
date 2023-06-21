// Array para almacenar las listas generadas
const listasGeneradas = [];

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

// funcion para generar boton de editar el texto
function editarParrafo(nuevoParrafo) {

  const botonParrafo = document.createElement("button"); // Se crea un boton
  botonParrafo.textContent = "Editar"; //nombre del boton
  botonParrafo.classList.add("editar-parrafo"); //clase del boton
  botonParrafo.addEventListener("click", () => {
    const editarInput = document.createElement("input"); 
    editarInput.value = nuevoParrafo.textContent;
    nuevoParrafo.textContent = "";
    nuevoParrafo.appendChild(editarInput);
    
    editarInput.addEventListener("blur", () => {
      nuevoParrafo.textContent = editarInput.value;
    });
  });
  return botonParrafo;
}

// funcion principal con la que se crea la lista 
let copiarLista = () => {
  //me trae el valor del nombre desde html input nombre
  const nombre = document.querySelector(".nombre").value;
  //condicional para que se deba ingresar el nombre
  if(nombre.length === 0){
    alert("El 'nombre' no ha sido ingresado");
    return nombre;
  }
  
  //me trae el valor del apellido desde html input apellido
  const apellido = document.querySelector(".apellido").value;
  //condicional para que se deba ingresar el apellido
  if(apellido.length === 0){
    alert("El 'apellido' no ha sido ingresado");
    return apellido;
  }

  //se creo un array con nombre y apellido
  const arregloNombre = [nombre, apellido];
  //junte nombre y apellido juntos
  const nombreCompleto = arregloNombre.join(" ");
  console.log(nombreCompleto);

  //selecciona la clase
  const elemento = document.getElementById("agregar-lista");
  const nuevaLista = document.createElement("div");

  //crea el elemento de texto en la lixta (los nombres)
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = nombreCompleto;
  nuevaLista.appendChild(nuevoParrafo);

  const botonParrafo = editarParrafo(nuevoParrafo); // Crear el botón de borrar
  nuevaLista.appendChild(botonParrafo); // Agregar el botón junto con la lista

  const botonBorrar = crearBotonBorrar(); // Crear el botón de borrar
  nuevaLista.appendChild(botonBorrar); // Agregar el botón junto con la lista

  elemento.appendChild(nuevaLista);

  // Agregar la lista generada al array
  listasGeneradas.push(nombreCompleto);

  //vuelve a poner los espacios del input en blanco
  document.querySelector(".nombre").value = "";
  document.querySelector(".apellido").value = "";
};

// Función para imprimir todas las listas generadas en la consola
let imprimirLista = () => {
  //condicional por si no se ha generado listas nuevas
  if (listasGeneradas.length === 0) {
    alert("No hay listas para imprimir");
    return;
  }

  listasGeneradas.forEach((lista) => {
    alert(`${lista}`);
  });
};
  