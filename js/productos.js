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
    
    
    {
        id: 7,
        titulo: "Jabon Liquido",
        subtitulo: "Oil Free",
        Categoría: "Limpieza",
        precio: 1070,
        img: "./img/productos/jabon_liquido.jpg",
        descripción: "Limpia los poros en forma suave y profunda dejando el rostro libre de brillo e impurezas.",
        otraInfo:"<p>ACTIVOS:</p> <p>Sepicontrol A5®</p> <p> Acido salicílico</p> <p>Sauce blanco</p> <p>Caléndula</p>",
        modoDeUso: "MODO DE USO:  Aplicar sobre el rostro humedecido con masajes suaves hasta formar espuma y enjuagar."
    },

    {
        id: 8,
        titulo: "Leche de Limpieza",
        subtitulo: "con siliconas",
        Categoría: "Limpieza",
        precio: 720,
        img: "./img/productos/leche_de_limpieza.jpg",
        descripción: "Emulsión liviana adecuada para remover suciedad, resto de células muertas, residuos de smog respetando la fisiología normal de la piel. \n El aporte del extracto de caléndula como calmante permite barrer las impurezas sin causar irritación.",
        otraInfo:"<p>Ingredientes activos: </p> <p> Filtros UVB y UVA. Ectoína, Extracto de células de levaduras, Manteca de karité, ADN vegetal y Aloe vera.</p> <p>Tipo de piel:  Todo tipo de piel.</p>",
        modoDeUso: "<p>¿Por qué es diferente? </p> <p>· Multibenefit, protección de amplio espectro, hidratación y antioxidación</p> <p>· Máximos niveles de protección UVA</p> <p>· Ligera coloración que disimula imperfecciones</p> <p>· Producto OTC según normas FDA</p> <p>· PABA Free</p> <p>· Mineral Oil Free</p> <p>· Paraben Free </p>"
    },

    {
        id: 9,
        titulo: "PRO FRESH CLEAN ",
        subtitulo: "",
        Categoría: "Limpieza",
        precio: 1060,
        img: "./img/productos/pro_fresh_clean.png",
        descripción: "Gel de limpieza y demaquillante ideal para pieles grasas, incluendo las más sensibles. De textura suave, aromática y fresca, proporciona inmediato bienestar. Se desliza sin producir fricciones y se enjuaga con facilidad. Luego se aplica el tónico adecuado. Contiene tensioactivos muy suaves, extractos de Caléndula y Camomila y exquisito aroma a pomelo rosado.",
        otraInfo: false,
        modoDeUso: false,
    },

    {
        id: 10,
        titulo: "Face Lotion",
        subtitulo: "",
        Categoría: "Lociones",
        precio: 0,
        img: "./img/productos/lidherma_skinbioma_facelotion.png",
        descripción: "Face Lotion es una loción facial fresca con un efecto reparador, hidratante y anti age. Es súper práctica porque viene en spray! Apta para todo tipo de pieles: seca, normal, grasa, mixta.",
        otraInfo: "",
        modoDeUso: ""
    },

    {
        id: 11,
        titulo: "PRO ECLAIR",
        subtitulo: "GLOW TONIC",
        Categoría: "Lociones",
        precio: 1060,
        img: "./img/productos/eclair.png",
        descripción: "Tonico con efecto luminoso. Aplicar sobre la piel limpia en todo el rostro durante todo el día. Refresca, vitaliza y da un delicado efecto luminoso. Agitar antes de usar.",
        otraInfo:"",
        modoDeUso: "",
    },

    {
        id: 12,
        titulo: "CREMA TERMAL",
        subtitulo: "HIDRATANTE LIGERA",
        Categoría: "día",
        precio: 1322,
        img: "./img/productos/thermal_new.png",
        descripción: " <p> BENEFICIOS:  </p><p> >■ Hidratación inmediata que permanece por 24 horas.  </p><p>■ Tiene propiedades calmantes y desensibilizantes. </p> <p> ■ Refresca y brinda luminosidad.</p><p> ■ Refuerza la barrera cutánea </p> ",
        otraInfo:"<p> PRINCIPIOS ACTIVOS </p> <p> Agua termal</p><p>Remineralizante</p> <p> Soja activa de alta pureza </p><p> Hidratante y muy antioxidante debido al alto contenido de vitaminas, minerales y sobre todo isoflavonas. </p> <p> Estimula la producción de proteínas en la dermis y promueve su reparación. </p>",
        modoDeUso: "<p> MODO DE USO </p> <p> Luego de realizar la rutina diaria de higiene y tonificación, colocar una pequeña cantidad de producto y masajear hasta total su absorción en rostro, cuello y escote. </p>"
    },



    {
        id: 13,
        titulo: " GEL CREAM ",
        subtitulo: " RENOVADORA CUTIS GRASO (EFECTO MICROPEELING)",
        Categoría: ["Noche","renovadores celulares" ],
        precio: 1449,
        img: "./img/productos/gel_cream_renovadora.jpg",
        descripción: "Renueva las células superficiales del estrato córneo. Homogeniza, atenúa hiperpigmentaciones y mejora la textura de la piel.",
        otraInfo:"<p> Ácidos glicólico </p> <p> Ácidos glicólico mandélico </p><p> Ácidos cítrico (Alfahidroxiácidos) </p> <p> Ácidos salicílico (betahidroxiácido) </p><p> Ácido lipoico </p> <p> Ácido fítico </p><p> Tipo de piel:</p> <p>Piel grasa. </p><p> ¿Por qué es diferente?</p>· Multibenefit, 4 ácidos exfoliantes y 2 antioxidantes <p> · Formulación biotecnológica, microesponjas que evitan el shock de pH cutáneo </p>p> · Mineral Oil Free</p><p> · Paraben Free</p>" ,
        modoDeUso: "<p> MODO DE USO:</p> <p>Se recomienda utilizar durante la noche. Durante el día complementar con el Gel Cream Renovador (COD.924) u otros productos hidratantes para piel grasa, y protección solar </p>"
    },
    {
        id: 14,
        titulo: "MANDELICO CREMA ",
        subtitulo: "",
        Categoría: ["Noche","renovadores celulares" ],
        precio: 1390,
        img: "./img/productos/mandelico_crema.png",
        descripción: "Renovador celular en crema. Mejora la textura general de la piel otorgándole luminosidad. Potente crema antiséptica y renovadora celular. Tiene un efecto extraordinario sobre la textura general de la piel. Provee luminosidad.",
        otraInfo:"<p>-Efecto: Renovador / Blanqueador </p> <p> -Para pieles: Involutivas / Fotodañadas / Con manchas</p> <p> -Por función: Arrugas profundas</p> <p>-No recomendado para pieles: Seborreicas </p>",
        modoDeUso: "<p>-Activos: </p><p> Ácido Mandélico / Escualeno </p>",
    },

    {
        id: 15,
        titulo: "CREMA ACTIVA RENOVADORA",
        subtitulo: "CUTIS NORMAL A SECO (EFECTO MICROPEELING)",
        Categoría: ["renovadores celulares","Noche" ],
        precio: 1599,
        img: "./img/productos/crema_activa_renovadora.jpg",
        descripción: "Renueva las células superficiales del estrato córneo. Homogeniza, atenúa hiperpigmentaciones y mejora la textura de la piel.",
        otraInfo:" <p>PRINCIPIOS ACTIVOS</p> </p>Ácido glicólico<p></p> <p> Ácido mandélico</p><p>Ácido cítrico (Alfahidroxiácidos)</p> <p> Ácido salicílico (betahidroxiácido) </p> Ácido lipoico<p> Ácido fítico. </p> <p>Piel normal y seca. </p> ",
        modoDeUso: "<p> Porque es diferente: </p> Multibenefit, 4 ácidos exfoliantes y 2 antioxidantes <p> Formulación biotecnológica, microesponjas que evitan el shock de pH cutáneo </p> Mineral Oil Free <p> Paraben Free </p><p> MODO DE USO: </p><p> Se recomienda utilizar durante la noche. Durante el día complementar con la Crema Renovadora (COD.923) u otros productos hidratantes y protección solar. La piel que lisa, luminosa y homogénea. Sus Componentes ayudan a evitar los signos del envejecimiento prematuro de la piel </p>"
    },

  
   

    {
        id: 16,
        titulo: "Vitamin C Eyes",
        subtitulo: "Serum Contorno de Ojos",
        Categoría: "ojos y labios",
        precio: 1611,
        img: "./img/productos/vitamina_c_eyes_serum.jpg",
        descripción: "■ Ilumina la mirada y aclara las ojeras. ■ Hidrata y mejora la apariencia de la finas arrugas. ■ Aumenta la elasticidad de la piel.",
        otraInfo:"<p>PRINCIPIOS ACTIVOS</p> <p> 5% Vitamina C AA2G</p> <p>3% Lipomoist 2036</p><p>0,2% Vitamina A + E</p> <p> 1% Proteínas de soja </p> <p> 0,5% Colágeno </p>",
        modoDeUso: "<p>MODO DE USO: </p> <p> Desplazar el aplicador masajeador con suavidad por el contorno de los ojos, previamente limpios y tonificados, de forma lenta hasta total absorción.</p><p> Luego colocar el producto de tratamiento habitual y/o maquillaje. Se puede utilizar por la mañana y por la noche. </p>"
    },

     
    {
        id: 17,
        titulo: "GEL PARA CONTORNO DE OJOS",
        subtitulo: "CON UNIESFERAS Y ALOE",
        Categoría: "ojos y labios",
        precio: 988,
        img: "./img/productos/gel_contorno_ojos.jpg",
        descripción: "Gel de agradable textura, refrescante y de alto poder hidratante. Ideal para la piel del área del contorno de los ojos. Ayuda a disminuir la formación de pliegues y bolsas palpebrales. El gel de Aloe vera aporta Oligoelementos, Aminoácidos y Vitaminas del complejo B. Sus ¨Uniesferas¨ vehiculizan Vitaminas A, E y Clorofilina.",
        otraInfo:"<p>PRINCIPIOS ACTIVOS</p> <p> Gel de Aloe vera. </p> <p>Extractos de Malva y Hamamelis</p><p>Esferas vitaminizadas (Vitamina A y E)</p> <p> Clorofilina.</p>",
        modoDeUso: "<p>¿Por qué es diferente?</p> <p>  · Contiene uniesferas de vitaminas</p><p>· Mineral Oil Free </p>"
    },

    {
        id: 18,
        titulo: "LIP BALM",
        subtitulo: "BÁLSAMO PARA LABIOS",
        Categoría: "ojos y labios",
        precio: 670,
        img: "./img/productos/balsamo_labios.png",
        descripción: "",
        otraInfo:"<p> ✓ Restaura y acondiconado los labios otorgando máxima suavidad.</p> <p> ✓ Tratamiento emoliente que contribuye a combatir la sequedad al instante.</p><p> ✓ Nutre, restaura y fortalece la barrera de hidratación natural de la piel.</p> <p>✓ Estimula la síntesis d Ácido Hialurónico, por lo que logra un efecto voluminizador </p>",
        modoDeUso: ""
    },

    {
        id: 19,
        titulo: "PRO HYALURON EYES ",
        subtitulo: " ACIDO HIALURONICO CONTORNO DE OJOS ",
        Categoría: "Ojos y labios",
        precio: 1473,
        img: "./img/productos/prohyalurom_eyes.png",
        descripción: " Reestablece la barrera cutánea mantiene la hidratación a lo largo del día. De acción hidratante y humectante, o sea que no solo retiene el agua en la superficie, sino que facilita su ingreso a travez de la epidermis y su circulación a travez del tejido",
        otraInfo:" . <p> BENEFICIOS </p> <p> Revierte el aspecto envejecido de la piel. </p><p> Brinda una hidratación profunda en la zona de los ojos. </p> <p> Aporta luminosidad y disminuye la profundidad de las arrugas. </p> <p> Provoca un efecto de seda en la piel. </p><p> Sin Parabenos </p> <p> Sin Colorantes Artificiales </p> <p> Sin Aceites Minerales </p><p> Sin Fragancia </p> PRINCIPIOS ACTIVOS, Ácido y <p> Acetyl Tetrapeptido-5 </p> <p> Hialurónico </p><p> Diffuporine®.  </p> ",
        modoDeUso: "<p> MODO DE USO: </p> <p> Luego de realizar la rutina diaria de higiene y tonificación, colocar una pequeña porción de producto en los dedos y desplazar con suavidad por el contorno de ojos y párpados y masajear a favor de las fibras del musculo orbicular de los ojos, de forma lenta y suave hasta total absorción. Se sugiere utilizar día y noche. </p>"
    },
    
    {
        id: 20,
        titulo: "XL URBAN FACE PROTECTOR",
        subtitulo: "SPF 60 COLOR",
        Categoría: "Protección Solar",
        precio: 988,
        img: "./img/productos/protector_spf.jpg",
        descripción: "Crema de tratamiento y protección integral de amplio espectro. Una poderosa formulación multiacción. Forma un film resistente a los rayos UVA/UVB y a los radicales libres..",
        otraInfo:"<p>PRINCIPIOS ACTIVOS</p> <p> 5% Vitamina C AA2G</p> <p>3% Lipomoist 2036</p><p>0,2% Vitamina A + E</p> <p> 1% Proteínas de soja </p> <p> 0,5% Colágeno </p>",
        modoDeUso: "<p>MODO DE USO: </p> <p> Desplazar el aplicador masajeador con suavidad por el contorno de los ojos, previamente limpios y tonificados, de forma lenta hasta total absorción.</p><p> Luego colocar el producto de tratamiento habitual y/o maquillaje. Se puede utilizar por la mañana y por la noche. </p>"
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
        <div>${producto.Categoría}</div>
        <div>${producto.titulo}</div>`;
        element.appendChild(img);
        document.querySelector('#listadoproductos').appendChild(element);
    }
} 

// export const totalcarrito = 'totalcarrito';