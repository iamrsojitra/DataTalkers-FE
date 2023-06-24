import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from "@angular/router";
import { appRoutes } from '@constants/app.routes';
import { ErrorInterceptor } from '@interceptors/error.interceptor';
import { HttpTokenInterceptor } from '@interceptors/http.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([HttpTokenInterceptor, ErrorInterceptor])),
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      NgbModule
    ),
    { provide: 'LOCALSTORAGE', useFactory: getLocalStorage },
  ]
};

export function getLocalStorage() {
  return typeof window !== 'undefined' ? window.localStorage : null;
}
