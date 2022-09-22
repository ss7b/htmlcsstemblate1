let icon = document.querySelector(".header .links");
let links = document.querySelector(".header .links ul")
console.log(icon)
console.log(links)
icon.addEventListener("click", function(){
    links.classList.toggle("show")
})
let date = new Date();
// let fullYear = date.getFullYear();
document.getElementById("date").innerHTML = date.getFullYear();