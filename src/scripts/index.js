// Para el menu de navegacion
const navbar = document.querySelector(".navbar__items")
const indicador = document.querySelector(".indicadorInferior")
const secciones = document.querySelectorAll(".seccion")

let indicadorNav = navbar.querySelectorAll('a')
indicador.style.width = 140+ 'px'


const observer = new IntersectionObserver((secciones, observer) => {
  secciones.forEach((seccion)=> {
    if (seccion.isIntersecting) {
      let indexSeccionActiva = seccion.target.id- 1
      indicador.style.transform = `translateX(${140*(indexSeccionActiva )}px)`;
      // indicador.style.transform = `translateX(${140*(indexSeccionActiva)}px)`
      indicadorNav.forEach((index) =>{
        index.classList.remove("active")
        
      })
      indicadorNav[indexSeccionActiva].classList.add('active')
      // console.log()
    }
  })
}, {
  rootMargin:'-100px 0px 0px 0px',
  threshold : 0.2
});

secciones.forEach(element => observer.observe(element));
//--- Areglar el cambio de tamaño de la pantala
const onResize= () => {
  navbar.querySelector('a').offsetWidth
}
window.addEventListener('resize', onResize)

// Para las diversas tecnologias que manejo
import Tech from "./classes/technology.js";
import arrayTech from "./arrays/technologies.js"

window.onload = function iniciar () {
  arrayTech.map(tech => {
    const card = new Tech(tech.nombre, tech.ruta);
    mostrarTecnologias(card)
  })
}

const element = document.getElementById("tecnologias__cards");

function mostrarTecnologias(tecnologia){
  const card = document.createElement('div')
  card.classList = "card";
  card.innerHTML =`
    <figure >
      <img src=${tecnologia.getImg()} alt=${tecnologia.getNombre()} class ="card__img" >
      </img>
    </figure>
    <div class="card__name">
      <p>${tecnologia.getNombre()}</p>
    </div
    `
  element.appendChild(card)
}
