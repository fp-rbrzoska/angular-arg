import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TestService {

  private testSubj = new BehaviorSubject<any>(null);
  test$ = this.testSubj.asObservable();
  constructor( private http: HttpClient) {

  console.log('test service init')}

  fetchTest() {
    this.http.get<any>('http://localhost:3000/test').subscribe(v => this.testSubj.next(v))
  }
}
