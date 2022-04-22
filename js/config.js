recibeNombre()

function recibeNombre() {
    let nodoNombreUsuario = document.querySelector(".nombreUsuario")

    let nodoBienvenida = document.querySelector(".bienvenida")
    let nodoBienvenido = document.querySelector(".bienvenido")
    let nodoBienvenidao = document.querySelector(".bienvenidao")



nodoNombreUsuario.addEventListener('change', ()=>{
    
    localStorage.setItem('nombre', nodoNombreUsuario.value)
})

    
}



