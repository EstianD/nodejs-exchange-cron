const http = require('http')
const app = require('./app')
const config = require('./utils/config')
const server = http.createServer(app)

// CRON
const runCron = require('./functions/exchange-cron')

runCron()



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})