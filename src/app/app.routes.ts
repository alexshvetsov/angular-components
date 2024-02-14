import { Routes } from '@angular/router';
import { AdvancedTableComponent } from './demo-components/advanced-table/advanced-table.component';

export const routes: Routes = [
  { path: 'advanced-table', component: AdvancedTableComponent },
  { path: '', redirectTo: '/advanced-table', pathMatch: 'full' },
];
