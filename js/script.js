

function filterCards(selectedCategories) {
    // seleccionamos las tarjetas
    const cards = document.querySelectorAll(".card");
    // Iterar cada card
    for (let card of cards) {
        // Obtener las categorias de las cards
        let cardCategories = JSON.parse(card.dataset.categories);

        // Comprobar si las categorías seleccionadas se superponen con las categorías de la tarjeta
        let overlap = selectedCategories.some(selectedCategory => cardCategories.includes(selectedCategory));
        
        // Mostramos cada card cuya categoria haya sido seleccionada o se se a seleccionado all
        if (overlap || selectedCategories.includes("all")) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
};

// select filters
const filters = document.querySelectorAll(".filter-btn");

// add click event listeners to filters
for (let filter of filters) {
  filter.addEventListener("click", function() {
    
    // remove the "active" class from all filters
    for (let f of filters) {
      f.classList.remove("active");
    }

    // add the "active" class to the clicked filter
    this.classList.add("active");

    // get the selected categories
    let selectedCategories = [...filters].filter(f => f.classList.contains("active")).map(f => f.dataset.category);

    // filter the cards
    filterCards(selectedCategories);
  });
};





// Controles del carrusel -------------------------------------------

// Obtenemos elementos por sus clases
const videos = [...document.querySelectorAll(".video_wrapper")];
const arrowAfter = document.querySelector('#after');
const arrowBefore = document.querySelector('#before');
let valor;



arrowAfter.addEventListener('click',()=>changePosition(1));
arrowBefore.addEventListener('click',()=>changePosition(-1));

function changePosition(cambio){
  let currentElement = Number(document.querySelector('.video_wrapper--show').dataset.id);

  valor = currentElement;
  valor += cambio;

  if(valor === 0 || valor == videos.length+1){
    valor = valor === 0 ? videos.length : 1;
  }

  videos[currentElement-1].classList.toggle('video_wrapper--show');
  videos[valor-1].classList.toggle('video_wrapper--show');

};
