// flex-box.directive.ts
import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import FlexBox from '../types/flex-box';

@Directive({
  selector: '[appFlexBox]',
})
export class FlexBoxDirective implements OnChanges {
  @Input('appFlexBox') flexConfig!: FlexBox;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['flexConfig']) {
      this.applyFlexStyles();
    }
  }

  private applyFlexStyles(): void {
    const element = this.el.nativeElement;
    Object.entries(this.flexConfig).forEach(([key, value]) => {
      this.renderer.setStyle(element, key, value);
    });
  }
}
