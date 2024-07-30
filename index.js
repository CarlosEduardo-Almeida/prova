const search = window.location.search;
const params = new URLSearchParams(search);

const valor = params.get("valor");
console.log(valor)

const taxa = params.get("taxa");
console.log(taxa)

const parcelas = params.get("parcelas");
console.log(parcelas)

//valorReal = valorEmprestado * (1 + (taxaJuros/100) * nroParcelas)
const valorReal = valor * (1 + (taxa/100) * parcelas);
const valorParcela = valorReal / parcelas

var valorDoEmprestimo = document.getElementById('valorDoEmprestimo')
var valorDeCadaParcela = document.getElementById('valorDeCadaParcela')

valorDoEmprestimo.innerText= valorReal
valorDeCadaParcela.innerText = valorParcela