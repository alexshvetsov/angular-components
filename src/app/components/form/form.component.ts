import { Component, Input, OnInit } from '@angular/core';
import { FormConfig } from './types/form-congif';
import { Observable } from 'rxjs';
import { BaseInput } from './types/base-input';
import { FormService } from './form.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  providers: [FormService],
})
export class FormComponent implements OnInit {
  @Input() formConfig!: FormConfig;
  inputs$: Observable<BaseInput[]> = this.formService.inputs.value$;
  formGroup: FormGroup = this.formService.formGroup;

  constructor(private formService: FormService) {}

  ngOnInit(): void {}

  getFormControl(controlName: string): FormControl {
    const control = this.formGroup.get(controlName) as FormControl;
    if (!control) {
      throw new Error(
        `FormControl with name '${controlName}' does not exist in the FormGroup.`
      );
    }
    return control;
  }
}
