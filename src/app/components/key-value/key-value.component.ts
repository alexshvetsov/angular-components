import { Component, Input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SubHeadline } from '../generic-table/types/table-header-data';
import FlexBox from '../../utilities/types/flex-box';

@Component({
  selector: 'app-key-value',
  standalone: true,
  imports: [FlexLayoutModule],
  templateUrl: './key-value.component.html',
  styleUrl: './key-value.component.scss',
})
export class KeyValueComponent {
  @Input() keyValue!: SubHeadline;
  @Input() seperator: string = '';
  @Input() flexOptions: FlexBox = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  };
}
