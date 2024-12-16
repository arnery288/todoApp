import { Routes } from '@angular/router';

import { ErrorComponent } from '@shared/pages/ErrorComponent/error404';
import { LayoutComponent } from '@core/pages/home/layout.component';
import { LoginComponent } from '@features/auth/login/login.component';
import { RegisterComponent } from '@features/auth/register/register.component';
import { TestComponent } from '@core/pages/test/test/test.component';
import { Test2Component } from '@core/pages/test2/test2/test2.component';
import { Test3Component } from '@core/pages/test3/test3/test3.component';
import { Test4Component } from '@core/pages/test4/test4/test4.component';
import { Test5Component } from '@core/pages/test5/test5/test5.component';
import { Test6Component } from '@core/pages/test6/test6/test6.component';
import { SignalsComponent } from '@core/pages/signals/signals/signals.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LayoutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'test2',
    component: Test2Component
  },
  {
    path: 'test3',
    component: Test3Component
  },
  {
    path: 'test4',
    component: Test4Component
  },
  {
    path: 'test5',
    component: Test5Component
  },
  {
    path: 'test6',
    component: Test6Component
  },
  {
    path: 'signals',
    component: SignalsComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  },
  {
    path: '404',
    component: ErrorComponent
  },

  // *
  // !
  // ?
  // TODO:

  /*
    Ejemplo para cargar ruta padre e hijos
    {
      path: 'dashboard', // Ruta padre
      title: 'Dashboard',
      loadComponent: () => import('./dashboard/dashboard.component').then(c => c.dashboard.component),
      children: [
        {
          path: 'change-detection', // Ruta hijo
          title: 'Change Detection',
          loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component').then(c => c.change-detection.component),
        },
        {
          path: 'control-flow', // Ruta hijo
          title: 'Control Flow',
          loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component').then(c => c.control-flow.component),
        },
        {
          path: 'defer-options', // Ruta hijo
          title: 'Defer Options',
          loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component').then(c => c.defer-options.component),
        }
      ]
    },

    Ejemplo de estructura de carpetas
    ├── dashboard/
    │   ├── change-detection/
    │   ├── control-flow/
    │   └── defer-options/
  */
];
