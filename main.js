document.addEventListener("DOMContentLoaded", function () {
    // 🔥 1️⃣ Inicializar carrusel con Swiper.js
    var swiper = new Swiper(".car-slider", {
        slidesPerView: "auto",
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // 🔥 2️⃣ Animación en cascada para el mensaje interactivo
    const options = document.querySelectorAll(".hero__options li");

    options.forEach((option, index) => {
        setTimeout(() => {
            option.classList.add("show");
            setTimeout(() => {
                option.classList.add("fade-out");
            }, 4000);
        }, index * 500);
    });

    // 🔥 3️⃣ Mapeo de secciones para scroll suave
    const sectionMapping = {
        "#galeria": document.getElementById("galeria"),
        "#socials": document.getElementById("socials"),
        "#contacto": document.getElementById("contacto"),
        "#home": document.getElementById("home"),
    };

    document.querySelectorAll(".hero__options li").forEach(option => {
        option.addEventListener("click", function () {
            const target = this.getAttribute("data-target");
            if (target && sectionMapping[target]) {
                sectionMapping[target].scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    document.querySelectorAll(".nav__link").forEach(link => {
        link.addEventListener("click", function (e) {
            const target = this.getAttribute("href");
            if (target.startsWith("#") && sectionMapping[target]) {
                e.preventDefault();
                sectionMapping[target].scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // 🔥 4️⃣ Drawer lateral con GSAP
    const menuToggle = document.getElementById("menuToggle");
    const drawer = document.getElementById("drawerMenu");
    let menuOpen = false;

    gsap.set(drawer, { x: '-100%' });

    menuToggle.addEventListener("click", () => {
        if (menuOpen) {
            gsap.to(drawer, { x: '-100%', duration: 0.5, ease: "power2.out" });
        } else {
            gsap.to(drawer, { x: '0%', duration: 0.5, ease: "power2.out" });
        }
        menuOpen = !menuOpen;
    });

    // 🔥 5️⃣ Cierra el drawer al hacer clic en una opción
    document.querySelectorAll("#drawerMenu li").forEach(item => {
        item.addEventListener("click", () => {
            gsap.to(drawer, { x: '-100%', duration: 0.5, ease: "power2.out" });
            menuOpen = false;
        });
    });
});
