import { Component } from '@angular/core';

@Component({
  selector: 'app-listacurso',
  templateUrl: './listacurso.component.html',
  styleUrls: ['./listacurso.component.css']
})
export class ListacursoComponent{

  obterEstiloPara1(){
    return{
      backgroundColor:'#eee6ff',      
      padding: '8px',      
      width: '20%',      
      border: 'none',      
      borderRadius: '4px'
    }
  }

  obterEstiloPara2(){
    return{
      backgroundColor:'#aaa6ff',      
      padding: '8px',      
      width: '20%',      
      border: 'none',      
      borderRadius: '4px'
    }
  }

}
