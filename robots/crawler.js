const { getReportData } = require('./fileDataExtract')
const { writeOnSpreadsheet } = require('./spreadsheet')
const suno = require('./sunoResearch')



async function start() {
    let reportPDF = suno.getPdfData()
    let spreadSheetId = '1I5B8xSOXTMNRz0fsfuUAZyAMwkRdeo9FGjn4pAELuRw' // id da planilha do google
    
    try{
        let data = await getReportData(reportPDF)
        data.forEach(async (row, index) => {
            let object = suno.sunoRowSheet(row)
            await writeOnSpreadsheet(spreadSheetId, object)
        })
        // let dataReturn = await writeOnSpreadsheet(spreadSheetId, data)
        // console.log(dataReturn)
    }catch(error){
        console.log(error)
    }
}

start()
