// generate-images.js (run with Node.js)
const fs = require("fs");
const path = require("path");

const images = {
  binaryTree: "./images/binaryTree.png",
  bstMaxTraversal: "./images/bstMaxTraversal.png",
  // ...etc
};

let output = "";
for (const [name, filePath] of Object.entries(images)) {
  const data = fs.readFileSync(filePath);
  const base64 = data.toString("base64");
  output += `export const ${name} = "data:image/png;base64,${base64}";\n`;
}

fs.writeFileSync("./src/modules/data/imageData.ts", output);
