import { Injectable, OnInit } from '@angular/core';
import BehaviorSubjectWrapper from '../../utilities/types/behaviorSubjectWrapper';
import { TableData } from './advanced-table.component';
import { FormConfig } from '../../components/form/types/form-congif';
import { Column } from '../../components/generic-table/types/columns';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdvancedTableService {
  private _rows!: TableData[];

  data: BehaviorSubjectWrapper<TableData[]> = new BehaviorSubjectWrapper<
    TableData[]
  >([]);
  private _formConfig: FormConfig = {
    name: 'search',
    inputs: [
      { type: 'text', name: 'name', label: 'שם', value: 'גילי' },
      { type: 'select', name: 'last', label: 'שם', value: 'גילי' },
    ],
    onSubmit: () => {
      console.log('submit');
    },
  };
  private _formConfigs: FormConfig[] = [
    this._formConfig,
    {
      ...this._formConfig,
      name: 'filter',
      flexBoxConfig: { display: 'flex', flexDirection: 'row', gap: '10px' },
    },
  ];

  private _columns: Column[] = [
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
  constructor(private http$: HttpClient) {}

  get rows(): TableData[] {
    return this._rows;
  }
  get formConfigs(): FormConfig[] {
    return this._formConfigs;
  }
  get columns(): Column[] {
    return this._columns;
  }

  getTableData(): Observable<TableData[]> {
    return this.http$
      .get<TableData[]>('http://localhost:3000/advenced-table-data')
      .pipe(
        tap((data) => {
          this.data.value$ = data;
        })
      );
  }
  getPartialTableData(): Observable<TableData[]> {
    return this.http$
      .get<TableData[]>('http://localhost:3000/advenced-table-data')
      .pipe(
        tap((data) => {
          const random = Math.floor(Math.random() * 4);
          this.data.value$ = [data[random]];
        })
      );
  }
}
