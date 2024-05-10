import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NgRx-Angular';

  numbers: number[] = [1000, 2000, 3000];

  ngOnInit(): void {

  }

  increment() {
    // this.numbers[0] += 100; // Increment the first number in the list
    this.numbers.push(4000)
    console.log(this.numbers)
  }
}
