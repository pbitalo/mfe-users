import { Routes } from '@angular/router';

export const USERS_ROUTES: Routes = [
  { path: '', redirectTo: 'insert', pathMatch: 'full' },
  {
    path: 'insert',
    loadComponent: () =>
      import('../pages/insert/insert-users.component').then(
        (c) => c.InsertUsersComponent
      ),
  },
  {
    path: 'update',
    loadComponent: () =>
      import('../pages/update/update-users.component').then(
        (c) => c.UpdateUsersComponent
      ),
  },
  {
    path: 'delete',
    loadComponent: () =>
      import('../pages/delete/delete-users.component').then(
        (c) => c.DeleteUsersComponent
      ),
  },
  {
    path: 'list',
    loadComponent: () =>
      import('../pages/list/list-users.component').then(
        (c) => c.ListUsersComponent
      ),
  },
];
