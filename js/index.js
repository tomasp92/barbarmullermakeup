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
// carousels con productos y servicios
function DisplayCarousel(items, itemTipe){
    counterItem = 0;
    for (let item of items){
        let carouselItem = document.createElement('div');
        card = ` 
        <div class="carouselCard">  
            <div onclick="DisplayOneProducto(${item.id});"> 
                <img  src="${item.img}" alt="${item.titulo}"> 
            </div>
            <div class="tituloIndex titulo" onclick="DisplayOneProducto(${item.id});">${item.titulo}</div>
            <div class="subtituloIndex subtitulo" onclick="DisplayOneProducto(${item.id});">${item.subtitulo}</div>
            <div class="categoriaIndex categoria" onclick="DisplayOneProducto(${item.id});">${item.Categoría}</div>
            <div class="precioIndex precio" onclick="DisplayOneProducto(${item.id});">$${item.precio}</div>
            <button onclick="ListadoCarrito(${item.id}, 'Index');">Añadir al Carrito</button>
        </div>
        `;
        if(counterItem < 1){
            $(`#firstItem${itemTipe}`).html(card)
        }else {
            carouselItem.className = 'carousel-item';
            carouselItem.innerHTML = card;
            $(`#carouselInner${itemTipe}`).append(carouselItem)
        }
            counterItem ++;
    }
}
let totaldeproductos = 0;
let totalcarrito = 0;
let Carrito = [];
let storagevalues = localStorage.Carrito;
let Productos;
$(async ()=>  {
    const Categorias = await getCategories();
    let ProductosyServicios = await getProducts();
    ProductosyServicios = agregarCategorias(ProductosyServicios, Categorias)
    Productos = ProductosyServicios;
    let [productos, servicios] = SeparateProductosSercicios(ProductosyServicios)
    DisplayCarousel(servicios, 'Servicios');
    DisplayCarousel(productos, 'Productos');
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