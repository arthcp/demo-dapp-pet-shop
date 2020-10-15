const { adoptionContract } = require('./config')

adoptionContract.methods.getAdopters().call().then(res => {
  console.log(res)
  process.exit(0)
})
