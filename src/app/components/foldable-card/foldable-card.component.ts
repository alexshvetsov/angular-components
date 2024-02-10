import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-foldable-card',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule],
  templateUrl: './foldable-card.component.html',
  styleUrl: './foldable-card.component.scss',
})
export class FoldableCardComponent {
  @Input() isFolded: boolean = true;
  @Input() cardTitle!: string;

  toggleFold(): void {
    this.isFolded = !this.isFolded;
  }
}
