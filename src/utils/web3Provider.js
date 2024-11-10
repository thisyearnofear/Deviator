import { CONFIG } from "../config/constants";

export async function getProvider(network = null) {
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

      return new ethers.JsonRpcProvider(rpcUrl);
    }

    if (typeof window.ethereum !== "undefined") {
      return new ethers.BrowserProvider(window.ethereum);
    }

    throw new Error("No Web3 provider found");
  } catch (error) {
    console.error("Error initializing provider:", error);
    throw error;
  }
}
