// import totalcarrito from './productos.js'
class Contacto{
    constructor(nombre, apellido, mail, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.telefono = telefono;
        
    }
    Acepta(){
        let acepta = prompt (`Nombre y Apellido: ${this.nombre} ${this.apellido}, Mail: ${this.mail}, 
        Teléfono: ${this.telefono} ¿Estos son tus datos de contacto? 
        en caso de confirmar escribe si, en caso de querer 
        editarlos acepta sin escribir si`);
        return acepta;
    }

};


document.addEventListener('DOMContentLoaded', function() {
    let totalcarrito = 0;
    DisplayCarrito(totalcarrito);
    DisplayCarouselProductosyServicios();
});
function SolicitarDatosDeContacto(){
    let aceptado = false;
    do{
        alert("¿Te gustaría saber mas de nosotros? dejanos tus datos para que podamos contactarte");
        
        nombre = prompt("Nombre: ");
        apellido = prompt("Apellido: ");
        mail = prompt("Un mail: ");
        tel = prompt("Un telefono: ");
        const datosDeContacto = new Contacto(nombre, apellido, mail, tel);
        console.log(datosDeContacto);
        acepta = datosDeContacto.Acepta;
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

// carousels con productos y servicios
function DisplayCarouselProductosyServicios(){
    // let productos = fs.readFileSync('productos.json', 'utf8');
    // productos = JSON.parse(productos);
    counterProductos = 0;
    counterServicios = 0;
    for (let producto of productos){
        console.log(producto);
        const element = document.createElement('div');
        element.innerHTML = `<button onclick="ListadoCarrito(${producto.precio});">Añadir al Carrito</button>
        <div class="precio">$${producto.precio}</div>
        <div class="categoria">${producto.Categoría}</div>
        <div> <img src="${producto.img}" alt="foto del producto ${producto.titulo}"> </div>
        <div class="subtitulo">${producto.subtitulo}</div>
        <div class="titulo">${producto.titulo}</div>`;
        if (producto.Categoría != 'Servicios'){
            document.querySelector('#carouselproductos').appendChild(element);
            counterProductos ++;
        }else{
            document.querySelector('#carouselservicios').appendChild(element);
            counterServicios ++;
        }
        
    }
} 