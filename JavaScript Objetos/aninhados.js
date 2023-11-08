const cliente = {
    nome: "Joao",
    idade: 23,
    email: "joao@firma.com",
    telefone: ["11455555550", "1144444440"],
};

cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};

console.log(cliente.endereco); // ou cliente['endereco']
