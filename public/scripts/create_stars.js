function createStars() {
  const starsContainer = document.querySelector(".stars");
  const numberOfStars = 200;

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Random position
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    // Random twinkle duration
    star.style.setProperty("--twinkle-duration", `${2 + Math.random() * 3}s`);

    // Random delay for twinkle
    star.style.animationDelay = `${Math.random() * 3}s`;

    // Add random movement animation
    const animations = ["parallax", "stars"];
    const randomAnimation =
      animations[Math.floor(Math.random() * animations.length)];
    star.style.animation = `
      twinkle var(--twinkle-duration) ease-in-out infinite,
      ${randomAnimation} ${10 + Math.random() * 20}s linear infinite
    `;
    starsContainer.appendChild(star);
  }
}

document.addEventListener("DOMContentLoaded", createStars);
