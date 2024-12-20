import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Button } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [Button, CommonModule, Toast],
  providers: [MessageService],
  template: `
    <div class="card flex justify-center">
        <p-toast />
        <p-button (onClick)="show()" label="Show" />
        <p-button (click)="showError()" pButton type="button" label="Show Error" severity="danger"></p-button>
    </div>
  `,
  styleUrl: './alert.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  constructor(private messageService: MessageService) {}

  show() {
    setTimeout(() => {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
    }, 3000);
  }

  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error Message',
      detail: 'Something went wrong!',
    });
  }
}
