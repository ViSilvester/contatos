import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contato } from 'src/app/class/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contatos : Contato[];

  constructor(private _router : Router, private _contatosService : ContatoService){
    this.contatos = _contatosService.getContatos();
  }

  irParaCadastrar() : void{
    this._router.navigateByUrl("/cadastrar");
  }

}
