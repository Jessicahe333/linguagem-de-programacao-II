import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListacursoComponent } from './listacurso/listacurso.component';
import { ListaprofessorComponent } from './listaprofessor/listaprofessor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListacursoComponent,
    ListaprofessorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
