// Declarar archivos json
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

// enlazar los datos que vienen del json productos con sus categorías
const agregarCategorias = (Productos, Categorias)=>{
    for (let producto of Productos){
        // En caso de que el producto tenga mas de una categoría:
        if (Array.isArray(producto.Categoría)){
            for(let categoria of producto.Categoría){
                let index = producto.Categoría.indexOf(categoria);
                categoria = Categorias.find(element => element.id === categoria);
                producto.Categoría[index]= categoria.Name;
            }
        // En caso de que el producto tenga una sola categoría:
        } else{
            producto.Categoría = Categorias.find(element => element.id === producto.Categoría)
            producto.Categoría = producto.Categoría.Name
        }
    }
    return Productos;
}

// funcion para sumar la ultima adicción al precio total del carrito
function PrecioTotal(){
    let total = 0;
    Carrito.map(producto => total = total + producto.cantidad * producto.precio);
    return total
}

// funcion para sumar la ultima adicción al total de productos del carrito
function TotalDeProductos(){
    let total = 0;
    Carrito.map(producto => total = total + producto.cantidad)
    $('#itemsnum').html(totaldeproductos);
    return total;
}

// Función para hacer el listado de productos del carrito y guardarlo en local storage
function ListadoCarrito(productoid, page){
    // a partir del id del producto buscamos en el carrito si ese producto ya fue añadido al menos una vez
    let productoEnCarrito = Carrito.find(element => element.id == productoid);
    if(productoEnCarrito === undefined){
        // Si ese producto no está en el carrito: agregamos la variable cantidad=1 al objeto en el carrito
        productoEnCarrito = Object.assign({}, Productos.find(element => element.id == productoid));
        productoEnCarrito.cantidad = 1;
        Carrito.push(productoEnCarrito);
    }else{
        // En caso que ya esté en el carrito le sumamos 1 a la cantidad que se quiere de ese producto
        productoEnCarrito.cantidad ++;
    }
    totalcarrito = totalcarrito + productoEnCarrito.precio;
    localStorage.setItem("ListaCarrito", JSON.stringify(Carrito));
    totalcarrito = PrecioTotal();
    totaldeproductos = TotalDeProductos();
    $('#itemsnum').html(totaldeproductos);
    if (page == 'Index'){
        DisplayCarrito(totaldeproductos);
    }else if (page == 'Carrito'){
        DesplegarProductosCarrito(Carrito);
    }
    
    
}

// Restarle 1 a la cantidad de un producto particular que ya se tiene en el carrito
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

//eliminar un producto del carrito o vaciarlo todo
function EliminarDelCarrito(productoid){
    if(productoid == 'vaciarCarrito' || Carrito.length < 2){
        // Vaciar todo el carrito
        for(producto of Carrito){
            let id = `#producto${producto.id}`;
            $(id).hide(1000);
        }
        Carrito = [];
        setTimeout(function(){
            DesplegarProductosCarrito(Carrito);
        },1001);
    }else{
        // Eliminar un producto del carrito
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

// Desplegar un solo producto redirigiendo a la pagina produto
function DisplayOneProducto(productoid){
    window.location = "producto.html"+"?prodId=" + productoid;
}
