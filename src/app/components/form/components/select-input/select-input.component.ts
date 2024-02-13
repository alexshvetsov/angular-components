import { Component, Input, OnInit } from '@angular/core';
import { SelectInput, SelectOption } from '../../types/select-input';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-select-input',
  standalone: false,
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.scss',
})
export class SelectInputComponent implements OnInit {
  @Input() input!: SelectInput;
  @Input() control!: FormControl;
  options$!: Observable<SelectOption[]>;

  constructor(private formService: FormService) {}
  ngOnInit(): void {
    this.options$ = this.formService.selectOptions.getValueSliceAsObs(
      this.input.name
    );
  }
}
