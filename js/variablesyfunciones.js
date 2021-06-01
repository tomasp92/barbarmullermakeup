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
function SumRestToCart(operacion){
    if (operacion == "suma"){
        totaldeproductos ++;
    }else if(operacion == "resta"){
        totaldeproductos --;
    }
    document.getElementById("itemsnum").innerHTML = totaldeproductos;
    console.log("🚀 ~ totaldeproductos", totaldeproductos)
    
    localStorage.setItem("TotalDeProductosCarrito", totaldeproductos);
    console.log("total de productos en carrito: " + totaldeproductos);
}

// Función para hacer el listado de productos del carrito
function ListadoCarrito(productoid){
    let productoEnCarrito;
    console.log("🚀 ~ Carrito f", Carrito.length)
    if (Carrito.length > 0){
       
        console.log("Carrito: " + Carrito.length)
        if(Carrito.lenght > 1){
            productoEnCarrito = Carrito.find(element => element.id == productoid);
        }
        else if(Carrito[0].id == productoid){
            productoEnCarrito = Carrito[0];
        }
        
    }
    
    if(productoEnCarrito === undefined){
        console.log("todavía no agregue al carrito");
        productoEnCarrito = Object.assign({}, Productos.find(element => element.id == productoid));
        productoEnCarrito.cantidad = 1;
        Carrito.push(productoEnCarrito);
    }else{
        productoEnCarrito.cantidad ++;
    }
    totalcarrito = totalcarrito + productoEnCarrito.precio;
    localStorage.setItem("SumaPreciosCarrito", totalcarrito);
    localStorage.setItem("ListaCarrito", JSON.stringify(Carrito));
    SumRestToCart('suma');
}

function EliminarDelCarrito(productoid){
    console.log("Carrito existe: ", Carrito);
    let productoEnCarrito = Carrito.find(element => element.id == productoid);
    console.log("🚀 ~ productoEnCarrito", productoEnCarrito)
    Carrito.splice(Carrito.indexOf(productoEnCarrito), 1);
    localStorage.setItem("SumaPreciosCarrito", totalcarrito);
    localStorage.setItem("ListaCarrito", JSON.stringify(Carrito));
    DesplegarProductosCarrito(Carrito);

}
