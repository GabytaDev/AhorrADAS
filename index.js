// funciones nav bar
const botonBalance = document.getElementById("balance")
const botonCategorias = document.getElementById("categorias")
const botonReportes = document.getElementById("reportes")

let seccionCategorias = document.querySelector(".seccion-categorias")
let seccionPortada = document.querySelector(".seccion-portada")
let seccionReportes = document.querySelector(".seccion-reportes")

botonCategorias.onclick = (event) => {
    event.preventDefault();
    seccionCategorias.classList.remove("is-hidden")
    seccionPortada.classList.add("is-hidden")  
    seccionReportes.classList.add("is-hidden")
}


botonBalance.onclick = (event) => {
    event.preventDefault();
    seccionPortada.classList.remove("is-hidden")
    seccionCategorias.classList.add("is-hidden")
    seccionReportes.classList.add("is-hidden")
}

botonReportes.onclick = (event) => {
    event.preventDefault();
    seccionReportes.classList.remove("is-hidden")
    seccionPortada.classList.add("is-hidden")
    seccionCategorias.classList.add("is-hidden")
}

// menu mobile

let navbarBurger = document.querySelector (".navbar-burger")
let navbarMenu = document.querySelector(".navbar-menu")
const botonBurger = document.getElementById("btnBurger")

botonBurger.onclick = () => {
    navbarBurger.classList.toggle("is-active")
    navbarMenu.classList.toggle("is-active")
}


//funcion ocultar filtros//

const botonOcultarFiltros = document.querySelector(".ocultar-filtros");
const containerFiltros = document.querySelector(".container-filtros");

botonOcultarFiltros.onclick = (event) => {
    event.preventDefault()
    containerFiltros.classList.toggle("is-hidden")

    if (botonOcultarFiltros.textContent === "Ocultar filtros"){
        botonOcultarFiltros.textContent = "Mostrar Filtros"
    }
    else{
        botonOcultarFiltros.textContent = "Ocultar filtros"
    }
   
}

//funcion nueva operacion

const btnNuevaOperacion = document.getElementById("btn-nueva-operacion")
const seccionNuevaOperacion = document.querySelector(".seccion-nueva-operacion")

btnNuevaOperacion.onclick = () => {
    seccionNuevaOperacion.classList.remove("is-hidden");
    seccionPortada.classList.add("is-hidden")
}

//funcion btn cancelar operacion
const btnCancelarOperacion = document.getElementById("btn-cancelar-operacion")

btnCancelarOperacion.onclick = () => {
    seccionNuevaOperacion.classList.add("is-hidden");
    seccionPortada.classList.remove("is-hidden")
}

//funcion editar categoría

///secion-categorías seleccionado mas arriba///
const btnEditarCategoria = document.getElementById("btn-editar-categoria")
const seccionEditCategoria = document.getElementById("seccion-edit-categoria")

btnEditarCategoria.onclick = () => {
    seccionEditCategoria.classList.remove("is-hidden")
    seccionCategorias.classList.add("is-hidden")
}

//funcion btn cancelar en editar categoria
const btnCancelarEditarCat = document.getElementById("btn-cancear-editar-categoria")

btnCancelarEditarCat.onclick = () => {
    seccionEditCategoria.classList.add("is-hidden")
    seccionCategorias.classList.remove("is-hidden")
}



