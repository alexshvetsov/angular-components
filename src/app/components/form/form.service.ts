import { Injectable } from '@angular/core';
import BehaviorSubjectWrapper from '../../utilities/types/behaviorSubjectWrapper';
import { BaseInput } from './types/base-input';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectOption } from './types/select-input';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  _inputs: BehaviorSubjectWrapper<BaseInput[]> = new BehaviorSubjectWrapper<
    BaseInput[]
  >([]);
  _formGroup: BehaviorSubjectWrapper<FormGroup> =
    new BehaviorSubjectWrapper<FormGroup>({} as FormGroup);
  _selectOptions: BehaviorSubjectWrapper<{ [key: string]: SelectOption[] }> =
    new BehaviorSubjectWrapper<{ [key: string]: SelectOption[] }>({});

  constructor(private fb: FormBuilder) {}
  // add abstract class to DRY the directives code 
//  consider to create a hash map for inputs like for select options so that input will rerender better
//  create a data structure like the BSWrapper that holds the name of the input and the BS of value as value and has getter and setter to change spesific input options so that the rerender will be seemless 
initFormGroup(inputs: BaseInput[]): void {
    const group: FormGroup = this.fb.group({});
    const selectOptions: { [key: string]: SelectOption[] } = {};
    inputs.forEach((input) => {
      const control = this.fb.control(
        input.defaultValue,
        input.validators || []
      );
      group.addControl(input.name, control);
    });
    this._formGroup.value$ = group;
    this._inputs.value$ = inputs;
  }
}
