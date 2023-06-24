import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appWhiteSpaceInput]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: InputWhitespaceDirective,
      multi: true,
    },
  ],
})

export class InputWhitespaceDirective implements Validator {
  @Input() public whiteSpaceInput!: string;
  public validate(control: AbstractControl): ValidationErrors | null {
    if (control.value?.indexOf(' ') >= 0 && !control.value?.trim().length) {
      return { cannotContainSpace: true };
    }
    return null;
  }

}
