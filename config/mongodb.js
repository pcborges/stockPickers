const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://stockpicker:stockpassword@cluster0-q2hou.mongodb.net/stockPicker?retryWrites=true&w=majority', {
     useUnifiedTopology: true ,
     useNewUrlParser: true
})
.catch(e => {
    const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
})