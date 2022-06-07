function validarFormulario() {

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let localidad = document.getElementById("localidad").value;
    let provincia = document.getElementById("provincia").value;

    let errors = []
     

    direccion.length == 0 && errors.push("error_direccion") && Toastify({
        text: "Ingrese un valor para el campo Dirección!",        
        duration: 5000,
        gravity: 'top',
        position: 'center', 
        style: {
            color: 'white',
            background: 'Red',
            padding: '20px'           
        }       
        }).showToast();

    telefono.length != 14 && errors.push("error_telefono")  && Toastify({
        text: "Ingrese correctamenteun valor para el campo Telefono! Debe tener 13 caracteres.",        
        duration: 5000,
        gravity: 'top',
        position: 'center', 
        style: {
            color: 'white',
            background: 'Red',
            padding: '20px'           
        }       
        }).showToast();

    email.indexOf("@") == -1 && errors.push("error_email2") && Toastify({
        text: "Ingrese correctamente el Email para el campo Email!",        
        duration: 5000,
        gravity: 'top',
        position: 'center', 
        style: {
            color: 'white',
            background: 'Red',
            padding: '20px'           
        }       
        }).showToast();


    email.length == 0 && errors.push("error_email1") && Toastify({
        text: "Ingrese un valor para el campo Email!",        
        duration: 5000,
        gravity: 'top',
        position: 'center', 
        style: {
            color: 'white',
            background: 'Red',
            padding: '20px'           
        }       
        }).showToast();
    
    nombre.length == 0 && errors.push("error_nombre") && Toastify({
        text: "Ingrese un valor para el campo Nombre!",        
        duration: 5000,
        gravity: 'top',
        position: 'center',            
        style: {
            color: 'white',
            background: 'Red',
            padding: '20px',                        
        }
        }).showToast();
    
        
    if(errors.length) {
        return false
    }
    
    
    let datos_formulario = {usuario_nombre:nombre, usuario_email:email, usuario_telefono:telefono, usuario_direccion:direccion, usuario_localidad:localidad, usuario_provincia:provincia};    
    localStorage.setItem("datos_formulario", JSON.stringify(datos_formulario));    
    document.location = "confirmacion.html";
}

document.getElementById("boton_enviar").addEventListener("click", validarFormulario);