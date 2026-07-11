function openGift() {
  // Hide loader and show main content
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
  
  // Display floating avatar stickers now
  const avatars = document.querySelectorAll('.floating-avatar');
  avatars.forEach(avatar => avatar.style.display = 'block');
  
  // Autoplay music upon button action bypass
  const audio = document.getElementById("bgSong");
  if (audio) {
      audio.play().catch(error => console.log("Audio play system bypass: ", error));
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Cake Logic Handler
let cakeState = 0; 
function handleCakeClick() {
    const flame = document.getElementById("flameElement");
    const status = document.getElementById("cakeStatus");
    const display = document.getElementById("cakeDisplay");

    if (cakeState === 0) {
        // Step 1: Blow candle
        if(flame) flame.style.display = "none";
        status.innerHTML = "Candle blown successfully! Now tap again to cut the cake! 🔪";
        cakeState = 1;
    } else if (cakeState === 1) {
        // Step 2: Cut cake
        display.innerHTML = "🍰✨"; 
        status.innerHTML = "Cake Cut Successfully! Yayyy! Happy Birthday Mahi! 🎉❤️";
        status.style.color = "#ff4f88";
        status.style.fontWeight = "bold";
        cakeState = 2;
    }
}

// Your Original Floating Hearts Engine
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
