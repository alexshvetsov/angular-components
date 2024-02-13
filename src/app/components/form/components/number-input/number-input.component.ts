import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NumberInput } from '../../types/number-input';

@Component({
  selector: 'app-number-input',
  standalone: false,
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.scss',
})
export class NumberInputComponent {
  @Input() input!: NumberInput;
  @Input() control!: FormControl;
}
