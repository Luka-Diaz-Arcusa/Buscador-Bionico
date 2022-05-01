recibeNombre()
cambiaSaludo()
quitaNombre()

function recibeNombre() {
    let nodoNombreUsuario = document.querySelector(".nombreUsuario")

    nodoNombreUsuario.addEventListener('change', ()=>{
    localStorage.setItem('nombre', nodoNombreUsuario.value)
    localStorage.removeItem('sinNombre')
})

    
}

function cambiaSaludo() {
    let nodoBienvenida = document.querySelector(".bienvenida")
    let nodoBienvenido = document.querySelector(".bienvenido")
    let nodoBienvenidao = document.querySelector(".bienvenidao")
    let nodomiVida = document.querySelector(".miVida")

    nodoBienvenida.addEventListener('click', ()=>{
        localStorage.setItem('saludo', nodoBienvenida.textContent)
    })

    nodoBienvenido.addEventListener('click', ()=>{
        localStorage.setItem('saludo', nodoBienvenido.textContent)
    })
    nodoBienvenidao.addEventListener('click', ()=>{
        localStorage.setItem('saludo', nodoBienvenidao.textContent)
    })
    nodomiVida.addEventListener('click', ()=>{
        localStorage.setItem('saludo', nodomiVida.textContent)
    })

}

function quitaNombre() {
      let nodoSinNombre = document.querySelector(".sinNombre")
      nodoSinNombre.addEventListener('click',()=>{
        localStorage.setItem('sinNombre', '')
      })
}


