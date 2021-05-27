function DesplegarProductosCarrito(carrito){
    if(carrito.length){
        console.log("🚀 ~ carrito", carrito)
        let productosCarrito = document.querySelector('#listadocarrito');
        productosCarrito.innerHTML = "";
        if (carrito.length >1){
            for (let producto of carrito){
                const element = document.createElement('div');
                
                element.innerHTML = `<button onclick="ListadoCarrito(${producto.id});">Añadir al Carrito</button>
                <div class="precio">$${producto.precio}</div>
                <div class="categoria">${producto.Categoría}</div>
                <div> <img src="${producto.img}" alt="foto del producto ${producto.titulo}"> </div>
                <div class="subtitulo">${producto.subtitulo}</div>
                <div class="titulo">${producto.titulo}</div>`;
                
                productosCarrito.appendChild(element);
            }
        }else{
            productosCarrito.innerHTML = `<button onclick="ListadoCarrito(${producto.id});">Añadir al Carrito</button>
                <div class="precio">$${producto.precio}</div>
                <div class="categoria">${producto.Categoría}</div>
                <div> <img src="${producto.img}" alt="foto del producto ${producto.titulo}"> </div>
                <div class="subtitulo">${producto.subtitulo}</div>
                <div class="titulo">${producto.titulo}</div>`;  
        }
        
    }else{
        console.log("No hay productos en el carrito");
    };
};
document.addEventListener('DOMContentLoaded', function() {
    DesplegarProductosCarrito(window.Carrito);
    SumRestToCart("");
});