function cargarProductos() {
    let productos = cargarProductosLS();
    let contenido = "";

    for (const producto of productos) {
        contenido += `<div class="col-md-3">
        <div class="card my-2">
        <a href="#" onclick="verProducto(${producto.id});"><img src="images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}"></a>
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion}</p>
        <p class="badge bg-dark text-wrap" style="width: 6rem;">USD ${parseFloat(producto.precio/cotizaionUSD).toFixed(2)}</p>
        <p class="card-text">$${producto.precio}</p>        
        <a href="#" class="btn btn-primary" onclick="agregarAlCarrito(${producto.id});">Agregar</a>
        </div>
        </div>
        </div>`;
    }

    document.getElementById("productos").innerHTML = contenido;
}

cargarProductos();
actualizarBotonCarrito();