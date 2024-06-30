// Objet contenant les informations des utilisateurs avec leurs questions spécifiques
var usersData = {
    "Alice": {
        questions: [
            { question: "Quel est votre animal préféré ?", options: ["Lion", "Tigre", "Éléphant"], answer: "Tigre" },
            { question: "Quelle est votre couleur préférée ?", options: ["Rouge", "Bleu", "Vert"], answer: "Bleu" },
            { question: "Décrivez votre plat préféré :", answer: "Lasagnes" }
        ]
    },
    "Bob": {
        questions: [
            { question: "Quel est votre pays préféré ?", options: ["France", "Italie", "Espagne"], answer: "Italie" },
            { question: "Quelle est votre saison préférée ?", options: ["Été", "Automne", "Hiver"], answer: "Été" },
            { question: "Décrivez votre film préféré :", answer: "Inception" }
        ]
    },
    "Charlie": {
        questions: [
            { question: "Quel est votre sport préféré ?", options: ["Football", "Basketball", "Tennis"], answer: "Football" },
            { question: "Quel est votre dessert préféré ?", options: ["Gâteau au chocolat", "Tarte aux pommes", "Crème brûlée"], answer: "Gâteau au chocolat" },
            { question: "Décrivez votre destination de voyage préférée :", answer: "Bora Bora" }
        ]
    }
};

// Fonction pour charger les questions en fonction du prénom sélectionné
function loadQuestions() {
    var selectedName = document.getElementById('nameSelect').value;
    var userData = usersData[selectedName];

    if (userData) {
        var questionsHTML = '';
        userData.questions.forEach(function (question, index) {
            if (question.options) {
                // Question à choix multiples
                questionsHTML += '<label>' + (index + 1) + '. ' + question.question + '</label>';
                question.options.forEach(function (option) {
                    questionsHTML += '<input type="radio" name="q' + (index + 1) + '" value="' + option + '"> ' + option + '<br>';
                });
            } else {
                // Question à texte libre
                questionsHTML += '<label>' + (index + 1) + '. ' + question.question + '</label>';
                questionsHTML += '<textarea id="q' + (index + 1) + '" name="q' + (index + 1) + '" rows="4" cols="50"></textarea>';
            }
        });

        document.getElementById('securityQuestions').innerHTML = questionsHTML;
    }
}

// Fonction pour vérifier les réponses
function checkAnswers() {
    var selectedName = document.getElementById('nameSelect').value;
    var userData = usersData[selectedName];

    if (!userData) {
        alert("Veuillez sélectionner un prénom.");
        return;
    }

    var answers = [];
    userData.questions.forEach(function (question, index) {
        var answer;
        if (question.options) {
            // Question à choix multiples
            var selectedOption = document.querySelector('input[name="q' + (index + 1) + '"]:checked');
            answer = selectedOption ? selectedOption.value : null;
        } else {
            // Question à texte libre
            answer = document.getElementById('q' + (index + 1)).value.trim();
        }
        answers.push(answer);
    });

    // Vérification des réponses
    var correct = true;
    answers.forEach(function (answer, index) {
        var correctAnswer = userData.questions[index].answer;
        if (answer !== correctAnswer) {
            correct = false;
        }
    });

    if (correct) {
        alert("Connexion réussie !");
        // Redirection ou autres actions après connexion réussie
    } else {
        alert("Réponses incorrectes. Veuillez vérifier et réessayer.");
    }
}

// Chargement des questions initiales lors du chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    loadQuestions();
});

// Mise à jour des questions lorsque le prénom est modifié
document.getElementById('nameSelect').addEventListener('change', function () {
    loadQuestions();
});
