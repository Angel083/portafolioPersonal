// Para el menu de navegacion cambie de color cada que esta en una seccion diferente
const navbar = document.querySelector(".navbar__items")
const indicador = document.querySelector(".indicadorInferior")
const secciones = document.querySelectorAll(".seccion")

let indicadorNav = navbar.querySelectorAll('a')
indicador.style.width = 140+ 'px'


const observer = new IntersectionObserver((secciones, observer) => {
  secciones.forEach((seccion)=> {
    if (seccion.isIntersecting) {
      let indexSeccionActiva = seccion.target.id -1
      indicador.style.transform = `translateX(${140*(indexSeccionActiva )}px)`;
      indicadorNav.forEach((item) =>{
        item.classList.remove("active")
      })
      indicadorNav[indexSeccionActiva].classList.add('active')
    }
  })
}, {
  rootMargin:'-100px 0px 0px 0px',
  threshold : [0.5]
});

secciones.forEach(element => observer.observe(element));
//--- Areglar el cambio de tamaño de la pantala
const onResize= () => {
  navbar.querySelector('a').offsetWidth
}
window.addEventListener('resize', onResize)
//// Para mostrar el menu cuando estoy en movil y tablet
const menu = document.querySelector(".navbar__menu")
menu.addEventListener( ('click') , () => {
  if (navbar.classList.contains('menu_active')) {
    navbar.classList.remove('menu_active')
  }
  else{
    navbar.style.transition = ("2s ease-in-out;")
    navbar.classList.add('menu_active')
  }
})



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
      <img src=${tecnologia.getImg()} alt='${tecnologia.getNombre()}' class ="card__img" >
      </img>
    </figure>
    <div class="card__name">
      <p>${tecnologia.getNombre()}</p>
    </div
    `
  element.appendChild(card)
}


// Para los proyectos

window.addEventListener('load', function () {
  new Glider(document.querySelector('.carousel__lista'),{
    slidesToShow    : 1,
    slidesToScroll  : 1,
    draggable       : true,
    arrows          : {
      prev  : ".carousel__anterior",
      next  : ".carousel__siguiente"
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 320,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 1,
          slidesToScroll: 1,
          duration: 5
        }
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          duration: 5
        }
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  })
})

// --------- Botón de enviar mensaje 
const enviar = document.querySelector(".form_submit")
enviar.addEventListener(("click"), () => {
  alert("Correo enviado")
})