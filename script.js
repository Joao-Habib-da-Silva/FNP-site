var typed = new Typed("#Apresentation", {
    strings: ["<h1>Bem vindo ao site de ajuda de informações da <span id='FNP'>FNP</span></h1>"],
    typeSpeed: 60,
})
var navbar = window.document.getElementById("navbar")
function Open() {
    navbar.classList.toggle("open")
}