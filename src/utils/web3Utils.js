// src/utils/web3Utils.js

import { getWeb3 } from "./web3Provider";

const BASE_CONTRACT = "0x1dd4245bc6b1bbd43caf9a5033e887067852123d";
const BASE_CONTRACT_2 = "0x39e6EED85927e0203c2ae9790eDaeB431B8e43c1";

const PROXY_ABI = [
  {
    inputs: [],
    name: "implementation",
    outputs: [{ type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];

const TOKEN_ABI = [
  {
    inputs: [{ type: "address" }],
    name: "balanceOf",
    outputs: [{ type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];

export async function checkTokenOwnership(contractAddress, network) {
  try {
    console.log(
      `Checking ownership for contract ${contractAddress} on ${network}`
    );
    const web3 = await getWeb3(network);
    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];

    // First get the implementation address
    const proxyContract = new web3.eth.Contract(PROXY_ABI, contractAddress);
    const implementationAddress = await proxyContract.methods
      .implementation()
      .call();
    console.log(
      `Implementation address for ${contractAddress}: ${implementationAddress}`
    );

    // Now interact with the implementation contract
    const contract = new web3.eth.Contract(TOKEN_ABI, implementationAddress);
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
    // Check Base contract on Base network
    const baseOwnership = await checkTokenOwnership(BASE_CONTRACT, "base");

    // Check Zora contract on Zora network
    const zoraOwnership = await checkTokenOwnership(BASE_CONTRACT_2, "zora");

    return baseOwnership || zoraOwnership;
  } catch (error) {
    console.error("Error checking special effects access:", error);
    return false;
  }
}
