import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MODE_TYPES } from '@constants/app.constant';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from '@services/helper.service';

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
  light = MODE_TYPES.light;

  constructor(
    private modalService: NgbModal,
    private config: NgbModalConfig,
    private router: Router
  ) { config.backdrop = 'static' }

  ngOnInit(): void {
    this.helperService.isDarkMode.subscribe(themeMode => this.themeMode = themeMode)
  }

  themeChange() {
    this.helperService.isDarkMode.next(this.themeMode === 'light' ? 'dark' : 'light');
  }

  open(content: any): void {
    this.modalService.open(content, { centered: true });
  }

  navigateToLogout(modal: any): void {
    modal.close();
    this.router.navigate(['auth/logout']);
  }

}
