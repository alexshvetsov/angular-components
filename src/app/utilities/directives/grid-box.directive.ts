import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import GridBox from '../types/grid-box';
import { StyleItemDirective } from './style-item.directive';

@Directive({
  selector: '[appGridBox]',
})
export class GridBoxDirective extends StyleItemDirective {
  @Input('appGridBox') flexConfig!: GridBox | undefined;

  get styleConfig(): GridBox | undefined {
    return this.flexConfig;
  }

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
  }
}
