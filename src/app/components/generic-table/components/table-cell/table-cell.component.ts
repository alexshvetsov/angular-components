import { Component, Input } from '@angular/core';
import { CellType } from '../../types/columns';

@Component({
  selector: 'app-table-cell',
  standalone: false,
  templateUrl: './table-cell.component.html',
  styleUrl: './table-cell.component.scss',
})
export class TableCellComponent {
  @Input() columnType!: string;
  @Input() data!: any;

  constructor() {
    this.columnType = this.columnType || 'text';
    this.data = this.data || '';
  }
  isCellType(type: string): boolean {
    return this.columnType === type;
  }
}
