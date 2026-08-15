/* =================================
   KUSHEEN BHAT — PORTFOLIO JS
================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       SCROLL REVEAL
    ================================= */

    const revealElements = document.querySelectorAll(
        ".reveal, section, .project-card, .timeline-item, .experience-card, .certificate"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });


    /* ================================
       NAVBAR — SCROLL EFFECT
    ================================= */

    const navbar = document.querySelector("nav, .navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 80) {
            navbar.style.background = "rgba(7,16,13,.92)";
            navbar.style.boxShadow =
                "0 15px 50px rgba(0,0,0,.25)";
        } else {
            navbar.style.background = "rgba(7,16,13,.7)";
            navbar.style.boxShadow = "none";
        }

    });


    /* ================================
       SMOOTH NAVIGATION
    ================================= */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* ================================
       MOUSE GLOW
    ================================= */

    const glow = document.createElement("div");

    glow.style.position = "fixed";
    glow.style.width = "300px";
    glow.style.height = "300px";
    glow.style.borderRadius = "50%";
    glow.style.pointerEvents = "none";
    glow.style.zIndex = "-1";
    glow.style.background =
        "radial-gradient(circle, rgba(168,255,120,.08), transparent 70%)";
    glow.style.transform = "translate(-50%, -50%)";

    document.body.appendChild(glow);

    window.addEventListener("mousemove", (event) => {

        glow.style.left = event.clientX + "px";
        glow.style.top = event.clientY + "px";

    });


    /* ================================
       PROJECT CARD TILT
    ================================= */

    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -3;

            const rotateY =
                ((x - centerX) / centerX) * 3;

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

        });

    });


    /* ================================
       TYPING EFFECT
    ================================= */

    const typingElement =
        document.querySelector(".typing");

    if (typingElement) {

        const words = [
            "Frontend Developer",
            "Computer Science Student",
            "Creative Developer",
            "Problem Solver"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function type() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === currentWord.length) {

                    deleting = true;

                    setTimeout(type, 1400);
                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1) % words.length;
                }
            }

            setTimeout(type, deleting ? 45 : 80);
        }

        type();
    }


    /* ================================
       CURRENT YEAR
    ================================= */

    const yearElement =
        document.querySelector("#year");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }


    /* ================================
       PAGE LOAD
    ================================= */

    document.body.classList.add("loaded");

});
