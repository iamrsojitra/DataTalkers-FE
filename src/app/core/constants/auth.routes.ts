import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('../../auth/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'logout',
    loadComponent: () => import('../../auth/logout/logout.component').then((m) => m.LogoutComponent)
  }
];
