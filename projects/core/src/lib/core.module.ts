import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CoreService } from './core.service';

@NgModule({
  declarations: [CoreComponent],
  imports: [
  ],
  exports: [CoreComponent],
  providers: [
    CoreService,
  ],
})
export class CoreModule { }
