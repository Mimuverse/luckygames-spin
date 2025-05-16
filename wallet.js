document.getElementById("connectWallet").addEventListener("click", async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      document.getElementById("walletAddress").innerText = `Verbunden: ${accounts[0]}`;
    } catch (err) {
      alert("Wallet-Verbindung abgelehnt.");
    }
  } else {
    alert("MetaMask nicht gefunden.");
  }
});