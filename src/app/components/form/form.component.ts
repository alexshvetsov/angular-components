import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FormService],
})
export class FormComponent implements OnInit {
  @Input() formConfig!: FormConfig;
  inputs$: Observable<BaseInput[]> = this.formService.inputs.value$;
  formGroup$: Observable<FormGroup> = this.formService.formGroup?.value$;

  constructor(private formService: FormService) {}

  ngOnInit(): void {}

  getFormControl(formGroup: FormGroup, controlName: string): FormControl {
    const control = formGroup.get(controlName) as FormControl;
    if (!control) {
      throw new Error(
        `FormControl with name '${controlName}' does not exist in the FormGroup.`
      );
    }
    return control;
  }

  getFromService(): FormService {
    return this.formService;
  }
}
