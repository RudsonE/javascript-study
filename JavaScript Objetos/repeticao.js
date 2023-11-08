const cliente = {
    nome: "Joao",
    idade: 23,
    email: "joao@firma.com",
    telefone: ["11455555550", "1144444440"],
};

cliente.enderecos = [
    {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
    },
];

cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
});

for(let chave in cliente){
    let tipo = typeof cliente[chave];
    
    if(tipo !== 'object' && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}