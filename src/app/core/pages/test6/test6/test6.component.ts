import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';

import { AuthService } from '@core/services/Auth.service';
import { PasswordPipe } from '@shared/pipes/password.pipe';
// import { login, logout } from '@methods/authMethods';

@Component({
  selector: 'app-test6',
  standalone: true,
  imports: [PasswordPipe],
  template: `
    <p>test6 works!</p>
    @if (currentUser) {
      <div>
        <p>Welcome, {{ currentUser.username }}!</p>
        <p>{{ currentUser.password | appPassword }}</p>
        <button (click)="togglePasswordVisibility()">
          {{ showPassword ? 'Hide' : 'Show' }} Password
        </button>
        <button (click)="logout()">Logout</button>
      </div>
    } @else {
      <p>You are not logged in.</p>
      <button (click)="login()">Login</button>
    }

    @if (!isStrong) {
      <p class="w">Weak!</p>
    } @else {
      <p class="s">Strong</p>
    }
  `,
  styles: `
    :host {
      display: block;
    }

    button {
      background-color: gray;
      padding: 2px 5px;
      border-radius: 3px;
    }

    .w {
      color: red;
    }

    .s {
      color: green;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Test6Component implements OnInit {

  currentUser: { username: string; password: string } | null = null;

  isStrong = false;

  showPassword = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    /*
      1. Consume service
      2. Access exposed subject and sub
      3. Get current user
    */

    // Sub 1 subs with currentUser
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
      // this.isStrong = user?.password === '12345'; // Second action with the same sub, preferred way
    });

    // Sub 2 subs with
    this.authService.currentUser$.subscribe((user) => {
      this.isStrong = user?.password === '12345'; // Subscription 2
    });

    // ---------------------

    interface User {
      id: number;
      name: string;
    }

    // Primitive subjects
    const strSub  = new Subject<string>();
    const numbSub = new Subject<number>();
    const boolSub = new Subject<boolean>();

    // Object subjects
    const objSub = new Subject<{
      name: string;
      age: number;
      isStudent: boolean;
    }>();

    // Interface subject
    const intSub = new Subject<User>();

    // Null subject
    const nullSub = new Subject<null>();

    // Void subject
    const voidSub = new Subject<void>();

    // ----------------------

    // Subscribers
    strSub.subscribe((v) => console.log('String value: ', v));
    numbSub.subscribe((v) => console.log('Number value: ', v));
    boolSub.subscribe((v) => console.log('Boolean value: ', v));
    objSub.subscribe((v) => console.log('Object value: ', v));
    intSub.subscribe((v) => console.log('Interface value: ', v));
    nullSub.subscribe((v) => console.log('Null value: ', v));
    voidSub.subscribe(() => console.log('Event emitted'));

    // Emitters
    strSub.next('Hello world');
    numbSub.next(10);
    boolSub.next(true);
    objSub.next({ name: 'John Doe', age: 30, isStudent: true });
    intSub.next({ id: 1, name: 'Jane Doe' });
    nullSub.next(null);
    voidSub.next();

    // Completion
    strSub.complete();
    numbSub.complete();
    boolSub.complete();
    objSub.complete();
    intSub.complete();
    nullSub.complete();
    voidSub.complete();

  }

  // Call methods
  login(): void {
    this.authService.login({ username: 'John', password: '@Doee'});
  }

  logout(): void {
    this.authService.logout();
  }

}
