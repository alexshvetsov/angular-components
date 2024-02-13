import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import FlexItem from '../types/flex-item';
import { StyleItemDirective } from './style-item.directive';

@Directive({
  selector: '[appFlexItem]',
})
export class FlexItemDirective extends StyleItemDirective {
  @Input('appFlexItem') flexConfig!: FlexItem | undefined;

  get styleConfig(): FlexItem | undefined{
    return this.flexConfig;
  }

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
  }
}
