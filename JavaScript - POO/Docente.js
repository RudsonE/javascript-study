import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nacimento, role = 'docente', ativo = true){
        super(nome, email, nacimento, role, ativo)
    }

    aprovaEstudante(estudante, curso){
        return `Estudante ${estudante} passou no curso de ${curso}`
    }
}