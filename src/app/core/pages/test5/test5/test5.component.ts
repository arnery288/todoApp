import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-test5',
  standalone: true,
  imports: [],
  template: `<p>test5 works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Test5Component implements OnInit {
  ngOnInit(): void {

    // Async subject that returns a string
    const subject = new AsyncSubject<string>();

    // Sub 1
    subject.subscribe({
      // Observer
      next: (v: string) => console.log(`Sub 1 str: ${v}`), // Sub 1: Hello, World!
    });

    // Send str value
    subject.next('Hello, World!');
    subject.next('Another string');
    subject.next('Last string'); // Last value

    subject.complete();


    
  }

}
