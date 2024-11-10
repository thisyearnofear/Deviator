// src/utils/web3Utils.js

import Web3 from "web3";

const BASE_CONTRACT = "0x1dd4245bc6b1bbd43caf9a5033e887067852123d";
const BASE_CONTRACT_2 = "0x39e6EED85927e0203c2ae9790eDaeB431B8e43c1";

const CONTRACT_ABI = [
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
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

    const contract = new web3.eth.Contract(CONTRACT_ABI, contractAddress);
    const balance = await contract.methods.balanceOf(address).call();

    console.log(`Balance for ${contractAddress}: ${balance}`);
    return BigInt(balance) > 0n;
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
