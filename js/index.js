let nodoContenedor = document.getElementById("contenedor");

let letra = document.querySelector(".daLetra");

let nodoLogo = document.querySelector(".logo")

let nodoContenedorNombre = document.querySelector(".contenedorNombre")


nodoContenedorNombre.innerHTML= `<div class='cuadrado'> <h2> Bienvenida/o <h2> </div>`




letra.addEventListener('change', ()=>{
    if (letra.value.trim()!=='') {
        
        nodoContenedor.classList.add=("vacio")

        nodoContenedor.innerHTML= ''
       
        let resultado = canciones.filter((wesa) => wesa.lyrics.toLocaleLowerCase().includes(letra.value))

         if (resultado==false) {
            nodoContenedor.innerHTML= `<div class='cajita'><h2>No encontré canciones que contengan esa palabra</h2> <br> 
            <h3> Quizás sea porque: <br><br>
            -No hay canciones de Tan Biónica que tengan esa palabra <br>
            -Si la palabra lleva tilde tenés que ponérsela <br>
            -No pongas mayúsculas<br><br>
            
            Faltan agregar las de chano solista y arrelgar algunas cositas, cuando tenga tiempo actualizo la pag xd <br> <br>
            Cualquier error o sugerencia mandarla a luka.diazarcusa <img src="styles/img/insta.svg"> <br><br>

            Errores que tengo que arreglar pero que todavía no sé porque programadorn't: <br><br>
            - Detecta no solo palabras sino también todo lo que coincida (Por ej si ponés "ola" detecta ola y hola, debería detectar solo ola)<br>

            - Las palabras que coincidan deberían ponerse en negrita, pero solo se pone la primera que coincida y no todas.<br>

            - Escribir mayúsculas hace que no funcione <br>
            </h3></div>`
        }
        


        for(encontrado of resultado){

        let boldeado =  encontrado.lyrics.replace(`${letra.value}`, `<b>${letra.value}</b>`)

       nodoContenedor.innerHTML += `<div class='cajita ${encontrado.hechoPor}'><h2>${encontrado.nombre}</h2><h3>Album: ${encontrado.album}</h3><p>${boldeado}</p></div>`


       
        
        } 
        nodoContenedorNombre.innerHTML= ""
    }
    
    else {
        
    }

   
    }
    
)

let nodoNombreUsuario = document.querySelector(".nombreUsuario")

let nodoNombreUsuarioJson = JSON.stringify(nodoNombreUsuario.value)

localStorage.setItem("nombreUsuarioSet", nodoNombreUsuarioJson)

let nombreUsuarioStorage = localStorage.getItem('nombreUsuarioSet')



if (nodoNombreUsuario.value.trim()!=='') {

nodoContenedorNombre.innerHTML= `<div class='cuadrado'><h2> Bienvenida/o ${nombreUsuarioStorage} </h2><div>`

}
else{ }