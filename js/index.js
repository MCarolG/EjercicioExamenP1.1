function suma() {
    let a = parseInt(document.getElementById('prod1').value)
    let b = parseInt(document.getElementById('prod2').value)
    let c = parseInt(document.getElementById('prod3').value)
    let d = parseInt(document.getElementById('prod4').value)
    let e = parseInt(document.getElementById('prod5').value)

    if (isNaN(a)) {
        Swal.fire('Número 1 en blanco')
    } else if(isNaN(b)) {
        Swal.fire('Número 2 en blanco')
    } else if(isNaN(c)) {
        Swal.fire('Número 3 en blanco')
    } else if(isNaN(d)) {
        Swal.fire('Número 4 en blanco')
    } else if(isNaN(e)) {
        Swal.fire('Número 5 en blanco')
    } else {
        let suma = a + b + c + d + e;
        document.getElementById('x1').value = suma
    }
}

function limpiar() {
    document.getElementById('prod1').value = ''
    document.getElementById('prod2').value = ''
    document.getElementById('prod3').value = ''
    document.getElementById('prod4').value = ''
    document.getElementById('prod5').value = ''
    document.getElementById('x1').value = ''
    document.getElementById('x2').value = ''
    document.getElementById('x3').value = ''
}

//function error(text) {
//Swal.fire({
//icon: "error",
//title: "Tienes un descuento",
//text: text
//});
//}