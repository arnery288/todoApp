import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error-component',
  standalone: true,
  imports: [],
  template: `<p>ErrorComponent works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent { }
