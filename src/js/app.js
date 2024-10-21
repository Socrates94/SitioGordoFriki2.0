window.onload = function () {
    $("#spin").fadeOut();
    $("body").removeClass("hidden");
};

document.addEventListener("DOMContentLoaded", function () {
    crearGaleria();
    navegacionFija();
    resaltarEnlace();
    srcollNav();
});

function navegacionFija() {
    const header = document.querySelector(".header");
    const sobreNosotros = document.querySelector(".sobre-nosotros");

    document.addEventListener("scroll", function () {
        if (sobreNosotros.getBoundingClientRect().bottom < 1) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    });
}

function crearGaleria() {
    const galeria = document.querySelector(".galeria-imagenes");

    for (let i = 1; i <= 16; i++) {
        const imagen = document.createElement("PICTURE");
        // imagen.loading = 'lazy'
        // imagen.width = "300"
        // imagen.height = "200"
        // imagen.src = `src/img/thumb/${i}.jpg`;
        // imagen.alt = 'galeria';

        imagen.innerHTML = `
    <source srcset="build/img/thumb/${i}.avif" type="image/avif">
    <source srcset="build/img/thumb/${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
    `;

        // Event handler
        imagen.onclick = function () {
            mostrarImagen(i);
        };

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(indice) {
    const imagen = document.createElement("PICTURE");
    //   imagen.src = `src/img/full/${indice}.jpg`;
    //   imagen.alt = "galeria";

    imagen.innerHTML = `
        <source srcset="build/img/full/${indice}.avif" type="image/avif">
        <source srcset="build/img/full/${indice}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/full/${indice}.jpg" alt="imagen galeria">
    `;

    // Generando modal
    const modal = document.createElement("DIV");
    modal.classList.add("modal");
    modal.onclick = cerrarModal;

    // Boton cerrar modal
    const cerrarModalBtn = document.createElement("BUTTON");
    cerrarModalBtn.textContent = "X";
    cerrarModalBtn.classList.add("btn-cerrra");
    cerrarModalBtn.onclick = cerrarModal;

    modal.appendChild(imagen);
    modal.appendChild(cerrarModalBtn);

    // agregando al html
    const body = document.querySelector("body");
    body.classList.add("overflow-hidden");
    body.appendChild(modal);
}

function cerrarModal() {
    const modal = document.querySelector(".modal");
    modal.classList.add("fade-out");

    setTimeout(() => {
        modal?.remove();

        const body = document.querySelector("body");
        body.classList.remove("overflow-hidden");
    }, 500);
}

// resalta los links de la barra de navegacion y te lleva a esa seccion
function resaltarEnlace() {
    document.addEventListener("scroll", function () {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".navegacion-principal a");

        let actual = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                actual = section.id;
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + actual) {
                link.classList.add("active");
            }
        });
    });
}

function srcollNav() {
    const navLinks = document.querySelectorAll(".navegacion-principal a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const sectionScroll = e.target.getAttribute("href");
            const section = document.querySelector(sectionScroll);

            section.scrollIntoView({ behavior: "smooth" });
        });
    });
}
