import { Injectable } from '@angular/core';
import { asignaturas } from '../modelos/asignaturasInterfaz';
import { ASIGNATURAS } from '../modelos/mock-asignaturas';

@Injectable({
  providedIn: 'root'
})
export class SAService {
  getAsignaturas(): asignaturas[] {
    return ASIGNATURAS;
  }
}
