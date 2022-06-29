/* const productos = [
    {id:1, nombre:"Riser - Fivics Krossen", descripcion:"El Riser ideal para los tiradores recurvado olímpico o raso.", imagen:"riser.png", precio:25500},
    {id:2, nombre:"Estabilizadores - Epic Fusion", descripcion:"Incluye Estabilizador frontal, laterales, extender y V-Bar.", imagen:"estabilizadores.png", precio:23700},
    {id:3, nombre:"Palas - Fivics Krossen", descripcion:"Para uso por arqueros principiantes que buscan pasar a un nivel superior.", imagen:"palas.png", precio:18500},
    {id:4, nombre:"Mira - Scorpion", descripcion:"Mira reforzada con sistema de bloqueo de carro horizontal.", imagen:"mira.png", precio:11500},
    {id:5, nombre:"Cuerda", descripcion:"Cuerda con Nocking Point incorporado.", imagen:"cuerda.png", precio:4500},
    {id:6, nombre:"Rest - Fivics Krossen", descripcion:"Arrow rest para riser Fivics Zurdo. Fabricado con el mejor aluminio.", imagen:"rest.png", precio:1000},
    {id:7, nombre:"Button", descripcion:"Ajusta la flecha en la posición correcta para mejores tiros.", imagen:"button.png", precio:3000},    
    {id:8, nombre:"Flechas - Fivics Ninja (x1)", descripcion:"Incluye Timones, Nocks y Punta balistica.", imagen:"Flechas.png", precio:2200}
]; */

fetch('https://api.bluelytics.com.ar/v2/latest')
.then(response => response.json())
.then(data => {
    localStorage.setItem("cotizacion", JSON.stringify(data.blue.value_sell))
})

const cotizaionUSD = JSON.parse(localStorage.getItem("cotizacion"));

fetch('js/productos.json')
.then(response => response.json())
.then(data => {
    localStorage.setItem("productos", JSON.stringify(data))
})


function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos"));
}

function verProducto(id) {
    localStorage.setItem("ver_producto", id);
    document.location = "ver-producto.html";
}