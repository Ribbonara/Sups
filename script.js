/* =========================================
   EASY CUSTOMIZATION
========================================= */

const CONFIG = {

  herName: "[HER NAME]",

  myName: "[MY NAME]",

  music: "music/song.mp3",

  photos: [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg"
  ],

  importantDate: "[IMPORTANT DATE]"

};


/* =========================================
   SMOOTH SCROLL
========================================= */

function scrollToSection(id) {

  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth"
  });

}


/* =========================================
   REVEAL ANIMATIONS
========================================= */

const revealElements =
  document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.15
  }
);


revealElements.forEach((element) => {

  observer.observe(element);

});


/* =========================================
   MISTAKE CARDS
========================================= */

const cards =
  document.querySelectorAll(".mistake-card");


cards.forEach((card) => {

  card.addEventListener("click", () => {

    card.classList.toggle("active");

  });

});


/* =========================================
   FINAL MESSAGE
========================================= */

const lastButton =
  document.getElementById("lastButton");

const lastMessage =
  document.getElementById("lastMessage");


lastButton.addEventListener("click", () => {

  lastMessage.classList.toggle("show");

  if (lastMessage.classList.contains("show")) {

    lastButton.textContent = "Thank you for reading.";

  } else {

    lastButton.textContent = "One last thing…";

  }

});


/* =========================================
   BACKGROUND MUSIC
========================================= */

const music =
  document.getElementById("bgMusic");

const musicToggle =
  document.getElementById("musicToggle");


music.src = CONFIG.music;


musicToggle.addEventListener("click", () => {

  if (music.paused) {

    music.play()
      .then(() => {

        musicToggle.classList.add("active");

      })
      .catch(() => {

        alert(
          "Please add your music file to music/song.mp3"
        );

      });

  } else {

    music.pause();

    musicToggle.classList.remove("active");

  }

});


/* =========================================
   FLOATING PARTICLES
========================================= */

const particleContainer =
  document.getElementById("particles");


function createParticles() {

  const amount =
    window.innerWidth < 700 ? 18 : 35;


  for (let i = 0; i < amount; i++) {

    const particle =
      document.createElement("div");

    particle.className = "particle";

    particle.style.left =
      Math.random() * 100 + "%";

    particle.style.animationDuration =
      10 + Math.random() * 20 + "s";

    particle.style.animationDelay =
      Math.random() * 15 + "s";

    particle.style.opacity =
      0.1 + Math.random() * 0.4;

    particleContainer.appendChild(particle);

  }

}


createParticles();


/* =========================================
   PERSONALIZATION
========================================= */

function replaceTextPlaceholders() {

  document.body.innerHTML =
    document.body.innerHTML
      .replaceAll(
        "[HER NAME]",
        CONFIG.herName
      )
      .replaceAll(
        "[MY NAME]",
        CONFIG.myName
      )
      .replaceAll(
        "[IMPORTANT DATE]",
        CONFIG.importantDate
      );

}


replaceTextPlaceholders();
