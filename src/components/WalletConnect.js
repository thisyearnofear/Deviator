// WalletConnect.js

const CONFIG = {
  mainnetRpcUrl:
    "https://sepolia.infura.io/v3/b52163bdfadb414386c2b1b84578a39b",
  baseRpcUrl:
    "https://base-sepolia.infura.io/v3/b52163bdfadb414386c2b1b84578a39b",
  zoraRpcUrl: "https://rpc.zora.energy",
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
    console.log("Web3 setup failed, continuing with limited functionality");
    // Don't throw error, just continue
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

const ERC1155_ABI = [
  {
    constant: true,
    inputs: [
      { name: "account", type: "address" },
      { name: "id", type: "uint256" },
    ],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const ERC1155_CONTRACT_ADDRESS = "0x4a57b15E45d03bd85c8eE38dcFF9E2BF0e87dBCf";
const TOKEN_ID = 1; // Adjust this if you're looking for a specific token ID

const IMPLEMENTATION_ABI = [
  {
    constant: true,
    inputs: [{ name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "implementation",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export async function checkERC1155Balance(userAddress) {
  if (!userAddress) return false;

  const networks = [
    { name: "Base", rpcUrl: CONFIG.baseRpcUrl },
    { name: "Zora", rpcUrl: CONFIG.zoraRpcUrl },
  ];

  for (const network of networks) {
    try {
      const web3Instance = new Web3(network.rpcUrl);
      const proxyContract = new web3Instance.eth.Contract(
        IMPLEMENTATION_ABI,
        ERC1155_CONTRACT_ADDRESS
      );

      // Get implementation address
      const implementationAddress = await proxyContract.methods
        .implementation()
        .call();
      console.log(`Implementation address: ${implementationAddress}`);

      // Use implementation contract
      const contract = new web3Instance.eth.Contract(
        ERC1155_ABI,
        implementationAddress
      );

      const balance = await contract.methods
        .balanceOf(userAddress, TOKEN_ID)
        .call();

      console.log(`ERC1155 Balance on ${network.name}:`, balance);
      if (balance > 0) return true;
    } catch (error) {
      console.log(`Error checking balance on ${network.name}:`, error);
    }
  }
  return false;
}

export async function connectWallet() {
  try {
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const userAddress = await getUserAddress();
      if (userAddress) {
        await getNetworkInfo();

        // Check ERC1155 balance after successful connection
        const hasToken = await checkERC1155Balance(userAddress);

        // Save to localStorage
        localStorage.setItem(
          "walletState",
          JSON.stringify({ userAddress, hasToken })
        );

        // Update UI
        await updateConnectionState(true, userAddress);

        // Dispatch custom event
        const event = new CustomEvent("walletStatusChanged", {
          detail: { userAddress, hasToken },
        });
        document.dispatchEvent(event);

        return { userAddress, hasToken };
      }
    }
  } catch (error) {
    console.error("Failed to connect:", error);
    localStorage.removeItem("walletState");
    updateConnectionState(false);
  }
  return { userAddress: null, hasToken: false };
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

    // Only check localStorage and update UI if there was a previous connection
    const savedWalletState = localStorage.getItem("walletState");
    if (savedWalletState) {
      const { userAddress, hasToken } = JSON.parse(savedWalletState);
      if (userAddress && window.ethereum) {
        // Verify the connection is still valid
        const accounts = await window.ethereum.request({
          method: "eth_accounts", // This doesn't prompt, just checks current state
        });
        if (
          accounts.length > 0 &&
          accounts[0].toLowerCase() === userAddress.toLowerCase()
        ) {
          await updateConnectionState(true, userAddress);
        } else {
          localStorage.removeItem("walletState");
        }
      }
    }

    console.log("WalletConnect initialized successfully");
  } catch (error) {
    console.log(
      "WalletConnect initialization failed, continuing with limited functionality"
    );
  }
}

export { initializeWalletConnect, getUserAddress, getEnsNameOrShortAddress };

window.addEventListener("load", initializeWalletConnect);
