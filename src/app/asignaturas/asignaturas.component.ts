import { Component, OnInit } from '@angular/core';
import { SAService } from '../servicios/s-a.service';
import { ASIGNATURAS } from '../modelos/mock-asignaturas';
import { asignaturas } from '../modelos/asignaturasInterfaz';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {
  title = 'Asignaturas';
  asignaturas: asignaturas[] = [];

  constructor(private asignaturaServicio: SAService) {}

  ngOnInit(): void {
    this.asignaturas = this.asignaturaServicio.getAsignaturas();
  }
}
