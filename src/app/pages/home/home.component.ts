import { Component, OnInit, inject } from '@angular/core';
import { HelperService } from '@services/helper.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  helperService = inject(HelperService);
  mode = 'light';

  ngOnInit(): void {
    this.helperService.isDarkMode.subscribe(mode => this.mode = mode)
  }
}
