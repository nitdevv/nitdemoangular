import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app/app.component/app.component';
import { DashboardComponent } from '../app/dashboard.component/todo.dashboard';
import { EditComponent } from '../app/edit.component/edit.component';

import{RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      {path:'',component:DashboardComponent},
      {path:'edit',component:EditComponent},
      {path:'Edit/:id',component:EditComponent}

    ]),
     FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
