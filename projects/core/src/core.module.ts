import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AttributeComponent } from './attribute/attribute.component';
import { CoreService } from './core.service';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AttributeComponent,
    StatsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    StatsComponent,
  ],
  providers: [],
})
export class CoreModule { }
