const valor = parseFloat(prompt('Qual é o valor do produto?'))
const cor = prompt('Digite a cor da etiqueta: \n Verde \n Amarelo \n Azul \n Vermelho').toLowerCase()
let desconto = 0
if (cor === 'verde') {

    desconto = 0.1

} else if (cor === 'amarelo') {

    desconto - 0.2

} else if ( cor === 'azul') {

    desconto = 0.3
    
} else if (cor === 'vermelho') {

    desconto = 0.4
    
}

let valorFinal = valor - (valor * desconto)

alert(`O valor do produto é ${valor}, com desconto de ${desconto} ficou R$ ${valorFinal}`)