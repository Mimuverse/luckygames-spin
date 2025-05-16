const results = ["💰 0.01 ETH", "😢 Leider nichts", "🎉 0.05 ETH", "⭐ 0.10 ETH"];

document.getElementById("spinButton").addEventListener("click", () => {
  const wheel = document.getElementById("wheel");
  wheel.style.transform = "rotate(1440deg)";
  setTimeout(() => {
    const result = results[Math.floor(Math.random() * results.length)];
    document.getElementById("result").innerText = `Ergebnis: ${result}`;
    wheel.style.transform = "rotate(0deg)";
  }, 2000);
});