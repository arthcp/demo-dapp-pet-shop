const { adoptionContract, account } = require('./config')

const petId = 4

adoptionContract.methods.adopt(petId).send({ from: account }).then(res => {
  console.log(res)
  process.exit(0)
})
