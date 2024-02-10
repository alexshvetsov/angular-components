import { BaseInput } from "./base-input";

export interface NumberInput extends BaseInput {
    type: 'number';
    min?: number;
    max?: number;
    step?: number;
  }