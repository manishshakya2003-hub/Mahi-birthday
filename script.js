function openGift() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (20 + Math.random() * 30) + "px";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}

setInterval(createHeart, 350);