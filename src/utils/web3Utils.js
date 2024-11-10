// src/utils/web3Utils.js

import { BrowserProvider, Contract } from "ethers";

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

  console.log("Creating BrowserProvider...");
  const provider = new BrowserProvider(window.ethereum);
  console.log("Provider created successfully");

  return provider;
}

export async function checkTokenOwnership(contractAddress, network) {
  try {
    console.log(
      `Checking ownership for contract ${contractAddress} on ${network}`
    );
    const provider = await getProvider(network);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    console.log(`Using address: ${address}`);

    // Try each contract type in sequence
    for (const [type, abi] of [
      ["ERC721", ERC721_ABI],
      ["ERC1155", ERC1155_ABI],
      ["ERC20", ERC20_ABI],
    ]) {
      try {
        const contract = new Contract(contractAddress, abi, provider);
        const balance =
          type === "ERC1155"
            ? await contract.balanceOf(address, 1)
            : await contract.balanceOf(address);

        console.log(`${type} Balance for ${contractAddress}: ${balance}`);
        return balance > 0;
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

    return ethOwnership || baseOwnership || baseOwnership2;
  } catch (error) {
    console.error("Error checking special effects access:", error);
    return false;
  }
}
