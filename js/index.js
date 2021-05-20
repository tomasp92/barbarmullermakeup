// import totalcarrito from './productos.js'
let botonFormulario = document.getElementById("SolicitarDatosDeContacto");
botonFormulario.addEventListener("click", SoalicitarDatosDeContacto);



class Contacto{
    constructor(nombre, mail, telefono, mensaje){
        this.nombre = nombre;
        this.mail = mail;
        this.telefono = telefono;
        this.mensaje = mensaje;
        
    }
    Acepta(){
        let acepta = prompt (`Nombre y Apellido: ${this.nombre}, Mail: ${this.mail}, 
        Teléfono: ${this.telefono} Mensaje: ${this.mensaje} ¿Estos son tus datos de contacto? ¿Es este el mensaje que desea enviar?
        en caso de confirmar escribe si, en caso contrario escribe no y vuelve a enviar el formulario con los datos correctos`);
        return acepta;
    }

};


document.addEventListener('DOMContentLoaded', function() {
    let totalcarrito = 0;
    DisplayCarrito(totalcarrito);
    DisplayCarouselProductosyServicios();
});



function SolicitarDatosDeContacto(){
    nombre = document.getElementById("nombre").value;
    mail = document.getElementById("InputEmail").value;
    tel = document.getElementById("tel").value;
    mensaje = document.getElementById("mensaje").value;
    
    const datosDeContacto = new Contacto(nombre, mail, tel, mensaje);


    acepta = datosDeContacto.Acepta();

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