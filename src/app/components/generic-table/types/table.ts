import { BehaviorSubject } from "rxjs";
import { Column } from "./columns";
import { Pagination, SortingStatus } from "./table-types";

export interface TableConfig {
    columns: Column[];
    sortingStatus: SortingStatus;
    pagination?: Pagination;
  }
  