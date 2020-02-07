const express = require('express')
const app = express()

app.use(express.static('public'))

app.post('/', homePage)

function homePage(req, res){
  console.log('You are on the home page')
}

app.listen(8081, function() {
  console.log('Source Scan app listening on port 8081')
})