import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor(private http: HttpClient) { } //HttpClient per eseguire chiamate Http

  result: Subject<any> = new Subject<any>();

  fetchData(): Observable<any> { //Any -> dati di tipo any 
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }

  updateData(): Observable<any> {
    const url = './assets/test.json';
    return this.http.get<any>(url).pipe(
      tap(value => this.result.next(value))
    );
  }
}
