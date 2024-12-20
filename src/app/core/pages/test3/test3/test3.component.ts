import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { HeaderComponent } from "@shared/components/header/header.component";

@Component({
  selector: 'app-test3',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <app-header />
    <p>test3 works!</p>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Test3Component implements OnInit{
  ngOnInit(): void {

    // ReplaySubject will replay the last 2 values
    const replaySubject = new ReplaySubject<number>(2); // Buffer size is 2


  }

}
