document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi par défaut du formulaire

    // Récupère les valeurs du formulaire
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Vérifie si tous les champs sont remplis
    if (name && email && message) {
        // Affiche un message de succès avec SweetAlert
        Swal.fire({
            icon: 'success',
            title: 'Message envoyé !',
            text: 'Merci pour votre message, nous reviendrons vers vous sous peu.',
            confirmButtonText: 'OK'
        });

        // Vide le formulaire après l'envoi
        document.getElementById("contact-form").reset();
    } else {
        // Affiche un message d'erreur avec SweetAlert si le formulaire est incomplet
        Swal.fire({
            icon: 'error',
            title: 'Oups...',
            text: 'Veuillez remplir tous les champs avant de soumettre.',
            confirmButtonText: 'OK'
        });
    }
});
