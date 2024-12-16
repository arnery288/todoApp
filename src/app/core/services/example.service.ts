import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor() { }

  getObservable(): Observable<string> {
    return of('Data from example service');
  }
}
