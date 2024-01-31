import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TableConfig } from './types/table';
import { Pagination, SortingStatus } from './types/table-types';
import { Column } from './types/columns';

export class GenericTableService {
  private _tableConfig$: BehaviorSubject<TableConfig> =
    new BehaviorSubject<TableConfig>({} as TableConfig);
  private _columns$: BehaviorSubject<Column[]> = new BehaviorSubject<Column[]>(
    []
  );
  private _sortingStatus$: BehaviorSubject<SortingStatus> =
    new BehaviorSubject<SortingStatus>({} as SortingStatus);
  private _pagination$: BehaviorSubject<Pagination | null> =
    new BehaviorSubject<Pagination | null>(null);

  constructor() {}

  public emitTableConfig(tableConfig: TableConfig): void {
    this._tableConfig$.next(tableConfig);
    this.emitSortingStatus(tableConfig.sortingStatus);
    this.emitColumns(tableConfig.columns);
    this.emitPagination(tableConfig.pagination || null);
  }

  public getGenericTableConfigAsObs(): Observable<TableConfig> {
    return this._tableConfig$.asObservable();
  }
  public emitSortingStatus(sortingStatus: SortingStatus): void {
    this._sortingStatus$.next(sortingStatus);
  }

  public getSortingStatusAsObs(): Observable<SortingStatus> {
    return this._sortingStatus$.asObservable();
  }
  public emitColumns(columns: Column[]): void {
    this._columns$.next(columns);
  }

  public getColumnsAsObs(): Observable<Column[]> {
    return this._columns$.asObservable();
  }
  public emitPagination(pagination: Pagination | null): void {
    this._pagination$.next(pagination);
  }

  public getPaginationAsObs(): Observable<Pagination | null> {
    return this._pagination$.asObservable();
  }
}
