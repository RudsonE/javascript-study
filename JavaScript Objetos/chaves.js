const cliente = {
    nome: "Joao",
    idade: 23,
    email: "joao@firma.com",
    telefone: ["11455555550", "1144444440"],
};

// cliente.enderecos = [
//     {
//     rua: "R. Joseph Climber",
//     numero: 1337,
//     apartamento: true,
//     complemento: "ap 934",
//     },
// ];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessário ter um endereço cadastrado.")
}