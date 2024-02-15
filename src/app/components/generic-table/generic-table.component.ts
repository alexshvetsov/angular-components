import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GenericTableService } from './generic-table.service';
import { Observable } from 'rxjs';
import { Pagination } from './types/table-types';

@Component({
  selector: 'app-generic-table',
  standalone: false,
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GenericTableService],
})
export class GenericTableComponent<T extends { [key: string]: any }> {
  @Input() data!: Partial<T>[] | null;
  pagination$: Observable<Pagination | null> =
    this.genericTableService.pagination.value$;

  constructor(private genericTableService: GenericTableService) {}

  getTableService(): GenericTableService {
    return this.genericTableService;
  }
}
