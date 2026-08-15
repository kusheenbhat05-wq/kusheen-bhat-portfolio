/* =========================================================
   KUSHEEN BHAT — PORTFOLIO JS
   Interactive • Smooth • Cinematic
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       PAGE LOADED
    ========================================= */

    document.body.classList.add("loaded");


    /* =========================================
       CURRENT YEAR
    ========================================= */

    const year = document.querySelector("#year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements = document.querySelectorAll(`
        section,
        .project-card,
        .skill-card,
        .timeline-item,
        .experience-card,
        .certificate,
        .about-facts > div
    `);

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });

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
        revealObserver.observe(element);
    });


    /* =========================================
       NAVBAR SCROLL EFFECT
    ========================================= */

    const navbar = document.querySelector(".navbar, nav");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 70) {

            navbar.style.background =
                "rgba(7,16,13,.92)";

            navbar.style.boxShadow =
                "0 15px 50px rgba(0,0,0,.3)";

        } else {

            navbar.style.background =
                "rgba(7,16,13,.58)";

            navbar.style.boxShadow =
                "none";
        }
    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /* =========================================
       SMOOTH ANCHOR NAVIGATION
    ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =========================================
       MOUSE FOLLOW GLOW
    ========================================= */

    const glow = document.createElement("div");

    glow.className = "cursor-glow";

    glow.style.cssText = `
        position: fixed;
        width: 320px;
        height: 320px;
        border-radius: 50%;
        pointer-events: none;
        z-index: -1;
        transform: translate(-50%, -50%);
        background:
            radial-gradient(
                circle,
                rgba(168,255,62,.10),
                rgba(168,255,62,.035) 35%,
                transparent 70%
            );
        transition:
            left .15s ease-out,
            top .15s ease-out;
    `;

    document.body.appendChild(glow);


    window.addEventListener("mousemove", (event) => {

        glow.style.left =
            `${event.clientX}px`;

        glow.style.top =
            `${event.clientY}px`;

    });


    /* =========================================
       TYPING EFFECT
    ========================================= */

    const typingElement =
        document.querySelector(".typing");

    if (typingElement) {

        const words = [
            "Frontend Developer",
            "Software Developer",
            "Creative Developer",
            "Problem Solver",
            "Computer Science Student"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeText() {

            const currentWord =
                words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        charIndex + 1
                    );

                charIndex++;

                if (
                    charIndex ===
                    currentWord.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeText,
                        1300
                    );

                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        charIndex - 1
                    );

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1) %
                        words.length;
                }
            }

            setTimeout(
                typeText,
                deleting ? 40 : 75
            );
        }

        typeText();
    }


    /* =========================================
       PROJECT CARD 3D TILT
    ========================================= */

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) /
                        centerY) * -2.5;

                const rotateY =
                    ((x - centerX) /
                        centerX) * 2.5;

                card.style.transform =
                    `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-7px)
                    `;
            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    `
                    perspective(1000px)
                    rotateX(0deg)
                    rotateY(0deg)
                    translateY(0)
                    `;
            }
        );

    });


    /* =========================================
       MAGNETIC BUTTONS
    ========================================= */

    const buttons =
        document.querySelectorAll(
            ".primary-btn, .secondary-btn, .nav-cta, .btn, .project-link"
        );

    buttons.forEach((button) => {

        button.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    button.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const moveX =
                    (x - rect.width / 2) * 0.12;

                const moveY =
                    (y - rect.height / 2) * 0.12;

                button.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;
            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "translate(0, 0)";
            }
        );

    });


    /* =========================================
       SCROLL PROGRESS BAR
    ========================================= */

    const progressBar =
        document.createElement("div");

    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        width: 0%;
        background: #a8ff3e;
        z-index: 99999;
        box-shadow: 0 0 15px rgba(168,255,62,.7);
        pointer-events: none;
    `;

    document.body.appendChild(progressBar);


    function updateScrollProgress() {

        const scrollTop =
            window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            pageHeight > 0
                ? (scrollTop / pageHeight) * 100
                : 0;

        progressBar.style.width =
            `${percentage}%`;
    }

    window.addEventListener(
        "scroll",
        updateScrollProgress
    );

    updateScrollProgress();


    /* =========================================
       ACTIVE SECTION
    ========================================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(
            '.nav-links a[href^="#"]'
        );

    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const id =
                        entry.target.getAttribute("id");

                    navLinks.forEach((link) => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${id}`
                        ) {
                            link.classList.add("active");
                        }

                    });

                });

            },
            {
                threshold: 0.35
            }
        );

    sections.forEach((section) => {
        sectionObserver.observe(section);
    });


    /* =========================================
       PARALLAX HERO IMAGE
    ========================================= */

    const heroVisual =
        document.querySelector(".hero-visual");

    if (heroVisual) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.innerWidth <= 850) {
                    return;
                }

                const scroll =
                    window.scrollY;

                heroVisual.style.transform =
                    `translateY(${scroll * 0.08}px)`;
            }
        );
    }


    /* =========================================
       RANDOM PROJECT CARD DELAY
    ========================================= */

    projectCards.forEach(
        (card, index) => {

            card.style.transitionDelay =
                `${index * 80}ms`;
        }
    );


    /* =========================================
       CURSOR COORDINATES
       FOR CSS EFFECTS
    ========================================= */

    window.addEventListener(
        "mousemove",
        (event) => {

            document.documentElement.style.setProperty(
                "--mouse-x",
                `${event.clientX}px`
            );

            document.documentElement.style.setProperty(
                "--mouse-y",
                `${event.clientY}px`
            );
        }
    );


    /* =========================================
       MOBILE SAFETY
    ========================================= */

    if (window.innerWidth <= 850) {

        glow.remove();

        projectCards.forEach((card) => {

            card.style.transform = "none";

        });

    }


    /* =========================================
       CONSOLE MESSAGE
    ========================================= */

    console.log(
        "%cKUSHEEN BHAT",
        "font-size:28px;font-weight:900;color:#a8ff3e;"
    );

    console.log(
        "%cBuilt with curiosity + code.",
        "font-size:14px;color:#9da8a1;"
    );

});
