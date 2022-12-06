import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirective } from './test.directive';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [ TestDirective, HighlightDirective ],
  imports: [
    CommonModule
  ],
  exports: [ TestDirective, HighlightDirective ]
})
export class SharedModule { }
