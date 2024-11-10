// src/utils/web3Utils.js

import { getWeb3 } from "./web3Provider";

const BASE_MEMECOIN_CONTRACT = "0x39e6EED85927e0203c2ae9790eDaeB431B8e43c1";

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

    // Direct contract interaction without proxy
    const contract = new web3.eth.Contract(TOKEN_ABI, contractAddress);
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
    // Only check the Base memecoin contract for special effects
    // sourcery skip: inline-immediately-returned-variable
    const baseOwnership = await checkTokenOwnership(
      BASE_MEMECOIN_CONTRACT,
      "base"
    );
    return baseOwnership;
  } catch (error) {
    console.error("Error checking special effects access:", error);
    return false;
  }
}
