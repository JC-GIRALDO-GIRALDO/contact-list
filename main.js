const cedula = document.querySelector(".cedula");
const nombre = document.querySelector(".nombre");
const apellido = document.querySelector(".apellido");
const btnAgregarTarea = document.querySelector(".btn-agregar-tarea");

const listadoTareas = document.querySelector(".listado-tareas");

const db = window.localStorage;

btnAgregarTarea.onclick = () => {
  let contacto = {
    id: Math.random(1, 100),
    cedula: cedula.value,
    nombre: nombre.value,
    apellido: apellido.value,
  };
  guardarContacto(db, contacto);
};
cargarContactos(db, listadoTareas);
