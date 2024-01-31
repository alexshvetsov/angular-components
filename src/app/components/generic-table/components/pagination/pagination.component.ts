import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: false,
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  @Input() totalPageCount!: number;
  @Input() currentPage!: number;

  constructor() {}
}
