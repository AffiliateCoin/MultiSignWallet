// MultiSigWalletWithDailyLimit: 0xb09de2a9ccc7f54641b125057deab9e73a32e871

// Available Accounts
// ==================
// (0) 0x0dc522ac9332d3ace256e2fc6ca1d4e2cdae702d
// (1) 0x7137f5c77f7d623cc5868d74f1c09e546db93b05
// (2) 0x7d09e2726f508d00bd860544dd891f0626236b33 🔒
// (3) 0xbf7b4eaa24be7f99ac3bd86574a871145f8e957f 🔒
// (4) 0xe5e9f4e56d330e7b66a17f1f0e20cefb6bf8c098 🔒
// (5) 0x6d833bd5c6a4abe9abcc96cba169c61df8fd5b9e 🔒
// (6) 0x060f6bdbe817f51f83fae03a35f55c2936500f01 🔒
// (7) 0x505d74325defb4739cba349b6fa7c15e4a9120be 🔒
// (8) 0xe47107d53cda95fed2f0e5a577f643b71a412cca 🔒
// (9) 0xbc0746442934299074663fc38ea3abd8121b50fe 🔒


module.exports = function (){

  var Web3 = require('web3')
  var provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545")
  var contract = require('truffle-contract')
  var MultiSigWalletWithDailyLimit = contract(require('./../build/contracts/MultiSigWalletWithDailyLimit.json'))
  var mycontract = null

  MultiSigWalletWithDailyLimit.defaults({
    from: web3.eth.accounts[0]
    })

  MultiSigWalletWithDailyLimit.setProvider(provider);
  MultiSigWalletWithDailyLimit.at('0xb09de2a9ccc7f54641b125057deab9e73a32e871').then(instance => {

  Mywallet = MultiSigWalletWithDailyLimit;
  Mywallet.submitTransaction("0x7137f5c77f7d623cc5868d74f1c09e546db93b05",1,"0x0dc522ac9332d3ace256e2fc6ca1d4e2cdae702d");
  var balance = web3.eth.getBalance("0x0dc522ac9332d3ace256e2fc6ca1d4e2cdae702d");
  console.log(balance);

  });

}
