export default class User {
    constructor(nome, email, nacimento, role, ativo = true){
        this.nome = nome
        this.email = email
        this.nacimento = nacimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }
}

