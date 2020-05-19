import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule} from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { routes } from "./app.routes";
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { registerElement } from 'nativescript-angular/element-registry';
import { Fab } from '@nstudio/nativescript-floatingactionbutton';
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { ReminderComponent } from './reminder/reminder.component';
import { PriorityComponent } from './priority/priority.component';
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";
registerElement('Fab',()=>Fab);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    ReminderComponent,
    PriorityComponent
  ],
  imports:[
    NativeScriptModule,
    AppRoutingModule
    ,NativeScriptRouterModule
    ,NativeScriptFormsModule,
    [TNSCheckBoxModule],
    NativeScriptDateTimePickerModule,
    NativeScriptRouterModule.forRoot(routes),
  ],
  entryComponents:[HomeComponent,AddComponent,ReminderComponent,PriorityComponent],
  providers: [ModalDialogService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
