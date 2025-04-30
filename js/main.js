document.addEventListener("DOMContentLoaded", function () {
    // 🔥 1️⃣ Manejo del video de fondo con múltiples videos
    const heroVideo = document.getElementById("heroVideo");
    const videoSources = [
        "assets/videos/videofondo1.MOV",
        "assets/videos/videofondo2.MOV",
        "assets/videos/videofondo3.MOV",
        "assets/videos/videofondo4.MOV"
    ];
    let videoIndex = 0;
    let isTrailerPlaying = false;

    function changeBackgroundVideo() {
        if (!isTrailerPlaying) {
            videoIndex = (videoIndex + 1) % videoSources.length;
            heroVideo.src = videoSources[videoIndex];
            heroVideo.load();
            heroVideo.play();
        }
    }

    setInterval(changeBackgroundVideo, 10000);

    // 🔥 2️⃣ Inicializar carrusel con Swiper.js
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

    // 🔥 3️⃣ Animación en cascada para el mensaje interactivo
    const options = document.querySelectorAll(".hero__options li");

    options.forEach((option, index) => {
        setTimeout(() => {
            option.classList.add("show");
            setTimeout(() => {
                option.classList.add("fade-out");
            }, 4000);
        }, index * 500);
    });

    // 🔥 4️⃣ Reproducir el tráiler al hacer clic
    const playTrailerButton = document.getElementById("playTrailer");
    const heroContent = document.getElementById("heroContent");
    const closeTrailerButton = document.getElementById("closeTrailer");

    playTrailerButton.addEventListener("click", function () {
        isTrailerPlaying = true;
        heroVideo.src = "assets/videos/videotrailer.mp4";
        heroVideo.muted = false;
        heroVideo.loop = false;
        heroVideo.load();
        heroVideo.play();

        heroContent.style.display = "none";
        closeTrailerButton.style.display = "block";
    });

    closeTrailerButton.addEventListener("click", function () {
        isTrailerPlaying = false;
        heroVideo.src = videoSources[videoIndex];
        heroVideo.muted = true;
        heroVideo.loop = true;
        heroVideo.load();
        heroVideo.play();

        heroContent.style.display = "block";
        closeTrailerButton.style.display = "none";
    });

    // 🔥 5️⃣ Mapeo de secciones para scroll smooth
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

    // 🔥 6️⃣ Menú lateral Drawer con GSAP (mejorado)
    const menuToggle = document.getElementById("menuToggle");
    const drawer = document.getElementById("drawerMenu");
    const drawerLogo = document.getElementById("drawerLogo");
    let menuOpen = false;

    if (menuToggle && drawer) {
        gsap.set(drawer, { x: '-100%' });

        const toggleMenu = (open) => {
            if (open) {
                gsap.fromTo(drawer,
                    { x: '-100%', opacity: 0.4, skewX: -10 },
                    { x: '0%', opacity: 1, skewX: 0, duration: 0.6, ease: "power4.out" }
                  );                menuToggle.style.display = "none";
                menuOpen = true;
            } else {
                gsap.to(drawer, { x: '-100%', duration: 0.5, ease: "power2.out" });
                menuToggle.style.display = "flex";
                menuOpen = false;
            }
        };

        menuToggle.addEventListener("click", () => toggleMenu(true));
        drawerLogo?.addEventListener("click", () => toggleMenu(false));

        document.querySelectorAll("#drawerMenu li").forEach(item => {
            item.addEventListener("click", () => toggleMenu(false));
        });
    }
    
});
