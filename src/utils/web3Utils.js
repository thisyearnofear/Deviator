// src/utils/web3Utils.js

import Web3 from "web3";

const BASE_CONTRACT = "0x1dd4245bc6b1bbd43caf9a5033e887067852123d";
const BASE_CONTRACT_2 = "0x39e6EED85927e0203c2ae9790eDaeB431B8e43c1";

// Basic ERC721 ABI for balanceOf
const ERC721_ABI = [
  {
    constant: true,
    inputs: [{ name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

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

const ERC20_ABI = [
  {
    constant: true,
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

async function getProvider(network) {
  console.log("Getting provider for network:", network);
  if (!window.ethereum) {
    throw new Error("No ethereum provider found");
  }

  console.log("Creating Web3 instance...");
  const web3 = new Web3(window.ethereum);
  console.log("Web3 instance created successfully");

  return web3;
}

export async function checkTokenOwnership(contractAddress, network) {
  try {
    console.log(
      `Checking ownership for contract ${contractAddress} on ${network}`
    );
    const web3 = await getProvider(network);
    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];
    console.log(`Using address: ${address}`);

    // Try each contract type in sequence
    for (const [type, abi] of [
      ["ERC721", ERC721_ABI],
      ["ERC1155", ERC1155_ABI],
      ["ERC20", ERC20_ABI],
    ]) {
      try {
        const contract = new web3.eth.Contract(abi, contractAddress);
        const balance =
          type === "ERC1155"
            ? await contract.methods.balanceOf(address, 1).call()
            : await contract.methods.balanceOf(address).call();

        console.log(`${type} Balance for ${contractAddress}: ${balance}`);
        return BigInt(balance) > 0n;
      } catch (error) {
        console.log(`Not a ${type} contract, trying next type...`);
      }
    }

    console.error("Contract does not match any known token standard");
    return false;
  } catch (error) {
    console.error(
      `Error in checkTokenOwnership for ${contractAddress}:`,
      error
    );
    return false;
  }
}

export async function checkSpecialEffectsAccess() {
  try {
    const baseOwnership = await checkTokenOwnership(BASE_CONTRACT, "base");
    const baseOwnership2 = await checkTokenOwnership(BASE_CONTRACT_2, "base");

    return baseOwnership || baseOwnership2;
  } catch (error) {
    console.error("Error checking special effects access:", error);
    return false;
  }
}
