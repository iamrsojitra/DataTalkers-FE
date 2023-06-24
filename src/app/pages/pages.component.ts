import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../core/layout/footer/footer.component';
import { HeaderComponent } from '../core/layout/header/header.component';
import { SidebarComponent } from '../core/layout/sidebar/sidebar.component';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CommonModule, SidebarComponent, HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {

}
