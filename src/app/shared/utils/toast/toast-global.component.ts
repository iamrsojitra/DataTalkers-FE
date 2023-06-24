import { Component, OnDestroy } from '@angular/core';
import { ToastService } from '@app/core/services/toast-service';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainer } from './toasts-container.component';

@Component({
  selector: 'ngbd-toast-global',
  standalone: true,
  imports: [NgbTooltipModule, ToastsContainer],
  templateUrl: './toast-global.component.html',
})
export class NgbdToastGlobal implements OnDestroy {
  constructor(public toastService: ToastService) { }

  showStandard(message: string) {
    this.toastService.show(message);
  }

  showSuccess(message: string, delay = 5000) {
    this.toastService.show(message, { classname: 'bg-success text-light', delay: delay });
  }

  showDanger(message: string, delay = 5000) {
    this.toastService.show(message, { classname: 'bg-danger text-light', delay: delay });
  }

  ngOnDestroy(): void {
    this.toastService.clear();
  }
}
