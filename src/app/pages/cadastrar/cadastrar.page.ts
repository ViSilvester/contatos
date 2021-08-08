import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato, Sexo } from 'src/app/class/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  nome : String;
  telefone: number;
  sexo: Sexo;
  dataNascimento : string;

  constructor( private _alertController : AlertController,
               private _contatoService: ContatoService,
               private _router : Router ) {
    
  }


  ngOnInit() {
  }

  cadastrar(){
    console.log(this.dataNascimento);
    if(this.validar()){
      this._contatoService.addContato(new Contato(this.nome, this.telefone, this.sexo, new Date(this.dataNascimento)));
      this.nome = null;
      this.telefone = null;
      this.sexo = null;
      this.dataNascimento = null;
      this._router.navigate(['/']);
    }
    else{
      this.showAlert();
    }

  }

  validar(){
    if( this.nome && this.telefone && this.sexo && this.dataNascimento){
      return true;
    }
    else{
      return false;
    }
  }

  async showAlert(){
    const alert = await this._alertController.create({
      header : "Agenda de Contatos",
      subHeader : "Cadastrar",
      message: "Todos os campos são obrigatorios",
      buttons: ["ok"],

    });
    
    await alert.present();

  }

}
