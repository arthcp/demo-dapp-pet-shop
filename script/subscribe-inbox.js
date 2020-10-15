const { inboxContractAddress, gethWeb3, messageDeliveredEventSig } = require('./config')

const subscription = gethWeb3.eth.subscribe('logs', {
  address: inboxContractAddress,
  topics: [messageDeliveredEventSig]
}, function(error, result){
  if (!error)
      console.log(result);
});

