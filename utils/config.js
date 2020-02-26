require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI
let USDZAR_LINK = process.env.USDZARLINK
let EURZAR_LINK = process.env.EURZARLINK

if(process.env.NODE_ENV === "test"){
   MONGODB_URI = process.env.TEST_MONGODB_URI
}

module.exports = {
   MONGODB_URI,
   PORT,
   USDZAR_LINK,
   EURZAR_LINK
}