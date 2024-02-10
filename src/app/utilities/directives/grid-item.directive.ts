import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';
import GridItem from '../types/grid-item';

@Directive({
  selector: '[appGridItem]',
  standalone: true,
})
export class GridItemDirective {
  @Input('appGridItem') gridConfig!: GridItem;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['gridConfig']) {
      this.applyFlexStyles();
    }
  }

  private applyFlexStyles(): void {
    const element = this.el.nativeElement;
    Object.entries(this.gridConfig).forEach(([key, value]) => {
      this.renderer.setStyle(element, key, value);
    });
  }
}
