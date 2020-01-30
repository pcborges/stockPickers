
function getPdfData() {
    return {
        // path: "../assets/relatorios_in/suno-small-caps-96.pdf",
        path: "../assets/relatorios_in/suno-dividendos-154.pdf",
        type: "sunoResearch",
        variation: "smallCaps",
        regex: /(\d{1,2})\s([A-Z]{4}[1-9])\s(\d{1,2})[^\r\n]+/g
    }
}

function sunoRowSheet(row) {
    let array = row.split(' ')
    return {
        rankingsuno: parseInt(array[0]),
        ticker: array[1],
        inicio: array[2],
        ['alocação']: array[3],
        ['preçoatual']: "=GOOGLEFINANCE(\""+ array[1] + "\")",
        precoteto: parseFloat(array[5]),
        precoentrada: parseFloat(array[6]),
        recomendacao: array[7],
        variacao: array[8],
    }
}



module.exports = { sunoRowSheet, getPdfData }