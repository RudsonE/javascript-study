const dados = require("./cliente.json");

console.log(dados)
console.log(typeof dados)

const clienteEmString = JSON.stringify(dados); //transforma objeto em string json

console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome);

const objetoCliente = JSON.parse(clienteEmString); // transforma string json em objeto

console.log(objetoCliente)