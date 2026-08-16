/* =========================================================
   KUSHEEN BHAT — PORTFOLIO JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CUSTOM CURSOR
    ===================================================== */

    const cursor = document.querySelector(".cursor");
    const cursorDot = document.querySelector(".cursor-dot");

    if (cursor && cursorDot && window.innerWidth > 700) {

        let mouseX = 0;
        let mouseY = 0;

        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener("mousemove", (e) => {

            mouseX = e.clientX;
            mouseY = e.clientY;

            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;

        });

        function animateCursor() {

            cursorX += (mouseX - cursorX) * 0.12;
            cursorY += (mouseY - cursorY) * 0.12;

            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;

            requestAnimationFrame(animateCursor);
        }

        animateCursor();


        /* Cursor grows on links */

        document.querySelectorAll("a").forEach((link) => {

            link.addEventListener("mouseenter", () => {

                cursor.style.width = "55px";
                cursor.style.height = "55px";

            });

            link.addEventListener("mouseleave", () => {

                cursor.style.width = "32px";
                cursor.style.height = "32px";

            });

        });
    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealItems = document.querySelectorAll(
        ".section, .skill-card, .project, .timeline-item, .statement-section, .contact-section"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal", "active");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealItems.forEach((item) => {

        item.classList.add("reveal");

        revealObserver.observe(item);

    });


    /* =====================================================
       NAVBAR ACTIVE SECTION
    ===================================================== */

    const sections = document.querySelectorAll(
        "section[id]"
    );

    const navLinks = document.querySelectorAll(
        ".nav-links a"
    );

    const sectionObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute("id");

                    navLinks.forEach((link) => {

                        link.style.color = "";

                        if (
                            link.getAttribute("href") ===
                            `#${currentId}`
                        ) {

                            link.style.color =
                                "var(--green)";
                        }

                    });

                }

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );

    sections.forEach((section) => {

        sectionObserver.observe(section);

    });


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       PHOTO PARALLAX
    ===================================================== */

    const photo =
        document.querySelector(".photo-frame");

    const hero =
        document.querySelector(".hero");

    if (
        photo &&
        hero &&
        window.innerWidth > 900
    ) {

        hero.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    hero.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left) /
                    rect.width -
                    0.5;

                const y =
                    (event.clientY - rect.top) /
                    rect.height -
                    0.5;

                photo.style.transform =
                    `
                    translate(
                        ${x * 8}px,
                        ${y * 8}px
                    )
                    `;

            }
        );

        hero.addEventListener(
            "mouseleave",
            () => {

                photo.style.transform =
                    "translate(0, 0)";

            }
        );
    }


    /* =====================================================
       PROJECT HOVER
    ===================================================== */

    const projects =
        document.querySelectorAll(".project");

    projects.forEach((project) => {

        project.addEventListener(
            "mouseenter",
            () => {

                projects.forEach((other) => {

                    if (other !== project) {

                        other.style.opacity = "0.45";

                    }

                });

            }
        );

        project.addEventListener(
            "mouseleave",
            () => {

                projects.forEach((other) => {

                    other.style.opacity = "1";

                });

            }
        );

    });


    /* =====================================================
       SKILL CARD TILT
    ===================================================== */

    const skillCards =
        document.querySelectorAll(".skill-card");

    skillCards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                if (window.innerWidth < 800) {
                    return;
                }

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
                    ((y - centerY) / centerY) * -2;

                const rotateY =
                    ((x - centerX) / centerX) * 2;

                card.style.transform =
                    `
                    perspective(800px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-6px)
                    `;

            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "translateY(0)";

            }
        );

    });


    /* =====================================================
       NUMBER COUNTER
    ===================================================== */

    const statusDot =
        document.querySelector(".status-dot");

    if (statusDot) {

        statusDot.addEventListener(
            "click",
            () => {

                statusDot.style.transform =
                    "scale(1.5)";

                setTimeout(() => {

                    statusDot.style.transform =
                        "";

                }, 300);

            }
        );

    }


    /* =====================================================
       MARQUEE PAUSE
    ===================================================== */

    const marquee =
        document.querySelector(".marquee");

    const marqueeTrack =
        document.querySelector(".marquee-track");

    if (marquee && marqueeTrack) {

        marquee.addEventListener(
            "mouseenter",
            () => {

                marqueeTrack.style.animationPlayState =
                    "paused";

            }
        );

        marquee.addEventListener(
            "mouseleave",
            () => {

                marqueeTrack.style.animationPlayState =
                    "running";

            }
        );

    }


    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    const progress =
        document.createElement("div");

    progress.style.position = "fixed";
    progress.style.top = "0";
    progress.style.left = "0";
    progress.style.height = "3px";
    progress.style.width = "0%";
    progress.style.background = "var(--green)";
    progress.style.zIndex = "99999";
    progress.style.pointerEvents = "none";

    document.body.appendChild(progress);

    window.addEventListener(
        "scroll",
        () => {

            const scrollTop =
                window.scrollY;

            const documentHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const percentage =
                documentHeight > 0
                    ? (scrollTop / documentHeight) * 100
                    : 0;

            progress.style.width =
                `${percentage}%`;

        },
        {
            passive: true
        }
    );


    /* =====================================================
       IMAGE LOAD EFFECT
    ===================================================== */

    const heroImage =
        document.querySelector(".photo-frame img");

    if (heroImage) {

        heroImage.addEventListener(
            "load",
            () => {

                heroImage.style.opacity = "1";

            }
        );

        heroImage.addEventListener(
            "error",
            () => {

                console.warn(
                    "Portfolio photo could not be loaded. Make sure the image is named photo.jpg and is in the same folder as index.html."
                );

            }
        );

    }


    /* =====================================================
       PAGE LOAD
    ===================================================== */

    document.body.classList.add("loaded");


    /* =====================================================
       CONSOLE
    ===================================================== */

    console.log(
        "%cKUSHEEN BHAT",
        "font-size:24px;font-weight:900;color:#a8ff3e;"
    );

    console.log(
        "%cPortfolio loaded successfully.",
        "font-size:12px;color:#9ca89e;"
    );

});
