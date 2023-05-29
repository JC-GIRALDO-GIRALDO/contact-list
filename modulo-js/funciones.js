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
  let idContacto = document.createElement("h2")
  let nombreContacto = document.createElement("p")
  let surnameContacto = document.createElement("p")
  let phoneContacto = document.createElement("p")
  let cityContacto = document.createElement("p")
  let addressContacto = document.createElement("p")
  let iconoBorrar = document.createElement("span")

  idContacto.innerHTML = contacto.id
  nombreContacto.innerHTML = contacto.nombre
  surnameContacto.innerHTML = contacto.surname
  phoneContacto.innerHTML = contacto.phone
  cityContacto.innerHTML = contacto.city
  addressContacto.innerHTML = contacto.address
  iconoBorrar.innerHTML = "delete_forever"

  divContacto.classList.add("tareas")
  divContacto.classList.add("material-symbols-outlined", "icono")

  iconoBorrar.onclick = () => {
    localstor.remoteItem(contacto.id)
    window.location.href = "/"
  }

divContacto.appendChild(idContacto)
divContacto.appendChild(nombreContacto)
divContacto.appendChild(surnameContacto)
divContacto.appendChild(phoneContacto)
divContacto.appendChild(cityContacto)
divContacto.appendChild(addressContacto)
divContacto.appendChild(iconoBorrar)

parentNode.appendChild(divContacto)

}