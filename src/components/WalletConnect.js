// WalletConnect.js

const CONFIG = {
  mainnetRpcUrl:
    "https://sepolia.infura.io/v3/b52163bdfadb414386c2b1b84578a39b",
  baseRpcUrl:
    "https://base-sepolia.infura.io/v3/b52163bdfadb414386c2b1b84578a39b",
};

let web3;

async function setupWeb3() {
  console.log("Setting up Web3...");
  try {
    if (typeof window.ethereum !== "undefined") {
      web3 = new Web3(window.ethereum);
    } else {
      web3 = new Web3(new Web3.providers.HttpProvider(CONFIG.mainnetRpcUrl));
    }
    console.log("Web3 setup complete");
  } catch (error) {
    console.error("Error setting up Web3:", error);
    throw error;
  }
}

async function getNetworkInfo() {
  if (!web3) {
    console.error("Web3 not initialized");
    return;
  }
  const networkId = await web3.eth.net.getId();
  console.log("Connected to network ID:", networkId);
  return networkId;
}

async function getUserAddress() {
  if (!web3) {
    console.error("Web3 not initialized");
    return;
  }
  const accounts = await web3.eth.getAccounts();
  if (accounts.length === 0) {
    console.error("No accounts found");
    return null;
  }
  return accounts[0];
}

async function resolveENSName(address) {
  try {
    const response = await fetch(`https://api.ensdata.net/${address}`);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    return data.ens_primary || null; // Return the ENS name or null
  } catch (error) {
    console.error(`Error resolving ENS name for address ${address}:`, error);
    return null; // Return null if there's an error
  }
}

async function getEnsNameOrShortAddress(address) {
  const ensName = await resolveENSName(address);
  return ensName || `${address.slice(0, 6)}...${address.slice(-4)}`;
}

async function updateConnectionState(isConnected, userAddress = null) {
  const connectButton = document.getElementById("connect-wallet");
  const walletInfo = document.getElementById("wallet-info");
  const walletAddress = document.getElementById("wallet-address");

  if (isConnected && userAddress) {
    connectButton.classList.add("hidden");
    walletInfo.classList.remove("hidden");
    const displayName = await getEnsNameOrShortAddress(userAddress);
    walletAddress.textContent = displayName;
  } else {
    connectButton.classList.remove("hidden");
    walletInfo.classList.add("hidden");
    walletAddress.textContent = "";
  }
}

async function connectWallet() {
  try {
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const userAddress = await getUserAddress();
      if (userAddress) {
        await getNetworkInfo();
        await updateConnectionState(true, userAddress);
      } else {
        console.error("Failed to retrieve user address");
        updateConnectionState(false);
      }
    } else {
      showModal();
    }
  } catch (error) {
    console.error("Failed to connect:", error);
    updateConnectionState(false);
  }
}

function showModal() {
  const modal = document.getElementById("wallet-modal");
  modal.classList.remove("hidden");
}

function hideModal() {
  const modal = document.getElementById("wallet-modal");
  modal.classList.add("hidden");
}

async function setupEventListeners() {
  console.log("Setting up event listeners...");
  const connectButton = document.getElementById("connect-wallet");
  const closeModalButton = document.getElementById("close-modal");

  if (connectButton) {
    connectButton.addEventListener("click", connectWallet);
    console.log("Event listener added to connect button");
  } else {
    console.error("Connect wallet button not found");
  }

  if (closeModalButton) {
    closeModalButton.addEventListener("click", hideModal);
  }

  // Listen for account changes
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", async (accounts) => {
      if (accounts.length > 0) {
        await updateConnectionState(true, accounts[0]);
      } else {
        updateConnectionState(false);
      }
    });
  }
}

async function initializeWalletConnect() {
  try {
    console.log("Initializing WalletConnect...");
    await setupWeb3();
    await setupEventListeners();
    console.log("WalletConnect initialized successfully");
  } catch (error) {
    console.error("Failed to initialize WalletConnect:", error);
    const errorElement = document.getElementById("error-message");
    if (errorElement) {
      errorElement.textContent =
        "Failed to initialize wallet connection. Please try again later.";
    }
  }
}

window.addEventListener("load", initializeWalletConnect);
