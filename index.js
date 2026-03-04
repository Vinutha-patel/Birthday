window.addEventListener("load", () => {
  const text = document.getElementById("loveText");
  const btn = document.getElementById("enterBtn");
  const bg = document.querySelector(".hero-img");

  // Background slow zoom
  bg.style.transition = "transform 20s ease-in-out";
  bg.style.transform = "scale(1.12)";

  // Text reveal
  setTimeout(() => {
    text.classList.add("show");
  }, 600);

  // Glow after reveal
  setTimeout(() => {
    text.classList.add("glow");
  }, 1800);

  // Button reveal
  setTimeout(() => {
    btn.classList.add("showBtn");
  }, 2000);

  // Button pulse
  setTimeout(() => {
    btn.classList.add("pulse");
  }, 3000);

  startHearts();
});

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML = "🤍";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 14 + Math.random() * 20 + "px";
    heart.style.animationDuration = 5 + Math.random() * 5 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 9000);

  }, 600);
}