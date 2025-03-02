import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { CustomersComponent } from './customers/customers.component';
import { CalendarComponent } from './calendar/calendar.component';
import { InfodeskComponent } from './infodesk/infodesk.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: 'infodesk',
    component: InfodeskComponent,
  },
];
