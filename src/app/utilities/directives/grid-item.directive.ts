import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import GridItem from '../types/grid-item';
import { StyleItemDirective } from './style-item.directive';

@Directive({
  selector: '[appGridItem]',
})
export class GridItemDirective extends StyleItemDirective  {
  @Input('appGridItem') flexConfig!: GridItem;

  get styleConfig(): GridItem {
    return this.flexConfig;
  }

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
  }
}
