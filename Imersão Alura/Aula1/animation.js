function product() {

    var valorDolar = parseFloat(prompt("Qual o valor em dólar do produto: "))

}


function currency() {

    var valorCotacao = parseFloat(prompt("Digite a cotação atual do dólar: "))

}


var valorConvertido = parseFloat(valorCotacao * valorDolar).toFixed(2)

function calculate() {
    
    alert ("$" + valorDolar + " equivale a R$" + valorConvertido)
}

