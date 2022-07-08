document.getElementById("openNav").addEventListener("click", ()=> {
    document.getElementById("fullScreenMenu").classList.add("h-100")
})
document.querySelector(".close-btn").addEventListener("click", ()=> {
    document.getElementById("fullScreenMenu").classList.remove("h-100")
})