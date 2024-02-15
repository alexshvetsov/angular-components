import { Component, Input } from '@angular/core';
import { TextInput } from '../../types/text-input';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input() input!: TextInput;
  @Input() control!: FormControl;
  @Input() showSuffixIcon!: string;
  @Input() showPrefixIcon!: FormControl;
}
