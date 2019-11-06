/* arreglo de imagenes */
var imagenes = ['img/reconocimiento/certificado_1.jpg', 'img/reconocimiento/certificado_2.jpg'];

var imagen = document.getElementById('imagen');
/* botones */
var adelante = document.getElementById('adelante');
var atras = document.getElementById('atras');
var cont = 0;
var limite = 1;
/* var btn = document.getElementsByClassName('btn'); */
function movimiento() {
    console.log('hola');
    if (adelante.id == 'adelante') {
        if (cont < limite) {
            cont = cont + 1;
        } else {
            cont = 0;
        }
    }
    if (atras == 'atras') {
        if (cont > 0) {
            cont = cont - 1;
        } else { cont = limite }
    }
    /* este codigo si es loco */
    imagen.src=imagenes[cont];
}
adelante.addEventListener('click', movimiento);
atras.addEventListener('click', movimiento);