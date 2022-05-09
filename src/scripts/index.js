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
