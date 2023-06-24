import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from "@angular/router";
import { appRoutes } from './core/constants/app.routes';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([])),
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule
    ),
  ]
};

