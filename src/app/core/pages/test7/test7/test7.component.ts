import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test7',
  standalone: true,
  imports: [],
  template: `<p>test7 works!!!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Test7Component { }
