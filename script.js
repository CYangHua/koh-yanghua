document.getElementById('connexion').addEventListener('click', function() {
    // Récupérer les réponses sélectionnées
    var prenom = document.getElementById('prenom').value;
    var reponseQ1 = document.querySelector('input[name="q1"]:checked').value;
    var reponseQ2 = document.querySelector('input[name="q2"]:checked').value;
    var reponseQ3 = document.getElementById('q3').value;

    // Vérifier les réponses
    if (reponseQ1 === 'Paris' && reponseQ2 === 'Pacifique' && reponseQ3.trim() !== '') {
        alert('Connexion réussie ! Bienvenue ' + prenom);
        // Redirection vers la page de la caméra (à implémenter)
        window.location.href = 'camera.html';
    } else {
        alert('Réponses incorrectes. Veuillez réessayer.');
    }
});
