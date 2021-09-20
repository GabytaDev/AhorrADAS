
const botonBalance = document.getElementById("balance")
const botonCategorias = document.getElementById("categorias")
const botonReportes = document.getElementById("reportes")

let seccionCategorias = document.querySelector(".seccion-categorias")
let seccionPortada = document.querySelector(".seccion-portada")

seccionCategorias.style.display = "none"

botonCategorias.onclick = () => {
    seccionPortada.style.display = "none"
    seccionCategorias.style.display = "block"  
}

botonBalance.onclick = () => {
    seccionPortada.style.display = "block"
    seccionCategorias.style.display = "none"
}