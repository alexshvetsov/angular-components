import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericTableService } from '../../generic-table.service';
import { Column } from '../../types/columns';
import { SortingStatus, Pagination } from '../../types/table-types';
import { FormConfig } from '../../../form/types/form-congif';
import { TableConfig } from '../../types/table';

@Component({
  selector: 'app-table-container',
  standalone: false,
  templateUrl: './table-container.component.html',
  styleUrls: [
    './table-container.component.scss',
    './styles/card-table.scss',
    './styles/defualt-table.scss',
  ],
})
export class TableContainerComponent<T extends { [key: string]: any }> {
  @Input() data!: Partial<T>[] | null;
  storingStatus$: Observable<SortingStatus> =
    this.genericTableService.sortingStatus.value$;
  columns$: Observable<Column[]> = this.genericTableService.columns.value$;
  tableConfig$!: Observable<TableConfig>;
  constructor(private genericTableService: GenericTableService) {}

  ngOnInit(): void {
    this.data = this.data || [];
    this.tableConfig$ = this.genericTableService.tableConfig.value$;
  }
}
