import { BaseInput } from "./base-input";
import { SelectInput } from "./select-input";

export function isSelectInput(input: BaseInput): input is SelectInput {
    return input.type === 'select';
  }