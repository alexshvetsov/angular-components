import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import FlexBox from '../types/flex-box';
import { StyleItemDirective } from './style-item.directive';

@Directive({
  selector: '[appFlexBox]',
})
export class FlexBoxDirective extends StyleItemDirective implements OnInit {
  @Input('appFlexBox') flexConfig!: FlexBox | undefined;

  ngOnInit(): void {
    this.applyStyles();
  }
  get styleConfig(): FlexBox | undefined {
    return this.flexConfig;
  }

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
  }
}
