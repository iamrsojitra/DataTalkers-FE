import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_ROUTES } from '@constants/app.constant';
import { StorageService } from '@services/storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private storageService: StorageService,
    private router: Router,
    private http: HttpClient
  ) { }

  dbConnection(params: any): Observable<any> {
    return this.http.post(API_ROUTES.dbConnectionApi, params);
  }

  logoutUser(): void {
    this.storageService.clear();
    this.router.navigate(['/auth/login']);
  }
}
