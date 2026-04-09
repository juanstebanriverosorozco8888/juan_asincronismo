import { Component, signal } from '@angular/core';
import { Perfil } from "./component/perfil/perfil";

@Component({
  selector: 'app-root',
  imports: [Perfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('juanAsincronismo');
}
