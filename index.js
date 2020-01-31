const app = require('express')()
const consign = require('consign')
const mongoose = require('mongoose')

require('./config/mongodb')

app.db = mongoose

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)


app.listen(3000, () => {
    console.log('Backend executando porta 3000 ....')
})