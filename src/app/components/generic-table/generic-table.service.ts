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
  private _pageNumber$: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  private _itemsPerPage$: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  constructor() {}

  public emitTableConfig(tableConfig: TableConfig): void {
    this._tableConfig$.next(tableConfig);
    this.emitSortingStatus(tableConfig.sortingStatus);
    this.emitColumns(tableConfig.columns);
    this.emitPagination(tableConfig.pagination || null);
    if(tableConfig.pagination) {
      this.emitPageNumber(tableConfig.pagination.currentPage);
      this.emitItemsPerPage(tableConfig.pagination.rowsPerPage);
    }
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
  public emitPageNumber(pageNumber: number): void {
    this._pageNumber$.next(pageNumber);
  }
  public getPageNumberAsObs(): Observable<number> {
    return this._pageNumber$.asObservable();
  }
  public emitItemsPerPage(itemsPerPage: number): void {
    this._itemsPerPage$.next(itemsPerPage);
  } 
  public getItemsPerPageAsObs(): Observable<number> {
    return this._itemsPerPage$.asObservable();
  } 
}
