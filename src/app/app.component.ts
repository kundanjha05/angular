import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
