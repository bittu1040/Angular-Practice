import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './components/counter/counter.component';
import { counterReducer } from './store/reducers/counter.reducer';
import { FormatNumberImpurePipe } from './pipes/format-number-impure.pipe';
import { FormatNumberpurePipe } from './pipes/format-numberpure.pipe';
import { customStyleDirective } from './directives/custom-style.directive';
import { ChildComponent } from './components/child/child.component';
import { RxjsOperatorComponent } from './components/rxjs-operator/rxjs-operator.component';
import { HttpClientModule } from '@angular/common/http';
import { Comp1Component } from './view-encapsulation/comp1/comp1.component';
import { Comp2Component } from './view-encapsulation/comp2/comp2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SubjectBehSubjectComponent } from './components/subject-beh-subject/subject-beh-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    FormatNumberImpurePipe,
    FormatNumberpurePipe,
    customStyleDirective,
    ChildComponent,
    RxjsOperatorComponent,
    Comp1Component,
    Comp2Component,
    ReactiveFormComponent,
    SubjectBehSubjectComponent,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule, HttpClientModule,
    StoreModule.forRoot({ count: counterReducer }), 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
