import {NgModule} from '@angular/core';
import {ExxcellentComponent} from './exxcellent-components.component';
import {ButtonComponent} from './buttons/button/button.component';

@NgModule({
  declarations: [
      ExxcellentComponent,
      // Buttons
      ButtonComponent
  ],
  imports: [
  ],
  exports: [
      ExxcellentComponent,
      // Buttons
      ButtonComponent
  ]
})
export class ExxcellentComponentsModule { }
