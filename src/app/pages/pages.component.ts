import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MODE_TYPES } from '@app/core/constants/app.constant';
import { FooterComponent } from '@layouts/footer/footer.component';
import { HeaderComponent } from '@layouts/header/header.component';
import { SidebarComponent } from '@layouts/sidebar/sidebar.component';
import { HelperService } from '@services/helper.service';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CommonModule, SidebarComponent, HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  helperService = inject(HelperService);
  light = MODE_TYPES.light
  themeMode = MODE_TYPES.light;

  ngOnInit(): void {
    this.helperService.isDarkMode.subscribe(themeMode => this.themeMode = themeMode)
  }
}
