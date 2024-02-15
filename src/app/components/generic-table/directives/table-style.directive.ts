import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appTableStyle]',
  standalone: false,
})
export class TableStyleDirective implements OnChanges {
  @Input() appTableStyle!: string;

  stylesMap: { [key: string]: string } = { default: 'default-table', card: 'card-table' };
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    const className = this.stylesMap[this.appTableStyle];
    if (changes['appTableStyle']) {
      this.renderer.addClass(
        this.el.nativeElement,
        className
      );
    }
  }
}
