// Función para desplegar los productos en la pagina
function DisplayProductos(productos){
    let listadoProductos = document.querySelector('#listadoproductos');
    listadoProductos.innerHTML = "";

    for (let producto of productos){
        const element = document.createElement('div');
        element.setAttribute("id", `productoN${producto.id}`);
        
        if(Array.isArray(producto.Categoría)){
            // cuando hay varias categorías será necesario iterar sobre las mismas para crear sus elementos html
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
            <button onclick="ListadoCarrito(${producto.id});">Añadir al Carrito</button>
            <div class="precio" onclick="DisplayOneProducto(${producto.id});">$${producto.precio}</div>
            ${VariasCategorias}
            <div onclick="DisplayOneProducto(${producto.id});"> <img src="${producto.img}" alt="foto del producto ${producto.titulo}"> </div>
            <div class="subtitulo" onclick="DisplayOneProducto(${producto.id});">${producto.subtitulo}</div>
            <div class="titulo" onclick="DisplayOneProducto(${producto.id});">${producto.titulo}</div>`;
        }else{
            element.innerHTML = `<button onclick="ListadoCarrito(${producto.id});">Añadir al Carrito</button>
            <div class="precio" onclick="DisplayOneProducto(${producto.id});">$${producto.precio}</div>
            <div class="categoria">${producto.Categoría}</div>
            <div onclick="DisplayOneProducto(${producto.id});"> <img src="${producto.img}" alt="foto del producto ${producto.titulo}"> </div>
            <div class="subtitulo" onclick="DisplayOneProducto(${producto.id});">${producto.subtitulo}</div>
            <div class="titulo" onclick="DisplayOneProducto(${producto.id});">${producto.titulo}</div>`;
        }
        
        listadoProductos.appendChild(element);
    }
} 

// El desplegable para seleccionar como estarán ordenados los productos de la pagina derivara a la función order con la condición que el usuario eligió
$("#selectOrder").on("change", (e) => { 
    const selected = $( "#selectOrder option:selected" ).text();
    Order(Productos, selected);
})

// Función para dar un orden a los productos
function Order(productos, tipo) {
    
    productos.sort(function (a,b) {
        if(a.precio > b.precio && tipo == " Menor precio"){
            return 1;
        }else if(a.precio < b.precio && tipo == " Menor precio"){
                return -1;
        }else if(a.precio == b.precio && tipo == " Menor precio"){
                return 0;
        } else if(a.precio > b.precio && tipo == " Mayor precio"){
            return -1;
        }else if(a.precio < b.precio && tipo == " Mayor precio"){
                return 1;
        }else if(a.precio == b.precio && tipo == " Mayor precio"){
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

 
// funcion para mostrar las opciones del desplegable de categorias que luego derivara a la funcion Filter con la condición de la categoría elegida
function DesplegableCategorias(categorias){
    for (let Categoria of categorias){
        $('#opcionesCategorias').append(` <option id="${Categoria.Name}" value="${Categoria.Name}">${Categoria.Name}</option>`);
    }
    $('#opcionesCategorias').append(` <option selected d="Todas" value="Todas">Todas</option>`);
    $("#opcionesCategorias").on("change", (e) => { 
        const selected = $( "#opcionesCategorias option:selected" ).text();
        Filter(selected);
    })
}

 // Función para dar filtrar los productos por categorias
 function Filter(categoria){
    let productosCategoria = Productos;
    if (categoria != "Todas"){
        console.log("true")
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

let totaldeproductos = 0;
let totalcarrito = 0;
let Carrito = [];
let Productos;
$(async ()=>  {
    const Categorias = await getCategories();
    DesplegableCategorias(Categorias);
    Productos = await getProducts();
    Productos = agregarCategorias(Productos, Categorias);
    
    DisplayProductos(Productos);

    storagevalues = localStorage.Carrito;
 
    if (storagevalues === null){
        totaldeproductos = 0;
        totalcarrito = 0;
        Carrito = [];
    }else{
        Carrito = JSON.parse(localStorage.ListaCarrito);
    }
    
    totalcarrito = PrecioTotal();
    totaldeproductos = TotalDeProductos();
    
    $('#itemsnum').html(totaldeproductos);
});
