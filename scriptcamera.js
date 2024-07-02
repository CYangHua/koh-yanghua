document.getElementById('start-camera').addEventListener('click', function() {
    var video = document.getElementById('camera-preview');

    // Vérifier si le navigateur prend en charge l'accès à la caméra via WebRTC
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Options de contraintes pour la caméra
        var constraints = {
            video: { facingMode: 'environment' } // Utiliser la caméra arrière par défaut
        };

        // Demander l'accès à la caméra
        navigator.mediaDevices.getUserMedia(constraints)
            .then(function(stream) {
                video.srcObject = stream; // Assigner le flux vidéo au <video> element
                video.style.display = 'block'; // Afficher le flux vidéo
                document.getElementById('result').innerText = 'Scannez un QR code...';
                console.log("Caméra démarrée avec succès !");

                // Initialiser QuaggaJS avec le flux vidéo
                Quagga.init({
                    inputStream: {
                        name: "Live",
                        type: "LiveStream",
                        target: video, // or document.querySelector('#yourElement')
                        constraints: {
                            width: { min: 640 },
                            height: { min: 480 },
                            aspectRatio: { min: 1, max: 100 },
                            facingMode: "environment" // ou "user" pour la caméra frontale
                        }
                    },
                    decoder: {
                        readers: ["qrcode_reader"] // Lecteur QR code
                    }
                }, function(err) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    console.log("QuaggaJS prêt à démarrer le scan des QR codes!");

                    Quagga.start();

                    // Ajouter un écouteur pour les résultats de scan
                    Quagga.onDetected(function(data) {
                        console.log("QR Code détecté : ", data);
                        document.getElementById('result').innerText = "QR Code détecté : " + data.codeResult.code;
                        Quagga.stop(); // Arrêter le scan après détection
                    });
                });

            })
            .catch(function(err) {
                console.error("Erreur lors de l'accès à la caméra :", err);
                document.getElementById('result').innerText = "Erreur lors de l'accès à la caméra";
            });
    } else {
        console.error("Le navigateur ne supporte pas l'accès à la caméra via getUserMedia !");
        document.getElementById('result').innerText = "Accès à la caméra non supporté par votre navigateur";
    }
});
