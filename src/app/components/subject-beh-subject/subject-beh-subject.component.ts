import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-beh-subject',
  templateUrl: './subject-beh-subject.component.html',
  styleUrls: ['./subject-beh-subject.component.scss']
})
export class SubjectBehSubjectComponent {
  subject= new Subject<number>();
  behaviorSubject = new BehaviorSubject<number>(0);

  ngOnInit() {
    this.useSubject();
    this.useBehaviorSubject();
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

}
