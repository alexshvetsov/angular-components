import { TableConfig } from './types/table';
import { Pagination, SortingStatus } from './types/table-types';
import { Column } from './types/columns';
import BehaviorSubjectWrapper from '../../utilities/types/behaviorSubjectWrapper';
import { Observable, combineLatest } from 'rxjs';

export class GenericTableService {
  public columns: BehaviorSubjectWrapper<Column[]> = new BehaviorSubjectWrapper<
    Column[]
  >([]);
  public sortingStatus: BehaviorSubjectWrapper<SortingStatus> =
    new BehaviorSubjectWrapper<SortingStatus>({} as SortingStatus);
  public pagination: BehaviorSubjectWrapper<Pagination | null> =
    new BehaviorSubjectWrapper<Pagination | null>(null);
  public pageNumber: BehaviorSubjectWrapper<number> =
    new BehaviorSubjectWrapper<number>(0);
  public itemsPerPage: BehaviorSubjectWrapper<number> =
    new BehaviorSubjectWrapper<number>(0);
  public searchValue: BehaviorSubjectWrapper<string> =
    new BehaviorSubjectWrapper<string>('');
  public filters: BehaviorSubjectWrapper<{ [key: string]: any }> =
    new BehaviorSubjectWrapper<{ [key: string]: any }>({});

  constructor() {}

  public initTable(tableConfig: TableConfig): void {
    this.sortingStatus.value$ = tableConfig.sortingStatus;
    this.columns.value$ = tableConfig.columns;
    this.pagination.value$ = tableConfig.pagination || null;
    if (tableConfig.pagination) {
      this.pageNumber.value$ = tableConfig.pagination.currentPage;
      this.itemsPerPage.value$ = tableConfig.pagination.rowsPerPage;
    }
  }

  public getTableEvents(): Observable<
    [SortingStatus, number, number, string, { [key: string]: string }]
  > {
    return combineLatest([
      this.sortingStatus.value$,
      this.itemsPerPage.value$,
      this.pageNumber.value$,
      this.searchValue.value$,
      this.filters.value$,
    ]);
  }
}
