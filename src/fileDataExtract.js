const fs = require("fs");
const pdf = require("pdf-parse");
const path = require("path");

async function getReportData(reportPDF) {
  console.log('> [Data Extract] Starting...')
  return new Promise((resolve, reject) => {
    let regex = reportPDF.regex
    let dataBuffer = ''


    try {
      dataBuffer = fs.readFileSync(path.resolve(__dirname, reportPDF.path))
    } catch (e) {
      reject(`[Data Extract] ERRO: Arquivo especificado não existe no caminho: ${reportPDF.path}`)
      return
    }

    pdf(dataBuffer).then(data => {
      // let recommendationTableRegex = new RegExp('/(\d{1,2})\s([A-Z]{4}[1-9])\s(\d{1,2})/(\d{1,2})/(\d{4})[^\r\n]/g')
      let dataTable = data.text.match(regex);
      if (dataTable) {
        resolve(dataTable)
      } else {
        reject("[Data Extract] ERRO: Não foi possivel recuperar dados do arquivo")
      }
    })
  })
};

module.exports = { getReportData }

