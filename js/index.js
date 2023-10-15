document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu");
    const menuContainer = document.querySelector(".menu-container");
    const menuItems = document.querySelectorAll(".menu-list a");

    menuButton.addEventListener("click", function () {
        menuContainer.classList.toggle("menu-open");
    });

    menuItems.forEach((item) => {
        item.addEventListener("click", function () {
            menuContainer.classList.remove("menu-open");
        });
    });
});


let backToTopButton = document.getElementById("backToTop");

backToTopButton.addEventListener("click", function () {
    document.documentElement.scrollIntoView({ behavior: "smooth" });
});