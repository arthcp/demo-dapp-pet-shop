const wrapProvider = require('arb-ethers-web3-bridge').wrapProvider
const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')

const adoptionContractABI = require('../build/contracts/Adoption.json').abi
const inboxContractABI = require('./global-inbox-abi.json')

const mnemonic = 'surge ability together fruit retire harvest release turkey social coffee owner uphold panel group car'
const account = '0xCf3C4c291CE0aD0Ef5f6De577Cd19D6D6ecF4DB6'

const arbRPC = 'http://127.0.0.1:8547/'
const arbProvider = wrapProvider(new HDWalletProvider(mnemonic, arbRPC))
const arbWeb3 = new Web3(arbProvider)

const gethRPC = 'http://127.0.0.1:7545/'
const gethProvider = new HDWalletProvider(mnemonic, gethRPC)
const gethWeb3 = new Web3(gethProvider)

const adoptionContractAddress = '0x6a1d27B150e2c4E117655B752ea484aCf062B807'
const inboxContractAddress = '0x603B563e088859CB752e983AAD9E47BA1A6120C9'

const adoptionContract = new arbWeb3.eth.Contract(adoptionContractABI, adoptionContractAddress)
const inboxContract = new gethWeb3.eth.Contract(inboxContractABI, inboxContractAddress)

const messageDeliveredEventSig = '0x35e48d636f39df5c5ca2278452d6d89bf9f07c2ff15f46d08aa402c46638b882'

module.exports = {
  account,
  adoptionContract,
  inboxContract,
  inboxContractAddress,
  gethWeb3,
  messageDeliveredEventSig
}
