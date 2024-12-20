import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { HeaderComponent } from "@shared/components/header/header.component";

@Component({
  selector: 'app-test4',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <app-header />
    <p>test4 works!</p>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Test4Component implements OnInit {
  ngOnInit(): void {

    // Async subject will send only the last valule to its observers
    const subject = new AsyncSubject();

    // Sub 1
    subject.subscribe({
      // Observer
      next: (v) => console.log(`Sub 1: ${v}`), // Sub 1: 5

    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    // Sub 2
    subject.subscribe({
      // Observer
      next: (v) => console.log(`Sub 2: ${v}`), // Sub 2: 5
    });

    subject.next(5); // Last value
    subject.complete();

  }

}
