// Objet contenant les informations des utilisateurs avec leurs questions spécifiques
var usersData = {
    "Alice": {
        questions: [
            { question: "Quel est votre animal préféré ?", options: ["Lion", "Tigre", "Éléphant"], answer: "Tigre" },
            { question: "Quelle est votre couleur préférée ?", options: ["Rouge", "Bleu", "Vert"], answer: "Bleu" },
            { question: "Décrivez votre plat préféré :", answer: "Lasagnes" }
        ],
        teamMembers: ["Bob", "Charlie"]
    },
    "Bob": {
        questions: [
            { question: "Quel est votre pays préféré ?", options: ["France", "Italie", "Espagne"], answer: "Italie" },
            { question: "Quelle est votre saison préférée ?", options: ["Été", "Automne", "Hiver"], answer: "Été" },
            { question: "Décrivez votre film préféré :", answer: "Inception" }
        ],
        teamMembers: ["Alice", "Charlie"]
    },
    "Charlie": {
        questions: [
            { question: "Quel est votre sport préféré ?", options: ["Football", "Basketball", "Tennis"], answer: "Football" },
            { question: "Quel est votre dessert préféré ?", options: ["Gâteau au chocolat", "Tarte aux pommes", "Crème brûlée"], answer: "Gâteau au chocolat" },
            { question: "Décrivez votre destination de voyage préférée :", answer: "Bora Bora" }
        ],
        teamMembers: ["Alice", "Bob"]
    }
};

var selectedOptions = {}; // Objet pour suivre les options sélectionnées par question
var selectedName = ''; // Variable pour stocker le prénom sélectionné

// Fonction pour charger les questions en fonction du prénom sélectionné
function loadQuestions() {
    selectedName = document.getElementById('nameSelect').value;
    var userData = usersData[selectedName];

    if (userData) {
        // Désactiver le sélecteur de prénom et le bouton "Continuer"
        document.getElementById('nameSelect').disabled = true;
        document.getElementById('submitButton').disabled = true;
        document.getElementById('submitButton').style.display = 'none'; // Cacher le bouton "Continuer"

        var questionsHTML = '';
        userData.questions.forEach(function (question, index) {
            if (question.options) {
                // Question à choix multiples
                questionsHTML += '<div class="questionContainer">';
                questionsHTML += '<label>' + (index + 1) + '. ' + question.question + '</label>';
                question.options.forEach(function (option) {
                    var isSelected = selectedOptions[index] === option ? 'selected' : '';
                    questionsHTML += '<button type="button" class="optionButton ' + isSelected + '" onclick="selectOption(this, ' + index + ', \'' + option + '\')">' + option + '</button>';
                });
                questionsHTML += '</div>';
            } else {
                // Question à texte libre
                questionsHTML += '<div class="questionContainer">';
                questionsHTML += '<label>' + (index + 1) + '. ' + question.question + '</label>';
                questionsHTML += '<textarea id="q' + (index + 1) + '" name="q' + (index + 1) + '" rows="4" cols="50"></textarea>';
                questionsHTML += '</div>';
            }
        });

        var securityQuestionsDiv = document.getElementById('securityQuestions');
        securityQuestionsDiv.innerHTML = questionsHTML;
        securityQuestionsDiv.style.display = 'block';

        // Afficher le bouton de connexion une fois que les questions sont chargées
        document.getElementById('connexionButtonContainer').style.display = 'block';
    }
}

// Fonction pour sélectionner une option
function selectOption(button, questionIndex, option) {
    // Désélectionner toutes les autres options de la même question
    var questionContainer = button.parentNode;
    var optionButtons = questionContainer.querySelectorAll('.optionButton');
    optionButtons.forEach(function (btn) {
        btn.classList.remove('selected');
    });

    // Sélectionner l'option cliquée
    button.classList.add('selected');
    selectedOptions[questionIndex] = option;
}

function checkAnswers() {
    var selectedName = document.getElementById('nameSelect').value;
    var userData = usersData[selectedName];
    var allCorrect = true;

    userData.questions.forEach(function (question, index) {
        var selectedOption = selectedOptions[index];

        if (question.options) {
            // Question à choix multiples
            if (selectedOption !== question.answer) {
                allCorrect = false;
                return;
            }
        } else {
            // Question à texte libre
            var textareaValue = document.getElementById('q' + (index + 1)).value.trim();
            if (textareaValue.toLowerCase() !== question.answer.toLowerCase()) {
                allCorrect = false;
                return;
            }
        }
    });

    if (allCorrect) {
        var teamMembersHTML = '<h2>Membres de ton équipe pour le Pékin Pas Trop Lent :</h2><ul>';
        userData.teamMembers.forEach(function (member) {
            teamMembersHTML += '<button class="team-member-button">' + member + '</button>';
        });
        teamMembersHTML += '</ul>';

        // Afficher les membres de l'équipe dans la div teamMembers
        var teamMembersDiv = document.getElementById('teamMembers');
        teamMembersDiv.innerHTML = teamMembersHTML;
        teamMembersDiv.style.display = 'block';

        // Cacher le formulaire de questions
        var securityQuestionsForm = document.getElementById('securityQuestionsForm');
        securityQuestionsForm.style.display = 'none';

        // Cacher le bouton de connexion
        var connexionButtonContainer = document.getElementById('connexionButtonContainer');
        connexionButtonContainer.style.display = 'none';

	triggerConfettiAnimation();
    } else {
        alert('Certaines réponses sont incorrectes. Veuillez vérifier et essayer à nouveau.');
    }
}
// Fonction pour déclencher l'animation de confettis avec différentes couleurs
function triggerConfettiAnimation() {
    var confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');

    for (var i = 0; i < 50; i++) {
        var confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Choisir aléatoirement une couleur de confetti
        var randomColor = Math.floor(Math.random() * 3);
        if (randomColor === 0) {
            confetti.classList.add('orange');
        } else if (randomColor === 1) {
            confetti.classList.add('blue');
        } else {
            confetti.classList.add('purple');
        }

        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confettiContainer.appendChild(confetti);
    }

    document.body.appendChild(confettiContainer);

    // Supprimer les confettis après l'animation
    setTimeout(function() {
        confettiContainer.remove()
    }, 10000);
}
// Fonction pour afficher les membres de l'équipe
function displayTeamMembers(teamMembers) {
    var teamMembersHTML = '<h2>Membres de l\'équipe :</h2><ul>';

    teamMembers.forEach(function(member) {
        teamMembersHTML += '<li>' + member + '</li>';
    });

    teamMembersHTML += '</ul>';

    // Afficher les membres de l'équipe dans la div teamMembers
    var teamMembersDiv = document.getElementById('teamMembers');
    teamMembersDiv.innerHTML = teamMembersHTML;
    teamMembersDiv.style.display = 'block';
}

