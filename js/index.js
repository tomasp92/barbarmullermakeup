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

function SeparateProductosSercicios(productos){
    let Productos = [];
    let Servicios = [];
    for (producto of productos){
      if (producto.Categoría != 'Servicios'){
            Productos.push(producto);
        }else{
            Servicios.push(producto);
        }
    }
    return [Productos,Servicios]
}


function DisplayCarouselProductos(){}
// carousels con productos y servicios
function DisplayCarouselServicios(servicios){
    counterServicios = 0;
    for (let servicio of servicios){
        let carouselItem = document.createElement('div');
        card = ` 
        <div class="carouselCard">  
            <div onclick="DisplayOneProducto(${servicio.id});"> 
                <img  src="${servicio.img}" alt="${servicio.titulo}"> 
            </div>
            <div class="tituloIndex titulo" onclick="DisplayOneProducto(${servicio.id});">${servicio.titulo}</div>
            <div class="subtituloIndex subtitulo" onclick="DisplayOneProducto(${servicio.id});">${servicio.subtitulo}</div>
            <div class="categoriaIndex categoria" onclick="DisplayOneProducto(${servicio.id});">${servicio.Categoría}</div>
            <div class="precioIndex precio" onclick="DisplayOneProducto(${servicio.id});">$${servicio.precio}</div>
            <button onclick="ListadoCarrito(${servicio.id});">Añadir al Carrito</button>
        </div>
        `;
        if(counterServicios < 1){
            $('#firstItemServicios').html(card)
        }else {
            carouselItem.className = 'carousel-item';
            carouselItem.innerHTML = card;
            $('#carouselInnerServicios').append(carouselItem)
        }
            counterServicios ++;
    }
}

let totaldeproductos = 0;
let totalcarrito = 0;
let Carrito = [];
let storagevalues = localStorage.Carrito;

$(async ()=>  {
    const Categorias = await getCategories();
    let ProductosyServicios = await getProducts();
    ProductosyServicios = agregarCategorias(ProductosyServicios, Categorias)
    let [Productos, Servicios] = SeparateProductosSercicios(ProductosyServicios)
    DisplayCarouselServicios(Servicios);
    
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