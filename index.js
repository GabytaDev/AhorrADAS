
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
