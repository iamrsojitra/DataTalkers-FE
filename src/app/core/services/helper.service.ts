import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  isDarkMode = new BehaviorSubject('dark');

  constructor(
  ) { }

}
