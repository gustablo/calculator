import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayComponent } from './display/display.component';
import { NumberButtonsComponent } from './number-buttons/number-buttons.component';
import { ContainerComponent } from './container/container.component';
import { LogicButtonsComponent } from './logic-buttons/logic-buttons.component';
import { CalculateButtonComponent } from './calculate-button/calculate-button.component';
import { ClearButtonComponent } from './clear-button/clear-button.component';
import { PowerButtonComponent } from './power-button/power-button.component';

@NgModule({
  declarations: [
    DisplayComponent,
    NumberButtonsComponent,
    ContainerComponent,
    LogicButtonsComponent,
    CalculateButtonComponent,
    ClearButtonComponent,
    PowerButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DisplayComponent,
    NumberButtonsComponent,
    ContainerComponent,
    LogicButtonsComponent,
    CalculateButtonComponent,
  ],
})
export class ComponentsModule { }
