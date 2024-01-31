import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { TableCellComponent } from './generic-table/components/table-cell/table-cell.component';
import { TableHeaderComponent } from './generic-table/components/table-header/table-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GenericTableService } from './generic-table/generic-table.service';
import { PaginationComponent } from './generic-table/components/pagination/pagination.component';

@NgModule({
  declarations: [GenericTableComponent, TableCellComponent, TableHeaderComponent, PaginationComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [GenericTableComponent,TableCellComponent, TableHeaderComponent, PaginationComponent],
  providers: [GenericTableService],
})
export class GenericTableModule { }
