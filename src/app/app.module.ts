import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app/app.component/app.component';
import { DashboardComponent } from '../app/dashboard.component/todo.dashboard';
import { EditComponent } from '../app/edit.component/edit.component';
import { StatsComponent } from '../app/stats/stats.component';
import { AddComponent } from '../app/edit.component/add.component';
import{HttpModule} from '@angular/http';

import{RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditComponent,
    StatsComponent'
    AddComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      {path:'dashboard',component:DashboardComponent},
      {path:'edit/:id',component:EditComponent},
      {path:'add', component: AddComponent }

    ]),
     FormsModule,
     HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
