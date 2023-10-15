document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu");
    const menuContainer = document.querySelector(".menu-container");
    const menuItems = document.querySelectorAll(".menu-list a");

    menuButton.addEventListener("click", function () {
        menuContainer.classList.toggle("menu-open");
    });

    menuItems.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            menuContainer.classList.remove("menu-open");

            const targetId = item.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});



let backToTopButton = document.getElementById("backToTop");

backToTopButton.addEventListener("click", function () {
    document.documentElement.scrollIntoView({ behavior: "smooth" });
});