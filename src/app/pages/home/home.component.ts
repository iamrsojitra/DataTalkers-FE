import { NgIf , JsonPipe} from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MODE_TYPES } from '@app/core/constants/app.constant';
import { HelperService } from '@services/helper.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, JsonPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  helperService = inject(HelperService);
  apiLoading = false;
  light = MODE_TYPES.light;
  themeMode = MODE_TYPES.light;
  sample = sample;

  ngOnInit(): void {
    this.helperService.isDarkMode.subscribe(themeMode => this.themeMode = themeMode)
  }

  sendRequest(): void {
    this.apiLoading = true;
    console.log("hrllo world")
  }
}


export const sample = {
  "height" : 6.2,
  "width" : 7.3,
  "length" : 9.1,
  "color" : {
      "r" : 255,
      "g" : 200,
      "b" : 10
  }
}
