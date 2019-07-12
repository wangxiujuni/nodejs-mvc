//menu
var menuNav = document.getElementById("menu-nav");
var menuBtn = document.getElementById("menu-btn");
menuBtn.onclick = function () {
    if (menuNav.style.display === "flex") {
        menuNav.style.display = 'none';
    }
    else {
        menuNav.style.display = 'flex';
    }
};