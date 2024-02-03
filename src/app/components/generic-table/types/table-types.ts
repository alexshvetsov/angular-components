export enum TableSorting {
  DESC = 'desc',
  ASC = 'asc',
  EMPTY = '',
}

export interface Pagination {
  totalPageCount: number;
  totalItemsCount: number;
  currentPage: number;
  rowsPerPage: number;
}

export interface SortingStatus {
  sorted: boolean;
  isASC: boolean;
  column: string;
}
