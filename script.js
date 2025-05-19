// Inicializar EmailJS con tu User ID
emailjs.init('S-XdyH2yWbfy46oVk');

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_acw0v47', 'template_c6l7fga', this)
    .then(function() {
      alert('Correo enviado exitosamente, ¡gracias por contactarte!');
      event.target.reset();
    }, function(error) {
      alert('Error al enviar el correo: ' + JSON.stringify(error));
    });
});

// Función para obtener parámetros de la URL
function getParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Al cargar la página
window.onload = function() {
  const user_name = getParam('user_name');
  const user_email = getParam('user_email');
  const message = getParam('message');

  if(user_name && user_email && message) {
    emailjs.send("tu_service_id", "tu_template_id", {
      user_name: user_name,
      user_email: user_email,
      message: message
    })
    .then(() => {
      alert("Correo enviado con éxito!");
    }, (error) => {
      alert("Error al enviar el correo: " + JSON.stringify(error));
    });
  }
};