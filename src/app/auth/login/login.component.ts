import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonComponent } from '@app/shared/utils/button/button.component';
import { InputWhitespaceDirective } from '@directives/prevent-whitespace.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgClass, NgIf, ButtonComponent, InputWhitespaceDirective],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isSubmitted = false;

  onSubmit(form: NgForm): void {
    form.form.markAllAsTouched();
    if (form.invalid) {
      return;
    }
    this.isSubmitted = true;
    console.log(form.value);

  }
}
