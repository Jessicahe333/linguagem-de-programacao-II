import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AtividadeAngular';

  cursosnovos = [
    {nome: "Excel-VBA"},
    {nome: "Introdução à Ciência de Dados"}
  ];

  onAdicionarCurso(curso){
    this.cursosnovos = [curso, ...this.cursosnovos];
  }

}
