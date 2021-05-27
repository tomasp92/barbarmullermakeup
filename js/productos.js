let OrdenarPorMenorPrecio = document.getElementById("menor");
OrdenarPorMenorPrecio.onclick = () => Order(Productos, "menor");
let OrdenarPorMayorPrecio = document.getElementById("mayor");
OrdenarPorMayorPrecio.onclick = () => Order(Productos, "mayor");
let OrdenarPorCategorias = document.getElementById("porCategorias");
OrdenarPorCategorias.onclick = () => Order(Productos, "Categorias");

// Función para desplegar los productos en la pagina
function DisplayProductos(productos){
    let listadoProductos = document.querySelector('#listadoproductos');
    listadoProductos.innerHTML = "";

    // const productos = fs.readFileSync('productos.json', 'utf8');
    // productos = JSON.parse(productos);

    // fetch('./productos.json')
    // .then(response => response.json())
    // .then(productos => console.log(productos));
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
    console.log("productos ordenados");
    console.log(productos);
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
    opcionesCategorias = document.getElementById("opcionesCategorias");
    for (let Categoria of Categorias){
        const opcionCategoria = document.createElement('p');
        opcionCategoria.innerHTML = `<button class="categoria" onclick="Filter('${Categoria}');" >${Categoria}</button>`;
        opcionesCategorias.appendChild(opcionCategoria);
    }
   
}


document.addEventListener('DOMContentLoaded', function() {
    DisplayProductos(Productos);
    DesplegableCategorias();
    SumRestToCart("");
});






// export const totalcarrito = 'totalcarrito';