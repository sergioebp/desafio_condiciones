imagen = document.querySelector('img')

imagen.onclick = function() {
    if (imagen.style.borderWidth == '0px') {
        imagen.style.borderWidth = '2px'
    } else {
        imagen.style.borderWidth = 0
    }
};