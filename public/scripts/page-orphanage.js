const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Create map
const map = L.map("mapid", options).setView([-12.9284579, -38.5109567], 17);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2], // Ficar em cima - [0, -70]
});

// Create and add marker
L.marker([-12.9284579, -38.5109567], { icon })
.addTo(map)

/*========================================================================================*/
/* image gallery */

function selectImage(event) {
  const button = event.currentTarget

  // remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)

  function removeActiveClass(button) {
    button.classList.remove("active")
  }

  // selecionar a imagem clicada 
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  // atualizar o container de imagem
  imageContainer.src = image.src
  
  // adicionar a classe .active para este botão
  button.classList.add("active")
}
