const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");

const slices = 6;
const sliceAngle = (2 * Math.PI) / slices;
const results = ["💰 0.01 ETH", "😢 Niete", "🎉 0.05 ETH", "⭐ Jackpot", "💎 0.1 ETH", "🎁 Bonus"];
let rotation = 0;

function drawWheel() {
  for (let i = 0; i < slices; i++) {
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.arc(150, 150, 150, i * sliceAngle, (i + 1) * sliceAngle);
    ctx.fillStyle = i % 2 === 0 ? "#ffc107" : "#ffeb3b";
    ctx.fill();
    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.fillText(
      results[i],
      150 + Math.cos(i * sliceAngle + sliceAngle / 2) * 100,
      150 + Math.sin(i * sliceAngle + sliceAngle / 2) * 100
    );
  }
}

drawWheel();

document.getElementById("spinButton").addEventListener("click", () => {
  const randomSpin = Math.floor(Math.random() * 360) + 360 * 5;
  rotation += randomSpin;
  canvas.style.transform = `rotate(${rotation}deg)`;

  const resultIndex = Math.floor(((360 - (rotation % 360)) % 360) / (360 / slices));

  setTimeout(() => {
    document.getElementById("result").innerText = `🎉 Ergebnis: ${results[resultIndex]}`;
  }, 3500);
});

// Werbetext rotierend
const messages = [
  "Das exklusivste Krypto-Glückrad der Welt!",
  "100 % transparent. Keine Registrierung nötig.",
  "Sofortige ETH-Gewinne. Jeder Dreh zählt!",
  "Automatisiert. Sicher. Unterhaltsam."
];
let msgIndex = 0;
setInterval(() => {
  document.getElementById("promoText").innerText = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;
}, 3000);