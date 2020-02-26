const axios = require('axios')
const Exchange = require('../models/exchange')
const dateFormat = require('dateformat');
const customFunction = require('./exchanges')

const runCron = async () => {

   // USD/ZAR CONVERSION RATE
   const usdZarExchangeRate = await customFunction.usdZarExchangeRate()

   // EUR/ZAR CONVERSION RATE
   const eurZarExchangeRate = await customFunction.eurZarExchangeRate()

   const exchangeEntry = await Exchange.findOne({ tag: 1 })
   console.log(exchangeEntry)

   // CHECK IF ENTRY EXISTS
   if(exchangeEntry){

      // FIND ENTRY AND UPDATE IT
      Exchange.findOne({ tag: 1 }, (err, doc) => {
         doc.createdAt = new Date()
         doc.exchangeRate.usd = usdZarExchangeRate
         doc.exchangeRate.eur = eurZarExchangeRate
         doc.save();
      });


   } else {
      // NEW EXCHANGE
      const newEntry = new Exchange({
         exchangeRate: {
            usd: usdZarExchangeRate,
            eur: eurZarExchangeRate
         },
         createdAt: new Date(),
         tag: 1
      })
      // SAVED EXCHANGE RATE
      try {
         const savedExchange = await newEntry.save()
      } catch(err){
         console.log(err)
      }
   }

}

module.exports = runCron