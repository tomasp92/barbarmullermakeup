
//función que obtiene un parametro en la Url
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Función para mostrar el producto elegido en la pagina
function ShowProducto(){
    // Función que obtiene el parametro prodId de la url
    idproducto = getParameterByName('prodId');
    producto = Productos.find(element => element.id == idproducto);
    const element = document.createElement('div');
        if(Array.isArray(producto.Categoría)){
            let VariasCategorias = document.createElement('div');
            VariasCategorias.setAttribute("id", "VariasCategorias");
            
            for (let cate of producto.Categoría){
                const cat = document.createElement('div');
                cat.className = "categoria";
                cat.innerHTML = cate;
                VariasCategorias.appendChild(cat);
            }
            VariasCategorias = VariasCategorias.outerHTML
            
            element.innerHTML = ` 
             <div class="row1">
                <div> 
                    <img src="${producto.img}" alt="foto del producto ${producto.titulo}"> 
                </div>
                <div class="column2">
                    <div class="titulo">${producto.titulo}</div>
                    <div class="subtitulo">${producto.subtitulo}</div>
                    ${VariasCategorias}
                    <button onclick="ListadoCarrito(${producto.id});">Añadir al Carrito</button>
                    <div class="precio">$${producto.precio}</div>
                </div>
            </div>
            <div class="row2">
                <div>${producto.descripción}</div>
                <div>${producto.otraInfo}</div>
                <div>${producto.modoDeUso}</div>
            </div>
            `;
        }else{
            element.innerHTML = `
            <div class="row1">
                <div> 
                    <img src="${producto.img}" alt="foto del producto ${producto.titulo}"> 
                </div>
                <div class="column2">
                    <div class="titulo">${producto.titulo}</div>
                    <div class="subtitulo">${producto.subtitulo}</div>
                    <div class="categoria">${producto.Categoría}</div>
                    <button onclick="ListadoCarrito(${producto.id});">Añadir al Carrito</button>
                    <div class="precio">$${producto.precio}</div>
                </div>
            </div>
            <div class="row2">
                <div>${producto.descripción}</div>
                <div>${producto.otraInfo}</div>
                <div>${producto.modoDeUso}</div>
            </div>
            `;
        }
    
    $('#producto').html(element);
} 

$(()=> ShowProducto());