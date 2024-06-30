// script.js

// Configuration de QuaggaJS
Quagga.init({
    inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#camera-preview'),
        constraints: {
            width: { min: 640 },
            height: { min: 480 },
            facingMode: "environment" // Utiliser la caméra arrière par défaut
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
});

// Événement pour détecter un code QR
Quagga.onDetected(function(result) {
    var code = result.codeResult.code;
    document.getElementById('result').innerHTML = 'QR Code détecté : ' + code;

    // Arrêter Quagga après avoir trouvé un code QR
    Quagga.stop();
});
