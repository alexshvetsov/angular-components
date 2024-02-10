import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';
import FlexItem from '../types/flex-item';

@Directive({
  selector: '[appFlexItem]',
  standalone: true
})
export class FlexItemDirective {
  @Input('appFlexBox') flexConfig!: FlexItem;

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
