const enviarButton = document.getElementById('enviar');
const caixa = document.getElementById('frase');
const icone = document.getElementById('icone');


enviarButton.addEventListener('click', function() {
    caixa.style.visibility = 'visible';
})

icone.addEventListener('click', function() {
    caixa.style.visibility = 'hidden';
})