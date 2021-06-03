$('#menor').on('click',()=> Order(Productos, "menor"));
$('#mayor').on('click',()=> Order(Productos, "mayor"));
$('#porCategorias').on('click',()=> Order(Productos, "Categorias"));

// Función para desplegar los productos en la pagina
function DisplayProductos(productos){
    let listadoProductos = document.querySelector('#listadoproductos');
    listadoProductos.innerHTML = "";

    for (let producto of productos){
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
            
            element.innerHTML = `<button onclick="ListadoCarrito(${producto.id});">Añadir al Carrito</button>
            <div class="precio">$${producto.precio}</div>
            ${VariasCategorias}
            <div> <img src="${producto.img}" alt="foto del producto ${producto.titulo}"> </div>
            <div class="subtitulo">${producto.subtitulo}</div>
            <div class="titulo">${producto.titulo}</div>`;
        }else{
            element.innerHTML = `<button onclick="ListadoCarrito(${producto.id});">Añadir al Carrito</button>
            <div class="precio">$${producto.precio}</div>
            <div class="categoria">${producto.Categoría}</div>
            <div> <img src="${producto.img}" alt="foto del producto ${producto.titulo}"> </div>
            <div class="subtitulo">${producto.subtitulo}</div>
            <div class="titulo">${producto.titulo}</div>`;
        }
        
        listadoProductos.appendChild(element);
    }
} 


function Order(productos, tipo) {
    productos.sort(function (a,b) {
        
        if(a.precio > b.precio && tipo == "menor"){
            return 1;
        }else if(a.precio < b.precio && tipo == "menor"){
                return -1;
        }else if(a.precio == b.precio && tipo == "menor"){
                return 0;
        } else if(a.precio > b.precio && tipo == "mayor"){
            return -1;
        }else if(a.precio < b.precio && tipo == "mayor"){
                return 1;
        }else if(a.precio == b.precio && tipo == "mayor"){
                return 0;
        } else if(a.id > b.id){
            return 1;
        }else if(a.id < b.id ){
            return -1;
        }else {
            return 0;
        }
          
    });
    DisplayProductos(productos);
    return productos;
 }

 function Filter(categoria){
     let productosCategoria = Productos;
    if (categoria != "Todos"){
        productosCategoria = Productos.filter(elemento=> {
            if (elemento.Categoría == categoria){
                return elemento
            } else if(Array.isArray(elemento.Categoría)){
                found = elemento.Categoría.find(element => element == categoria);
                if(found != undefined){
                    return found
                }
            }
            });
    }
    DisplayProductos(productosCategoria);
 }
 
function DesplegableCategorias(){
    for (let Categoria of Categorias){
        $('#opcionesCategorias').append(`<p><button class="categoria" onclick="Filter('${Categoria}');" >${Categoria}</button></p>`);
    }
}

let totaldeproductos = 0;
let totalcarrito = 0;
let Carrito = [];

$(()=>  {
    DisplayProductos(Productos);
    DesplegableCategorias();
    storagevalues = localStorage.Carrito;
 
    if (storagevalues === null){
        totaldeproductos = 0;
        console.log("🚀 ~ totaldeproductos", totaldeproductos)
        totalcarrito = 0;
        console.log("🚀 ~ totalcarrito", totalcarrito);
        Carrito = [];
        console.log("🚀 ~ Carrito", Carrito);
    }else{
        Carrito = JSON.parse(localStorage.ListaCarrito);
    }
    totalcarrito = PrecioTotal();
    totaldeproductos = TotalDeProductos();
    
    $('#itemsnum').html(totaldeproductos);
});






// export const totalcarrito = 'totalcarrito';