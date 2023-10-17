import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { PreguntasComponent } from './preguntas/preguntas.component';


@NgModule({
  declarations: [
    AppComponent,
    AsignaturasComponent,
    PreguntasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
