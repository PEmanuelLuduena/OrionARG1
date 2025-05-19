document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm('service_acw0v47', 'template_yaewf3f', this)
        .then(function() {
            alert("¡Mensaje enviado exitosamente!");
        }, function(error) {
            alert("Error al enviar el mensaje. Inténtalo nuevamente.");
            console.error("Error:", error);
        });
});