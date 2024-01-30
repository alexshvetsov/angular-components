import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { TableCellComponent } from './generic-table/components/table-cell/table-cell.component';

@NgModule({
  declarations: [GenericTableComponent, TableCellComponent],
  imports: [CommonModule],
  exports: [GenericTableComponent,TableCellComponent]
})
export class GenericTableModule { }
