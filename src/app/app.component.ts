import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenericTableModule } from './components/generic-table.module';
import { Column } from './components/generic-table/types/columns';
import { TableConfig } from './components/generic-table/types/table';
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
  imports: [RouterOutlet, GenericTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular';
  config!: TableConfig;
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
    }
  ];
  data: Partial<TableData>[] = [
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
}
