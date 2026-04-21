import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'add-task',
    loadComponent: () =>
      import('./add-task/add-task.page').then(m => m.AddTaskPage),
  },
  {
    path: 'schedule',
    loadComponent: () =>
      import('./schedule/schedule.page').then(m => m.SchedulePage),
  },
];