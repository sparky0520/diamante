import getAccountDetails from "./getAccountDetails"
const DiamSdk =  require('diamante-sdk-js')
const createChildAccount =  require('./createChildAccount.js')
const makePayment =  require('./makePayment.js')
const paymentHistory =  require('./paymentHistory.js')

const child1Balance = document.getElementById('child1')
const child2Balance = document.getElementById('child2')

const pair = DiamSdk.Keypair.random()
let child1 = await createChildAccount(pair)
let child2 = await createChildAccount(pair)

child1 = await getAccountDetails(child1)
child2 = await getAccountDetails(child2)

child1Balance.textContent = child1.balances[0]
child2Balance.textContent = child2.balances[0]

