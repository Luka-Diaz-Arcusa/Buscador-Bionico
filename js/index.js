init()

function init() {
    detectaLyrics()
    nombreSaludo()
    lupa()
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
                        console.log();
                         if (nodoPalabra[clase].classList.length==4) {

                               nodoPalabra[clase].classList.remove('vacio')
                         }
                         else {
                               nodoPalabra[clase].classList.add('vacio')
                         }
                    }
                    
                }
                
}

//Hace aparecer las canciones
function detectaLyrics() {
    let nodoContenedorNombre = document.querySelector(".contenedorNombre")

    let nodoContenedor = document.getElementById("contenedor");

    let letra = document.querySelector(".daLetra");

    //Clase del triangulo
    let claseImagen = ['trianguloevento']

    let nodoSeccion = document.getElementsByClassName('seccion')

    //Círculo de carga
    let nodoCarga = document.querySelector('.carga');
    nodoCarga.classList.add("vacio");
   
    //letra es el nodo del input del header
    letra.addEventListener('change', () => {
        nodoCarga.classList.remove("vacio")
        //SetTimeout Para que funcione el círculo de carga
        setTimeout(() => {
            
            //Para detectar que no se envíe formulario vacío
            if (letra.value.trim() !== '') {

                //Hace desaparecer las que se detectaron antes por las nuevas
                nodoContenedor.innerHTML = ''
                
                //Filtra las canciones
                let resultado = canciones.filter((wesa) => wesa.lyrics.toLocaleLowerCase().includes(letra.value))

                //Si no encuentra nada
                if (resultado == false) {
                    nodoContenedor.innerHTML = `<div class='cajita'><h2>No encontré canciones que contengan esa palabra</h2> <br> 
                    <h3> Quizás sea porque: <br><br>
                    -No hay canciones de Tan Biónica que tengan esa palabra <br>
                    -Si la palabra lleva tilde tenés que ponérsela <br>
                    -No pongas mayúsculas<br><br>
                    
                    Cualquier error o sugerencia mandarla a luka.diazarcusa <img src="styles/img/insta.svg"> <br><br>
        
                    Errores que tengo que arreglar pero que todavía no sé porque programadorn't: <br><br>
                    - Detecta no solo palabras sino también todo lo que coincida (Por ej si ponés "ola" detecta ola y hola, debería detectar solo ola)<br>
        
                    - Escribir mayúsculas hace que no funcione <br>
                    </h3></div>`
                }
                else{

               
        
                //
                for (let encontrado of resultado) {

                    //cosa rara que tuve que hacer para que cada triangulo tenga la clase que le corresponde
                    claseImagen.length > 1 ? claseImagen.splice(1,1) && claseImagen.push(encontrado.id) : claseImagen.push(encontrado.id)

                    
                    let epa = claseImagen.toString().replace(/,/g," ")

                    //boldeado les pone negrita a las que coincidan
                    let boldeado = encontrado.lyrics.replaceAll(`${letra.value}`, `<b>${letra.value}</b>`)
                    
                    nodoContenedor.innerHTML+=`<div class='seccion'><div class='cajaTitulo ${encontrado.hechoPor}'><h2>${encontrado.nombre}</h2></div>
                    <div class="${epa} contenedorImagen bttn-unite bttn-royal cajaTriangulo"><div class='triangulo'></div></div>
                    <div class='cajaTexto vacio palabra ${encontrado.id}'><p>${boldeado}</p></div></div>`
                    
               
                }
    
                
           
                //Quita el bienvenida/o
                nodoContenedorNombre.innerHTML = ""

                eventoTriangulo()

             }
                
            }   
            
            else {}
            
            //El loader se va
            nodoCarga.classList.add("vacio");
           
        }, 1)
    
    })
    
}


//Dice bienvenida/o según lo que colocaste en config.html
function nombreSaludo() {

    let nodoContenedorNombre = document.querySelector(".contenedorNombre")
    let nombreGet = localStorage.getItem('nombre')

    nombreGet!==null ? nodoContenedorNombre.innerHTML = `<div class="cuadrado"> <h2> Bienvenida/o ${nombreGet} <h2> </div>` : nodoContenedorNombre.innerHTML = `<div class="cuadrado"> <h2> Bienvenida/o<h2> </div>`   
}


