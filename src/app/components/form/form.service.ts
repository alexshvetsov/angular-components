import { Injectable } from '@angular/core';
import BehaviorSubjectWrapper from '../../utilities/types/behaviorSubjectWrapper';
import { BaseInput } from './types/base-input';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectInput, SelectOption } from './types/select-input';
import BehaviorSubjectMap from '../../utilities/types/behaviorSubjectMap';
import { isSelectInput } from './types/type-guard';
import { Observable, map, merge } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  inputs: BehaviorSubjectWrapper<BaseInput[]> = new BehaviorSubjectWrapper<
    BaseInput[]
  >([]);
  formGroup: BehaviorSubjectWrapper<FormGroup> =
    new BehaviorSubjectWrapper<FormGroup>(new FormGroup({}));
  selectOptions: BehaviorSubjectMap<SelectOption[]> = new BehaviorSubjectMap<
    SelectOption[]
  >({});

  constructor(private fb: FormBuilder) {}

  initFormService(inputs: BaseInput[]): void {
    const group: FormGroup = this.fb.group({});
    this.initSelectOptions(inputs);
    this.initControls(inputs, group);
    this.formGroup.value$ = group;
    this.inputs.value$ = inputs;
  }

  initControls(inputs: BaseInput[], group: FormGroup): void {
    inputs.forEach((input) => {
      const control = this.fb.control(
        input.defaultValue,
        input.validators || []
      );
      group.addControl(input.name, control);
    });
  }

  initSelectOptions(inputs: BaseInput[]): void {
    const selectOptions: { [key: string]: SelectOption[] } = {};
    inputs.forEach((input) => {
      if (isSelectInput(input)) {
        selectOptions[input.name] = input.options || [];
      }
    });
    this.selectOptions.updateValues(selectOptions);
  }

  emitFormChanges(): Observable<any> {
    // Collect observables for each control's value changes
    const controlChanges = Object.keys(this.formGroup.value.controls).map(
      (controlName) => {
        return this.formGroup.value.get(controlName)?.valueChanges.pipe(
          map((newValue) => ({
            name: controlName,
            value: newValue,
          }))
        );
      }
    );

    // Merge all control change observables into one
    return merge(...controlChanges);
  }
}
