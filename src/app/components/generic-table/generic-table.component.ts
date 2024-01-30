import { Component, Input, OnInit } from '@angular/core';
import { Column } from './types/columns';

@Component({
  selector: 'app-generic-table',
  standalone: false,
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
})
export class GenericTableComponent<T extends  {[key: string]: any}>
  implements OnInit
{
  @Input() columns!: Column[];
  @Input() data!: Partial<T>[];

  ngOnInit(): void {
    this.data = this.data || [];
    this.columns = this.columns || [];
  }
}
