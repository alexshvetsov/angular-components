import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Column } from './types/columns';
import { GenericTableService } from './generic-table.service';
import { Observable } from 'rxjs';
import { TableConfig } from './types/table';
import { Pagination, SortingStatus } from './types/table-types';

@Component({
  selector: 'app-generic-table',
  standalone: false,
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GenericTableService],
})
export class GenericTableComponent<T extends { [key: string]: any }>
  implements OnInit
{
  @Input() data!: Partial<T>[] | null;
  storingStatus$: Observable<SortingStatus> =
    this.genericTableService.sortingStatus.value$;
  columns$: Observable<Column[]> = this.genericTableService.columns.value$;

  pagination$: Observable<Pagination | null> =
    this.genericTableService.pagination.value$;

  constructor(private genericTableService: GenericTableService) {}

  ngOnInit(): void {
    this.data = this.data || [];
  }
  getService(): GenericTableService {
    return this.genericTableService;
  }
}
