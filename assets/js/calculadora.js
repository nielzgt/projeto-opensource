visor = document.getElementById("visor")

a = parseInt(prompt("Digite o primeiro valor:"))
op = prompt("Digite o operador:")
b = parseInt(prompt("Digite o segundo valor:"))

let result

if(op == "+") {
    result = a+b
} else if(op == "-") {
    result = a-b
} else if(op == "*") {
    result = a*b
} else if(op == "/") {
    result = a/b
} else{
    result = "Operador inválido"
}

visor.innerHTML = result