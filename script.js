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
   PAGE TRANSITION FADE
=============================*/
// fade out before navigating
document.querySelectorAll("a").forEach(link => {
    if (link.href.includes("#")) return;

    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.style.opacity = "0";
        setTimeout(() => {
            window.location.href = link.href;
        }, 300);
    });
});

// fade in on load
window.addEventListener("load", () => {
    document.body.style.transition = "opacity 0.6s ease";
    document.body.style.opacity = "1";
});

/* ============================
   SMOOTH ANCHOR FIX (MOBILE)
=============================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
