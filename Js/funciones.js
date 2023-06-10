const guardarContacto = (db, contacto) => {
  db.setItem(contacto.id, JSON.stringify(contacto));
  window.location.href = "/";
};

const cargarContactos = (db, parentNode) => {
  let claves = Object.keys(db);

  for (clave of claves) {
    let contacto = JSON.parse(db.getItem(clave));
    crearContacto(parentNode, contacto, db);
  }
};

const crearContacto = (parentNode, contacto, db) => {
  let divContacto = document.createElement("div");
  let cedulaContacto = document.createElement("h3");
  let nombreContacto = document.createElement("p");
  let apellidoContacto = document.createElement("p");
  let telefonoContacto = document.createElement("p");
  let ciudadContacto = document.createElement("p");
  let direccionContacto = document.createElement("p");

  let iconoBorrar = document.createElement("span");

  cedulaContacto.innerHTML = contacto.cedula;
  nombreContacto.innerHTML = contacto.nombre;
  apellidoContacto.innerHTML = contacto.apellido;
  telefonoContacto.innerHTML = contacto.telefono;
  ciudadContacto.innerHTML = contacto.ciudad;
  direccionContacto.innerHTML = contacto.direccion;

  iconoBorrar.innerHTML = "delete_forever";

  divContacto.classList.add("tarea");
  iconoBorrar.classList.add("material-symbols-outlined", "icono");

  iconoBorrar.onclick = () => {
    db.removeItem(contacto.id);
    window.location.href = "/";
  };

  divContacto.appendChild(cedulaContacto);
  divContacto.appendChild(nombreContacto);
  divContacto.appendChild(apellidoContacto);
  divContacto.appendChild(telefonoContacto);
  divContacto.appendChild(ciudadContacto);
  divContacto.appendChild(direccionContacto);
  divContacto.appendChild(iconoBorrar);

  parentNode.appendChild(divContacto);
};
