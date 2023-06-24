import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ROUTES } from '@constants/app.constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private http: HttpClient
  ) { }

  getResponse(question: any): Observable<any> {
    return this.http.post(API_ROUTES.chatApi, question);
  }

}
