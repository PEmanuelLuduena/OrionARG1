// Inicializamos EmailJS
(function() {
  emailjs.init("S-XdyH2yWbfy46oVk"); // Public key
})();

// Enviamos el formulario al hacer submit
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_acw0v47', 'template_yaewf3f', this)
    .then(function() {
      alert('Mensaje enviado correctamente.');
    }, function(error) {
      alert('Error al enviar el mensaje: ' + JSON.stringify(error));
    });
});

window.onload = function () {
  const page = window.location.pathname.split("/").pop(); // nombre del archivo
  const visitedKey = "visited_" + page;

  if (localStorage.getItem(visitedKey)) {
    window.location.href = "index.html"; // redirige a la página principal
  } else {
    localStorage.setItem(visitedKey, "true");
  }
};