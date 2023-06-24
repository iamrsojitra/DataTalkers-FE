import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastsContainer } from '@utils/toast/toasts-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, ToastsContainer]
})

export class AppComponent {
  title = 'DataTalkers-FE';
}
