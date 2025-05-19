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