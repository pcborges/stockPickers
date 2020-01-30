const getDataFromSunoResearch = require('./fileDataExtract')
const  sunoToObject  = require('../utils/converters')

async function orquestrador() {

    let promise = getDataFromSunoResearch("../assets/relatorios_in/suno-small-caps-96.pdf")

    promise.then(data => {
        console.log(sunoToObject(data.toString()))
    })

}

orquestrador()

