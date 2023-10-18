import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { SPService } from './servicios/s-p.service'; // Importa el servicio
import { SAService } from './servicios/s-a.service';
import { CabeceraComponent } from './cabecera/cabecera.component';


@NgModule({
  declarations: [
    AppComponent,
    AsignaturasComponent,
    PreguntasComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [SPService, SAService],
  bootstrap: [AppComponent]
})
export class AppModule { }
