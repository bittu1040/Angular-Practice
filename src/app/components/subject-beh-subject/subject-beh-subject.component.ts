import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-beh-subject',
  templateUrl: './subject-beh-subject.component.html',
  styleUrls: ['./subject-beh-subject.component.scss']
})
export class SubjectBehSubjectComponent {
  subject = new Subject<number>();
  behaviorSubject = new BehaviorSubject<number>(0);
  asyncSubject = new AsyncSubject<number>();

  ngOnInit() {
    // this.useSubject();
    // this.useBehaviorSubject();
    // this.useAsyncSubject();
    this.exampleCode();
  }

  useSubject() {
    for (let i = 0; i < 5; i++) {
      this.subject.next(i);
    }
    this.subject.subscribe(value => {
      console.log('Subject value:', value);
    });
  }

  useBehaviorSubject() {
    for (let i = 0; i < 5; i++) {
      this.behaviorSubject.next(i);
    }
    this.behaviorSubject.subscribe(value => {
      console.log('BehaviorSubject value:', value);
    });
  }

  useAsyncSubject() {
    for (let i = 0; i < 5; i++) {
      this.asyncSubject.next(i);
    }
    this.asyncSubject.complete(); // Complete the AsyncSubject to emit the last value
    this.asyncSubject.subscribe(value => {
      console.log('AsyncSubject value:', value);
    });
  }

  exampleCode() {
    const subject = new Subject<number>();
    const behaviorSubject = new BehaviorSubject<number>(0);
    const asyncSubject = new AsyncSubject<number>();

    for (let i = 1; i <= 10; i++) {
      subject.next(i);
      behaviorSubject.next(i);
      asyncSubject.next(i);
    }

    subject.subscribe(value => console.log('Subject:', value));
    behaviorSubject.subscribe(value => console.log('BehaviorSubject:', value));
    asyncSubject.subscribe(value => console.log('AsyncSubject:', value));

    asyncSubject.complete(); // Complete the subject — this is REQUIRED for AsyncSubject to emit
  }

}
