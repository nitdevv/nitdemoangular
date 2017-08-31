import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent }   from '../dashboard.component/todo.dashboard';
import {EditComponent} from '../edit.component/edit.component';
import { HeroService } from './todo.services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,
              DashboardComponent,
              EditComponent,
              EditComponent
             ]
})
export class AppModule { }
