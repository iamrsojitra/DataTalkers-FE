import { HttpErrorResponse, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { ErrorCode } from "@constants/app.constant";
import { AuthenticationService } from "@services/authentication.service";
import { catchError, throwError } from "rxjs";

export const ErrorInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next) => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);
  // const toasterService = inject(ToasterService);
  return next(request).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === ErrorCode.unauthorized || err.status === ErrorCode.forbidden) {
        authenticationService.logoutUser();
        router.navigate(['/auth/login']);
      }
      // toasterService.displaySnackBar(err.error?.message, MessageType.error);
      const error = err.error || err;
      return throwError(() => {
        return error;
      });
    })
  );
};
