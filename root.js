const express = require('express')
const path = require('path')
const app = express()

app.use('/public', express.static('public'));
const bmi_calculator_route = require(path.join(__dirname, 'routes', 'bmi_calculator.js'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'mainPageView.html'))
})

app.use('/bmicalculator', bmi_calculator_route);

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Local server is running on: http://localhost:${PORT}`)
})