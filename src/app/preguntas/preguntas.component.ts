import { Component, OnInit } from '@angular/core';
import { SPService } from '../servicios/s-p.service'; // Importa el servicio
import { preguntas } from '../modelos/preguntasInterfaz';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})

export class PreguntasComponent implements OnInit {
  title = 'Preguntas';
  preguntas: preguntas[] = [];

  constructor(private preguntaService: SPService) {}

  ngOnInit(): void {
    this.preguntas = this.preguntaService.getPreguntas();
  }
}

