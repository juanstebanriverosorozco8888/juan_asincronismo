import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';


export interface UsuarioExterno {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  address: {
    city: string,
  }
  company: {
    name: string
  }
}

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private http = inject(HttpClient)

  obtenerUsuarioId(id: number): Observable<UsuarioExterno> {
    return this.http.get<UsuarioExterno>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
