/* Modernized JS for El taller del gordo friki */

function navegacionFija() {
    const header = document.querySelector(".header");
    const hero = document.querySelector(".hero");
    
    // Use Intersection Observer for better performance if possible, 
    // but sticking to scroll event for compatibility with original logic
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    });
}

function crearGaleria() {
    const galeria = document.querySelector(".galeria-imagenes");
    if (!galeria) return;

    for (let i = 1; i <= 20; i++) {
        const picture = document.createElement("PICTURE");
        picture.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
        `;
        picture.onclick = function() {
            mostrarImagen(i);
        };
        galeria.appendChild(picture);
    }
}

function mostrarImagen(id) {
    const picture = document.createElement("PICTURE");
    picture.innerHTML = `
        <source srcset="build/img/full/${id}.avif" type="image/avif">
        <source srcset="build/img/full/${id}.webp" type="image/webp">
        <img loading="lazy" width="800" height="600" src="build/img/full/${id}.jpg" alt="imagen galeria">
    `;

    const modal = document.createElement("DIV");
    modal.classList.add("modal");
    modal.onclick = cerrarModal;

    const botonCerrar = document.createElement("BUTTON");
    botonCerrar.textContent = "X";
    botonCerrar.classList.add("btn-cerrra");
    botonCerrar.onclick = cerrarModal;

    modal.appendChild(picture);
    modal.appendChild(botonCerrar);

    const body = document.querySelector("body");
    body.classList.add("overflow-hidden");
    body.appendChild(modal);
}

function cerrarModal() {
    const modal = document.querySelector(".modal");
    if (modal) {
        modal.classList.add("fade-out");
        setTimeout(() => {
            modal.remove();
            document.querySelector("body").classList.remove("overflow-hidden");
        }, 500);
    }
}

function resaltarEnlace() {
    window.addEventListener("scroll", function() {
        const sections = document.querySelectorAll("section");
        const links = document.querySelectorAll(".navegacion-principal a");
        let activeId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                activeId = section.id;
            }
        });

        links.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + activeId) {
                link.classList.add("active");
            }
        });
    });
}

function scrollNav() {
    const links = document.querySelectorAll(".navegacion-principal a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const sectionId = e.target.getAttribute("href");
            const section = document.querySelector(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

// Initializations
window.onload = function() {
    // jQuery fallback for original loading spinner logic
    if (window.jQuery) {
        $("#spin").fadeOut();
        $("body").removeClass("hidden");
    } else {
        const spin = document.getElementById("spin");
        if (spin) spin.style.display = 'none';
        document.body.classList.remove("hidden");
    }
};

document.addEventListener("DOMContentLoaded", function() {
    crearGaleria();
    navegacionFija();
    resaltarEnlace();
    scrollNav();
});