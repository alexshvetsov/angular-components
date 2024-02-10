import { BaseInput } from "./base-input";

export interface SelectInput extends BaseInput {
    type: 'select';
    options: Array<{ label: string; value: any }>;
  }
  