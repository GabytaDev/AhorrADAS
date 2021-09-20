
const botonBalance = document.getElementById("balance")
const botonCategorias = document.getElementById("categorias")
const botonReportes = document.getElementById("reportes")

let seccionCategorias = document.querySelector(".seccion-categorias")
let seccionPortada = document.querySelector(".seccion-portada")
let seccionReportes = document.querySelector(".seccion-reportes")

seccionCategorias.style.display = "none"
seccionReportes.style.display = "none"

botonCategorias.onclick = () => {
    seccionPortada.style.display = "none"
    seccionCategorias.style.display = "block"  
}

botonBalance.onclick = () => {
    seccionPortada.style.display = "block"
    seccionCategorias.style.display = "none"
    seccionReportes.style.display = "none"
}

botonReportes.onclick = () => {
    seccionReportes.style.display = "block"
    seccionPortada.style.display = "none"
    seccionCategorias.style.display = "none"

}