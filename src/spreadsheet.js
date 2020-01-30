const GoogleSpreadsheet = require('google-spreadsheet')
const { promisify } = require('util')

const creds = require('../credentials/google_api.json')

async function writeOnSpreadsheet(spreadSheetId, object) {
        const doc = new GoogleSpreadsheet(spreadSheetId)
        try{

            await promisify(doc.useServiceAccountAuth)(creds)
            const info = await promisify(doc.getInfo)()
            const sheet = info.worksheets[0]
            // const rows = await promisify(sheet.getRows)({
            //     offset: 1
            // })
            // console.log(JSON.stringify(rows[0].ticker))
        
        //    const row = sunoToObject(linha)   
             await promisify(sheet.addRow)(object)
        }catch(error){
            throw "Problemas ao acessar ou gravar na tabela"
        }
}

module.exports = { writeOnSpreadsheet }



