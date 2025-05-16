const results = ["💰 0.01 ETH", "😢 Leider nichts", "🎉 0.05 ETH", "⭐ 0.10 ETH"];
document.getElementById("spinButton").addEventListener("click", () => {
  const wheel = document.getElementById("wheel");
  wheel.style.animation = "spin 2s ease-out";
  setTimeout(() => {
    wheel.style.animation = "none";
    const result = results[Math.floor(Math.random() * results.length)];
    document.getElementById("result").innerText = `Dein Gewinn: ${result}`;
  }, 2000);
});