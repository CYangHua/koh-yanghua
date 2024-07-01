// script.js

var usersData = {
    "Charlène": {
        questions: [
            { question: "Quel est le meilleur moyen d'arriver en retard à Paris, surtout quand on est attendu pour un trajet vers Epoisses ?", options: ["Faire un détour 1h pour un BlaBlaCar", "Avoir un accident de voiture", "Ne pas partir le bon jour"], answer: "Faire un détour 1h pour un BlaBlaCar"},
            { question: "Quel est le meilleur endroit pour s'abriter de la pluie ?", options: ["Chez soi", "Dans un restaurant", "Dans un cabanon de 2m² rempli de cartons de bouteilles Evian"], answer: "Dans un cabanon de 2m² rempli de cartons de bouteilles Evian"},
            { question: "Proche de quelle grande ville connue pour ses parcs d'attraction peut-on voir des lamantins et des méduses fluorescentes ?", answer: "Orlando"}
        ],
        teamMembers: ["Lola", "Lucile"]
    },
    "Jean": {
        questions: [
            { question: "Comment ne pas créer de conflit dans un couple ?", options: ["Inviter un ami torché à dormir chez soi à 2h du mat", "Changer une photo de groupe avec une photo de cet ami torché", "Tout le reste"], answer: "Tout le reste"},
            { question: "Où ne faut-il pas aller pour faire du cheval ?", options: ["Dans un parc équestre", "Dans une zone sismique", "Dans un désert"], answer: "Dans un parc équestre"},
            { question: "Quelle bouteille faut-il apporter pour une invitation à un repas à la meuh ? De la ...", answer: "Clairette de Die"}
        ],
        teamMembers: ["Grégoire", "Ivan"]
    },
    "Quentin": {
        questions: [
            { question: "En prépa, que doivent faire les habitantsdu 5ème étage ?", options: ["Travailler leurs cours", "Dormir", "Jouer au baseball avec une pomme et une poêle avec la fenêtre ouverte"], answer: "Jouer au baseball avec une pomme et une poêle avec la fenêtre ouverte"},
            { question: "Que faire proche du ravin pour un anniversaire des 18 ans de Camille ?", options: ["Boire", "Discuter avec des amis", "Faire des tractions au-dessus du vide"], answer: "Faire des tractions au-dessus du vide"},
            { question: "Que faut-il crier pour fermer \"calmement\" une porte ?", answer: "Hybris"}
        ],
        teamMembers: ["Anatole", "Marko"]
    },
    "Anatole": {
        questions: [
            { question: "Opéra Garnier : comment se vêtir la première fois ?", options: ["En costume", "En chemise", "En polo Piche"], answer: "En polo Piche"},
            { question: "Comment faire pour choisir son fillot quand on fait un S3E ?", options: ["Analyser le portail", "Demander à des amis", "Revenir à Paris pendant les premières semaines pour pouvoir analyser soi-même les fillots potentiels (et ainsi choisir la meilleure personne des P18)"], answer: "Revenir à Paris pendant les premières semaines pour pouvoir analyser soi-même les fillots potentiels (et ainsi choisir la meilleure personne des P18)"},
            { question: "Quel aliment faut-il faire manger à son fillot pour prouver son sadisme ?Du ...", answer: "Konjac"}
        ],
        teamMembers: ["Quentin", "Marko"]
    },
    "Lucile": {
        questions: [
            { question: "Quel est le meilleur moyen de ne pas pouvoir profiter de la soirée ?", options: ["Habiter au bout du RER D", "Etre fatiguée", "Ne pas boire"], answer: "Habiter au bout du RER D"},
            { question: "Quel est le meilleur cadeau à offrir ?", options: ["Un cadeau à plusieurs pour en profiter soi-même (karaoké, jeux de société, escape game, …)", "Un cadeau utile", "Un cadeau artistique"], answer: "Un cadeau à plusieurs pour en profiter soi-même (karaoké, jeux de société, escape game, …)"},
            { question: "Sur quel thème est le meilleur escape game de 2h de Paris ?", answer: "Disney"}
        ],
        teamMembers: ["Charlène", "Lola"]
    },
    "Gabriel": {
        questions: [
            { question: "Quel est le meilleur logement pour dormir en Islande ?", options: ["Un hôtel", "Un gîte", "Une yourte en extérieur avec de la limonade rose"], answer: "Une yourte en extérieur avec de la limonade rose"},
            { question: "Quel est le meilleur moyen pour trouver un taxi à Podgorica ?", options: ["Appeler un taxi via une application locale", "Lever la main quand un taxi passe", "Demander à deux locales dans un bar de le faire pour nous"], answer: "Demander à deux locales dans un bar de le faire pour nous"},
            { question: "Que faut-il vendre à ses amis dans un restaurant en cas de forte difficulté financière ? Des ...", answer: "Tickets-restaurant"}
        ],
        teamMembers: ["Lilian", "Victor"]
    },
    "Grégoire": {
        questions: [
            { question: "Comment montrer sa motivation dans une discussion entre amis en voiture ?", options: ["Proposer des idées de scénarii innovantes", "Sembler enjoué", "Dire \"Super\" du ton le plus soûlé possible"], answer: "Dire \"Super\" du ton le plus soûlé possible"},
            { question: "Comment montrer ses talents en break-dance ?", options: ["Profiter du sol plat et faire une démonstration de force", "Profiter du fait que ses amis soient torchés pour faire illusion", "Se vanter de ses talents mais ne jamais les montrer"], answer: "Se vanter de ses talents mais ne jamais les montrer"},
            { question: "Quel accent faut-il faire avec un micro de karaoké en soirée, surtout quand on est filmé ? Un accent ...", answer: "Africain"}
        ],
        teamMembers: ["Jean", "Ivan"]
    },
    "Kévin": {
        questions: [
            { question: "Quelle couleur ne fait pas partie des couleurs d'une algue ?", options: ["Vert", "Marron", "Violet"], answer: "Marron"},
            { question: "Quel est le meilleur moyen pour éviter un déménagement ?", options: ["Partir le week-end loin de Nantes", "Aller à un barbecue mais venir quand même après que tout soit déménagé", "Etre blessé"], answer: "Aller à un barbecue mais venir quand même après que tout soit déménagé"},
            { question: "Quel type de lieu faut-il absolument atteindre à l'île de Ré ? Un ...", answer: "Phare"}
        ],
        teamMembers: ["Félix", "François"]
    },
    "Lola": {
        questions: [
            { question: "Comment démissionner ?", options: ["Poser sa démission par lettre et partir", "Prendre rdv avec son chef et lui annoncer de vive voix", "Prendre rdv avec son chef, se faire retourner le cerveau puis réfléchir pendant plusieurs mois à si on voulait vraiment démissionner"], answer: "Prendre rdv avec son chef, se faire retourner le cerveau puis réfléchir pendant plusieurs mois à si on voulait vraiment démissionner"},
            { question: "Comment connaître la taille de pantalon de quelqu'un ?", options: ["Le faire boire pour le faire oublier ce dont il parle", "Lui voler un pantalon pour vérifier", "Lui demander directement"], answer: "Lui demander directement"},
            { question: "Que faut-il absolument mettre au fond d'un sac lors d'un déménagement pour rajouter du poids ? Des ...", answer: "Haltères"}
        ],
        teamMembers: ["Lucile", "Charlène"]
    },
    "Manon": {
        questions: [
            { question: "Combien de fois faut-il changer d'avis pour savoir si l'on souhaite aller à l'anniversaire d'un pote ?", options: ["0 fois, il suffit de se décider", "1 fois, il est normal de vouloir prendre son temps", "15 fois minimum"], answer: "15 fois minimum"},
            { question: "Comment faire pour montrer sa décoration intérieure quand on en est fière ?", options: ["Inviter ses amis chez soi pour leur faire découvrir", "Prendre des photos et les envoyer sur un groupe", "Faire attendre ses amis dehors et leur ouvrir la fenêtre du balcon pour leur montrer cet intérieur"], answer: "Faire attendre ses amis dehors et leur ouvrir la fenêtre du balcon pour leur montrer cet intérieur"},
            { question: "Combien de jours avant une crémaillère faut-il créer un groupe pour prévenir les invités ? Ne donner que le nombre.", answer: "12"}
        ],
        teamMembers: ["Alexis", "Maxime", "Denis", "Joséphine"]
    },
    "Marko": {
        questions: [
            { question: "Comment faire pour obtenir la note au bac de maths d'un ami ?", options: ["Lui demander", "Faire du chantage en ne lui payant pas son resto quand il oublie son argent", "Demander à ses parents"], answer: "Faire du chantage en ne lui payant pas son resto quand il oublie son argent"},
            { question: "Quel est le meilleur endroit pour faire une crise cardiaque au téléphone ?", options: ["Dans un escalier", "Un parc à attractions", "Un hôpital"], answer: "Dans un escalier"},
            { question: "Qui dirige la Serbie ? Des ...", answer: "Moutons"}
        ],
        teamMembers: ["Anatole", "Quentin"]
    },
    "Alexis": {
        questions: [
            { question: "Que ne faut-il pas faire le soir à la meuh ?", options: ["Eteindre les lumières pour stalker ses voisins en face par les fenêtres", "Servir des verres de rhum à un ami qui en demande beaucoup", "Chercher une carrière professionnelle"], answer: "Chercher une carrière professionnelle"},
            { question: "Quel repas permet le moins de se sentir proche de la nature pendant un bivouac ?", options: ["Du saucisson", "Entrée-Plat-Dessert en refuge", "De la semoule séchée au citron"], answer: "Entrée-Plat-Dessert en refuge"},
            { question: "Dans combien de villes différentes sommes-nous allés ensemble, tout contexte confondu et pour minimum une nuit ? Ne donner que le chiffre.", answer: "7"}
        ],
        teamMembers: ["Manon", "Maxime", "Denis", "Joséphine"]
    },
    "Félix": {
        questions: [
            { question: "Comment prouver que l'on n'est pas complètement un rat ?", options: ["Mettre son logement de 15m² en sous-location", "Prendre le bus pour aller chez Tang Frères avec un cadis de grand-mère et tout acheter en gros", "Dépenser régulièrement 100€ dans des restaurants japonais chics et partir 3 mois au Japon"], answer: "Dépenser régulièrement 100€ dans des restaurants japonais chics et partir 3 mois au Japon"},
            { question: "Que ne faut-il pas faire lorsqu'on fait du ski chez les parents d'un ami ?", options: ["Ramener un cadeau", "Apporter son propre savon", "Laisser les chaussures de ski dans le salon"], answer: "Laisser les chaussures de ski dans le salon"},
            { question: "Que faut-il rajouter dans les plats de son coloc en 2A quand c'est lui qui cuisine ? Du ...", answer: "fromage"}
        ],
        teamMembers: ["François", "Kévin"]
    },
    "Francois": {
        questions: [
            { question: "Comment ne pas intégrer l'X quand on est dans le groupe de colle 8 ?", options: ["Quitter LLG en sup pour rejoindre la CPES H4", "Aller en MP5", "Aller en classe étoilé"], answer: "Aller en classe étoilé"},
            { question: "Quel est le meilleur moyen pour changer sa voix ?", options: ["Inspirer un gaz Hélium", "Manger un loukoum aux arachides", "Faire une voix de tête"], answer: "Manger un loukoum aux arachides"},
            { question: "D'après un slogan connu, le groupe de colle 8 est chaud comme quoi ? La ...", answer: "bite"}
        ],
        teamMembers: ["Félix", "Kévin"]
    },
    "Ivan": {
        questions: [
            { question: "Comment prouves-tu que tu es un bon grand frère ?", options: ["En demandant à Eloi de lécher le sol du métro chinois", "En acceptant Agathe dans ton équipe de Poules Renards Vipères", "En étant attentionné avec eux"], answer: "En étant attentionné avec eux"},
            { question: "Que faire dans la cour de récré au collège ?", options: ["Discuter avec ses amis", "Jouer avec les primaires, faire un foot avec les internationaux, déblayer la neige", "Regarder les réseaux sociaux"], answer: "Jouer avec les primaires, faire un foot avec les internationaux, déblayer la neige"},
            { question: "Quel est le seul sport, que j'ai essayé 6 mois, dans lequel je pourrais potentiellement admettre que tu es meilleur que moi ? L'...", answer: "escrime"}
        ],
        teamMembers: ["Jean", "Grégoire"]
    },
    "Lilian": {
        questions: [
            { question: "Comment ne pas devenir millionnaire ?", options: ["Lancer Mission Avenir", "Lancer une application sur les paris sportifs", "Travailler"], answer: "Travailler"},
            { question: "En prépa, que faire lorsqu'on habite au 5ème étage ?", options: ["Travailler ses cours", "Dormir", "Jouer au baseball avec une pomme et une casserole avec la fenêtre ouverte"], answer: "Jouer au baseball avec une pomme et une casserole avec la fenêtre ouverte"},
            { question: "De quand date ma dernière victoire aux échecs contre toi en présentiel ? Au format JJ/MM", answer: "20/04"}
        ],
        teamMembers: ["Gabriel", "Victor"]
    },
    "Victor": {
        questions: [
            { question: "Quel est le meilleur endroit pour s'abriter de la pluie ?", options: ["Chez soi", "Dans un restaurant", "Dans un cabanon de 2m² rempli de cartons de bouteilles Evian"], answer: "Dans un cabanon de 2m² rempli de cartons de bouteilles Evian"},
            { question: "Quelle méthode ne fonctionne pas pour rencontrer une femme ?", options: ["Faire des entretiens en se faisant passer pour le psychologue du Donjon", "Raccompagner une cliente devenue actrice après une soirée Halloween", "Les applications de rencontre"], answer: "Les applications de rencontre"},
            { question: "Quel type de transistor faut-il pour un mécanisme de toilettes au Cannibale ? La réponse est en 3 lettres.", answer: "PNP"}
        ],
        teamMembers: ["Lilian", "Gabriel"]
    },
    "Amandine": {
        questions: [
            { question: "Comment cacher au mieux son côté Shark ?", options: ["Aller chez BCG après un double-diplôme HEC", "être respo Etudes JuMP et Sec Gen BDA", "Cuisiner, un peu"], answer: "Cuisiner, un peu"},
            { question: "Comment faire une sauce pour boulettes de viande à une personne fortement intolérante aux produits laitiers ?", options: ["Ne pas faire de sauce du tout", "Faire une sauce aux produits laitiers et puis tant pis", "Se faire chier à faire une sauce au lait de coco, tout ça pour que la personne les préfère sans sauce"], answer: "Se faire chier à faire une sauce au lait de coco, tout ça pour que la personne les préfère sans sauce"},
            { question: "De quelle couleur sont les dauphins à Hong Kong ?", answer: "Rose"}
        ],
        teamMembers: ["Corentin", "Martin", "Agathe"]
    },
    "Agathe": {
        questions: [
            { question: "Quelle est la meilleure chanson de la PR ? Pas parce que je l'ai écrite et que tu l'as mise en scène...", options: ["L'assasymphonie", "Parle à ma main", "On écrit sur les murs"], answer: "L'assasymphonie"},
            { question: "Comment faire pour ajouter des photos sur un iPhone que l'on souhaite offrir ?", options: ["On branche le téléphone à un ordi et on transfère", "On envoie les photos par mail", "On tente toutes les solutions possibles et on finit par faire un Drive"], answer: "On tente toutes les solutions possibles et on finit par faire un Drive"},
            { question: "Avec qui faut-il partir, en plus d'Eric, lorsque l'on veut s'essayer au dur rôle de guide de rando ? Indiquer le prénom.", answer: "Vincent"}
        ],
        teamMembers: ["Amandine", "Corentin", "Martin"]
    },
    "Denis": {
        questions: [
            { question: "Comment ne pas aller à une interne en L108 ?", options: ["Simuler une fatigue", "Servir des verres ultra chargés à tous, surtout à Alexis et soi-même, et finir par vomir dans une poubelle", "Ne pas prendre sa place"], answer: "Servir des verres ultra chargés à tous, surtout à Alexis et soi-même, et finir par vomir dans une poubelle"},
            { question: "Quel endroit d'Istanbul procure les plus fortes émotions ?", options: ["Sainte-Sophie", "Un sauna gay (et son hôte)", "La mosquée en 2D en arrivant"], answer: "Un sauna gay (et son hôte)"},
            { question: "De quelle couleur sont les aliments qui ne se mange pas ? De couleur ...", answer: "verte"}
        ],
        teamMembers: ["Manon", "Alexis", "Maxime", "Joséphine"]
    },
    "Corentin": {
        questions: [
            { question: "D'après le maire de Ichisou, quelle est la nouvelle méthode révolutionnaire pour rencontrer son âme-soeur ?", options: ["La pêche", "Les applications de rencontre", "Les voyages"], answer: "La pêche"},
            { question: "Comment détourner de l'argent ?", options: ["Organiser un week-end Piche pour 4 personnes", "Faire des placements financiers en Suisse", "Ne pas déclarer ses revenus"], answer: "Organiser un week-end Piche pour 4 personnes"},
            { question: "Quel est le nom de famille du prof qui nous a présenté strictement TOUS les capteurs du monde ?", answer: "Goulette"}
        ],
        teamMembers: ["Martin", "Agathe", "Amandine"]
    },
    "Martin": {
        questions: [
             { question: "Comment détourner de l'argent ?", options: ["Organiser un week-end Piche pour 4 personnes", "Faire des placements financiers en Suisse", "Ne pas déclarer ses revenus"], answer: "Organiser un week-end Piche pour 4 personnes"},
           { question: "Le plus gros traquenard :", options: ["Monteur PR", "Réalisateur Piche", "Danseur PR"], answer: "Monteur PR"},
            { question: "Quelle est la meilleure ville de France ? Indice : on y est allé.", answer: "Picherande"}
        ],
        teamMembers: ["Corentin", "Agathe", "Amandine"]
    },
    "Joséphine": {
        questions: [
            { question: "D'après le Vendôme des S3E, quel cours de Polytechnique Montréal n'est pas très avancé ?", options: ["Maths appliquées", "Maths théoriques", "Biotechnologies"], answer: "Maths théoriques"},
            { question: "Où étais-je lors de noter dernier appel vidéo ?", options: ["Sur une terrasse à côté de salles de réunion", "Chez moi dans la cuisine", "Sur le chemin pour faire mes courses"], answer: "Sur une terrasse à côté de salles de réunion"},
            { question: "Pour prouver que le monde est petit, quelle personne de ton labo de l'ENS de 3A connaissais-je également (via Antoine) ? N'indiquer que le prénom.", answer: "Emily"}
        ],
        teamMembers: ["Denis", "Manon", "Alexis", "Maxime"]
    },
    "Maud": {
        questions: [
            { question: "Comment s'assurer une bonne note en mini-projet MAREVA ?", options: ["Choisir le sujet pris par un mec sérieux (Nathan) et virer son binôme (Eric) en négociant 30 min", "Travailler sérieusement", "Choisir un projet simple"], answer: "Choisir le sujet pris par un mec sérieux (Nathan) et virer son binôme (Eric) en négociant 30 min"},
            { question: "Que ne faut-il pas faire en cours de gestion de crise ?", options: ["Rester bloquer 3h sur une Crise Fronologique", "Monter dans un arbre pendant la pause et passer pour un con", "Être concentré sur le travail à réaliser"], answer: "Être concentré sur le travail à réaliser"},
          { question: "Quel est le nom de famille du prof qui nous a présenté strictement TOUS les capteurs du monde ?", answer: "Goulette"}
        ],
        teamMembers: ["Nathan", "Sarah", "Valentin"]
    },
    "Maxime": {
        questions: [
             { question: "Que faut-il faire pour obtenir la présidence du Minas Telien ?", options: ["Ramener une tablette de chocolat au président P17", "Faire un S3E", "Être assidu et venir à faire la fermeture de tous les Minas Telien"], answer: "Ramener une tablette de chocolat au président P17"},
           { question: "En quelle position ai-je été baptisé parmi les P18 ?", options: ["1er", "2ème", "3ème"], answer: "1er"},
            { question: "Quelle formule de politesse utiliser pour indiquer que l'on a bien pris connaissance d'un mail ? Ne pas mettre de ponctuation.", answer: "Bien reçu"}
        ],
        teamMembers: ["Denis", "Manon", "Alexis", "Joséphine"]
    },
    "Nathan": {
        questions: [
            { question: "Quel est le meilleur personnage de Smash Bros ?", options: ["Ness", "Snake", "Mario"], answer: "Ness"},
            { question: "Quel est le premier livre que tu m'as offert ?", options: ["Mieux courir", "Le livre que ma mère a adoré", "100 méthodes pour faire chier ses collègues"], answer: "Mieux courir"},
            { question: "Quel mois Louisa est-elle montée sur mon dos la première fois ? Au format MM/AA", answer: "08/20"}
        ],
        teamMembers: ["Maud", "Sarah", "Valentin"]
    },
    "Sarah": {
        questions: [
            { question: "Quel est le meilleur moyen pour apprendre à gérer son stress ?", options: ["Faire tous ses projets des Mines avec un mec qui fait tout au dernier moment", "Prendre des anti-dépresseurs", "Être organisée"], answer: "Faire tous ses projets des Mines avec un mec qui fait tout au dernier moment"},
            { question: "Que faut-il faire pour obtenir la présidence du Minas Telien ?", options: ["Ramener une tablette de chocolat au président P17", "Faire un S3E", "Être assidu et faire la fermeture de tous les Minas Telien"], answer: "Ramener une tablette de chocolat au président P17"},
            { question: "Qui a dit \"le lait, c'est moi\" sous forme de vache ? Indiquer que le prénom.", answer: "Paul"}
        ],
        teamMembers: ["Nathan", "Maud", "Valentin"]
    },
    "Valentin": {
        questions: [
            { question: "Quel moment est le plus intense dans la vie d'un trameur ?", options: ["La semaine de répétition", "La mise en place des AG de choix des chansons", "Les réunions pour écrire le fil rouge"], answer: "La semaine de répétition"},
            { question: "Comment faire pour ajouter des photos sur un iPhone que l'on souhaite offrir ?", options: ["On branche le téléphone à un ordi et on transfère", "On envoie les photos par mail", "On tente toutes les solutions possibles et on finit par abandonner et à les laisser sur un Drive"], answer: "On tente toutes les solutions possibles et on finit par abandonner et à les laisser sur un Drive"},
            { question: "Lors du week-end de folie à Epoisses en décembre 2021, à quel rôle du loup-garou correspondait le clown ? La ...", answer: "Sorcière"}
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
