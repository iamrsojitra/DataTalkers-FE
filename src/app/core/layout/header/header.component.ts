import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  helperService = inject(HelperService);
  mode = 'light';

  ngOnInit(): void {
    this.helperService.isDarkMode.subscribe(mode => this.mode = mode)
  }

  themeChange() {
    this.helperService.isDarkMode.next(this.mode === 'light' ? 'dark' : 'light');
  }
}
