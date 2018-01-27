module.exports = {
  networks: {
   "cli": {
      host: '127.0.0.1',
      port: 8545,
      network_id: 1111, // Match any network id
      from: "0x88007f0ee4f9b2d7f68c384af260c6f8fc3e2c98"
    },
    "development": {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    "dev": {
      host: '127.0.0.1',
      port: 7545,
      network_id: 5777, // Match any network id
      from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
    },
    "ropsten": {
      network_id: 3,
      host: "localhost",
      port: 7545,
      gas: 2900000,
      from: "0x1497945569c9e4612e77ad0b286900ef3684d3a6"
    }
  },
  }
};
