import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { combineLatest, forkJoin, from, interval, of, take } from 'rxjs';
import { concat } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-operator',
  templateUrl: './rxjs-operator.component.html',
  styleUrls: ['./rxjs-operator.component.scss']
})
export class RxjsOperatorComponent implements OnInit{
  http= inject(HttpClient);

  constructor() {
  }

  ofData=of(1,2,3,4,5);
  fromData= from([1,2,3,4,5]);
  numbers2 = from('hello');
  numbers4 = from(fetch('https://jsonplaceholder.typicode.com/users/1'));
  request1 = this.http.get('https://jsonplaceholder.typicode.com/users/1');
  request2 = this.http.get('https://jsonplaceholder.typicode.com/users/2');
  request3 = this.http.get('https://jsonplaceholder.typicode.com/users/3');
  request4 = this.http.get('https://jsonplaceholder.typicode.com/users/4');

   timer12 = interval(1000).pipe(take(10));
   timer13 = interval(2000).pipe(take(6));
   timer14 = interval(500).pipe(take(10));

  obs1= of(1,2,3,4,5);
  obs2= of(10,20,30,40,50);
  obs3= of(100,200,300,400,500);

  ngOnInit(): void {
    this.ofData.subscribe((data)=>{
      console.log(data)
    })

    this.fromData.subscribe((data)=>{
      console.log(data)
    })

    this.numbers2.subscribe((data)=>{
      console.log(data)
    })
    this.numbers4.subscribe((data)=>{
      data.json().then((data)=>{
        console.log(data)
      })
    })

    forkJoin([this.request1, this.request2, this.request3, this.request4]).subscribe((data)=>{
      console.log(data)
    }, (error)=>{
      console.log(error)
    })




  }

}
