// Filtro base datos -------------------------------------------

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
const filters = document.querySelectorAll('.filter-btn'); /* */

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








