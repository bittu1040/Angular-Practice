import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './components/child/child.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NgRx-Angular';
  @ViewChild('template') number!:ElementRef;
  @ViewChild(ChildComponent) child!:ChildComponent;

  numbers: number[] = [1000, 2000, 3000];

  myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      enableCheckbox: new FormControl(false),
      textInput: new FormControl(''),
    });
  }


  increment() {
    // this.numbers[0] += 100; // Increment the first number in the list
    this.numbers.push(4000)
    console.log(this.numbers)
  }

  ngAfterViewInit() {
    console.log(this.number.nativeElement.innerHTML);
    console.log(this.child.city)
  }
}
