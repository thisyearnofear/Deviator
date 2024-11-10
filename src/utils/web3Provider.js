import Web3 from "web3";
import { CONFIG } from "../config/constants";

let web3Instance = null;

export async function getWeb3(network = null) {
  try {
    if (network) {
      const rpcUrls = {
        base: CONFIG.baseRpcUrl,
        zora: CONFIG.zoraRpcUrl,
      };

      const rpcUrl = rpcUrls[network];
      if (!rpcUrl) {
        throw new Error(`No RPC URL found for network: ${network}`);
      }

      return new Web3(new Web3.providers.HttpProvider(rpcUrl));
    }

    if (typeof window.ethereum !== "undefined") {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      return web3;
    }

    throw new Error("No Web3 provider found");
  } catch (error) {
    console.error("Error initializing Web3:", error);
    throw error;
  }
}
