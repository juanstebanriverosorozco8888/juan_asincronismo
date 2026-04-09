import { Component } from '@angular/core';
import { UserService, UsuarioExterno } from '../../Services/user';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  cargando: boolean = false;
  error: string = ""
  usuario: UsuarioExterno | null = null

  constructor(private usuarioApi: UserService) { }

  buscarUsuario(idUsuario: string) {
    const id = Number(idUsuario)
    this.error = "";
    this.usuario = null;
    if (!id || id < 1 || id >= 10) {
      this.error = "Debes escribir un número de al 1 al 10"
      return
    }
    this.cargando = true;

    this.usuarioApi.obtenerUsuarioId(id).subscribe({
      next: (respuesta) => {
        this.usuario = respuesta
        this.cargando = false;
      },error:()=>{
        this.error = "Ocurrio un error al obtener el usuario";
        this.cargando=false
      }
    })
  }
}
