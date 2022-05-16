"use strict";

var _technology = _interopRequireDefault(require("./classes/technology.js"));

var _technologies = _interopRequireDefault(require("./arrays/technologies.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Para el menu de navegacion cambie de color cada que esta en una seccion diferente
var navbar = document.querySelector(".navbar__items");
var indicador = document.querySelector(".indicadorInferior");
var secciones = document.querySelectorAll(".seccion");
var indicadorNav = navbar.querySelectorAll('a');
indicador.style.width = 140 + 'px';
var observer = new IntersectionObserver(function (secciones, observer) {
  secciones.forEach(function (seccion) {
    if (seccion.isIntersecting) {
      var indexSeccionActiva = seccion.target.id - 1;
      indicador.style.transform = "translateX(".concat(140 * indexSeccionActiva, "px)");
      indicadorNav.forEach(function (item) {
        item.classList.remove("active");
      });
      indicadorNav[indexSeccionActiva].classList.add('active');
    }
  });
}, {
  rootMargin: '-100px 0px 0px 0px',
  threshold: [0.5]
});
secciones.forEach(function (element) {
  return observer.observe(element);
}); //--- Areglar el cambio de tamaño de la pantala

var onResize = function onResize() {
  navbar.querySelector('a').offsetWidth;
};

window.addEventListener('resize', onResize); //// Para mostrar el menu cuando estoy en movil y tablet

var menu = document.querySelector(".navbar__menu");
menu.addEventListener('click', function () {
  if (navbar.classList.contains('menu_active')) {
    navbar.classList.remove('menu_active');
  } else {
    navbar.style.transition = "2s ease-in-out;";
    navbar.classList.add('menu_active');
  }
}); // Para las diversas tecnologias que manejo

window.onload = function iniciar() {
  _technologies["default"].map(function (tech) {
    var card = new _technology["default"](tech.nombre, tech.ruta);
    mostrarTecnologias(card);
  });
};

var element = document.getElementById("tecnologias__cards");

function mostrarTecnologias(tecnologia) {
  var card = document.createElement('div');
  card.classList = "card";
  card.innerHTML = "\n    <figure >\n      <img src=".concat(tecnologia.getImg(), " alt=").concat(tecnologia.getNombre(), " class =\"card__img\" >\n      </img>\n    </figure>\n    <div class=\"card__name\">\n      <p>").concat(tecnologia.getNombre(), "</p>\n    </div\n    ");
  element.appendChild(card);
} // Para los proyectos


window.addEventListener('load', function () {
  new Glider(document.querySelector('.carousel__lista'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente"
    },
    responsive: [{
      // screens greater than >= 775px
      breakpoint: 320,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 1,
        slidesToScroll: 1,
        duration: 5
      }
    }, {
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        duration: 5
      }
    }, {
      // screens greater than >= 1024px
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }]
  });
}); // --------- Botón de enviar mensaje 

var enviar = document.querySelector(".form_submit");
enviar.addEventListener("click", function () {
  alert("Correo enviado");
});