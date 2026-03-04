window.addEventListener("load", () => {
  const text = document.getElementById("loveText");

  // smooth text reveal
  setTimeout(() => {
    text.classList.add("show");
  }, 400);

  // glow slightly later
  setTimeout(() => {
    text.classList.add("glow");
  }, 1600);

  startHearts();
});

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // mix of hearts
    const hearts = ["🤍", "🤍", "🤍"];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 18 + Math.random() * 20 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);

  }, 700);
}