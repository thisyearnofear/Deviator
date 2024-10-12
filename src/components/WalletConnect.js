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

const ERC1155_ABI = [
  [
    {
      inputs: [
        {
          internalType: "address",
          name: "_logic",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "previousAdmin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newAdmin",
          type: "address",
        },
      ],
      name: "AdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "beacon",
          type: "address",
        },
      ],
      name: "BeaconUpgraded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "implementation",
          type: "address",
        },
      ],
      name: "Upgraded",
      type: "event",
    },
    {
      stateMutability: "payable",
      type: "fallback",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
  ],
];

const ERC1155_CONTRACT_ADDRESS = "0x4a57b15E45d03bd85c8eE38dcFF9E2BF0e87dBCf";
const TOKEN_ID = 1; // Adjust this if you're looking for a specific token ID

export async function checkERC1155Balance(userAddress) {
  if (!userAddress) {
    console.error("No user address provided to checkERC1155Balance");
    return false;
  }

  const networks = [
    { name: "Base", rpcUrl: CONFIG.baseRpcUrl },
    { name: "Zora", rpcUrl: CONFIG.zoraRpcUrl },
  ];

  for (const network of networks) {
    try {
      const web3 = new Web3(network.rpcUrl);

      // Function signature for balanceOf(address,uint256)
      const functionSignature = "0x00fdd58e";

      // Encode function parameters
      const params = web3.eth.abi.encodeParameters(
        ["address", "uint256"],
        [userAddress, TOKEN_ID]
      );

      // Combine function signature and encoded parameters
      const data = functionSignature + params.slice(2);

      const result = await web3.eth.call({
        to: ERC1155_CONTRACT_ADDRESS,
        data: data,
      });

      const balance = web3.utils.hexToNumber(result);

      console.log(
        `ERC1155 Token Balance on ${network.name} for address ${userAddress}:`,
        balance
      );

      if (balance > 0) {
        console.log(`User owns the specified ERC1155 token on ${network.name}`);
        return true;
      } else {
        console.log(
          `User does not own the specified ERC1155 token on ${network.name}`
        );
      }
    } catch (error) {
      console.error(
        `Error checking ERC1155 balance on ${network.name}:`,
        error
      );
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
        await updateConnectionState(true, userAddress);

        // Check ERC1155 balance after successful connection
        const hasToken = await checkERC1155Balance(userAddress);
        console.log("User has the token:", hasToken);
        return { userAddress, hasToken };
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

export { initializeWalletConnect, getUserAddress, getEnsNameOrShortAddress };

window.addEventListener("load", initializeWalletConnect);
