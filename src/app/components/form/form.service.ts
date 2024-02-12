import { Injectable } from '@angular/core';
import BehaviorSubjectWrapper from '../../utilities/types/behaviorSubjectWrapper';
import { BaseInput } from './types/base-input';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SelectInput, SelectOption } from './types/select-input';
import BehaviorSubjectMap from '../../utilities/types/behaviorSubjectMap';
import { isSelectInput } from './types/type-guard';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  inputs: BehaviorSubjectWrapper<BaseInput[]> = new BehaviorSubjectWrapper<
    BaseInput[]
  >([]);
  private _formGroup: FormGroup = {} as FormGroup;
  selectOptions: BehaviorSubjectMap<SelectOption[]> = new BehaviorSubjectMap<
    SelectOption[]
  >({});

  constructor(private fb: FormBuilder) {}
  //  consider to create a hash map for inputs like for select options so that input will rerender better consuder making new class to extend tha bsMAp

  get formGroup(): FormGroup {
    return this.formGroup;
  }
  initFormService(inputs: BaseInput[]): void {
    const group: FormGroup = this.fb.group({});
    this.initSelectOptions(inputs);
    this.initControls(inputs, group);
    this._formGroup = group;
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


}
