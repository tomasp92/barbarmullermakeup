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
    // let id = `#productoN${productoid}`;
    // let animacion = document.getElementById(id).cloneNode(true);
    //         console.log(id)
    //         $(animacion).css("height","200px", "width", "100px")
    //              .css("position", "absolute","right","0px")
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
    if(productoid == 'vaciarCarrito' || Carrito.length < 2){
        for(producto of Carrito){
            let id = `#producto${producto.id}`;
            console.log(id)
            $(id).hide(1000);
        }
        Carrito = [];
        setTimeout(function(){
            DesplegarProductosCarrito(Carrito);
        },1001);
        
    }else{
        let id = `#producto${productoid}`;
        $(id).slideUp(1000);
        let productoEnCarrito = Carrito.find(element => element.id == productoid);
        console.log("🚀 ~ productoEnCarrito", productoEnCarrito)
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
