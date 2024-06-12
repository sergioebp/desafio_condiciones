resultado = document.querySelector('#resultado')
sol = document.querySelector('#sol')
luna = document.querySelector('#luna')
estrella = document.querySelector('#estrella')

document.querySelector('#verificar').onclick = function() {
    total = (Number(sol.value) + Number(luna.value) + Number(estrella.value));
    if (isNaN(total)) {
        resultado.innerHTML = 'Usa valores válidos'
    }
    else if (sol.value < 0 || luna.value < 0 || estrella.value < 0) {
        resultado.innerHTML = 'No uses números negativos'
    }
    else if (total > 10) {
        resultado.innerHTML = 'Llevas demasiados stickers'
    }
    else {
        resultado.innerHTML = `Llevas ${total} stickers`
    }
}
