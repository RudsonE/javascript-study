const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(lista){
    return clientes.filter((cliente)=>{
        return (cliente.endereco.apartamento &&
                !cliente.endereco.hasOwnProperty("complemento")
                );
    })
}

console.log(filtrarApartamentoSemComplemento(clientes))