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
    let isTrailerPlaying = false; // Para controlar si el tráiler está en reproducción

    function changeBackgroundVideo() {
        if (!isTrailerPlaying) { // Solo cambia si el tráiler NO está en reproducción
            videoIndex = (videoIndex + 1) % videoSources.length;
            heroVideo.src = videoSources[videoIndex];
            heroVideo.load(); // 🔥 Asegurar que el video cargue correctamente
            heroVideo.play();
        }
    }

    // Cambiar el video de fondo cada 10 segundos
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

            // 🔥 Después de 4 segundos, quitar el fondo rojo
            setTimeout(() => {
                option.classList.add("fade-out");
            }, 4000);
            
        }, index * 500); // 🔥 Aparecen en cascada con 500ms de diferencia
    });

    // 🔥 4️⃣ Reproducir el tráiler al hacer clic
    const playTrailerButton = document.getElementById("playTrailer");
    const heroContent = document.getElementById("heroContent");
    const closeTrailerButton = document.getElementById("closeTrailer");

    playTrailerButton.addEventListener("click", function () {
        isTrailerPlaying = true; // 🔥 Detener cambio de videos de fondo
        heroVideo.src = "assets/videos/videotrailer.mp4"; // 🔥 Cambia al tráiler
        heroVideo.muted = false; // 🔥 Activa el sonido
        heroVideo.loop = false; // 🔥 No se repite
        heroVideo.load();
        heroVideo.play(); // 🔥 Reproduce

        heroContent.style.display = "none"; // 🔥 Oculta el contenido
        closeTrailerButton.style.display = "block"; // 🔥 Muestra el botón de cerrar
    });

    // 🔥 5️⃣ Cerrar el tráiler y volver al estado original
    closeTrailerButton.addEventListener("click", function () {
        isTrailerPlaying = false; // 🔥 Reactivar el cambio de videos de fondo
        heroVideo.src = videoSources[videoIndex]; // 🔥 Vuelve al video de fondo actual
        heroVideo.muted = true; // 🔥 Silencia el video
        heroVideo.loop = true; // 🔥 Lo pone en loop de nuevo
        heroVideo.load();
        heroVideo.play(); // 🔥 Reproduce

        heroContent.style.display = "block"; // 🔥 Muestra el contenido
        closeTrailerButton.style.display = "none"; // 🔥 Oculta el botón de cerrar
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // 🔥 1️⃣ Mapeo de secciones
    const sectionMapping = {
        "#galeria": document.getElementById("galeria"),
        "#socials": document.getElementById("socials"),
        "#contacto": document.getElementById("contacto"),
        "#home": document.getElementById("home"),
    };

    // 🔥 2️⃣ Hacer que los botones interactivos hagan scroll
    document.querySelectorAll(".hero__options li").forEach(option => {
        option.addEventListener("click", function () {
            const target = this.getAttribute("data-target");
            if (target && sectionMapping[target]) {
                sectionMapping[target].scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // 🔥 3️⃣ Hacer que el navbar haga scroll a las secciones
    document.querySelectorAll(".nav__link").forEach(link => {
        link.addEventListener("click", function (e) {
            const target = this.getAttribute("href");
            if (target.startsWith("#") && sectionMapping[target]) {
                e.preventDefault();
                sectionMapping[target].scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
