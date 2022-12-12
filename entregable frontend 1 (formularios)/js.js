const email = document.getElementById('email') // input email
const user = document.getElementById('user') // input user
const psw = document.getElementById('password') // input psw
const messagebox = document.querySelector('.message') // alertbox para la función notemptyplease
const messageboxpsw = document.querySelector('.messagepsw') // alertbox abajo del input de password
const messageemail = document.querySelector('.messageemail') // alertbox abajo del input de email
const allform = document.querySelector('.test') // toda la división del form para ocultarla llegado el momento
const sent = document.querySelector('.sent') // división oculta para mostrar un success cuando se envia el form
const messageuser = document.querySelector('.messageuser') // alertbox abajo del input de user

document.getElementById("miformulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const validacion1 = notemptyplease(psw) 
    const validacion2 = notemptyplease(user)
    const validacion3 = notemptyplease(email)
    if (validacion1 == true && validacion2 == true && validacion3 == true) {  // VERIFICA QUE NO ESTEN VACIOS Y EJECUTA CONFIRMACIONES
        messagebox.innerHTML = " "
    const validacion4 = passwordchecker(psw);
    const validacion5 = userchecker(user);
    const validacion6 = emailchecker(email)
    if (validacion4 == true && validacion5 == true && validacion6 == true) {
        alert("Todo en orden! Enviando formulario")
        allform.style.opacity = "0%"
        sent.style.opacity = "100%"
        // e.currentTarget.submit(); // ENVIA EL FORM DESPUES DE REVISAR LO DEBIDO.
    }
    }
  });


function notemptyplease (input) {
    if (input.value.length == 0) {
        input.style.border = "dashed"
        input.style.color = "red"
        input.style.borderwidth = "1px" 
        messagebox.innerHTML = "Los campos marcados con rojo han quedado vacios y no podemos procesar tu solicitud mientras así permanezcan."
        }
    else {
        input.style.border = "inset"
        input.style.color = "green"
        console.log("Campos con texto.")
        return true
    }
}


function passwordchecker (contraseña) {
        if(contraseña.value.length >= 8 && contraseña.value.includes(1,2,3,4,5,6,7,8,9)) {
            console.log("Contraseña validada.")
            contraseña.style.border = "inset"
            contraseña.style.color = "green"
            messageboxpsw.innerHTML = "Contraseña válida!"
            return true
        }
        else {
        contraseña.style.border = "dashed"
        contraseña.style.color = "red"
        messageboxpsw.innerHTML = "La contraseña debe incluir al menos 8 caracteres de los cuales debe haber por lo menos un número."
        return false
        }
}

function userchecker (usuario) {
        if(usuario.value.length >= 5 && usuario.value.length < 10) {
            console.log("Usuario validado")
            usuario.style.border = "inset"
            usuario.style.color = "green"
            messageuser.innerHTML = "Usuario válido!"
            return true
        }
        else {
        usuario.style.border = "dashed"
        usuario.style.color = "red"
        messageuser.innerHTML = "Como mínimo 5 caracteres para el usuario"
        return false
        }
}

function emailchecker (email) {
    if(email.value.length > 6 && email.value.includes("@") && email.value.includes(".com", ".net")) {
        console.log("Mail validado")
        email.style.border = "inset"
        email.style.color = "green"
        messageemail.innerHTML = "Email válido!"
        return true
    }
    else {
        email.style.border = "dashed"
        email.style.color = "red"
        messageemail.innerHTML = "E-mail incorrecto!"
    return false
    }
}