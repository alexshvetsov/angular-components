export enum TableSorting {
  DESC = 'desc',
  ASC = 'asc',
  EMPTY = '',
}

export interface Pagination {
  totalCount: number;
  currentPage: number;
}

export interface SortingStatus {
  sorted: boolean;
  isASC: boolean;
  column: string;
}
