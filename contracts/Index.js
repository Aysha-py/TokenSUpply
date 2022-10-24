const Web3 = require("web3");

const RPC_URL = "https://goerli.infura.io/v3/36580f604b4d4a9ba792f6d9f1c5373f";

const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "updateName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const CONTRACT_ADDRESS = "0x826ecEC7070bd6De1e97647F97ba34FadEDC8D69";

const PRIVATE_KEY =
  "4c42d5307f020c89dd96b376aae03670742aec02c6c070146cbad744625f3092";

const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));

// Returns Block number
// web3.eth.getBlockNumber()
//   .then(
//     (res) => console.log(res)
//   )

// Returns balance
// web3.eth.getBalance("0x8e05F65a02dd0E0cF7701d7AD6d8BF7c936faf45")
//   .then(
//     (res) => {
//       console.log(res)
//       const balanceInEther = web3.utils.fromWei(res)
//       console.log(balanceInEther)
//     }
// )

// Sending Ether
// web3.eth.accounts.signTransaction({
//     to: '0x2FdFB230b20C3C57EC1C103a289D8c7eeE304C55',
//     value: web3.utils.toWei("0.005", "ether"),
//     gas: 2000000
// }, PRIVATE_KEY)
//   .then(async (tx) => {
//     const txHash = await web3.eth.sendSignedTransaction(tx.rawTransaction)
//     console.log(txHash)
//   });

// Interaction with Contracts
const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);

// Return the name
contract.methods
  .name()
  .call()
  .then((name) => {
    console.log(name);
  });

// Set the name
// web3.eth.accounts.signTransaction({
//     to: CONTRACT_ADDRESS,
//     gas: 2000000,
//     data: contract.methods.updateName("Ihuoma").encodeABI()
// }, PRIVATE_KEY)
//   .then(async (tx) => {
//     const txHash = await web3.eth.sendSignedTransaction(tx.rawTransaction)
//     console.log(txHash)
// });
