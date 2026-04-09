import { Component } from '@angular/core';
import { PerfilService, Usuario } from '../../Services/perfil';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  cargando: boolean = false;
  usuario: Usuario | null = null;

  constructor(private perfilService: PerfilService) { }

  cargarPerfil() {
    this.cargando = true;
    this.usuario = null;

    this.perfilService.obtenerUsuario().subscribe({
      next:(respuesta)=>{
        this.usuario = respuesta;
        this.cargando = false;
      },error:()=>{
        this.cargando = false
      },
    })
  }
}
