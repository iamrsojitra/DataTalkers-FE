import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MODE_TYPES } from '@app/core/constants/app.constant';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  helperService = inject(HelperService);
  themeMode = MODE_TYPES.light;
  light = MODE_TYPES.light

  ngOnInit(): void {
    this.helperService.isDarkMode.subscribe(themeMode => this.themeMode = themeMode)
  }

  themeChange() {
    this.helperService.isDarkMode.next(this.themeMode === 'light' ? 'dark' : 'light');
  }
}
