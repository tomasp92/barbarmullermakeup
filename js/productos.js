document.addEventListener('DOMContentLoaded', function() {
    DisplayProductos();
});


// cada producto tiene que tener precio, nombre del producto y una imagen  
//  como caracteristicas, tal vez categoría, tal vez alguna reseña
// cada producto del carrito tiene que hacer referencia al 
// producto y sumarle la caracteristica de cantidad de productos en el carrito
const productos = 
[
    {
        id: 1,
        titulo: "Jabon Liquido",
        subtitulo: "Oil Free",
        Categoría: "Limpieza",
        precio: 1070,
        img: "./img/productos/jabon_liquido.jpg",
        descripción: "Limpia los poros en forma suave y profunda dejando el rostro libre de brillo e impurezas.",
        otraInfo:"<p>ACTIVOS:</p> <p>Sepicontrol A5®</p> <p> Acido salicílico</p> <p>Sauce blanco</p> <p>Caléndula</p>",
        modoDeUso: "MODO DE USO: \n Aplicar sobre el rostro humedecido con masajes suaves hasta formar espuma y enjuagar."
    },

    {
        id: 2,
        titulo: "Leche de Limpieza",
        subtitulo: "con siliconas",
        Categoría: "Limpieza",
        precio: 720,
        img: "./img/productos/leche_de_limpieza.jpg",
        descripción: "Emulsión liviana adecuada para remover suciedad, resto de células muertas, residuos de smog respetando la fisiología normal de la piel. \n El aporte del extracto de caléndula como calmante permite barrer las impurezas sin causar irritación.",
        otraInfo:"<p>RESULTADOS:</p> <p>Deja la piel limpia y suave</p>",
        modoDeUso: "<p>MODO DE USO: </p> <p> Aplicar con suaves masajes y retirar con motas de algodón embebidas en agua.</p>"
    },

    {
        id: 3,
        titulo: "Face Lotion",
        subtitulo: "",
        Marca: "",
        Categoría: "Skinbioma ",
        precio: 0,
        img: "./img/productos/lidherma_skinbioma_facelotion.png",
        descripción: "Face Lotion es una loción facial fresca con un efecto reparador, hidratante y anti age. Es súper práctica porque viene en spray! Apta para todo tipo de pieles: seca, normal, grasa, mixta."
    },

    {
        id: 4,
        titulo: "Face Mask",
        Linea: "Skinbioma ",
        precio: 0,
        img: "./img/productos/lidherma_skinbioma_facemask.png",
        descripción: "Máscara facial hidratante y reparadora, protege la salud de la piel otorgándole brillo y luminosidad ✔️Recomendada para pieles sensibles, deshidratadas y con flacidez. ✔️Efecto anti age, humectante, afirmante y reparador 📝 Se deja actuar entre 10 y 15 minutos -Conseguila en mis estudios"
    },
    {
        id: 10,
        titulo: "Limpieza de Cutis completa",
        subtitulo: "",
        Categoría: "Servicios",
        precio: 2500,
        img: "./img/productos/limpieza_completa.jpeg",
        descripción: "Emulsión liviana adecuada para remover suciedad, resto de células muertas, residuos de smog respetando la fisiología normal de la piel. \n El aporte del extracto de caléndula como calmante permite barrer las impurezas sin causar irritación.",
        otraInfo:"<p></p> <p></p>",
        modoDeUso: "<p></p> <p> </p>"
    },
    {
        id: 11,
        titulo: "Limpieza de Cutis con electroporación",
        subtitulo: "",
        Categoría: "Servicios",
        precio: 2800,
        img: "./img/productos/limpieza_electroporacion.jpeg",
        descripción: "Emulsión liviana adecuada para remover suciedad, resto de células muertas, residuos de smog respetando la fisiología normal de la piel. \n El aporte del extracto de caléndula como calmante permite barrer las impurezas sin causar irritación.",
        otraInfo:"<p></p> <p></p>",
        modoDeUso: "<p></p> <p> </p>"  
    },
    {
        id: 12,
        titulo: "Peeling x3",
        subtitulo: "",
        Categoría: "Servicios",
        precio: 0,
        img: "./img/productos/peeling.jpeg",
        descripción: "Emulsión liviana adecuada para remover suciedad, resto de células muertas, residuos de smog respetando la fisiología normal de la piel. \n El aporte del extracto de caléndula como calmante permite barrer las impurezas sin causar irritación.",
        otraInfo:"<p></p> <p></p>",
        modoDeUso: "<p></p> <p> </p>"  
    },

    {
        id: 13,
        titulo: "Peeling x6",
        subtitulo: "",
        Categoría: "Servicios",
        precio: 0,
        img: "./img/productos/peeling.jpeg",
        descripción: "Emulsión liviana adecuada para remover suciedad, resto de células muertas, residuos de smog respetando la fisiología normal de la piel. \n El aporte del extracto de caléndula como calmante permite barrer las impurezas sin causar irritación.",
        otraInfo:"<p></p> <p></p>",
        modoDeUso: "<p></p> <p> </p>"  
    },

    {
        id: 14,
        titulo: "Perfilado de cejas",
        subtitulo: "",
        Categoría: "Servicios",
        precio: 700,
        img: "./img/productos/perfilado_de_cejas.jpg",
        descripción: "Emulsión liviana adecuada para remover suciedad, resto de células muertas, residuos de smog respetando la fisiología normal de la piel. \n El aporte del extracto de caléndula como calmante permite barrer las impurezas sin causar irritación.",
        otraInfo:"<p></p> <p></p>",
        modoDeUso: "<p></p> <p> </p>"
    },
    {
        id: 15,
        titulo: "Clase de automaquillaje",
        subtitulo: "",
        Categoría: "Servicios",
        precio: 3000,
        img: "./img/productos/automaquillaje.jpeg",
        descripción: "Emulsión liviana adecuada para remover suciedad, resto de células muertas, residuos de smog respetando la fisiología normal de la piel. \n El aporte del extracto de caléndula como calmante permite barrer las impurezas sin causar irritación.",
        otraInfo:"<p></p> <p></p>",
        modoDeUso: "<p></p> <p> </p>"
    },
    
]


let totaldeproductos = 0;

// funcion para sumar al total de productos del carrito
function SumRestToCart(operacion, cantidad){
    if (operacion == "suma"){
        totaldeproductos = totaldeproductos + cantidad;
    }else{
        totaldeproductos --;
    }
    document.getElementById("itemsnum").innerHTML = totaldeproductos;
    console.log("total de productos en carrito: " + totaldeproductos);
}


let carrito = [];
let totalcarrito = 0;
// Función para hacer el listado de productos del carrito (actualmente solo calcula el precio final que ese listado sumado arrojaría)
function ListadoCarrito(precioproducto){
    let cantidad = parseInt(prompt(`Su producto cuesta $${precioproducto} cuantos quiere agregar al carrito comprar`));
    console.log(`Agrego ${cantidad} del producto al carrito`);
    totalcarrito = totalcarrito + precioproducto*cantidad;
    console.log(`total carrito ${totalcarrito}`);
    SumRestToCart('suma', cantidad);
    

}


// Función para desplegar los productos en la pagina
function DisplayProductos(){
    console.log("onfunction")
    // let productos = fs.readFileSync('productos.json', 'utf8');
    // productos = JSON.parse(productos);
    for (let producto of productos){
        console.log(producto);
        const element = document.createElement('div');
        const img = document.createElement("img");
        img.src = producto.img;
        img.alt = `Foto del producto ${producto.titulo}`;
        element.innerHTML = `<button onclick="ListadoCarrito(${producto.precio});">Añadir al Carrito</button>
        <div>$${producto.precio}</div>
        <div>${producto.Linea}</div>
        <div>${producto.titulo}</div>`;
        element.appendChild(img);
        document.querySelector('#listadoproductos').appendChild(element);
    }
} 

// export const totalcarrito = 'totalcarrito';