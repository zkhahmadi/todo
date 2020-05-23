import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from './appcomp/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { ReminderComponent } from './reminder/reminder.component';
import { PriorityComponent } from './priority/priority.component';
import { AddComponent } from './add/add.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,ReminderComponent,PriorityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  entryComponents:[HomeComponent,AddComponent,ReminderComponent,PriorityComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
