var secretNumber = parseInt(Math.random() * 10) 
var attempts = 2

var number = prompt("Digite um número: ")

while (attempts > 0) {

    if (number == secretNumber) {
        console.log("Acertou")
        break
    } else if (number < secretNumber) {
        alert("O número é maior")
        number = prompt("Digite um número: ")
        attempts -= 1
    } else if (number > secretNumber) {
        alert("O número é menor")
        number = prompt("Digite um número: ")
        attempts =- 1
    } 

}

if (number != secretNumber) alert("Você perdeu! O número secreto era " + secretNumber)

