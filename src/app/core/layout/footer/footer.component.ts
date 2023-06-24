import { Component, OnInit, inject } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import { MODE_TYPES, VERSION } from '@app/core/constants/app.constant';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  helperService = inject(HelperService);
  light = MODE_TYPES.light
  themeMode = MODE_TYPES.light;

  version = VERSION;

  ngOnInit(): void {
    this.helperService.isDarkMode.subscribe(themeMode => this.themeMode = themeMode)
  }
}
