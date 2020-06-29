import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css']
})
export class CursoCadastroComponent {

  cursosnovos = [
    {nome: "Excel-VBA"},
    {nome: "Introdução à Ciência de Dados"}
  ];

  adicionar(nome){
    const curso = {
      nome:nome
    };
    this.cursoAdicionado.emit(curso);
  }

  @Output()cursoAdicionado = new EventEmitter();

}
