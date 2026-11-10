const btn = document.getElementById("activateBtn");
const message = document.getElementById("message");

const villain = document.getElementById("villain");
const gOne = document.getElementById("gOne");

const redFlash = document.getElementById("redFlash");
const music = document.getElementById("raoneMusic");

const MUSIC_START_TIME = 14;

btn.addEventListener("click", function() {

    message.classList.toggle("show");

    if (message.classList.contains("show")) {

        // G.ONE TO RA.ONE TRANSFORMATION
        document.body.classList.add("raone-mode");

        // RA.ONE ANGRY MODE
        villain.classList.add("angry");

        // ENERGY BEAMS
        villain.classList.add("fire");

        // RED FLASH
        redFlash.classList.remove("active");
        void redFlash.offsetWidth;
        redFlash.classList.add("active");

        // EXPLOSION
        createExplosion();

        // MUSIC START FROM 00:14
        music.currentTime = MUSIC_START_TIME;
        music.volume = 0.8;

        music.play().catch(error => {
            console.log("Music playback failed:", error);
        });

        btn.innerHTML = "CLOSE MESSAGE ✕";

        setTimeout(() => {
            villain.classList.remove("fire");
        }, 1500);

    } else {

        // RETURN TO G.ONE MODE
        document.body.classList.remove("raone-mode");

        villain.classList.remove("angry");
        villain.classList.remove("fire");

        music.pause();
        music.currentTime = MUSIC_START_TIME;

        btn.innerHTML = "INITIALIZE SURPRISE ➜";

    }

});
// Floating particles
const particles = document.getElementById("particles");

for (let i = 0; i < 50; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = (Math.random() * 8 + 4) + "s";
    particle.style.animationDelay = Math.random() * 5 + "s";

    particles.appendChild(particle);
}

// Explosion effect
function createExplosion() {

    for (let i = 0; i < 60; i++) {

        const spark = document.createElement("div");

        spark.style.position = "fixed";
        spark.style.width = "5px";
        spark.style.height = "5px";
        spark.style.background = "#00eaff";
        spark.style.borderRadius = "50%";
        spark.style.boxShadow = "0 0 15px #00eaff";

        spark.style.left = "50%";
        spark.style.top = "50%";

        spark.style.pointerEvents = "none";
        spark.style.zIndex = "100";

        document.body.appendChild(spark);

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 300 + 50;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        spark.animate([
            {
                transform: "translate(-50%, -50%) scale(1)",
                opacity: 1
            },
            {
                transform: `translate(${x}px, ${y}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1200,
            easing: "ease-out"
        });

        setTimeout(() => spark.remove(), 1200);
    }
}
