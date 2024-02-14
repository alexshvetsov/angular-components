import FlexBox from '../../../utilities/types/flex-box';
import GridBox from '../../../utilities/types/grid-box';
import { BaseInput } from './base-input';

export interface FormConfig {
  inputs: BaseInput[];
  onSubmit: () => void;
  name: string;
  submitButtonText?: string;
  flexBoxConfig?:FlexBox;
  gridBoxConfig?:GridBox;
}
