/** @format */
import contractABI from "../contract/NFTDegree.json" assert { type: "json" };
import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const getNftServices = async (params) => {
  try {
    console.log("get.sevices.getNftServices: ", params);
    let providerEther = new ethers.getDefaultProvider(
      process.env.INFURA_PROJECT_ID
    );

    const signer = new ethers.Wallet(
      process.env.PRIVATE_KEY_WALLET,
      providerEther
    );

    const contractNFTs = new ethers.Contract(
      process.env.ADDRESS_CONTRACT,
      contractABI,
      signer
    );
    let transaction = await contractNFTs.getNFT(params);

    return transaction;
  } catch (error) {
    console.error("get.services.getNftServices error: ", error);
  }
};

export default getNftServices;
