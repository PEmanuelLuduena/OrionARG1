document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que la página se recargue
  emailjs.sendForm('service_acw0v47', 'template_rlfq6yj', this)
    .then(function() {
      alert('¡Email enviado con éxito!');
    }, function(error) {
      alert('Error al enviar el email: ' + JSON.stringify(error));
    });
});