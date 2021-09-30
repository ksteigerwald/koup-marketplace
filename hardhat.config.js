/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
console.log(infuraId)

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      accounts: [privateKey],
      chainId: 80001,
      gasPrice: 8000000000,
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      accounts: [privateKey],
      chainId: 80001,
      gasPrice: 8000000000,
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
