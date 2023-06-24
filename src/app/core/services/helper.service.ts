import { Inject, Injectable, InjectionToken, PLATFORM_ID } from '@angular/core';
import { CryptoService } from './crypto.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  isDarkMode = new BehaviorSubject('dark');

  constructor(
  ) { }

}
