import {
  Directive,
  ElementRef,
  Renderer2,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive()
export abstract class StyleItemDirective implements OnChanges {
  abstract get styleConfig(): { [key: string]: any } | undefined;

  constructor(protected el: ElementRef, protected renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['styleConfig']) {
      this.applyStyles();
    }
  }
  protected applyStyles(): void {
    Object.entries(this.styleConfig || {}).forEach(
      ([styleName, styleValue]) => {
        this.renderer.setStyle(this.el.nativeElement, styleName, styleValue);
      }
    );
  }
  // protected applyStyles(): void {
  //   const element = this.el.nativeElement;
  //   this.styleConfig && Object.entries(this.styleConfig).forEach(([key, value]) => {
  //     this.renderer.setStyle(element, key, value);
  //   });
  // }
}
