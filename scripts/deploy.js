
const hre = require("hardhat");

async function main() {


  const myToken = await hre.ethers.getContractFactory("myToken");
  const mytoken= await myToken.deploy();

  await mytoken.deployed();

  console.log("deployed");
  console.log("Contract Address", mytoken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
