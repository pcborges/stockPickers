
function getPdfData() {
    return {
        path: "../assets/relatorios_in/suno-small-caps-96.pdf",
        // path: "../assets/relatorios_in/suno-dividendos-154.pdf",
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
        ['início']: array[2],
        ['alocação']: array[3],
        ['preçoatual']: "=GOOGLEFINANCE(\""+ array[1] + "\")",
        ['preçoteto']: parseFloat(array[5]),
        ['preçoentrada']: parseFloat(array[6]),
        ['recomendação']: array[7],
        ['variação']: array[8],
    }
}



module.exports = { sunoRowSheet, getPdfData }