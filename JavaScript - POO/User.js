export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nacimento, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nacimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    exibirInfos(){
        const objUser = this.#montaObjUser()
        return `${objUser.nome}, ${objUser.email}, ${objUser.nasciemento}, ${objUser.role}, ${objUser.ativo}`
    }
    #montaObjUser(){
        return ({
            nome: this.#nome,
            email: this.#email,
            nasciemento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }
}