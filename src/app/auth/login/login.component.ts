import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { STORAGE } from '@app/core/constants/app.constant';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { StorageService } from '@app/core/services/storage.service';
import { ButtonComponent } from '@app/shared/utils/button/button.component';
import { InputWhitespaceDirective } from '@directives/prevent-whitespace.directive';
import { ToastService } from '@services/toast-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgClass, NgIf, ButtonComponent, InputWhitespaceDirective],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isSubmitted = false;
  constructor(
    private toasterService: ToastService,
    private autheticationService: AuthenticationService,
    private storageService: StorageService,
    private router: Router
  ) { }

  onSubmit(form: NgForm): void {
    form.form.markAllAsTouched();
    if (form.invalid) {
      return;
    }
    this.isSubmitted = true;
    const params = {
      ...form.value,
      port: 3306
    }
    this.autheticationService.dbConnection(params).subscribe({
      next: (res) => {
        if (res) {
          this.isSubmitted = false;
          this.storageService.set(STORAGE.TOKEN, res.accessToken);
          this.router.navigate(['/']).then(() => {
            this.toasterService.show("Database connection established", { classname: 'bg-success text-light', delay: 2000 });
          });
        }
      },
      error: (err) => {
        if (err) {
          this.toasterService.show("There is some error while connect to Database", { classname: 'bg-danger text-light', delay: 1000 })
          this.isSubmitted = false;
        }
      }
    })
    console.log(form.value);

  }
}
