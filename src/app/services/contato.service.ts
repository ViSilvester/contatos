import { Injectable } from '@angular/core';
import { Contato, Sexo } from '../class/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos : Contato[];

  constructor() {
    this.contatos = new Array<Contato>();
    this.contatos.push(new Contato("Vinicius", 5256522655, Sexo.Masculino, new Date("1998-06-27")));
  }

  public getContatos(){
    return this.contatos;
  }

  public addContato(contato : Contato){
    this.contatos.push(contato);
  }
}
