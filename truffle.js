module.exports = {
  networks: {
   "ganache": {
      host: '127.0.0.1',
      port: 8545,
      network_id: 1111, // Match any network id
      from: "0x0dc522ac9332d3ace256e2fc6ca1d4e2cdae702d"
    },
    "development": {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    "dev": {
      host: '127.0.0.1',
      port: 7545,
      gas: 4712388,
      network_id: 5777, // Match any network id
      from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
    },
    "ropsten": {
      network_id: 3,
      host: "localhost",
      port: 8545,
      gas: 4700036,
      from: "0x749d3dcefe46d71a4eb004774efd5dc2bd468d8b"
    },
    "ropstenparity": {
      network_id: 3,
      host: "127.0.0.1",
      port: 8545,
      gas: 4700036,
      gasPrice:  20000000000,
      from: "0x749d3dcefe46d71a4eb004774efd5dc2bd468d8b"
    },
    "mainnetparity": {
      network_id: 1,
      host: "127.0.0.1",
      port: 8545,
      gas: 1678298,
      gasPrice: 25000000000,
      from: "0x7db3cecaa8abb4a4dfac8c5d85c6138799978d99"
    }
  },
};

