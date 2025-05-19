// script.js

window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Datos de EmailJS
    const serviceID = 'service_acw0v47';  // <-- Cambiar por tu Service ID
    const templateID = 'template_yaewf3f';  // <-- Cambiar por tu Template ID
    const publicKey = 'S-XdyH2yWbfy46oVk';  // <-- Cambiar por tu Public Key

    // Enviar email
    emailjs.sendForm(serviceID, templateID, this, publicKey)
      .then(() => {
        alert('¡Correo enviado correctamente!');
      },