import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export interface Usuario {
  nombre: string,
  correo: string,
}

@Injectable({
  providedIn: 'root',
})

export class PerfilService {
  constructor() {}

  obtenerUsuario(): Observable<Usuario>{
    const usuario:Usuario={
      nombre:"juan",
      correo:"juan@gmail.com"
    }

    return of(usuario).pipe(delay(3000))
  }
}
