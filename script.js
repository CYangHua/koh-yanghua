// Objet contenant les informations des utilisateurs avec leurs questions spécifiques
var usersData = {
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Questions</title>
</head>
<body>
<script>
var usersData = {
    "Charlène": {
        questions: [
            { question: "Quel est le meilleur moyen d'arriver en retard à Paris, surtout quand on est attendu pour un trajet vers Epoisses ?", options: ["Faire un détour d'1h pour un BlaBlaCar", "Avoir un accident de voiture", "Ne pas partir le bon jour"], answer: ""},
            { question: "Quel est le meilleur endroit pour s'abriter de la pluie ?", options: ["Chez soi", "Dans un restaurant", "Dans un cabanon de 2m² rempli de cartons de bouteilles d'Evian"], answer: ""},
            { question: "Proche de quelle grande ville connue pour ses parcs d'attraction peut-on voir des lamantins et des méduses fluorescentes ?", answer: ""}
        ],
        teamMembers: ["Lola", "Lucile"]
    },
    "Jean": {
        questions: [
            { question: "Qu'est-ce qui ne crée pas de conflit dans un couple ?", options: ["Inviter un ami torché à dormir chez soi à 2h du mat", "Changer la photo d'un groupe avec une photo de cet ami torché", "Tout le reste"], answer: ""},
            { question: "Où ne faut-il pas aller pour découvrir l'équitation ?", options: ["Dans un parc équestre", "Proche d'une zone sismique", "Dans un désert"], answer: ""},
            { question: "Quelle bouteille d'alcool faut-il apporter lorsqu'on est invité à un repas ?", answer: ""}
        ],
        teamMembers: ["Grégoire", "Ivan"]
    },
    "Quentin": {
        questions: [
            { question: "En prépa, que faire lorsqu'on habite au 5ème étage ?", options: ["Travailler ses cours", "Dormir", "Jouer au baseball avec une pomme et une poële avec la fenêtre ouverte"], answer: ""},
            { question: "Que faire proche d'un ravin lors de l'anniversaire des 18 ans d'un pote ?", options: ["Boire de l'alcool", "Discuter avec des amis", "Faire des tractions au-dessus du vide"], answer: ""},
            { question: "Que faut-il crier lorsqu'on ferme \"calmement\" une porte ?", answer: ""}
        ],
        teamMembers: ["Anatole", "Marko"]
    },
    "Anatole": {
        questions: [
            { question: "Comment s'habiller la première fois qu'on va à l'opéra Garnier ?", options: ["En costume", "En chemise", "En polo Piche"], answer: ""},
            { question: "Comment faire pour choisir son fillot quand on fait un S3E ?", options: ["Analyser le portail", "Demander à des amis d'enquêter pour soi", "Revenir à Paris pendant les premières semaines pour pouvoir analyser soi-même les fillots potentiels (et ainsi choisir la meilleure personne des P18)"], answer: ""},
            { question: "Quel aliment faut-il faire manger à son fillot pour prouver son sadisme ?", answer: ""}
        ],
        teamMembers: ["Quentin", "Marko"]
    },
    "Lucile": {
        questions: [
            { question: "Quelle est la meilleur moyen de ne pas pouvoir profiter d'une soirée ?", options: ["Habiter au bout du RER D", "Etre fatiguée", "Ne pas boire d'alcool"], answer: ""},
            { question: "Quel est le meilleur cadeau à offrir ?", options: ["Un cadeau à plusieurs pour en profiter soi-même (karaoké, jeux de société, escape game, …)", "Un cadeau utile", "Un cadeau artistique"], answer: ""},
            { question: "Quel est le nom du meilleur escape game Disney de 2h de Paris ?", answer: ""}
        ],
        teamMembers: ["Charlène", "Lola"]
    },
    "Gabriel": {
        questions: [
            { question: "Quel est le meilleur logement pour dormir en Islande ?", options: ["Un hôtel", "Un gîte", "Une yourte en extérieur avec de la limonade rose"], answer: ""},
            { question: "Quel est le meilleur moyen pour trouver un taxi à Podgorica ?", options: ["Appeler un taxi via une application locale", "Lever la main quand un taxi passe", "Demander à deux locales dans un bar de le faire pour nous"], answer: ""},
            { question: "Que faut-il vendre à ses amis dans un restaurant lorsque l'on est en forte difficulté financière ?", answer: ""}
        ],
        teamMembers: ["Lilian", "Victor"]
    },
    "Grégoire": {
        questions: [
            { question: "Comment montrer sa motivation dans une discussion entre amis en voiture ?", options: ["Proposer des idées de scénarii innovantes", "Avoir l'air enjoué", "Dire \"Super\" du ton le plus soûlé possible"], answer: ""},
            { question: "Comment montrer ses talents en break-dance ?", options: ["Profiter d'un sol plat et faire une démonstration de force", "Profiter du fait que ses amis soient torchés pour faire illusion", "Se vanter de ses talents mais ne jamais les montrer"], answer: ""},
            { question: "Quel accent faut-il faire avec un micro de karaoké en soirée, surtout quand on est filmé ?", answer: ""}
        ],
        teamMembers: ["Jean", "Ivan"]
    },
    "Kévin": {
        questions: [
            { question: "Quelle couleur n'est pas la couleur d'une algue ?", options: ["Vert", "Marron", "Violet"], answer: ""},
            { question: "Quel est le meilleur moyen d'éviter un déménagement ?", options: ["Partir le week-end loin de Nantes", "Aller à un barbecue mais venir quand même après que tout soit déménagé", "Faire semblant d'avoir une blessure"], answer: ""},
            { question: "Quel type de lieu faut-il absolument atteindre à l'île de Ré ?", answer: ""}
        ],
        teamMembers: ["Félix", "François"]
    },
    "Lola": {
        questions: [
            { question: "Comment démissionner ?", options: ["Poser sa démission par lettre et partir", "Prendre rdv avec son chef et lui annoncer de vive voix", "Prendre rdv avec son chef, se faire retourner le cerveau puis réfléchir pendant plusieurs mois à si on voulait vraiment démissionner"], answer: ""},
            { question: "Comment connaître la taille de pantalon de quelqu'un ?", options: ["Le faire boire jusqu'à ce qu'il ne sache plus ce qu'il dit", "Lui voler un pantalon pour vérifier", "Lui demander directement"], answer: ""},
            { question: "Que faut-il absolument mettre au fond d'un sac lors d'un déménagement pour rajouter du poids ?", answer: ""}
        ],
        teamMembers: ["Lucile", "Charlène"]
    },
    "Manon": {
        questions: [
            { question: "Combien de fois faut-il changer d'avis pour savoir si l'on souhaite aller à l'anniversaire d'un pote ?", options: ["0 fois, il suffit de se décider", "1 fois parce qu'il est normal d'hésiter", "15 fois minimum"], answer: ""},
            { question: "Comment faire pour montrer sa décoration intérieure quand on en est fière ?", options: ["Inviter ses amis chez soi pour leur faire découvrir", "Prendre des photos et les envoyer sur un groupe", "Faire attendre ses amis dehors et leur ouvrir la fenêtre du balcon pour leur montrer l'intérieur"], answer: ""},
            { question: "Combien de jours avant une crémaillère faut-il créer un groupe pour prévenir les invités ?", answer: ""}
        ],
        teamMembers: ["Alexis", "Maxime", "Denis", "Joséphine"]
    },
    "Marko": {
        questions: [
            { question: "Comment faire pour obtenir la note au bac de maths d'un ami ?", options: ["Lui demander", "Faire du chantage en ne lui payant pas son resto lorsqu'il oublie son argent", "Demander à ses parents"], answer: ""},
            { question: "Quel est le meilleur endroit pour faire une crise cardiaque au téléphone ?", options: ["Une cage d'escalier", "Un parc d'attraction", "Un hôpital"], answer: ""},
            { question: "Qui dirige la Serbie ?", answer: ""}
        ],
        teamMembers: ["Anatole", "Quentin"]
    },
    "Alexis": {
        questions: [
            { question: "Que ne faut-il pas faire le soir à la meuh ?", options: ["Eteindre les lumières pour stalker ses voisins d'en face par les fenêtres", "Servir des verres de rhum à un ami qui en demande beaucoup", "Chercher une carrière professionnelle"], answer: ""},
            { question: "Quel repas permet le moins de se sentir proche de la nature pendant un bivouac ?", options: ["Du saucisson", "Entrée-Plat-Dessert en refuge", "De la semoule séchée au citron"], answer: ""},
            { question: "Dans combien de villes différentes sommes-nous allés ensemble, tout contexte confondu et pour minimum une nuit ?", answer: ""}
        ],
        teamMembers: ["Manon", "Maxime", "Denis", "Joséphine"]
    },
    "Félix": {
        questions: [
            { question: "Comment prouver que l'on n'est pas complètement un rat ?", options: ["Mettre son logement en sous-location alors qu'il fait 15m²", "Prendre le bus pour aller chez Tang Frères avec un cadis de grand-mère et tout acheter en gros", "Dépenser régulièrement une centaine d'euros dans des restaurants japonais chics et partir 3 mois au Japon"], answer: ""},
            { question: "Que ne faut-il pas faire lorsqu'on fait du ski chez les parents d'un ami ?", options: ["Ramener un cadeau", "Apporter son propre savon", "Emprunter un masque de ski à son ami et faire semblant de l'avoir perdu"], answer: ""},
            { question: "Combien de fois ai-je été invité à dîner chez vous ?", answer: ""}
        ],
        teamMembers: ["François", "Kévin"]
    },
    "Sarah": {
        questions: [
            { question: "Quel est le meilleur moyen pour apprendre à gérer son stress ?", options: ["Faire tous ses projets des Mines avec un mec qui fait tout à l'arrache", "Prendre des anti-dépresseurs", "Être organisée"], answer: ""},
            { question: "Que faut-il faire pour obtenir la présidence du Minas Telien ?", options: ["Ramener une tablette de chocolat au président P17", "Faire un S3E", "Être assidu et venir à tous les Minas Telien jusqu'à la fermeture"], answer: ""},
            { question: "Qui a dit \"le lait, c'est moi\" sous forme de vache ?", answer: ""}
        ],
        teamMembers: ["Nathan", "Maud", "Valentin"]
    },
    "Valentin": {
        questions: [
            { question: "Quel moment est le plus intense dans la vie d'un trameur ?", options: ["La semaine de répétition", "La mise en place des AG de choix des chansons", "Les réunions d'écriture du fil rouge"], answer: ""},
            { question: "Comment faire pour ajouter des photos sur un iPhone que l'on souhaite offrir ?", options: ["On branche le téléphone à un ordi et on transfère", "On envoie les photos par mail", "On tente toutes les solutions possibles et on finit par abandonner et à les laisser sur un Drive"], answer: ""},
            { question: "Lors du week-end de folie à Epoisses en décembre 2021, à quel rôle du loup-garou correspondait le clown ?", answer: ""}
        ],
        teamMembers: ["Nathan", "Maud", "Sarah"]
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
                questionsHTML += '<textarea id="q' + (index + 1) + '" name="q' + (index + 1) + '" rows="1" cols="50"></textarea>';
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
        displayTeamMembers(userData.teamMembers);
        var goToCameraButton = document.getElementById('go-to-camera');
        goToCameraButton.style.display = 'block';

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

// Fonction pour afficher les membres de l'équipe
function displayTeamMembers(teamMembers) {
    var teamMembersHTML = '<h2>Membres de ton équipe pour Brest Express :</h2><div class="team-members">';
    teamMembers.forEach(function (member) {
        teamMembersHTML += '<button class="team-member-button">' + member + '</button>';
    });
    teamMembersHTML += '</div>';

    // Afficher les membres de l'équipe dans la div teamMembers
    var teamMembersDiv = document.getElementById('teamMembers');
    teamMembersDiv.innerHTML = teamMembersHTML;
    teamMembersDiv.style.display = 'block';
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
