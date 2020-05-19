import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ReminderComponent } from './reminder/reminder.component';
import { PriorityComponent } from './priority/priority.component';
export const routes: Routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
      children: [
        {
            path: "add",component: AddComponent,
            children: [
              {
                path: "reminder",component: ReminderComponent,children: [
                  {
                    path: "priority",component: PriorityComponent,children: []
                  }
                ]
              }
            ]
        }
      ]
  },
];
