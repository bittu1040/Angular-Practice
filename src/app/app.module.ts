import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './components/counter/counter.component';
import { counterReducer } from './store/reducers/counter.reducer';
import { FormatNumberImpurePipe } from './pipes/format-number-impure.pipe';
import { FormatNumberpurePipe } from './pipes/format-numberpure.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    FormatNumberImpurePipe,
    FormatNumberpurePipe,
    HighlightDirective
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
