/* =========================================================
   KUSHEEN BHAT — FINAL PORTFOLIO JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       LOADER
    ===================================================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            document.body.classList.add("loaded");

        }, 700);

    });


    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    const progress = document.createElement("div");

    progress.style.position = "fixed";
    progress.style.top = "0";
    progress.style.left = "0";
    progress.style.height = "3px";
    progress.style.width = "0";
    progress.style.background = "#a8ff3e";
    progress.style.zIndex = "99999";
    progress.style.pointerEvents = "none";

    document.body.appendChild(progress);


    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const height =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            height > 0
                ? (scrollTop / height) * 100
                : 0;

        progress.style.width =
            `${percentage}%`;

    }, { passive: true });


    /* =====================================================
       CUSTOM CURSOR
    ===================================================== */

    const cursor =
        document.querySelector(".cursor");

    const dot =
        document.querySelector(".cursor-dot");


    if (
        cursor &&
        dot &&
        window.innerWidth > 700
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;


        document.addEventListener(
            "mousemove",
            (event) => {

                mouseX = event.clientX;
                mouseY = event.clientY;

                dot.style.left =
                    `${mouseX}px`;

                dot.style.top =
                    `${mouseY}px`;

            }
        );


        function animateCursor() {

            currentX +=
                (mouseX - currentX) * 0.13;

            currentY +=
                (mouseY - currentY) * 0.13;

            cursor.style.left =
                `${currentX}px`;

            cursor.style.top =
                `${currentY}px`;

            requestAnimationFrame(
                animateCursor
            );
        }

        animateCursor();


        document.querySelectorAll("a").forEach(
            (link) => {

                link.addEventListener(
                    "mouseenter",
                    () => {

                        cursor.style.width =
                            "52px";

                        cursor.style.height =
                            "52px";

                    }
                );


                link.addEventListener(
                    "mouseleave",
                    () => {

                        cursor.style.width =
                            "30px";

                        cursor.style.height =
                            "30px";

                    }
                );

            }
        );

    }


    /* =====================================================
       SMOOTH NAVIGATION
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const id =
                    link.getAttribute("href");

                if (
                    !id ||
                    id === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(id);

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section, .timeline-item, .experience-card, .skill-row, .project-card, .beyond-item"
        );


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "reveal",
                                "active"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        (element) => {

            element.classList.add("reveal");

            revealObserver.observe(
                element
            );

        }
    );


    /* =====================================================
       HERO IMAGE PARALLAX
    ===================================================== */

    const hero =
        document.querySelector(".hero");

    const photo =
        document.querySelector(".photo-frame");


    if (
        hero &&
        photo &&
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
                        ${x * 7}px,
                        ${y * 7}px
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
       SKILL HOVER
    ===================================================== */

    const skills =
        document.querySelectorAll(
            ".skill-row"
        );


    skills.forEach(
        (skill) => {

            skill.addEventListener(
                "mouseenter",
                () => {

                    skill.style.paddingRight =
                        "15px";

                }
            );


            skill.addEventListener(
                "mouseleave",
                () => {

                    skill.style.paddingRight =
                        "";

                }
            );

        }
    );


    /* =====================================================
       PROJECT HOVER
    ===================================================== */

    const projects =
        document.querySelectorAll(
            ".project-card"
        );


    projects.forEach(
        (project) => {

            project.addEventListener(
                "mousemove",
                (event) => {

                    if (
                        window.innerWidth < 800
                    ) {
                        return;
                    }

                    const rect =
                        project.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;

                    const rotateX =
                        ((y - rect.height / 2) /
                        (rect.height / 2)) *
                        -1.2;

                    const rotateY =
                        ((x - rect.width / 2) /
                        (rect.width / 2)) *
                        1.2;

                    project.style.transform =
                        `
                        perspective(1000px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-8px)
                        `;

                }
            );


            project.addEventListener(
                "mouseleave",
                () => {

                    project.style.transform =
                        "";

                }
            );

        }
    );


    /* =====================================================
       ACTIVE NAV
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    const navObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            const id =
                                entry.target.id;

                            navLinks.forEach(
                                (link) => {

                                    link.classList.remove(
                                        "active-nav"
                                    );

                                    if (
                                        link.getAttribute(
                                            "href"
                                        ) === `#${id}`
                                    ) {

                                        link.classList.add(
                                            "active-nav"
                                        );

                                    }

                                }
                            );

                        }

                    }
                );

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach(
        (section) => {

            navObserver.observe(
                section
            );

        }
    );


    /* =====================================================
       MARQUEE PAUSE
    ===================================================== */

    const marquee =
        document.querySelector(
            ".marquee"
        );

    const marqueeTrack =
        document.querySelector(
            ".marquee-track"
        );


    if (
        marquee &&
        marqueeTrack
    ) {

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
       IMAGE ERROR CHECK
    ===================================================== */

    const image =
        document.querySelector(
            ".photo-frame img"
        );


    if (image) {

        image.addEventListener(
            "error",
            () => {

                console.warn(
                    "profile.jpg was not found. Make sure profile.jpg is uploaded beside index.html."
                );

            }
        );

    }


    /* =====================================================
       CONSOLE
    ===================================================== */

    console.log(
        "%cKUSHEEN BHAT",
        "font-size:25px;font-weight:bold;color:#a8ff3e;"
    );

    console.log(
        "%cPortfolio loaded successfully.",
        "font-size:13px;color:#a7b1a8;"
    );

});
