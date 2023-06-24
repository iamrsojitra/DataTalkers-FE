import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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
    private toasterService: ToastService
  ) { }

  onSubmit(form: NgForm): void {
    this.toasterService.show("hello", { delay: 1000 });
    form.form.markAllAsTouched();
    if (form.invalid) {
      return;
    }
    this.isSubmitted = true;
    console.log(form.value);

  }
}
