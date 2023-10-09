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
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let menuLinks = document.querySelectorAll('.menu-list a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            let targetId = this.getAttribute('href');
            let targetSection = document.querySelector(targetId);

            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});

let backToTopButton = document.getElementById("backToTop");

backToTopButton.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});