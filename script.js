/* ============================
   HEADER SCROLL EFFECT
=============================*/
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* ============================
   REVEAL ON SCROLL
=============================*/
const reveals = document.querySelectorAll(".reveal");

function revealElements() {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

/* ============================
   SCROLL TO TOP BUTTON
=============================*/
const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    if (!scrollBtn) return;
    if (window.scrollY > 400) {
        scrollBtn.style.opacity = "1";
        scrollBtn.style.pointerEvents = "auto";
    } else {
        scrollBtn.style.opacity = "0";
        scrollBtn.style.pointerEvents = "none";
    }
});

/* ============================
   PARALLAX HERO
=============================*/
const parallax = document.querySelector(".parallax");

if (parallax) {
    window.addEventListener("scroll", () => {
        let y = window.scrollY * 0.25;
        parallax.style.transform = `translateY(${y}px)`;
    });
}

/* ============================
   SMOOTH ANCHOR (للسكرول جوه الصفحة)
=============================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

/* ============================
   LIGHTBOX PORTFOLIO
=============================*/
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox ? lightbox.querySelector(".lightbox-img") : null;
const lightboxClose = lightbox ? lightbox.querySelector(".lightbox-close") : null;

if (lightbox && lightboxImg && lightboxClose) {
    document.querySelectorAll(".portfolio-item-page img").forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightbox.classList.add("open");
        });
    });

    lightboxClose.addEventListener("click", () => {
        lightbox.classList.remove("open");
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("open");
        }
    });
}
