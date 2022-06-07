function renderProducto() {
    let id = localStorage.getItem("ver_producto");
    let producto = buscarProducto(id);
    let contenido_producto = document.getElementById("contenido_producto");
    
    
    let columna1 = document.createElement("div");
    columna1.className = "col-md-4 offset-md-2";    
    let imagen = document.createElement("img");
    imagen.src = "images/" + producto.imagen;
    imagen.className = "img-fluid";    
    columna1.appendChild(imagen);    
    contenido_producto.appendChild(columna1);

    
    let columna2 = document.createElement("div");
    columna2.className = "col-md-4";
    let encabezado = document.createElement("h3");
    encabezado.innerText = producto.nombre;
    let descripcion = document.createElement("p");
    descripcion.className = "lead";
    descripcion.innerText = producto.descripcion;    
    let precioUSD = document.createElement("p");
    precioUSD.innerHTML = `<b>USD ${parseFloat(producto.precio/cotizaionUSD).toFixed(2)}</b>`;
    let precio = document.createElement("p");
    precio.innerHTML = `<b>$${producto.precio}</b>`;
    let boton = document.createElement("button");
    boton.onclick = () => {
        agregarAlCarrito(producto.id);
    }
    boton.className = "btn btn-warning";
    boton.innerHTML = "Agregar";
    
    columna2.appendChild(encabezado);
    columna2.appendChild(descripcion);
    columna2.appendChild(precioUSD);
    columna2.appendChild(precio);
    columna2.appendChild(boton);    
    contenido_producto.appendChild(columna2);
}

renderProducto();
actualizarBotonCarrito();