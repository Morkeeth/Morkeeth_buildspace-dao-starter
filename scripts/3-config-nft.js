import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xeF433508E29A8eE14b6b7c33809aC8F5Cb3dC694",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Carlos Matos Blessing",
        description: "This NFT will give you access to Carlos Matos Lärljungar!",
        image: readFileSync("scripts/assets/CMLlogo.png.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()