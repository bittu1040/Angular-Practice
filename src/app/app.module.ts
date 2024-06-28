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

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    FormatNumberImpurePipe,
    FormatNumberpurePipe,
    customStyleDirective,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }), 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
