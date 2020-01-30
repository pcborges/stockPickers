const fs = require("fs");
const pdf = require("pdf-parse");
const path = require("path");

module.exports = getDataFromSunoResearch = (fileName) => {
  return new Promise((resolve, reject) =>{
      let dataBuffer = fs.readFileSync(path.resolve(__dirname, fileName))
       pdf(dataBuffer).then(data => {
        let regex = /(\d{1,2})\s([A-Z]{4}[1-9])\s(\d{1,2})[^\r\n]+/g;
        // let recommendationTableRegex = new RegExp('/(\d{1,2})\s([A-Z]{4}[1-9])\s(\d{1,2})/(\d{1,2})/(\d{4})[^\r\n]/g')
        let dataTable = data.text.match(regex);
        resolve(dataTable)
        //    novosDadosTrim = novosDados.map(linha => linha.trim())
        // console.log(dataTable)  
      })
  })  
};

