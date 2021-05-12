const Categorias = ["Servicios", "Limpieza", "Lociones", "Día", "Noche", "Renovadores celulares", "Ojos y labios", "Tratamientos especiales", "Ampollas", "Protección Solar", "Todos"];
const Productos = 
[
    {
        id: 1,
        titulo: "Limpieza de Cutis completa",
        subtitulo: "",
        Categoría: Categorias[0],
        precio: 2500,
        img: "./img/productos/limpieza_completa.jpeg",
        descripción: "<p> Incluye: </p> <p> Punta de diamante, extracciónes, mascaras y perfilado de cejas </p>",
        otraInfo: " También te damos asesoramiento en el cuidado personal",
        modoDeUso: "<p> Sesión de una hora </p>"
    },
    {
        id: 2,
        titulo: "Limpieza de Cutis ",
        subtitulo: "con electroporación",
        Categoría: Categorias[0],
        precio: 2800,
        img: "./img/productos/limpieza_electroporacion.jpeg",
        descripción: "<p> Incluye: </p> <p> Limpieza, exfoliación, y los activos a electroporar",
        otraInfo:"También te damos asesoramiento en el cuidado personal",
        modoDeUso: "<p> Sesión de una hora </p>"  
    },
    {
        id: 3,
        titulo: "Peeling x4",
        subtitulo: "4 sesiones",
        Categoría: Categorias[0],
        precio: 8000,
        img: "./img/productos/peeling.jpeg",
        descripción: "<p> Incluye: </p> <p> Una primera limpieza profunda, con punta de diamente, con la colocación del ácido a convenir y tres sesiones posteriores</p>",
        otraInfo:"",
        modoDeUso: " Sesiones de 40 minutos"  
    },

    {
        id: 4,
        titulo: "Peeling x8",
        subtitulo: "8 sesiones",
        Categoría: Categorias[0],
        precio: 15000,
        img: "./img/productos/peeling.jpeg",
        descripción: "<p> Incluye: </p> <p> Una primera limpieza profunda, con punta de diamente, con la colocación del ácido a convenir y siete sesiones posteriores</p>",
        otraInfo:"",
        modoDeUso: "Sesiones de 40 minutos"  
    },

    {
        id: 5,
        titulo: "Perfilado de cejas",
        subtitulo: "",
        Categoría: Categorias[0],
        precio: 800,
        img: "./img/productos/perfilado_de_cejas.jpg",
        descripción: "Depilación con pincita y recorte.",
        otraInfo:"",
        modoDeUso: "<p> Duración: 20 minutos </p>"
    },

    {
    	id: 6,
    	titulo: " Electroporación x4 ",
    	subtitulo: " 4 sesiones ",
    	Categoría: Categorias[0],
    	precio: 6000,
    	img: "./img/productos/",
    	descripción: " La primera sesion incluye un pulido ",
        otraInfo:"",
    	modoDeUso: " Cuatro sesiones de media hora "
    },

    {
    	id: 7,
    	titulo: " Electroporación x8 ",
    	subtitulo: " 8 sesiones ",
    	Categoría: Categorias[0],
    	precio: 1200,
    	img: "./img/productos/",
    	descripción: " La primera sesion incluye un pulido ",
        otraInfo:"",
    	modoDeUso: "Ocho sesiones de media hora"
    },

    {
        id: 8,
        titulo: "Clase de automaquillaje",
        subtitulo: "",
        Categoría: Categorias[0],
        precio: 3000,
        img: "./img/productos/automaquillaje.jpeg",
        descripción: " <p>Preparación de la piel</p> <p>base</p><p>corrector</p> <p>rubor</p><p>ojos: Sombra, delineado y profundidad</p> <p>labios</p><p>diferentes tipos de productos, como aplicarlos según cada rostro</p><p>diferentes tipos de pinceles y modos de utilizarlos</p>",
        otraInfo:"<p>Te brindamos todos los materiales necesarios para la clase</p>",
        modoDeUso: "Duración: una clase de dos horas"
    },
    
    
    {
        id: 9,
        titulo: "Jabon Liquido",
        subtitulo: "oil Free",
        Categoría: Categorias[1],
        precio: 1070,
        img: "./img/productos/jabon_liquido.jpg",
        descripción: "Limpia los poros en forma suave y profunda dejando el rostro libre de brillo e impurezas.",
        otraInfo:"<p>ACTIVOS:</p> <p>Sepicontrol A5®</p> <p> Acido salicílico</p> <p>Sauce blanco</p> <p>Caléndula</p>",
        modoDeUso: "MODO DE USO:  Aplicar sobre el rostro humedecido con masajes suaves hasta formar espuma y enjuagar."
    },

    {
        id: 10,
        titulo: "Leche de Limpieza",
        subtitulo: "con siliconas",
        Categoría: Categorias[1],
        precio: 720,
        img: "./img/productos/leche_de_limpieza.jpg",
        descripción: "Emulsión liviana adecuada para remover suciedad, resto de células muertas, residuos de smog respetando la fisiología normal de la piel. \n El aporte del extracto de caléndula como calmante permite barrer las impurezas sin causar irritación.",
        otraInfo:"<p>Ingredientes activos: </p> <p> Filtros UVB y UVA. Ectoína, Extracto de células de levaduras, Manteca de karité, ADN vegetal y Aloe vera.</p> <p>Tipo de piel:  Todo tipo de piel.</p>",
        modoDeUso: "<p>¿Por qué es diferente? </p> <p>· Multibenefit, protección de amplio espectro, hidratación y antioxidación</p> <p>· Máximos niveles de protección UVA</p> <p>· Ligera coloración que disimula imperfecciones</p> <p>· Producto OTC según normas FDA</p> <p>· PABA Free</p> <p>· Mineral Oil Free</p> <p>· Paraben Free </p>"
    },

    {
        id: 11,
        titulo: "Pro fresh clean ",
        subtitulo: "",
        Categoría: Categorias[1],
        precio: 1060,
        img: "./img/productos/pro_fresh_clean.png",
        descripción: "Gel de limpieza y demaquillante ideal para pieles grasas, incluendo las más sensibles. De textura suave, aromática y fresca, proporciona inmediato bienestar. Se desliza sin producir fricciones y se enjuaga con facilidad. Luego se aplica el tónico adecuado. Contiene tensioactivos muy suaves, extractos de Caléndula y Camomila y exquisito aroma a pomelo rosado.",
        otraInfo: false,
        modoDeUso: false,
    },

    {
        id: 12,
        titulo: "Face Lotion",
        subtitulo: "",
        Categoría: Categorias[2],
        precio: 1265,
        img: "./img/productos/lidherma_skinbioma_facelotion.png",
        descripción: "Face Lotion es una loción facial fresca con un efecto reparador, hidratante y anti age. Es súper práctica porque viene en spray! Apta para todo tipo de pieles: seca, normal, grasa, mixta.",
        otraInfo: "",
        modoDeUso: ""
    },

    {
        id: 13,
        titulo: "Pro eclair",
        subtitulo: "glow tonic",
        Categoría: Categorias[2],
        precio: 1060,
        img: "./img/productos/eclair.png",
        descripción: "Tonico con efecto luminoso. Aplicar sobre la piel limpia en todo el rostro durante todo el día. Refresca, vitaliza y da un delicado efecto luminoso. Agitar antes de usar.",
        otraInfo:"",
        modoDeUso: "",
    },

    {
        id: 14,
        titulo: "Crema termal",
        subtitulo: "hidrante ligera",
        Categoría: Categorias[3],
        precio: 1322,
        img: "./img/productos/thermal_new.png",
        descripción: " <p> BENEFICIOS:  </p><p> >■ Hidratación inmediata que permanece por 24 horas.  </p><p>■ Tiene propiedades calmantes y desensibilizantes. </p> <p> ■ Refresca y brinda luminosidad.</p><p> ■ Refuerza la barrera cutánea </p> ",
        otraInfo:"<p> PRINCIPIOS ACTIVOS </p> <p> Agua termal</p><p>Remineralizante</p> <p> Soja activa de alta pureza </p><p> Hidratante y muy antioxidante debido al alto contenido de vitaminas, minerales y sobre todo isoflavonas. </p> <p> Estimula la producción de proteínas en la dermis y promueve su reparación. </p>",
        modoDeUso: "<p> MODO DE USO </p> <p> Luego de realizar la rutina diaria de higiene y tonificación, colocar una pequeña cantidad de producto y masajear hasta total su absorción en rostro, cuello y escote. </p>"
    },

    {
        id: 15,
        titulo: " Nutrisomas ",
    	subtitulo: " ",
    	Categoría: Categorias[3],
    	precio: 1360,
    	img: "./img/productos/nutrisomas.jpg",
    	descripción: " Crema ultra emoliente que repara, hidrata y brinda una sensación de confort extremo. Contiene un concentrado de activo vegetal que ayudan a regenerar las pieles maduras, dañadas o muy secas. Proporciona suavidad y flexibilidad. ",
        otraInfo:"<p> . Por función: Humectación, Arrugas profundas, Arrugas finas, Hombre, Antioxidantes </p> <p> . Tipo de piel: Seca, Normal </p><p> . Para pieles: Con arrugas y/o lí­neas de expresión, Involutivas, Fotodañadas, Deshidratadas </p>",
    	modoDeUso: "<p>. Efecto: Antiage, Humectante, Antioxidante, Reparador </p> <p> . Tipo: Rostro </p>"

    },

    {
    	id: 16,
    	titulo: " Complejo Rejuvenecedor ",
    	subtitulo: " con acido glicolico ",
    	Categoría: [Categorias[4],Categorias[5] ],
    	precio: 1531,
    	img: "./img/productos/complejo_rejuvenecedor.jpg",
    	descripción: " Activa la renovación celular provocando una suave descamación de las capas superficiales de la piel. Otorga elasticidad, hidratación y turgencia al cutis. Ayuda a prevenir y disminuir arrugas.",
        otraInfo:"<p> Ingredientes activos:</p> <p> Alfahidroxiacidos de origen vegetal: Ácido glicólico, láctico, cítrico, málico y tartárico, Vitamina E y Fosfolípidos purificados de lecitina de Soja. </p> ",
    	modoDeUso: "<p> Tipo de piel:</p> <p> Todo tipo de piel, especialmente pieles maduras. </p><p> ¿Por qué es diferente? </p> <p> · Blend de ácidos renovadores </p><p> · Activos liposomados </p> <p> · Mineral Oil Free</p>"
    },




    {
        id: 17,
        titulo: " Gel cream",
        subtitulo: " renovadora cutis graso (efecto micropeeling)",
        Categoría: [Categorias[4],Categorias[5] ],
        precio: 1594,
        img: "./img/productos/gel_cream_renovadora.jpg",
        descripción: "Renueva las células superficiales del estrato córneo. Homogeniza, atenúa hiperpigmentaciones y mejora la textura de la piel.",
        otraInfo:"<p> Ácidos glicólico </p> <p> Ácidos glicólico mandélico </p><p> Ácidos cítrico (Alfahidroxiácidos) </p> <p> Ácidos salicílico (betahidroxiácido) </p><p> Ácido lipoico </p> <p> Ácido fítico </p><p> Tipo de piel:</p> <p>Piel grasa. </p><p> ¿Por qué es diferente?</p>· Multibenefit, 4 ácidos exfoliantes y 2 antioxidantes <p> · Formulación biotecnológica, microesponjas que evitan el shock de pH cutáneo </p>p> · Mineral Oil Free</p><p> · Paraben Free</p>" ,
        modoDeUso: "<p> MODO DE USO:</p> <p>Se recomienda utilizar durante la noche. Durante el día complementar con el Gel Cream Renovador (COD.924) u otros productos hidratantes para piel grasa, y protección solar </p>"
    },
    {
        id: 18,
        titulo: "Crema activa renovadora",
        subtitulo: " cutis normal a seco (efecto micropeeling)",
        Categoría: [Categorias[4],Categorias[5] ],
        precio: 1594,
        img: "./img/productos/crema_activa_renovadora.jpg",
        descripción: "Renueva las células superficiales del estrato córneo. Homogeniza, atenúa hiperpigmentaciones y mejora la textura de la piel.",
        otraInfo:" <p>PRINCIPIOS ACTIVOS</p> </p>Ácido glicólico<p></p> <p> Ácido mandélico</p><p>Ácido cítrico (Alfahidroxiácidos)</p> <p> Ácido salicílico (betahidroxiácido) </p> Ácido lipoico<p> Ácido fítico. </p> <p>Piel normal y seca. </p> ",
        modoDeUso: "<p> Porque es diferente: </p> Multibenefit, 4 ácidos exfoliantes y 2 antioxidantes <p> Formulación biotecnológica, microesponjas que evitan el shock de pH cutáneo </p> Mineral Oil Free <p> Paraben Free </p><p> MODO DE USO: </p><p> Se recomienda utilizar durante la noche. Durante el día complementar con la Crema Renovadora (COD.923) u otros productos hidratantes y protección solar. La piel que lisa, luminosa y homogénea. Sus Componentes ayudan a evitar los signos del envejecimiento prematuro de la piel </p>"
    },

    {
        id: 19,
        titulo: "Mandelico Crema ",
        subtitulo: "",
        Categoría: [Categorias[4],Categorias[5]],
        precio: 1390,
        img: "./img/productos/mandelico_crema.png",
        descripción: "Renovador celular en crema. Mejora la textura general de la piel otorgándole luminosidad. Potente crema antiséptica y renovadora celular. Tiene un efecto extraordinario sobre la textura general de la piel. Provee luminosidad.",
        otraInfo:"<p>-Efecto: Renovador / Blanqueador </p> <p> -Para pieles: Involutivas / Fotodañadas / Con manchas</p> <p> -Por función: Arrugas profundas</p> <p>-No recomendado para pieles: Seborreicas </p>",
        modoDeUso: "<p>-Activos: </p><p> Ácido Mandélico / Escualeno </p>",
    },


    {
        id: 20,
        titulo: "Vitamin C Eyes",
        subtitulo: "serum Contorno de Ojos",
        Categoría: Categorias[6],
        precio: 1611,
        img: "./img/productos/vitamina_c_eyes_serum.jpg",
        descripción: "■ Ilumina la mirada y aclara las ojeras. ■ Hidrata y mejora la apariencia de la finas arrugas. ■ Aumenta la elasticidad de la piel.",
        otraInfo:"<p>PRINCIPIOS ACTIVOS</p> <p> 5% Vitamina C AA2G</p> <p>3% Lipomoist 2036</p><p>0,2% Vitamina A + E</p> <p> 1% Proteínas de soja </p> <p> 0,5% Colágeno </p>",
        modoDeUso: "<p>MODO DE USO: </p> <p> Desplazar el aplicador masajeador con suavidad por el contorno de los ojos, previamente limpios y tonificados, de forma lenta hasta total absorción.</p><p> Luego colocar el producto de tratamiento habitual y/o maquillaje. Se puede utilizar por la mañana y por la noche. </p>"
    },

  


    
    {
        id: 21,
        titulo: "Gel para contorno de ojos",
        subtitulo: "con uniesferas y aloe",
        Categoría: Categorias[6],
        precio: 1087,
        img: "./img/productos/gel_contorno_ojos.jpg",
        descripción: "Gel de agradable textura, refrescante y de alto poder hidratante. Ideal para la piel del área del contorno de los ojos. Ayuda a disminuir la formación de pliegues y bolsas palpebrales. El gel de Aloe vera aporta Oligoelementos, Aminoácidos y Vitaminas del complejo B. Sus ¨Uniesferas¨ vehiculizan Vitaminas A, E y Clorofilina.",
        otraInfo:"<p>PRINCIPIOS ACTIVOS</p> <p> Gel de Aloe vera. </p> <p>Extractos de Malva y Hamamelis</p><p>Esferas vitaminizadas (Vitamina A y E)</p> <p> Clorofilina.</p>",
        modoDeUso: "<p>¿Por qué es diferente?</p> <p>  · Contiene uniesferas de vitaminas</p><p>· Mineral Oil Free </p>"
    },
    {
        id: 22,
        titulo: "Pro Hyaluron eyes ",
        subtitulo: "acido hialuronico contorno de ojos",
        Categoría: Categorias[6],
        precio: 1473,
        img: "./img/productos/prohyalurom_eyes.png",
        descripción: " Reestablece la barrera cutánea mantiene la hidratación a lo largo del día. De acción hidratante y humectante, o sea que no solo retiene el agua en la superficie, sino que facilita su ingreso a travez de la epidermis y su circulación a travez del tejido",
        otraInfo:" . <p> BENEFICIOS </p> <p> Revierte el aspecto envejecido de la piel. </p><p> Brinda una hidratación profunda en la zona de los ojos. </p> <p> Aporta luminosidad y disminuye la profundidad de las arrugas. </p> <p> Provoca un efecto de seda en la piel. </p><p> Sin Parabenos </p> <p> Sin Colorantes Artificiales </p> <p> Sin Aceites Minerales </p><p> Sin Fragancia </p> PRINCIPIOS ACTIVOS, Ácido y <p> Acetyl Tetrapeptido-5 </p> <p> Hialurónico </p><p> Diffuporine®.  </p> ",
        modoDeUso: "<p> MODO DE USO: </p> <p> Luego de realizar la rutina diaria de higiene y tonificación, colocar una pequeña porción de producto en los dedos y desplazar con suavidad por el contorno de ojos y párpados y masajear a favor de las fibras del musculo orbicular de los ojos, de forma lenta y suave hasta total absorción. Se sugiere utilizar día y noche. </p>"
    },

    {
        id: 23,
        titulo: "Lip Balm",
        subtitulo: "bálsamo para labios",
        Categoría: Categorias[6],
        precio: 686,
        img: "./img/productos/balsamo_labios.png",
        descripción: "",
        otraInfo:"<p> ✓ Restaura y acondiconado los labios otorgando máxima suavidad.</p> <p> ✓ Tratamiento emoliente que contribuye a combatir la sequedad al instante.</p><p> ✓ Nutre, restaura y fortalece la barrera de hidratación natural de la piel.</p> <p>✓ Estimula la síntesis d Ácido Hialurónico, por lo que logra un efecto voluminizador </p>",
        modoDeUso: ""
    },
    {
    	id: 24,
    	titulo: " Depure ",
    	subtitulo: " Control treatment",
    	Categoría: Categorias[7],
    	precio: 1540,
    	img: "./img/productos/control_treatment.png",
    	descripción: "Emulsión de textura muy liviana que regula la producción de sebo y evita la formación de lesiones inflamatorias. Mejora las manifestaciones específicas y localizadas de la piel grasa y con acné. Sus activos hidratantes mantienen el confort de la piel, evitan la irritación y protegen las zonas saludables. ",
        otraInfo:"<p> Por función: Pieles grasas y acneicas </p> <p>Líneas Premium: Acnex Depure </p>  <p> Tipo de piel: Grasa </p> <p>Para pieles: Con lesiones inestéticas, Seborreicas  </p> <p> ,Efecto: Humectante </p> <p> Tipo: Rostro </p>",
    	modoDeUso: "<p> Emulsión liviana. </p> <p> Acné.  </p><p> Seborrea. </p> <p> Previene lesiones inflamatorias.   </p>"

    
    },


    {
    	id: 25,
    	titulo: " Ampollas ",
    	subtitulo: "DMAE + Silicio Orgánico",
    	Categoría: Categorias[8],
    	precio: 825,
    	img: "./img/productos/ampollas.jpg",
    	descripción: "Tratamiento de lifting facial y antiage “todo en uno”, que combina dos fuertes agentes rejuvenecedores. El Dmae + Silicio Orgánico tonifica y suaviza inmediatamente la piel, protegiéndola de los radicales libres. Es efectiva no sólo para el rostro sino también para tratar la piel flácida en brazos, abdomen, piernas y glúteos.",
        	otraInfo:"<p>DMAE (1%)</p> <p> Precursor de la Acetilcolina. Produce un efecto lifting. Resulta de una combinación sinérgica de efectos a diferentes niveles: tensión celular en células dérmicas no musculares, cohesión y desplazamiento de queratinocitos, hidratación y elasticidad del estrato córneo. Mejora la piel, antioxidante. Actúa rápidamente y tiene un efecto residual. Facial: Efecto lifting inmediato Corporal: Efecto reafirmante y tensor. Imperfecciones de la piel y mejora las estrías. </p><p>Silicio orgánico (0.5%)  </p>  <p>  Componente estructural del tejido conectivo. Favorece la regeneración de las fibras elásticas y colágenas. Precursor del colágeno Hidrata, reafirma y actúa como antioxidante. Facial: Estimulador y regulador de los fibroblastos. Previene el envejecimiento prematuro y es antioxidante de especies reactivas de oxígeno. Normaliza el metabolismo celular. Corporal: Normaliza el metabolismo celular, regenera el tejido y ayuda a minimizar las inesteticidades producto de la PEFE. </p>",
    	modoDeUso: "<p>  Modo de empleo: </p> <p>  Uso tópico exclusivo. Aplicar con un suave masaje. Mejora su efectividad si se usa conjuntamente con mesoterapia transadérmica por electroporación </p>"
    },

    

    
    {
        id: 26,
        titulo: "XL Urban Face Protector",
        subtitulo: " spf 60 color",
        Categoría: Categorias[9],
        precio: 1087,
        img: "./img/productos/protector_spf.jpg",
        descripción: "Crema de tratamiento y protección integral de amplio espectro. Una poderosa formulación multiacción. Forma un film resistente a los rayos UVA/UVB y a los radicales libres..",
        otraInfo:"<p>PRINCIPIOS ACTIVOS</p> <p> 5% Vitamina C AA2G</p> <p>3% Lipomoist 2036</p><p>0,2% Vitamina A + E</p> <p> 1% Proteínas de soja </p> <p> 0,5% Colágeno </p>",
        modoDeUso: "<p>MODO DE USO: </p> <p> Desplazar el aplicador masajeador con suavidad por el contorno de los ojos, previamente limpios y tonificados, de forma lenta hasta total absorción.</p><p> Luego colocar el producto de tratamiento habitual y/o maquillaje. Se puede utilizar por la mañana y por la noche. </p>"
    },
    
]

let totaldeproductos = 0;
// cada producto tiene que tener precio, nombre del producto y una imagen  
//  como caracteristicas, tal vez categoría, tal vez alguna reseña
// cada producto del carrito tiene que hacer referencia al 
// producto y sumarle la caracteristica de cantidad de productos en el carrito

document.addEventListener('DOMContentLoaded', function() {
    DisplayProductos(Productos);
    DesplegableCategorias();
    function Filtros(){
        filtros = prompt('Si quieres ordenar productos por precio tipa "si", si quieres filtrarlos por categoría escribe "filtrar"');
        if(filtros == "si"){
            ProductosPorPrecio = Order(Productos);
            DisplayProductos(ProductosPorPrecio);
        } else if (filtros == "filtrar"){
            categoria = prompt('¿Que Categoría desea filtrar? Lista de Categorias: Servicios, Limpieza, Lociones, Día, Noche, Renovadores celulares, Ojos y labios, Tratamientos especiales, Ampollas, Protección Solar');
            ProductosPorCategoria = Filter(categoria);
            DisplayProductos(ProductosPorCategoria);
        }
    }
   
    setTimeout(Filtros,500);
});








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
function DisplayProductos(productos){
    // let productos = fs.readFileSync('productos.json', 'utf8');
    // productos = JSON.parse(productos);
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
            
            element.innerHTML = `<button onclick="ListadoCarrito(${producto.precio});">Añadir al Carrito</button>
            <div class="precio">$${producto.precio}</div>
            ${VariasCategorias}
            <div> <img src="${producto.img}" alt="foto del producto ${producto.titulo}"> </div>
            <div class="subtitulo">${producto.subtitulo}</div>
            <div class="titulo">${producto.titulo}</div>`;
        }else{
            element.innerHTML = `<button onclick="ListadoCarrito(${producto.precio});">Añadir al Carrito</button>
            <div class="precio">$${producto.precio}</div>
            <div class="categoria">${producto.Categoría}</div>
            <div> <img src="${producto.img}" alt="foto del producto ${producto.titulo}"> </div>
            <div class="subtitulo">${producto.subtitulo}</div>
            <div class="titulo">${producto.titulo}</div>`;
        }
        
        document.querySelector('#listadoproductos').appendChild(element);
    }
} 


function Order(productos) {
    productos.sort(function (a,b) {
            if(a.precio > b.precio){
                    return 1;
            }else if(a.precio < b.precio){
                    return -1;
            }else{
                    return 0;
            }
            
    });
    console.log("productos ordenados por precio: ");
    console.log(productos);
    return productos;
 }

 function Filter(categoria){
    console.log(categoria);
    let productosCategoria = productos.filter(elemento=> {
        if (elemento.Categoría == categoria){
            return elemento
        } else if(Array.isArray(elemento.Categoría)){
            found = elemento.Categoría.find(element => element == categoria);
            if(found != undefined){
                return found
            }

        }

        });

    
    console.log("productos filtrados por categoria: " + categoria );
    console.log(productosCategoria)
    return productosCategoria;
 }
 
function DesplegableCategorias(){
    desplegableCategorias = document.getElementById("desplegableCategorias");
    for (let Categoria of Categorias){
        const opcionCategoria = document.createElement('option');
        opcionCategoria.innerHTML = `<option onclick="Filter(${Categoria});" value=${Categoria}>${Categoria}</option>`;
        desplegableCategorias.appendChild(opcionCategoria);
    }
   
}

// export const totalcarrito = 'totalcarrito';