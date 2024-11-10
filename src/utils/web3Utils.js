// src/utils/web3Utils.js

import { ethers } from "ethers";
import { CONFIG } from "../config/constants";

const BASE_MEMECOIN_CONTRACT = "0x39e6EED85927e0203c2ae9790eDaeB431B8e43c1";

const TOKEN_ABI = ["function balanceOf(address owner) view returns (uint256)"];

export async function checkTokenOwnership(contractAddress, network) {
  try {
    console.log(
      `Checking ownership for contract ${contractAddress} on ${network}`
    );
    const provider = new ethers.JsonRpcProvider(CONFIG[`${network}RpcUrl`]);

    // Get signer if MetaMask is available
    let signer;
    if (window.ethereum) {
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      signer = await web3Provider.getSigner();
    }

    const contract = new ethers.Contract(
      contractAddress,
      TOKEN_ABI,
      signer || provider
    );
    const balance = await contract.balanceOf(await signer.getAddress());

    console.log(`Balance for ${contractAddress}: ${balance}`);
    return balance > 0n;
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
