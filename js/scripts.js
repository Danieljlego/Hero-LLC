/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/

// Initialize EmailJS
(function() {
    emailjs.init("y5Azpbr5ZsDDWk3Dk"); // Your Public Key
})();

// Handle Contact Form Submission
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // Gather form values
            const formData = {
                from_name: document.getElementById("name").value,
                reply_to: document.getElementById("email").value,
                message: document.getElementById("message").value
            };

            // Send Email via EmailJS
            emailjs.send("service_1w8uav8", "template_2x2wo3f", formData)
                .then(function(response) {
                    document.getElementById("successMessage").style.display = "block";
                    document.getElementById("errorMessage").style.display = "none";
                    contactForm.reset();
                })
                .catch(function(error) {
                    document.getElementById("errorMessage").style.display = "block";
                    document.getElementById("successMessage").style.display = "none";
                });
        });
    }
});
