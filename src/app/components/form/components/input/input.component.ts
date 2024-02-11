import { Component, Input } from '@angular/core';
import { BaseInput } from '../../types/base-input';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() input!:BaseInput;
  @Input() control!:FormControl;
}
