const id = document.querySelector(".id");
const nombre = document.querySelector(".nombre");
const surname = document.querySelector(".surname");
const phone = document.querySelector(".phone");
const city = document.querySelector(".city");
const address = document.querySelector(".address");
const boton = document.querySelector(".enviar-datos");
const listaDeTareas = document.querySelector(".listado-tareas");

const localstor = window.localStorage;

boton.onclick = () => {
  let contacto = {
    generadorId: Math.random(1, 100),
    id: id.value,
    nombre: nombre.value,
    surname: surname.value,
    phone: phone.value,
    city: city.value,
    address: address.value,
  };
  guardarContacto(localstor, contacto);
};

cargarContactos(localstor, listaDeTareas);
