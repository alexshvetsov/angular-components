import { BaseInput } from './base-input';

export interface SelectOption {
  label: string;
  value: any;
}

export interface SelectInput extends BaseInput {
  type: 'select';
  options: SelectOption[];
}
