import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Nl2brPipe } from '@app/core/pipes/nl2br.pipe';
import { ToastService } from '@app/core/services/toast-service';
import { MODE_TYPES } from '@constants/app.constant';
import { ChatService } from '@services/chat.service';
import { HelperService } from '@services/helper.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, JsonPipe, FormsModule, NgFor, Nl2brPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  helperService = inject(HelperService);
  apiLoading = false;
  light = MODE_TYPES.light;
  themeMode = MODE_TYPES.light;
  question = '';
  private destroyRef = inject(DestroyRef);
  qaList: { question?: string, answer?: string, error?: string, query?: string }[] = [];

  constructor(
    private chatService: ChatService,
    private toasterService: ToastService
  ) { }

  ngOnInit(): void {
    this.helperService.isDarkMode.subscribe(themeMode => this.themeMode = themeMode)
  }

  sendRequest(): void {

    this.apiLoading = true;
    const queAns = {
      question: this.question
    };
    this.qaList.push(queAns);
    const param = {
      prompt: this.question
    }
    this.question = '';
    this.chatService.getResponse(param)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          if (res) {
            this.apiLoading = false;
            this.qaList[this.qaList.length - 1].answer = res.result;
            this.qaList[this.qaList.length - 1].query = res.sql;
          }
        },
        error: (err) => {
          this.apiLoading = false;
          this.qaList[this.qaList.length - 1].error = err.message;
        }
      })
  }

  copyToClipboard(query: string): void {
    navigator.clipboard.writeText(query);
    this.toasterService.show("copied", {classname: this.themeMode === MODE_TYPES.light ? 'bg-light text-dark' : 'bg-dark text-light', delay: 1000 });

  }
}
