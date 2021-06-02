// import totalcarrito from './productos.js'

let divCarrito = document.querySelector('#carrito');
let divShop = document.querySelector('#shop');

function DisplayCarrito(carrito) {
    console.log('carrito: ' + carrito);
    if(carrito > 0){
        divCarrito.style.display = 'block';
        divShop.style.display = 'none';
        document.getElementById("itemsnum").innerHTML = window.totaldeproductos;
    }else{
        divCarrito.style.display = 'none';
        divShop.style.display = 'block';
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
let totaldeproductos = 0;
let totalcarrito = 0;
let Carrito = [];
document.addEventListener('DOMContentLoaded', function() {
    console.log(" addevent" + totaldeproductos)
    DisplayCarrito(totaldeproductos);
    // DisplayCarouselProductosyServicios();
    
    storagevalues = localStorage.Carrito;
    if (storagevalues === null){
        totaldeproductos = 0;
        console.log("🚀 ~ totaldeproductos", totaldeproductos)
        totalcarrito = 0;
        console.log("🚀 ~ totalcarrito", totalcarrito);
        Carrito = [];
        console.log("🚀 ~ Carrito", Carrito);
    }else{
        Carrito = JSON.parse(localStorage.ListaCarrito);
        console.log("total de productos en carrito before function: " + typeof(totaldeproductos)); 
    
    }
    totalcarrito = PrecioTotal();
    totaldeproductos = TotalDeProductos();
});

/* El boton del carrito en el index dirá shop y redirigirte a la pagina de productos 
 si no hay productos en el carrito No esta funcional todavía*/
