import { Injectable } from '@angular/core';
import BehaviorSubjectWrapper from '../../utilities/types/behaviorSubjectWrapper';
import { BaseInput } from './types/base-input';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SelectInput, SelectOption } from './types/select-input';
import BehaviorSubjectMap from '../../utilities/types/behaviorSubjectMap';
import { isSelectInput } from './types/type-guard';
import { Observable, Subject, map, merge, startWith, switchMap } from 'rxjs';

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
  private formUpdateTrigger = new Subject<void>();
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
    return this.formUpdateTrigger.pipe(
      startWith(null),
      switchMap(() => {
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
        return merge(...controlChanges);
      })
    );
  }

  triggerFormUpdate() {
    this.formUpdateTrigger.next();
  }

  addControl(name: string, control?: FormControl): void {
    this.formGroup.value.addControl(name, control || new FormControl(''));
  }
  removeControl(name: string): void {
    this.formGroup.value.removeControl(name);
  }

  updateInputs(inputs: BaseInput[]): void {
    this.inputs.value$ = [...inputs];
  }
}
