import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// Methods
// import { login, logout } from '@methods/authMethods';

// Interfaces
// import { User } from '@core/interfaces/interfaces';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Behaviour subject
  public currentUserSubject= new BehaviorSubject<User | null>(null);

  // Expose observable
  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  login(user: User): void {
    this.currentUserSubject.next(user);
  }

  logout(): void {
    this.currentUserSubject.next(null);
  }

  getCurrentUser(): User | null {
    const res = this.currentUserSubject.getValue();
    console.log(res);

    return res;
  }

}
