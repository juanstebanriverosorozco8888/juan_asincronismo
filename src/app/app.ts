import { Component, signal } from '@angular/core';
import { Perfil } from "./component/perfil/perfil";
import { Users } from './component/users/users';

@Component({
  selector: 'app-root',
  imports: [Users],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('juanAsincronismo');
}
