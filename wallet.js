let userAccount;

document.getElementById("connectWallet").addEventListener("click", async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      userAccount = accounts[0];
      document.getElementById("walletAddress").innerText = `✅ Verbunden: ${userAccount}`;
    } catch (error) {
      alert("Wallet-Verbindung abgelehnt.");
    }
  } else {
    alert("MetaMask nicht installiert.");
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
        to: '0x648b728D2A4F1De90036276951fc56d3dB1bE094', // DEINE WALLET
        value: '0x2386F26FC10000' // 0.01 ETH in Wei (Hex)
      }]
    });

    document.getElementById("paymentStatus").innerText = `✅ Zahlung erfolgreich: ${tx}`;
    document.getElementById("spinButton").disabled = false;
  } catch (error) {
    alert("Zahlung fehlgeschlagen oder abgebrochen.");
  }
});