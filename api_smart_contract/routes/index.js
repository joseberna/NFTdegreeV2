/** @format */
import express from "express";
import mintNFT from "./mint-nft.routes.js";
import getNFT from "./get-nft.routes.js";

const router = express.Router();
console.log("index.routes.js");
router.post("/mint", async (req, res) => {
  try {
    console.log("routes.index.post");
    const { add_owner, tokenId, nameNft, metadataURI } = req.body;
    console.log("routes.index.post add_owner: ", add_owner);
    console.log("routes.index.post tokenId: ", tokenId);
    console.log("routes.index.post nameNft: ", nameNft);
    console.log("routes.index.post metadataURI: ", metadataURI);

    const response = await mintNFT(add_owner, tokenId, nameNft, metadataURI);
    return res.json(response);
  } catch (error) {
    console.error("index.routs.mint error:", error);
    return res.json({ error });
  }
});
router.get("/:tokenid", async (req, res) => {
  console.log("routes.index.get");
  console.log("routes.index.get req.params: ", req.params);
  const { tokenid } = req.params;
  console.log("routes.index.get tokenid: ", tokenid);

  const response = await getNFT(tokenid);
  return res.json(response);
});

export default router;
