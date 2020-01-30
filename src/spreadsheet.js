const GoogleSpreadsheet = require('google-spreadsheet')
const { promisify } = require('util')

const creds = require('../credentials/google_api.json')
const  sunoToObject  = require('../utils/converters')

const linha = '1 JSLG3 14/5/2019 5,0% 35,00 20,00 11,45 Aguardar 205,68%'

async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet('1I5B8xSOXTMNRz0fsfuUAZyAMwkRdeo9FGjn4pAELuRw')
    await promisify(doc.useServiceAccountAuth)(creds)
    const info = await promisify(doc.getInfo)()
     const sheet = info.worksheets[0]
    // const rows = await promisify(sheet.getRows)({
    //     offset: 1
    // })

//    const row = sunoToObject(linha)

    await promisify(sheet.addRow)(row)
}

accessSpreadsheet() 



