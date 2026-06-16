const formulario = document.getElementById('formContacto');
const respuesta = document.getElementById('respuestaFormulario');

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const destino = document.getElementById('destino').value;
  const personas = document.getElementById('personas').value;
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !correo || !destino || !personas || !mensaje) {
    mostrarRespuesta('Por favor completa todos los campos antes de enviar.', 'danger');
    return;
  }

  if (!correo.includes('@') || !correo.includes('.')) {
    mostrarRespuesta('Escribe un correo electrónico válido.', 'warning');
    return;
  }

  if (Number(personas) < 1) {
    mostrarRespuesta('La cantidad de personas debe ser mayor a cero.', 'warning');
    return;
  }

  mostrarRespuesta(`Gracias, ${nombre}. Hemos recibido tu solicitud para visitar ${destino}. Pronto te contactaremos.`, 'success');
  formulario.reset();
});

function mostrarRespuesta(mensaje, tipo) {
  respuesta.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensaje}</div>`;
}
