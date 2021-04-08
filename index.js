// funcion para sumar al total de productos del carrito
var totaldeproductos = 0;

function SumToCart(){
    totaldeproductos = totaldeproductos + 1;
    document.getElementById("itemsnum").innerHTML = totaldeproductos;
    console.log("total de productos: " + totaldeproductos)
}
