import { Routes } from '@angular/router';

import { SideNavComponent } from './side-nav.component';

export const LayoutSideNavRoutes: Routes = [
  {
    path: '',
    component: SideNavComponent,
    outlet: 'side-nav'
  },
];
