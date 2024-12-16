import { ChangeDetectionStrategy, Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  template: `
    <p>signals works!</p>
    <p>{{ message() }}</p>
    <button (click)="updateMessage()">Change</button>
  `,
  styles: `
    :host {
      display: block;
    }

    button {
      background-color: gray;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      font-size: 16px;
      margin-top: 10px;
      padding: 10px;
      transition: background-color 0.3s ease;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent {

  message = signal('Hello, World!'); // Signal holding a string

  constructor() {
    effect(() => {
      console.log('current msg:', this.message());
    });
  }

  updateMessage() {
    this.message.set('Welcome to Angular Signals!');
  }

}
