import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexBoxDirective } from '../../directives/flex-box.directive';
import { FlexItemDirective } from '../../directives/flex-item.directive';
import { GridBoxDirective } from '../../directives/grid-box.directive';
import { GridItemDirective } from '../../directives/grid-item.directive';

@NgModule({
  declarations: [
    FlexBoxDirective,
    FlexItemDirective,
    GridBoxDirective,
    GridItemDirective,
  ],
  imports: [CommonModule],
  exports: [
    FlexBoxDirective,
    FlexItemDirective,
    GridBoxDirective,
    GridItemDirective,
  ],
})
export class SharedModule {}
