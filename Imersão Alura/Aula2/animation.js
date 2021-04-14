var firstValue = parseInt(prompt("Digite o primeiro valor: "))
var secondValue = parseInt(prompt("Digite o segundo valor: "))

var resultadoMult = firstValue * secondValue
var resultadoDiv  = firstValue / secondValue
var resultadoAdi = firstValue + secondValue
var resultadoSub = firstValue - secondValue

var opcao = parseInt(prompt("Escolha uma opção: \n1 - Multiplicação \n2 - Divisão \n3 - Adição \n4 - Subtração \n"))

if (opcao == 1) {
    document.write("<h2>" + firstValue + " X " + secondValue + " = " + resultadoMult + "</h2>")

} else if (opcao == 2) {
    document.write("<h2>" + firstValue + " / " + secondValue + " = " + resultadoDiv + "</h2>")

} else if (opcao == 3) {
    document.write("<h2>" + firstValue + " + " + secondValue + " = " + resuladoAdi + "</h2>")

} else if (opcao == 4) {
    document.write("<h2>" + firstValue + " - " + secondValue + " = " + resultadoSub + "</h2>")

} else {
    document.write("<h2>Opção inválida</h2>")
}



 