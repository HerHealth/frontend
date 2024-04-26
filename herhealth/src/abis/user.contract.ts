import { ethers, BrowserProvider } from "ethers";
import artifacts from "./artifacts.json";

export const getUserContract = async (address: string) => {
  const provider = new BrowserProvider(window.ethereum);

  const signer = await provider.getSigner(address);

  const contractInstance = new ethers.Contract(
    artifacts.user.address,
    artifacts.user.abi,
    signer
  );
  return contractInstance;
};
