require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/36580f604b4d4a9ba792f6d9f1c5373f`,
      accounts: [
        "4c42d5307f020c89dd96b376aae03670742aec02c6c070146cbad744625f3092",
      ],
    },
  },
};
