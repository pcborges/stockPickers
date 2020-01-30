
module.exports =  function sunoToObject(array){

     array = string.split(' ')
    let objeto = new Object()
    objeto.rankingsuno = parseInt(array[0])
    objeto.ticker = array[1]
    objeto.inicio = array[2]
    objeto.alocacao = array[3]
    objeto.precoatual = parseFloat(array[4])
    objeto.precoteto = parseFloat(array[5])
    objeto.precoentrada = parseFloat(array[6])
    objeto.recomendacao = array[7]
    objeto.variacao = array[8]
    return objeto
}


