    let totaldeproductos = 0;
    let totalcarrito = 0;
    let Carrito = [];

    storagevalues = localStorage.Carrito;
    if (storagevalues === null){
        totaldeproductos = 0;
        console.log("🚀 ~ totaldeproductos storagevalues null", totaldeproductos)
        totalcarrito = 0;
        console.log("🚀 ~ totalcarrito", totalcarrito);
        Carrito = [];
        
    }else{
        Carrito = JSON.parse(localStorage.ListaCarrito);
        console.log("total de productos en carrito before function: " + typeof(totaldeproductos)); 
    
    }
    console.log("🚀 ~ Carrito", Carrito);


function DesplegarProductosCarrito(carrito){
    console.log("🚀 ~ carrito", carrito)
    let productosCarrito = document.querySelector('#listadocarrito');
    if(carrito.length < 1){
        productosCarrito.innerHTML = "No hay productos en el carrito";
        const boton = document.createElement('button');
        boton.innerHTML = "volver a productos";
        productosCarrito.appendChild(boton);
        $('#itemsnum').html("0");
    }
   
    if (carrito.length > 0){
        productosCarrito.innerHTML = "";
        for (let producto of carrito){
            const element = document.createElement('div');
            element.innerHTML = `
            <div class="lado">
                <div class="img"> <img src="${producto.img}" alt="foto del producto ${producto.titulo}"> </div>
                <div class="titulos">
                    <div class="titulo">${producto.titulo}</div>
                    <div class="subtitulo">${producto.subtitulo}</div>
                </div>
            </div>
            <div class="lado">
                <div class="cantidad">
                    <div>-</div><div> ${producto.cantidad}</div> <div onclick="ListadoCarrito(${producto.id});">+</div>
                </div>
                <div class="precio">$${producto.precio}</div>
                <div onclick="EliminarDelCarrito(${producto.id});">X</div>
            </div>`;
       
            productosCarrito.appendChild(element);
        }
    }
    // else{
    //     productosCarrito.innerHTML = "";
    //     productosCarrito.innerHTML = `<button onclick="ListadoCarrito(${producto.id});">Añadir al Carrito</button>
    //         <div class="precio">$${producto.precio}</div>
    //         <div class="categoria">${producto.Categoría}</div>
    //         <div> <img src="${producto.img}" alt="foto del producto ${producto.titulo}"> </div>
    //         <div class="subtitulo">${producto.subtitulo}</div>
    //         <div class="titulo">${producto.titulo}</div>`;  
    // }

};
    
$(()=> {
    console.log("funcionando");
    DesplegarProductosCarrito(Carrito);
    totalcarrito = PrecioTotal();
    totaldeproductos = TotalDeProductos();
    $('#itemsnum').html(totaldeproductos);
});