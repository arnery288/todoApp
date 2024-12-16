import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { connect, connectable, from, Subject } from 'rxjs';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  template: `
    <p>test works!</p>
    <div>
      <h3>Connectable observable</h3>
      <p>Sub 4:</p>
      @for (value of emittedValues4; track $index) {
        <span>{{ value }}</span>
      }
    </div>
    <div>
      <p>Sub 5:</p>
      @for (value of emittedValues5; track $index) {
        <span>{{ value }}</span>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit {

  emittedValues4: number[] = [];
  emittedValues5: number[] = [];

  ngOnInit() {

    // --------------------
    // Connectable/Multicasted observable
    const sourceFour = from([1, 2, 3]); // Predefined Observable
    const subjectFour = new Subject<number>(); // Subject

    let sub4, sub5;

    // Connectable Observable
    const connectableObservable = connectable(sourceFour, {
      connector: () => subjectFour,
    });

    // Subscribe to connectable observable
    sub4 = connectableObservable.subscribe((v) => {
      console.log(`Sub 4: ${v}`);
      this.emittedValues4.push(v);
    }),

    sub5 = connectableObservable.subscribe((v) => {
      console.log(`Sub 5: ${v}`);
      this.emittedValues5.push(v);
    });
    // Start emitting values by connecting
    connectableObservable.connect();
    // --------------------

    // --------------------
    // Connect
    // Observable that emits predefined values
    const source = from([1, 2, 3]);

    // Create a subject
    const subjectTwo = new Subject();

    source.pipe(
      connect(() => subjectTwo)
    ).subscribe(value => console.log(`Subscriber: ${value}`));

    // Since `connect` auto-connects, no manual `.connect()` call is needed.
    // --------------------


  }
}
