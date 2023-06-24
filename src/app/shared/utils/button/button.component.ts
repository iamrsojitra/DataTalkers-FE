import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoaderComponent } from '@utils/loader/loader.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [LoaderComponent, NgClass, NgIf],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() label!: string;
  @Input() type = 'button';
  @Input() class!: { [key: string]: boolean };
  @Input() isDisabled = false;
  @Input() tooltip?: string;
  @Input() spin = false;
  @Output() buttonTap = new EventEmitter<void>();

  click(): void {
    this.buttonTap.emit();
  }
}
