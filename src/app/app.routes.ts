import { Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { VmListComponent } from './components/vm-list/vm-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ServerComponent } from './components/server/server.component';

export const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'servers',
    component: VmListComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'servers/:id',
    component: ServerComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
