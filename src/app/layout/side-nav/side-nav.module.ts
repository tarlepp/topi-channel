import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { SideNavComponent } from './index';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    SideNavComponent,
  ],
  exports: [
    SideNavComponent,
  ],
})

export class SideNavModule { }
