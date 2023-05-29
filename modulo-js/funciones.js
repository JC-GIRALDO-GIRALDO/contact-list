const guardarContacto = (localstor, contacto) => {
  localstor.setItem(contacto.id, JSON.stringify(contacto));
  window.location.href = "/"
};

const cargarContactos = (localstor, parentNode) => {
  let claves = Object.keys(localstor)
  
  for(clave of claves){
    let contacto = JSON.parse(localstor.getItem(clave))
    crearContacto(parentNode, contacto, localstor)
  }
}

const crearContacto = (parentNode, contacto, localstor) => {
  let divContacto = document.createElement("div")
  let idContacto = document.crearContacto("h2")
  let nombreContacto = document.crearContacto("p")
  let apellidoContacto = document.crearContacto("p")
  let telefonoContacto = document.crearContacto("p")
  let ciudadContacto = document.crearContacto("p")
  let direccionContacto = document.crearContacto("p")
  let iconoBorrar = document.crearContacto("span")

  idContacto.innerHTML = contacto.id
  nombreContacto.innerHTML = contacto.nombre
  apellidoContacto.innerHTML = contacto.apellido
  telefonoContacto.innerHTML = contacto.telefono
  ciudadContacto.innerHTML = contacto.ciudad
  direccionContacto.innerHTML = contacto.direccion
  iconoBorrar.innerHTML = "delete_forever"

  divContacto.classList.add("tarea")
  divContacto.classList.add("material-symbols-outlined", "icono")

divContacto.appendChild(idContacto)
divContacto.appendChild(nombreContacto)
divContacto.appendChild(apellidoContacto)
divContacto.appendChild(telefonoContacto)
divContacto.appendChild(ciudadContacto)
divContacto.appendChild(direccionContacto)
divContacto.appendChild(iconoBorrar)

parentNode.appendChild(divContacto)

}