let userAccount;

document.getElementById("connectWallet").addEventListener("click", async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      userAccount = accounts[0];
      document.getElementById("walletAddress").innerText = `✅ Verbunden: ${userAccount}`;
    } catch {
      alert("Verbindung abgelehnt.");
    }
  } else {
    alert("MetaMask nicht gefunden.");
  }
});

document.getElementById("payButton").addEventListener("click", async () => {
  if (!userAccount) {
    alert("Bitte zuerst Wallet verbinden.");
    return;
  }

  try {
    const tx = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [{
        from: userAccount,
        to: '0x648b728D2A4F1De90036276951fc56d3dB1bE094',
        value: '0x2386F26FC10000' // 0.01 ETH
      }]
    });

    document.getElementById("paymentStatus").innerText = `✅ Zahlung erfolgreich! TX: ${tx}`;
    document.getElementById("spinButton").disabled = false;
  } catch {
    alert("Zahlung abgebrochen oder fehlgeschlagen.");
  }
});