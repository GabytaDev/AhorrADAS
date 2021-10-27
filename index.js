//elementos del DOM //
const botonBalance = document.getElementById("balance")
const botonCategorias = document.getElementById("categorias")
const botonReportes = document.getElementById("reportes")

let seccionCategorias = document.querySelector(".seccion-categorias")
let seccionPortada = document.querySelector(".seccion-portada")
let seccionReportes = document.querySelector(".seccion-reportes")

// Informacion Objeto creado
const operaciones = [
    {
        descripcion: 'Cena con amigos',
        categoria: 'salidas',
        fecha: '25/09/2021',
        monto: 2500,
        tipo: 'gasto',
    },
    {
        descripcion: 'sueldo',
        categoria: 'trabajo',
        fecha: '01/09/2021',
        monto: 50000,
        tipo: 'ganancia',
    },
    {
        descripcion: 'pagar monotributo',
        categoria: 'trabajo',
        fecha: '01/09/2021',
        monto: 40000,
        tipo: 'gasto',
    },
    {
        descripcion: 'Aguinaldo',
        categoria: 'trabajo',
        fecha: '15/09/2021',
        monto: 25000,
        tipo: 'ganancia',
    },
    {
        descripcion: 'Comida para gatos',
        categoria: 'mascotas',
        fecha: '25/09/2021',
        monto: 3000,
        tipo: 'gasto',
    },
    {
        descripcion: 'alquiler',
        categoria: 'servicios',
        fecha: '25/09/2021',
        monto: 25000,
        tipo: 'gasto',
    },
    {
        descripcion: 'expensas',
        categoria: 'servicios',
        fecha: '01/09/2021',
        monto: 5000,
        tipo: 'gasto',
    },
];

const seccionOperaciones = document.querySelector("#mostrar-operaciones")
const mostrarOperacionesEnHTML = (array) => {
    let acc = ""
    array.map((operacion) => {
        acc = acc +
    `<div class="mb-3">
         <div class="columns is-multiline is-mobile is-vcentered">
             <div class="column is-3-tablet is-6-mobile">
            <h3 class="has-text-weight-semibold">${operacion.descripcion}</h3>
        </div>
        <div class="column is-3-tablet is-6-mobile has-text-right-mobile">
            <span class="tag is-primary is-light">${operacion.categoria}</span>
        </div>
        <div
            class="column is-2-tablet has-text-grey is-hidden-mobile has-text-right-tablet">
            ${operacion.fecha}
        </div>
        <div
            class="column is-2-tablet is-6-mobile has-text-weight-bold has-text-right-tablet is-size-4-mobile has-text-success">
            ${operacion.monto}
        </div>
        <div class="column is-2-tablet is-6-mobile has-text-right">
            <p class="is-fullwidth">
                <a href="#" class="mr-3 is-size-7 edit-link">Editar</a>
                <a href="#" class="is-size-7 delete-link">Eliminar</a>
            </p>
        </div>
        </div>
    </div>`
        
    })
    seccionOperaciones.innerHTML = acc
}

mostrarOperacionesEnHTML(operaciones)

const filtroTipo = document.querySelector("#filtro-tipo")
const filtroCategoria = document.querySelector("#filtro-categoria")
const aplicarFiltros = ()=>{
    const tipo = filtroTipo.value 
    const filtradoPorTipo = operaciones.filter((operacion)=>{
        if(tipo === "todos"){
            return operacion
        }
        return operacion.tipo === tipo
    })

    const categoria = filtroCategoria.value
    const filtradoFinal = filtradoPorTipo.filter((operacion)=>{
        if(categoria === "todos"){
            return operacion
        }
        return operacion.categoria === categoria
    })
    return filtradoFinal
}

filtroTipo.onchange = ()=>{
    const arrayFiltrado = aplicarFiltros()
    mostrarOperacionesEnHTML(arrayFiltrado)
}

filtroCategoria.onchange = ()=>{
    const arrayFiltrado = aplicarFiltros()
    mostrarOperacionesEnHTML(arrayFiltrado)
}
//formulario balance//

const formularioFiltros = document.querySelector("#formulario-filtros")

// funciones nav bar
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

let navbarBurger = document.querySelector(".navbar-burger")
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

    if (botonOcultarFiltros.textContent === "Ocultar filtros") {
        botonOcultarFiltros.textContent = "Mostrar Filtros"
    }
    else {
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

//funcion nueva operacion carga de formulario
// const formularioNuevaOperacion = document.querySelector("#form-nueva-operacion")
// const operaciones = [
//     {
//         descripcion: "",
//         monto: "",
//         tipo: "",
//         categoria:"",
//         fecha:""
//     }
// ]

// const NuevaOperacion = () => {

// }



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



