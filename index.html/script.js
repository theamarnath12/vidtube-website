var menuIcon = document.querySelector(".menu-icon");
var sidebar = docement.querySelector(".sidebar");
var container = docement.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}