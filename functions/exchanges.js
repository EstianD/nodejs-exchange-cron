const axios = require('axios')
const config = require('../utils/config')

// FUNCTION FOR USD/ZAR EXCHANGE
const usdZarExchangeRate = async () => {
   const usdZarExchangeRate = await axios.get(config.USDZAR_LINK)

   const usdZarRate = parseFloat(usdZarExchangeRate.data['Realtime Currency Exchange Rate']['5. Exchange Rate']).toFixed(2)

   return usdZarRate
}

// FUNCTION FOR EUR/ZAR EXCHANGE
const eurZarExchangeRate = async () => {
   const eurZarExchangeRate = await axios.get(config.EURZAR_LINK)

   const eurZarRate = parseFloat(eurZarExchangeRate.data['Realtime Currency Exchange Rate']['5. Exchange Rate']).toFixed(2)

   return eurZarRate
}

module.exports = {
   usdZarExchangeRate,
   eurZarExchangeRate
}