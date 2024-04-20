const menuOpen = document.querySelector(".menu-open")
const menuClose = document.querySelector(".menu-close")
const modal = document.querySelector(".modal")

menuOpen.addEventListener("click", () => {
    modal.style.width = "100vw"
})

menuClose.addEventListener("click", () => {
    modal.style.width = "0"
})
