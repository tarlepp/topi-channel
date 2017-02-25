import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutFooterRoutes, LayoutSideNavRoutes } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      ...LayoutFooterRoutes,
      ...LayoutSideNavRoutes,
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class LayoutRoutingModule { }
