import { Component } from '@angular/core';
import { ASIGNATURAS } from '../modelos/mock-asignaturas';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent {
  title = 'Asignaturas';
  asignaturas = ASIGNATURAS;
}
