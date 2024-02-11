import { Component, Input } from '@angular/core';
import { SelectInput } from '../../types/select-input';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-input',
  standalone: false,
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.scss'
})
export class SelectInputComponent {
  @Input() input!: SelectInput;
  @Input() control!: FormControl;
}
