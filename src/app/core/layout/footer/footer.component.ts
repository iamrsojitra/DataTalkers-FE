import { Component, OnInit, inject } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  helperService = inject(HelperService);
  mode = 'light';

  ngOnInit(): void {
    this.helperService.isDarkMode.subscribe(mode => this.mode = mode)
  }
}
