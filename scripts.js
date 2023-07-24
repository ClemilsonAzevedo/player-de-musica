const neutro = document.querySelector('.neutro');
const minButton = document.querySelector(".min-button")
const maxButton = document.querySelector('.max-button');

neutro.addEventListener('click', () => {
  document.querySelector(".min-max").classList.remove("resizable")
  document.querySelector(".min-max").classList.remove("mini")
  document.querySelector(".min-max").classList.add("player")

})

minButton.addEventListener("click", () => {
  document.querySelector(".min-max").classList.remove("resizable")
  document.querySelector(".min-max").classList.remove("player")
  document.querySelector(".min-max").classList.add("mini")
})

maxButton.addEventListener("click", () => {
  document.querySelector(".min-max").classList.remove("player")
  document.querySelector(".min-max").classList.remove("mini")
  document.querySelector(".min-max").classList.add("resizable")
})