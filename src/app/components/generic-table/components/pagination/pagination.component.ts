import { Component, Input, OnInit } from '@angular/core';
import { Pagination } from '../../types/table-types';
import { Observable } from 'rxjs';
import { GenericTableService } from '../../generic-table.service';

@Component({
  selector: 'app-pagination',
  standalone: false,
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit {
  @Input() totalPageCount!: number;
  @Input() totalItemsCount!: number;
  @Input() currentPage!: number;
  @Input() rowsPerPage!: number;
  pagination$: Observable<Pagination | null> =
    this.tableService.pagination.value$;
  selectedOption!: number;
  options = [10, 20, 30, 40];

  constructor(private tableService: GenericTableService) {}
  ngOnInit(): void {
    this.selectedOption = this.rowsPerPage;
  }
  changePageNumber(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.tableService.pageNumber.value$ = pageNumber;
  }

  onSelectedOptionChange(newValue: number): void {
    this.selectedOption = newValue;
    this.tableService.itemsPerPage.value$ = newValue;
  }
}
