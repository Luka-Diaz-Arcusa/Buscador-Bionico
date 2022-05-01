init()

function init() {
    detectaLyrics()
    nombreSaludo()
    lupa()
    filtrar()
    
}

// Lupa que está en el buscador
function lupa() {
    let nodoLupa = document.querySelector("#lupa")
    nodoLupa.addEventListener('click', ()=>{
        detectaLyrics()
    })
}

//Evento que abre los lirycs al clickear en triángulos
function eventoTriangulo(){

    let nodoEventoTriangulo = document.getElementsByClassName("trianguloevento")
    let nodoPalabra = document.getElementsByClassName("palabra")
    let numeritoID = 0
    
                for(elemento of nodoEventoTriangulo){
               
                    //Le agrega un ID distinto a cada triángulo para luego usarlo para abrir los lirycs
                    elemento.setAttribute('id', numeritoID)

                    numeritoID+=1

                    elemento.onclick=(e)=>{
                        
                        let clase = e.target.getAttribute('id')
                      
                         if (nodoPalabra[clase].classList.length==4) {

                               nodoEventoTriangulo[clase].classList.add('rotate')
                               nodoPalabra[clase].classList.remove('vacio')
                         }
                         else {
                               nodoPalabra[clase].classList.add('vacio')
                               nodoEventoTriangulo[clase].classList.remove('rotate')
                         }
                    }
                    
                }
                
}

//Hace aparecer las canciones
function detectaLyrics() {
    let NodogranDiv = document.querySelector(".granDiv")

    let nodoContenedor = document.getElementById("contenedorLirycs");

    let letra = document.querySelector(".daLetra");

    //Clase del triangulo
    let claseImagen = ['trianguloevento']

    //Círculo de carga
    let nodoCarga = document.querySelector('.carga');
    nodoCarga.classList.add("vacio");
    let nodoContenedorCarga = document.querySelector('.contenedorCarga')

    
   
    //letra es el nodo del input del header
    letra.addEventListener('change', () => {
        nodoContenedorCarga.classList.remove("vacio")
        nodoCarga.classList.remove("vacio")
        
        //SetTimeout Para que funcione el círculo de carga
        setTimeout(() => {
            
            //Para detectar que no se envíe formulario vacío
            if (letra.value.trim() !== '') {

                //Hace desaparecer las que se detectaron antes por las nuevas
                nodoContenedor.innerHTML = ''
 
                //Filtra las canciones 
                let filtroGet = sessionStorage.getItem('filtro')
                let resultadoAlbum = canciones.filter((wasa) => wasa.album == filtroGet)
                let resultadoHechoPor= canciones.filter((wasa) => wasa.hechoPor == filtroGet)
                


       
                // let resultado = canciones.filter((wesa) => wesa.lyrics.toLocaleLowerCase().includes(letra.value))

                //Filtra según el filtro
                let resultado = ''
               
                if (filtroGet=='Todo' || !filtroGet) {

                    resultado=canciones.filter((wesa) => wesa.lyrics.toLocaleLowerCase().includes(letra.value))

                }

                else if (filtroGet=='Tan Bionica' || filtroGet=='Chano'){

                     resultado = resultadoHechoPor.filter((wesa) => wesa.lyrics.toLocaleLowerCase().includes(letra.value))

                }
                else{
        
                    resultado = resultadoAlbum.filter((wesa) => wesa.lyrics.toLocaleLowerCase().includes(letra.value))
               
                }
                
               
                //Si no encuentra nada
                if (resultado == false) {
                    nodoContenedor.innerHTML = `<div class='cajaError'><h2>No encontré canciones que contengan esa palabra</h2> <br> 
                    <h3> Quizás sea porque: <br><br>
                    -No hay canciones de Tan Biónica que tengan esa palabra <br>
                    -Si la palabra lleva tilde tenés que ponérsela <br>
                    -No pongas mayúsculas<br><br>
                    
                    Cualquier error o sugerencia mandarla a @lukadiazarcusa (Twitter) <br><br>
        
                    Errores que tengo que arreglar pero que todavía no sé porque programadorn't: <br><br>
                    - Detecta no solo palabras sino también todo lo que coincida (Por ej si ponés "ola" detecta ola y hola, debería detectar solo ola)<br>
        
                    - Escribir mayúsculas hace que no funcione <br>
                    </h3></div>`
                }
                
                else{

               
        
                
                for (let encontrado of resultado) {

                    //cosa rara que tuve que hacer para que cada triangulo tenga la clase que le corresponde
                    claseImagen.length > 1 ? claseImagen.splice(1,1) && claseImagen.push(encontrado.id) : claseImagen.push(encontrado.id)

                    
                    let epa = claseImagen.toString().replace(/,/g," ")

                    //boldeado les pone negrita a las que coincidan
                    let boldeado = encontrado.lyrics.replaceAll(`${letra.value}`, `<b>${letra.value}</b>`)
                    
                    nodoContenedor.innerHTML+=`
                    <div class='seccion'>
                    <div class='cajaTitulo ${encontrado.hechoPor}'><h2>${encontrado.nombre}</h2></div>

                    <div class="${epa} contenedorImagen bttn-unite bttn-royal cajaTriangulo"><div class='triangulo'></div></div>

                    <div class='cajaTexto vacio palabra ${encontrado.id}'>
                    <h3>
                    De: ${encontrado.hechoPor} <br>
                    Álbum: ${encontrado.album} 
                    </h3>
                 
                    <p>${boldeado}</p></div>
                    </div>`
                    
               
                }
    
                
           
                eventoTriangulo()

             }
                
            }   
            
            else {}
            
            //El loader se va
            nodoCarga.classList.add("vacio");
            nodoContenedorCarga.classList.add("vacio")

            //Quita el saludo y contenedor filtro
            NodogranDiv.classList.add("vacio")

           
        }, 1)
    
    })
    
}

function filtrar() {
    let nodoTituloContenedorFiltro = document.querySelector(".contenedorTituloFiltro")
    let nodoTituloFiltro = document.querySelector(".tituloFiltro")
    let nodoTrianguloFiltro = document.querySelector(".trianguloFiltro")
    let nodoFiltros = document.querySelector(".filtros")
    let nodoFiltroTodo = document.querySelector(".filtroTodo")
    let nodoFiltroObsesionario = document.querySelector(".filtroObsesionario")
    let nodoFiltroDestinologia = document.querySelector(".filtroDestinologia")
    let nodoFiltroCancionesDelHuracan = document.querySelector(".filtroCancionesDelHuracan")
    let nodoFiltroHolaMundo = document.querySelector(".filtroHolaMundo")
    let nodoFiltroTapaDeModa = document.querySelector(".filtroTapaDeModa")
   
    let nodoFiltroTanBionica = document.querySelector(".filtroTanBionica")
    let nodoFiltroChano = document.querySelector(".filtroChano")


    function cambiaTituloFiltro() {
        let filtroGet = sessionStorage.getItem('filtro')
        if (!filtroGet) {
            nodoTituloFiltro.innerHTML=`Filtrar por: Todo`
        }
        else {
            nodoTituloFiltro.innerHTML=`Filtrar por: ${filtroGet}`
        }
       
    }

    cambiaTituloFiltro()
    
    nodoTituloContenedorFiltro.addEventListener('click', ()=>{
        if (nodoFiltros.classList.length==2) {
            nodoFiltros.classList.remove('vacio')
            nodoTrianguloFiltro.classList.add('otroRotate')
        } 
        else {
            nodoFiltros.classList.add('vacio');
            nodoTrianguloFiltro.classList.remove('otroRotate')
        }

    })

    nodoFiltroObsesionario.addEventListener('click', ()=>{
      
        sessionStorage.setItem('filtro', nodoFiltroObsesionario.textContent);
        cambiaTituloFiltro()

    })

    nodoFiltroDestinologia.addEventListener('click', ()=>{
   
        sessionStorage.setItem('filtro', nodoFiltroDestinologia.textContent);
        cambiaTituloFiltro()
    })

    nodoFiltroTodo.addEventListener('click', ()=>{
   
        sessionStorage.setItem('filtro', nodoFiltroTodo.textContent);
        cambiaTituloFiltro()
    })
  
    nodoFiltroCancionesDelHuracan.addEventListener('click', ()=>{
      
        sessionStorage.setItem('filtro', nodoFiltroCancionesDelHuracan.textContent);
        cambiaTituloFiltro()

    })

    nodoFiltroHolaMundo.addEventListener('click', ()=>{
      
        sessionStorage.setItem('filtro', nodoFiltroHolaMundo.textContent);
        cambiaTituloFiltro()

    })

    nodoFiltroTapaDeModa.addEventListener('click', ()=>{
      
        sessionStorage.setItem('filtro', nodoFiltroTapaDeModa.textContent);
        cambiaTituloFiltro()

    })

    
    nodoFiltroTanBionica.addEventListener('click', ()=>{
      
        sessionStorage.setItem('filtro', nodoFiltroTanBionica.textContent);
        cambiaTituloFiltro()

    })

    
    nodoFiltroChano.addEventListener('click', ()=>{
      
        sessionStorage.setItem('filtro', nodoFiltroChano.textContent);
        cambiaTituloFiltro()

    })
    

}

//Dice bienvenida/o según lo que colocaste en config.html
function nombreSaludo() {

    let nodoContenedorNombre = document.querySelector(".contenedorNombre")
    let nombreGet = localStorage.getItem('nombre')
    let saludoGet = localStorage.getItem('saludo')
    let sinNombreGet = localStorage.getItem('sinNombre')
    
    if (sinNombreGet=='') {
        nodoContenedorNombre.innerHTML = `<h2>${saludoGet}</h2>`
    }
    else {
        nombreGet!==null ? nodoContenedorNombre.innerHTML = `<h2> ${saludoGet} ${nombreGet} <h2>` : nodoContenedorNombre.innerHTML = `<h2> Bienvenida/o <h2>`   
    }

 

}


function emailFalso(r) {

    for (const ea of r) {
        console.log(ea.email);
    }
}


fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(response => response.json())
  .then(r => {

    console.log(r)

    emailFalso(r)
   
  } )

 