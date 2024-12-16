import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { map, Observable, of, tap, toArray } from 'rxjs';
import { ExampleService } from '@core/services/example.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule, FormsModule],
  template: `
    <p>layout works!</p>
    <nav>
      <ul>
        <li><a routerLink="/login"    routerLinkActive="active" ariaCurrentWhenActive="page">Login</a></li>
        <li><a routerLink="/register" routerLinkActive="active" ariaCurrentWhenActive="page">Register</a></li>
        <li><a routerLink="/404"      routerLinkActive="active" ariaCurrentWhenActive="page">404</a></li>
        <!-- Opcion 2 con Link parameter array
          <li><a [routerLink]="['/login']"    routerLinkActive="active" ariaCurrentWhenActive="page">Login</a></li>
          <li><a [routerLink]="['/register']" routerLinkActive="active" ariaCurrentWhenActive="page">Register</a></li>
          <li><a [routerLink]="['/404']"      routerLinkActive="active" ariaCurrentWhenActive="page">404</a></li>
        -->
      </ul>
    </nav>

    <!-- --------------- -->
    <label for="name">Name: </label>
    <input id="name" type="text" [formControl]="name">
    <p>Value: {{ name.value }}</p>

    <form [formGroup]="profileForm">
      <label for="first-name">First name: </label>
      <input id="first-name" type="text" formControlName="firstName">

      <label for="">Last name:</label>
      <input id="last-name" type="text" formControlName="lastName">

      <button (click)="onSubmit()">Send info</button>
    </form>
    <!-- ----------- -->

    <p>{{ data$ | async }}</p>
    <p>{{ dataPipe$ | async }}</p>

    <p>Pipeable observable:</p>
    @for(x of dataPipe$ | async; track $index) {
      <span>{{ x }}</span>
    } @empty {
      <p>No numbers</p>
    }
    <router-outlet />
    `,
  styleUrl: './layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {

  // data: string = '';
  data$: Observable<string>;
  dataPipe$: Observable<string>;

  constructor(private exampleService: ExampleService) {
    // Call async observable
    this.data$ = new Observable<string>((subscriber) => {
      console.log('async Observable started');
      subscriber.next('Hello from async Observable!');
      subscriber.complete();
    });

    // Pipeable operator
    // Input observable is string type
    this.dataPipe$ = of(3, 6, 9) // Creates a numbered observable
      .pipe(
        map((x) => x * x), // Main operation
          // tap(x => console.log(`Emitted value: ${x}`)), // Logs each value to the console
        toArray(), // Converts res to array
        map((array) => array.join(', ')), // Then joins array with ,
          tap(x => console.log('toArray: ', x)),
      )
  }

  ngOnInit() {

    // ----------------
    // Observable
    const foo = new Observable((subscriber) => {
      console.log('Hello first observable');
      subscriber.next(42);

      // const intervalId = setInterval(() => {
      //   subscriber.next('hi');
      // }, 1000);

      // return function unsubscribe() {
      //   clearInterval(intervalId);
      //   console.log('Goodbye');
      // }
    });

    // Subscribing to the observable
    foo.subscribe((x) => console.log(x));

    const subscription = foo.subscribe(() => console.log('No subscribed!'));

    // Unsubscribe
    subscription.unsubscribe();
    console.log('Unsubscribed');
    // -------------

    // -------------
    // Observer
    const observer = {
      next: (x: any) => console.log('Observer got a next value: ' + x),
      error: (err: any) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    // Subscribe to the observable with observer
    const observerRes = foo.subscribe(observer);
    console.log('res',  observerRes);
    // ------------------

    // ------------------
    // Build an observable with observer values
    const foo2 = new Observable((subscriber) => {
      const observer = {
        next: (x: any) => console.log('hello'),
      };

      const newRes = subscriber.next(observer);
      console.log('new res: ', newRes);
    });
    // ------------

    // -------------
    // Call observable from exampleService
    this.exampleService.getObservable().subscribe((x) => {
      console.log(x);
    });
    // -----------------

    // -------------
    // Pipeable operators
    of(1, 2, 3) // Input observable that emits these values
      .pipe(map((x) => x * x)) // Performs the action
      // .subscribe((x) => console.log(`value: ${x}`)); // Output observable, value: [1 , 4, 9]
  }

  // ngOnDestroy(): void {
  //   if (foo.subscription) {
  //     foo.subscription.unsubscribe();
  //     console.log('Unsubscribed from observable');
  //   }
  // }
  // ------------

  // -------------
  // Reactive Forms
  name = new FormControl('');
  profileForm = new FormGroup({
    firstName:  new FormControl(''),
    lastName:   new FormControl(''),
  });

  onSubmit() {
    console.log('Form submission');
  }
  // ------------

}
