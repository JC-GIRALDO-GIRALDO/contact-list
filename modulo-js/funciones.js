const guardarContacto = (localstor, contacto) => {
  localstor.setItem(contacto.id, JSON.stringify(contacto));
};
