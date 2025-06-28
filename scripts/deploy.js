const hre = require("hardhat");

async function main() {
  console.log("Deploying FlowLend contract...");

  const FlowLend = await hre.ethers.getContractFactory("FlowLend");
  const flowLend = await FlowLend.deploy();

  await flowLend.waitForDeployment();

  const address = await flowLend.getAddress();
  console.log("FlowLend deployed to:", address);

  // Save the contract address and ABI for frontend
  const fs = require('fs');
  const contractData = {
    address: address,
    abi: flowLend.interface.format('json')
  };

  fs.writeFileSync(
    './src/contracts/FlowLend.json',
    JSON.stringify(contractData, null, 2)
  );

  console.log("Contract data saved to src/contracts/FlowLend.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
