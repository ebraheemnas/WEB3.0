
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.15',
  networks: {
    GOERLI: {

      url:'https://eth-goerli.g.alchemy.com/v2/jpZoA5eGM2tbaLYzyz2kwqDzapE-3nbA', 

      accounts: ['0636293ee1029e9d8550ad3770edecb70ef27ca0d622b25eb12b677df63ac19d']

    }

  }
};
