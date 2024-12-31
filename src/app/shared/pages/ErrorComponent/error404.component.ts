import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-error-component',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './error404.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent { }
