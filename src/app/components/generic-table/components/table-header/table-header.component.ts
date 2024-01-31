import { Component, Input } from '@angular/core';
import { Column } from '../../types/columns';
import { TableSorting } from '../../types/table-types';
import { GenericTableService } from '../../generic-table.service';

@Component({
  selector: 'app-table-header',
  standalone: false,
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss',
})
export class TableHeaderComponent {
  @Input() column!: Column;
  @Input() sorted!: boolean;
  @Input() isAsc: boolean | undefined;
  TableSorting = TableSorting;
  constructor(private genericTableService: GenericTableService) {}

  handleSortingButton(): void {
    this.genericTableService.emitSortingStatus({
      column: this.column.key,
      isASC: !this.isAsc,
      sorted: true,
    });
  }
}
