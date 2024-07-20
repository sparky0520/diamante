import DiamSdk from 'diamante-sdk-js'
import createChildAccount from './createChildAccount.js'
import getAccountDetails from './getAccountDetails.js'

const pair = DiamSdk.Keypair.random()

console.log("Public Key: ", pair.publicKey())
console.log("Private Key: ", pair.secret())

console.log("\n\n\n---------------Funding Parent Account with Friendly Bot with 10,000 Diams------------")
console.log("---------------Creating Child Account with Parent Account with 5 Diams------------\n\n")
const childAccount = await createChildAccount(pair)   // returns childAccount keypairs

console.log("\n\n\n---------------Getting Account Details------------\n\n")
const account = await getAccountDetails(childAccount)
if (account) {
    console.log("\n\n\n\n\n\nFull Account Details:", account)
}

