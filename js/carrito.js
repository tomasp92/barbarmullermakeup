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


function DesplegarProductosCarrito(carrito){
    let productosCarrito = document.querySelector('#listadocarrito');
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
                    <div class="modify" onclick="RestarAlCarito(${producto.id});" >-</div><div> ${producto.cantidad}</div> <div class="modify" onclick="ListadoCarrito(${producto.id});">+</div>
                </div>
                <div class="precio">$${producto.precio}</div>
                <svg onclick="EliminarDelCarrito(${producto.id});" class="svg-icon" viewBox="0 0 20 20">
                    <path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
				</svg>
            </div>`;
       
            productosCarrito.appendChild(element);
        }
    }
    if(carrito.length < 1){
        productosCarrito.innerHTML = "No hay productos en el carrito";
        $('#totales').html("<a href='productos.html'>volver a productos</a>");
        $('#itemsnum').html("0");
    } else {
        $('#totales').html(
            `
            <button id='vaciarCarrito'>Vaciar carrito</button>
            <div>
                <p><div>Total: </div><div>$${totalcarrito}</div></p>
            </div>
            <button id='Comprar'>Comprar</button>
            `);
        $('#vaciarCarrito').on('click',()=> EliminarDelCarrito('vaicarCarrito'));
    }

};
    
$(()=> {
    console.log("funcionando");
    DesplegarProductosCarrito(Carrito);
    totalcarrito = PrecioTotal();
    totaldeproductos = TotalDeProductos();
    $('#itemsnum').html(totaldeproductos);
});