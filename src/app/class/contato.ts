export class Contato {

    private _nome : String;
    private _telefone: Number;
    private _sexo : String;
    private _dataNascimento: Date;

    constructor(nome : String, telefone: Number, sexo: Sexo, dataNascimento : Date){
        this._nome = nome;
        this._telefone = telefone;
        this._sexo = sexo;
        this._dataNascimento = dataNascimento;
    }

    public getNome(): String{
        return this._nome;
    }

    public getTelefone() : Number{
        return this._telefone;
    }

    public getSexo(){
        return this._sexo;
    }

    public getDataNascimento(){
        return this._dataNascimento.getDate()+
        "/" +
        this._dataNascimento.getMonth() +
        "/" +
        this._dataNascimento.getFullYear() ;
    }

    
}

export enum Sexo{
    Masculino = "Masculino",
    Feminino = "Feminino",
    Outro = "Outro",
}
