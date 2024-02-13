import { Component, Input } from '@angular/core';
import { BaseInput } from '../../types/base-input';
import { FormControl } from '@angular/forms';
import { SelectInput } from '../../types/select-input';
import { TextInput } from '../../types/text-input';
import { NumberInput } from '../../types/number-input';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() input!: BaseInput;
  @Input() control!: FormControl;

  constructor() {
    console.log(this.input);
  }

  isSelectInput(input: BaseInput): input is SelectInput {
    return input.type === 'select';
  }
  isTextInput(input: BaseInput): input is TextInput {
    return input.type === 'text';
  }

  isNumberInput(input: BaseInput): input is NumberInput {
    return input.type === 'number';
  }
}
