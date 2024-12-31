import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { HeaderComponent } from "@shared/components/header/header.component";
import { OperationsService } from '@core/services/operations.service';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [ButtonModule, CardModule, HeaderComponent],
  providers: [],
  templateUrl: 'control-flow.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlFlowComponent {
  // Service
  private operations = inject(OperationsService);
  
  addRes      = this.operations.add(1, 2);
  subtractRes = this.operations.subtract(1, 2);
  multiplyRes = this.operations.multiply(1, 2);
  divideRes   = this.operations.divide(1, 2);
}
