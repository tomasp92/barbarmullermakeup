const categoriasJson = 'js/categorias.json'
const productosJson = 'js/productos.json'
const getProducts = async ()=>{
    return await ($.getJSON(productosJson, (respuesta, estado)=>{
        if(estado === 'success'){
            const misDatos = respuesta;
            const Productos = misDatos;
            return Productos
        }
    }))
}

const getCategories = async ()=>{
    return await ($.getJSON(categoriasJson, (respuesta, estado)=>{
        if(estado === 'success'){
            const Categorias = respuesta;
            return Categorias
        }
    }))
}

const agregarCategorias = (Productos, Categorias)=>{
    for (let producto of Productos){
        if (Array.isArray(producto.Categoría)){
            for(let categoria of producto.Categoría){
                let index = producto.Categoría.indexOf(categoria);
                categoria = Categorias.find(element => element.id === categoria);
                producto.Categoría[index]= categoria.Name;
            }
        } else{
            producto.Categoría = Categorias.find(element => element.id === producto.Categoría)
            producto.Categoría = producto.Categoría.Name
        }
    }
    return Productos;
}
// funcion para sumar al total de productos del carrito
function PrecioTotal(){
    let total = 0;
    Carrito.map(producto => total = total + producto.cantidad * producto.precio);
    return total
}
function TotalDeProductos(){
    let total = 0;
    Carrito.map(producto => total = total + producto.cantidad)
    $('#itemsnum').html(totaldeproductos);
    return total;
}

// Función para hacer el listado de productos del carrito
function ListadoCarrito(productoid){
    let productoEnCarrito = Carrito.find(element => element.id == productoid);
    if(productoEnCarrito === undefined){
        productoEnCarrito = Object.assign({}, Productos.find(element => element.id == productoid));
        productoEnCarrito.cantidad = 1;
        Carrito.push(productoEnCarrito);
    }else{
        productoEnCarrito.cantidad ++;
    }
    totalcarrito = totalcarrito + productoEnCarrito.precio;
    localStorage.setItem("ListaCarrito", JSON.stringify(Carrito));
    totalcarrito = PrecioTotal();
    totaldeproductos = TotalDeProductos();
    $('#itemsnum').html(totaldeproductos);
    DesplegarProductosCarrito(Carrito);
}

function RestarAlCarito(productoid){
    let productoEnCarrito = Carrito.find(element => element.id == productoid);
    if (productoEnCarrito.cantidad > 1){
        productoEnCarrito.cantidad --;
        localStorage.setItem("ListaCarrito", JSON.stringify(Carrito));
        totalcarrito = PrecioTotal();
        totaldeproductos = TotalDeProductos();
        $('#itemsnum').html(totaldeproductos);
        DesplegarProductosCarrito(Carrito);
    }
}

function EliminarDelCarrito(productoid){
    if(productoid == 'vaciarCarrito' || Carrito.length < 2){
        for(producto of Carrito){
            let id = `#producto${producto.id}`;
            $(id).hide(1000);
        }
        Carrito = [];
        setTimeout(function(){
            DesplegarProductosCarrito(Carrito);
        },1001);
        
    }else{
        let id = `#producto${productoid}`;
        $(id).animate({opacity: '0',},'slow')
        .slideUp(800);
        let productoEnCarrito = Carrito.find(element => element.id == productoid);
        Carrito.splice(Carrito.indexOf(productoEnCarrito), 1);
    }
    localStorage.setItem("ListaCarrito", JSON.stringify(Carrito));
    totalcarrito = PrecioTotal();
    totaldeproductos = TotalDeProductos();

    
    $('#itemsnum').html(totaldeproductos);

}

function DisplayOneProducto(productoid){
    window.location = "producto.html"+"?prodId=" + productoid;
}
