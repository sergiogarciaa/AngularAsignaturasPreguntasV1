import { Component } from '@angular/core';

import { PREGUNTAS } from '../modelos/mock-preguntas';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})

export class PreguntasComponent {
  title = 'Preguntas';
  preguntas = PREGUNTAS;
}

