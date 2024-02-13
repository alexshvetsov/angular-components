import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import FlexBox from '../types/flex-box';
import { StyleItemDirective } from './style-item.directive';

@Directive({
  selector: '[appFlexBox]',
})
export class FlexBoxDirective extends StyleItemDirective {
  @Input('appFlexBox') flexConfig!: FlexBox | undefined;

  get styleConfig(): FlexBox | undefined {
    return this.flexConfig;
  }

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
  }
}
