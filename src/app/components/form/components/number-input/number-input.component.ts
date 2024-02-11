import { NumberInput } from '@angular/cdk/coercion';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

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
