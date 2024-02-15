import { Column } from './columns';
import { TableHeaderData } from './table-header-data';
import { Pagination, SortingStatus } from './table-types';

export interface TableConfig {
  columns: Column[];
  sortingStatus: SortingStatus;
  pagination?: Pagination;
  style?: 'default' | 'card';
  tableHeaderData?: TableHeaderData;
}
