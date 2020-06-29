import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListacursoComponent } from './listacurso/listacurso.component';
import { ListaprofessorComponent } from './listaprofessor/listaprofessor.component';
import { FormsModule } from '@angular/forms';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';
import { CursoNovoComponent } from './curso-novo/curso-novo.component'

@NgModule({
  declarations: [
    AppComponent,
    ListacursoComponent,
    ListaprofessorComponent,
    CursoCadastroComponent,
    CursoNovoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
