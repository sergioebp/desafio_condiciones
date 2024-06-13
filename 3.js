num1 = document.querySelector('#num1')
num2 = document.querySelector('#num2')
num3 = document.querySelector('#num3')
resultado = document.querySelector('#resultado')

document.querySelector('#ingresar').onclick = function() {
    if (num1.value == 9 && num2.value == 1 && num3.value == 1) {
        resultado.innerHTML = 'password 1 es correcto'
    }
    else if (num1.value == 7 && num2.value == 1 && num3.value == 4){
        resultado.innerHTML = 'password 2 es correcto'
    }
    else {
        resultado.innerHTML = 'password incorrecto'
    }
}