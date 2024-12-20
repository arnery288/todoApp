import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { OperationsService } from '@core/services/operations.service';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  template: `
    <p>Add: {{ addRes }}</p>
    <p>Subtract: {{ subtractRes }}</p>
    <p>Multiply: {{ multiplyRes }}</p>
    <p>Divide: {{ divideRes }}</p>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlFlowComponent {
    private operations = inject(OperationsService);

    addRes      = this.operations.add(1, 2);
    subtractRes = this.operations.subtract(1, 2);
    multiplyRes = this.operations.multiply(1, 2);
    divideRes   = this.operations.divide(1, 2);
}
