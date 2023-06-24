import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@app/core/services/storage.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {


  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.storageService.clear();
    this.router.navigate(['/auth/login']);
  }

}
