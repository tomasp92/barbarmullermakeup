/*window.totalcarrito = 0;
window.totaldeproductos = 0;
window.Carrito =[];
if(localStorage.TotalDeProductosCarrito == null){
    window.totalcarrito = 0;
    window.totaldeproductos = 0;
    window.Carrito = [];
}else{
    //variable que guarda el total de productos en el carrito
    window.totaldeproductos = parseInt(localStorage.TotalDeProductosCarrito);
    // variable que guarda la suma de los precios de esos productos
    window.totalcarrito = parseInt(localStorage.SumaPreciosCarrito);
    // Lista de los productos y sus cantidades
    window.Carrito = JSON.parse(localStorage.ListaCarrito);
    console.log("🚀 ~ window.Carrito", window.Carrito)
}*/

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
        console.log("todavía no agregue al carrito");
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
    console.log("Carrito existe: ", Carrito);
    let productoEnCarrito = Carrito.find(element => element.id == productoid);
    console.log("🚀 ~ productoEnCarrito", productoEnCarrito)
    Carrito.splice(Carrito.indexOf(productoEnCarrito), 1);
    localStorage.setItem("ListaCarrito", JSON.stringify(Carrito));
    totalcarrito = PrecioTotal();
    totaldeproductos = TotalDeProductos();
    DesplegarProductosCarrito(Carrito);
    $('#itemsnum').html(totaldeproductos);

}


function DisplayOneProducto(productoid){
    window.location = "producto.html"+"?prodId=" + productoid;
}
