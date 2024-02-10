import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenericTableModule } from './components/generic-table/generic-table.module';
import { Column } from './components/generic-table/types/columns';
import { TableConfig } from './components/generic-table/types/table';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import {
  SortingStatus,
  TableSorting,
} from './components/generic-table/types/table-types';
import { GenericTableService } from './components/generic-table/generic-table.service';
import { BehaviorSubject, combineLatest, distinctUntilChanged, filter, skip } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FoldableCardComponent } from './components/foldable-card/foldable-card.component';
interface TableData {
  firstName: string;
  lastName: string;
  id: number;
  img: string;
  date: Date;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenericTableModule, CommonModule, FoldableCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  rows: TableData[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      id: 1,
      img: 'url_to_image_1.jpg',
      date: new Date(2022, 0, 1), // January 1, 2022
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      id: 2,
      img: 'url_to_image_2.jpg',
      date: new Date(2022, 1, 10), // February 10, 2022
    },
    {
      firstName: 'Alice',
      lastName: 'Smith',
      id: 3,
      img: 'url_to_image_3.jpg',
      date: new Date(2022, 2, 15), // March 15, 2022
    },
    {
      firstName: 'Bob',
      lastName: 'Brown',
      id: 4,
      img: 'url_to_image_4.jpg',
      date: new Date(2022, 3, 20), // April 20, 2022
    },
  ];
  title = 'angular';
  config!: TableConfig;
  @ViewChild(GenericTableComponent) tableComponent!: GenericTableComponent<any>;
  genericTableService!: GenericTableService;
  columns: Column[] = [
    {
      key: 'firstName',
      header: 'שם פרטי',
      type: 'text',
    },
    {
      key: 'lastName',
      header: 'שם משפחה',
      type: 'text',
    },
    {
      key: 'id',
      header: 'מזהה',
      type: 'number',
    },
    {
      key: 'img',
      header: 'תמונה',
      type: 'img',
    },
    {
      key: 'date',
      header: 'תאריך',
      type: 'date',
    },
  ];
  data: BehaviorSubject<TableData[]> = new BehaviorSubject([...this.rows,...this.rows,...this.rows,...this.rows,...this.rows,...this.rows,...this.rows,...this.rows,...this.rows,...this.rows,...this.rows,...this.rows,...this.rows,...this.rows,...this.rows,...this.rows,...this.rows,...this.rows,...this.rows]);

  ngAfterViewInit(): void {
    this.config = {
      columns: this.columns,
      sortingStatus: {
        sorted: true,
        isASC: true,
        column: 'id',
      },
      pagination: {
        totalPageCount: 4,
        currentPage: 2,
        totalItemsCount: 10,
        rowsPerPage: 10,
      },
    };
    this.genericTableService = this.tableComponent.getService();
    this.genericTableService.initTable(this.config);

 this.genericTableService.getTableEvents().pipe(
      skip(1)).subscribe(([sortingStatus, itemsPerPage, pageNumber,searchValue,filters]) => {
      console.log('filters', filters);
      const random = Math.floor(Math.random() * 4);
      this.data.next([this.rows[random]]);
    });
  }

 filterUpdate($event:any):void{
  console.log('filterUpdate',$event.target.value);
  this.genericTableService.filters.value$ = {s:$event.target.value}; 
 }
}
