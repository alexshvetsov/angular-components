import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from './generic-table.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GenericTableService } from './generic-table.service';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenericTableHeaderComponent } from './components/generic-table-header/generic-table-header.component';
import { FoldableCardComponent } from '../foldable-card/foldable-card.component';
import { AdvancedSearchComponent } from '../advanced-search/advanced-search.component';
import { GenericFormModule } from '../form/generic-form.module';

@NgModule({
  declarations: [
    GenericTableComponent,
    TableCellComponent,
    TableHeaderComponent,
    PaginationComponent,
    GenericTableHeaderComponent,
    AdvancedSearchComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    FoldableCardComponent,
    GenericFormModule,
  ],
  exports: [
    GenericTableComponent,
    TableCellComponent,
    TableHeaderComponent,
    PaginationComponent,
    GenericTableHeaderComponent,
    AdvancedSearchComponent,
  ],
  providers: [GenericTableService],
})
export class GenericTableModule {}
