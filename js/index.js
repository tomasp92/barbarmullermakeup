// import totalcarrito from './productos.js'
const datosDeContacto = [];
document.addEventListener('DOMContentLoaded', function() {
    let totalcarrito = 0;
    DisplayCarrito(totalcarrito);
});
function SolicitarDatosDeContacto(){
    let aceptado = false;
    do{
        alert("¿Te gustaría saber mas de nosotros? dejanos tus datos para que podamos contactarte")
        datosDeContacto[0] = prompt("Nombre: ");
        datosDeContacto[1] = prompt("Apellido: ");
        datosDeContacto[2] = prompt("Un mail: ");
        datosDeContacto[3] = prompt("Un telefono: ");
        console.log(datosDeContacto);
        acepta = prompt (`Nombre y Apellido: ${datosDeContacto[0]} ${datosDeContacto[1]}, Mail: ${datosDeContacto[2]}, Teléfono: ${datosDeContacto[0]} ¿Estos son tus datos de contacto? en caso de confirmar escribe si, en caso de querer editarlos acepta sin escribir si`)
        console.log(acepta)
        if(acepta == "si"){
            aceptado = true;
        }
    } while (!aceptado);
    

}

/* El boton del carrito en el index dirá shop y redirigirte a la pagina de productos 
 si no hay productos en el carrito No esta funcional todavía*/
function DisplayCarrito(carrito) {
    console.log(carrito);
    if(carrito == 0){
        console.log(carrito);
        document.querySelector('#carrito').style.display = 'none';
        document.querySelector('#shop').style.display = 'block';
    }else{
        document.querySelector('#carrito').style.display = 'block';
        document.querySelector('#shop').style.display = 'none';
    }
}