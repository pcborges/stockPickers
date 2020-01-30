const fs = require('fs')
const pdf = require('pdf-parse')
const path = require('path')

let dataBuffer = fs.readFileSync(path.resolve(__dirname, "../assets/relatorios_in/suno-small-caps-96.pdf"))

class MyRegExp extends RegExp {
    [Symbol.matchAll](str) {
        let result = RegExp.prototype[Symbol.matchAll].call(this, str);
        if (!result) {
            return null;
        }
        return Array.from(result);
    }
}
let re = new MyRegExp('/(\d{1,2})\s([A-Z]{4}[1-9])/','g');


pdf(dataBuffer).then((data) => {
//    console.log("PAGES:", data.numpages)

    // // PDF text
    let regex = /(\d{1,2})\s([A-Z]{4}[1-9])\s(\d{1,2})[^\r\n]+/g
    // let recommendationTableRegex = new RegExp('/(\d{1,2})\s([A-Z]{4}[1-9])\s(\d{1,2})/(\d{1,2})/(\d{4})[^\r\n]/g')
     let novosDados = data.text.match(regex)
//    novosDadosTrim = novosDados.map(linha => linha.trim())
console.log(novosDados[0])

})
