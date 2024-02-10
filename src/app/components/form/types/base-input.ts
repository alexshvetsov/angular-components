import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import GridItem from '../../../utilities/types/grid-item';
import FlexItem from '../../../utilities/types/flex-item';

export interface BaseInput {
  name: string;
  type: 'text' | 'number' | 'email' | 'password' | 'select' | 'autocomplete' | 'checkbox' | 'radio';
  placeholder?: string;
  label?: string;
  className?: string;
  defaultValue?: any;
  validators?: ValidatorFn | ValidatorFn[];
  asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[];
  gridOptions?: GridItem;
  flexOptions?: FlexItem;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
}
