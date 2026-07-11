function cutCake() {
    const flame = document.getElementById('candleFlame');
    const text = document.getElementById('cakeText');
    
    flame.style.display = 'none'; // Candle blown
    
    text.innerHTML = "🎂 Cake Cut Successfully! Yayyy! ❤️";
    text.style.color = "#e06c75";
    text.style.fontWeight = "bold";
}
