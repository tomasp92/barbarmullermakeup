// import totalcarrito from './productos.js'

let divCarrito = document.querySelector('#carrito');
let divShop = document.querySelector('#shop');

function DisplayCarrito(carrito) {
    if(carrito > 0){
        divCarrito.style.display = 'block';
        divShop.style.display = 'none';
        $('#itemsnum').html(totaldeproductos);
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
let storagevalues = localStorage.Carrito;

// function scroll(e, scrollTo){
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: $(scrollTo).offser().top
//     },2000);
// }


$(()=>  {
   
    // DisplayCarouselProductosyServicios();    
    if (storagevalues === null){
        totaldeproductos = 0;
        totalcarrito = 0;
        Carrito = [];
        
    }else{
        Carrito = JSON.parse(localStorage.ListaCarrito);
    }
    totalcarrito = PrecioTotal();
    totaldeproductos = TotalDeProductos();
    DisplayCarrito(totaldeproductos);
});

/* El boton del carrito en el index dirá shop y redirigirte a la pagina de productos 
 si no hay productos en el carrito No esta funcional todavía*/
