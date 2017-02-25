import { NgModule } from '@angular/core';

import { FooterModule } from './footer/footer.module';
import { SideNavModule } from './side-nav/side-nav.module';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [
    LayoutRoutingModule,
    FooterModule,
    SideNavModule,
  ],
  exports: [
    FooterModule,
    SideNavModule,
  ],
})

export class LayoutModule { }
