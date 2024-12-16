import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-test2',
  standalone: true,
  imports: [],
  template: `<p>test2 works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Test2Component implements OnInit{
  ngOnInit(): void {

    // BehaviorSubject is a variant of subjects
    const subject = new BehaviorSubject(0);

    subject.subscribe({
      next: (v) => console.log(`Sub 1: ${v}`),
    });

    subject.subscribe({
      next: (v) => console.log(`Sub 2: ${v}`),
    });

    subject.next(1); // Emit new value to all subscribers
    subject.next(2); // Emit new value to all subscribers
  }
}
