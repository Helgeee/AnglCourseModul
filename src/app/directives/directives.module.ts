import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DirectivesPageComponent } from './directives.component';
import { MyCalculatorComponent } from '../calculator/components/my-calculator.component';
import { MyIfDirectiveDirective } from './directive/my-if-directive.directive';
import { DirectivesRouting } from './directives-routing.module';



@NgModule({
  declarations: [DirectivesPageComponent, MyCalculatorComponent, MyIfDirectiveDirective ],
  imports: [
    CommonModule ,
    DirectivesRouting
  ],
  exports: []
})
export class DirectivesModule { }