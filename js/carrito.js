    let totaldeproductos = 0;
    let totalcarrito = 0;
    let Carrito = [];
    let text = [];
    let link = "https://api.whatsapp.com/send?phone=+5491150575667&text=Hola%20Barbara,%20quiero%20coordinar%20para%20hacer%20una%20compra%20de%20los%20siguientes%20productos:%20"
    storagevalues = localStorage.Carrito;
    if (storagevalues === null){
        totaldeproductos = 0;
        totalcarrito = 0;
        Carrito = [];
        
    }else{
        Carrito = JSON.parse(localStorage.ListaCarrito);
    }

    const finalizarCompra = () => {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        window.location = link + text.replace(' ', '%20');
    };
    
    // Función Comprar para llenar formulario con los datos.
    function Comprar(costoTotal) {
        let counter = 1;
        for (let producto of Carrito){
        node = ` ${counter}) ${producto.titulo}, Cantidad: ${producto.cantidad};` ;
        text = text + node
        $('#textCompra').append(`<p>${node}</p>`);
        counter += 1;
    }
    text = text.replace(/;*\s*$/, '.');
    console.log('text: ', text)
    $('#checkout').css('display', 'block');
    $('#listadocarrito').html('');
    $('#totales').html("");
 }
// Función que despliega todos los productos del carrito en caso de haber y sino devuelve otra vista
function DesplegarProductosCarrito(carrito){
    let productosCarrito = document.querySelector('#listadocarrito');

    if (carrito.length > 0){
        // En caso de que existan productos en el carrito los muestra
        productosCarrito.innerHTML = "";
        for (let producto of carrito){
            const element = document.createElement('div');
            element.setAttribute("id", `producto${producto.id}`);
            element.innerHTML = `
            <div class="lado izq">
                <div class="img"> <img src="${producto.img}" alt="foto del producto ${producto.titulo}"> </div>
                <div class="titulos">
                    <div class="titulo">${producto.titulo}</div>
                    <div class="subtitulo">${producto.subtitulo}</div>
                </div>
            </div>
            <div class="lado der">
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
        // Si no hay productos al carrito lo informa al usuario y le da la opción de ir a comprar
        productosCarrito.innerHTML = "No hay productos en el carrito";
        $('#totales').html("<a href='productos.html'>volver a productos</a>");
        $('#itemsnum').html("0");
    } else {
        $('#totales').html(
            `
            <button id='vaciarCarrito'>Vaciar carrito</button>
            <div id="preciototal" >
                <p ><div>Total: $</div><div id="total"> ${totalcarrito}</div></p>
            </div>
            <button onclick="Comprar(${totalcarrito});" id='Comprar'>Comprar</button>
            `);
        $('#vaciarCarrito').on('click',()=> EliminarDelCarrito('vaciarCarrito'));
    }

};
    
$(()=> {
    $('#checkout').css('display', 'none');
    totaldeproductos = TotalDeProductos();
    $('#itemsnum').html(totaldeproductos);
    totalcarrito = PrecioTotal();
    DesplegarProductosCarrito(Carrito);
});