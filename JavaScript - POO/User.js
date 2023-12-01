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

    get nome(){
        return this.#nome
    }

    get email(){
        return this.#email
    }

    get nasciemento(){
        return this.#nascimento
    }

    get role(){
        return this.#role
    }

    get ativo(){
        return this.#ativo
    }

    set nome(novoNome){
        if (novoNome === ''){
            throw new Error('Formato não válido')
        }
        this.#nome = novoNome
    }


    exibirInfos(){
        
        return `${this.nome}, ${this.email}, ${this.nasciemento}, ${this.role}, ${this.ativo}`
    }

}