import { Injectable } from '@angular/core';
import { preguntas } from '../modelos/preguntasInterfaz';
import { PREGUNTAS } from '../modelos/mock-preguntas';

@Injectable({
  providedIn: 'root'
})
export class SPService {
  getPreguntas(): preguntas[] {
    return PREGUNTAS;
  }
}
