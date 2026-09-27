// ===============================
// MENÚ RESPONSIVE
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// Cerrar menú al hacer clic en un enlace

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ===============================
// FORMULARIO
// ===============================

const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent =
        "¡Gracias! Hemos recibido tu consulta.";

    formMessage.style.color = "#087f8c";

    form.reset();

});


// ===============================
// CONTADORES
// ===============================

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = target / 80;

        const updateCounter = () => {

            current += increment;

            if (current < target) {

                counter.textContent = Math.floor(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target + "+";

            }

        };

        updateCounter();

    });

};


// Ejecutar los contadores cuando sean visibles

const statsSection = document.querySelector(".stats");

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounters();

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.4
    }
);

observer.observe(statsSection);


// ===============================
// ANIMACIÓN SUAVE DE ELEMENTOS
// ===============================

const animatedElements = document.querySelectorAll(
    ".card, .benefit, .about-image, .contact-item"
);

const animationObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    animationObserver.observe(element);

});
