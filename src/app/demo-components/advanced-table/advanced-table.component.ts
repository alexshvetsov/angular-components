import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TableConfig } from '../../components/generic-table/types/table';
import { Observable, skip } from 'rxjs';
import { FormComponent } from '../../components/form/form.component';
import { FormService } from '../../components/form/form.service';
import { FormConfig } from '../../components/form/types/form-congif';
import { GenericTableComponent } from '../../components/generic-table/generic-table.component';
import { GenericTableService } from '../../components/generic-table/generic-table.service';
import { Column } from '../../components/generic-table/types/columns';
import { GenericTableModule } from '../../components/generic-table/generic-table.module';
import { CommonModule } from '@angular/common';
import { AdvancedTableService } from './advanced-table.service';
import { HttpClientModule } from '@angular/common/http';

export interface TableData {
  firstName: string;
  lastName: string;
  id: number;
  img: string;
  date: Date;
}
@Component({
  selector: 'app-advanced-table',
  standalone: true,
  imports: [GenericTableModule, CommonModule, HttpClientModule],
  templateUrl: './advanced-table.component.html',
  styleUrl: './advanced-table.component.scss',
  providers: [AdvancedTableService],
})
export class AdvancedTableComponent implements OnInit, AfterViewInit {
  rows!: TableData[];
  config!: TableConfig;
  genericTableService!: GenericTableService;
  columns!: Column[];
  data!: Observable<TableData[]>;
  formConfigs!: FormConfig[];
  formService!: FormService;

  @ViewChild(GenericTableComponent) tableComponent!: GenericTableComponent<any>;
  @ViewChild(FormComponent) formComponent!: FormComponent;

  constructor(private advancedTableService: AdvancedTableService) {}

  ngOnInit(): void {
    this.rows = this.advancedTableService.data.value;
    this.columns = this.advancedTableService.columns;
    this.data = this.advancedTableService.data.value$;
    this.formConfigs = this.advancedTableService.formConfigs;
    this.advancedTableService.getTableData().subscribe();

  }

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
    this.genericTableService = this.tableComponent.getTableService();
    this.genericTableService.initTable(this.config);
    this.genericTableService
      .getTableEvents()
      .pipe(skip(1))
      .subscribe(
        ([sortingStatus, itemsPerPage, pageNumber, searchValue, filters]) => {
          console.log('filters', filters);
          this.advancedTableService.getPartialTableData().subscribe();
        }
      );

    // this.formService = this.formComponent.getFromService();
    // this.formService.initFormService(this.formConfig.inputs);
    // this.formService.selectOptions.updateValues({
    //   last: [
    //     { value: '1', label: '1' },
    //     { value: '2', label: '2' },
    //   ],
    // });
    // this.formService.emitFormChanges().subscribe((value) => {
    //   if (value.name === 'name') {
    //     this.formService.addControl('sor');
    //     this.formService.updateInputs([
    //       ...this.formConfig.inputs,
    //       { type: 'text', name: 'sor', label: 'שם', value: 'גילי' },
    //     ]);
    //   }else{
    //     this.formService.removeControl('sor');
    //     this.formService.updateInputs(this.formConfig.inputs);
    //   }
    //   this.genericTableService.filters.value$ =
    //     this.formService.formGroup.value.value;
    //   this.formService.triggerFormUpdate();
    // });
  }

  filterUpdate($event: any): void {
    this.genericTableService.filters.value$ = { s: $event.target.value };
  }
}
