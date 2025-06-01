import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsOperatorComponent } from './components/rxjs-operator/rxjs-operator.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SubjectBehSubjectComponent } from './components/subject-beh-subject/subject-beh-subject.component';

const routes: Routes = [
  {path:'rxjs-operator', component: RxjsOperatorComponent},
  {path:'reactive-form', component: ReactiveFormComponent},
  {path: 'subject-behavior', component: SubjectBehSubjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
