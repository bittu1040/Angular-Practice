import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  http= inject(HttpClient);
  private cachedData$: Observable<any> | undefined;
  constructor() { }

  getData() {
    if(!this.cachedData$){
      this.cachedData$ = this.http.get('https://jsonplaceholder.typicode.com/users/1').pipe(
        shareReplay(1) // Cache the result and share with future subscribers
      );
    }
    return this.cachedData$
  }

}
