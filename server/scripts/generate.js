const secp = require("ethereum-cryptography/secp256k1").secp256k1;


 const { toHex } = require('ethereum-cryptography/utils')


const privateKey=secp.utils.randomPrivateKey() 

console.log("privateKey:",toHex(privateKey))

const publicKey=secp.getPublicKey(privateKey)
console.log("publicKey:",toHex(publicKey))