import { BaseInput } from './base-input';
import { SelectInput } from './select-input';
import { TextInput } from './text-input';
import { NumberInput } from './number-input';

export function isSelectInput(input: BaseInput): input is SelectInput {
  return input.type === 'select';
}
export function isTextInput(input: BaseInput): input is TextInput {
  return input.type === 'text';
}

export function isNumberInput(input: BaseInput): input is NumberInput {
  return input.type === 'number';
}
