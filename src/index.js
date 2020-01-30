const {getReportData} = require('./fileDataExtract')
const  sunoToObject  = require('../utils/converters')



async function start() {
    let reportPDF = {}
    reportPDF.path = "../assets/relatorios_in/suno-small-caps-9.pdf"
    reportPDF.type = "sunoResearch"
    reportPDF.variation = "smallCaps"
    
    try{

        let data = await getReportData(reportPDF)
        console.log(data)
    }catch(error){
        console.log(error)
    }


}

start()

