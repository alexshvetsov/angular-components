import { BehaviorSubject, Observable } from 'rxjs';
import { SelectOption } from '../../components/form/types/select-input';

export default class BehaviorSubjectMap {
  private _value:{[key: string]: BehaviorSubject<SelectOption[]>} = {};

  constructor(initialValue: {[key: string]: SelectOption[]}) {
    Object.keys(initialValue).forEach(key => {
      this._value[key] = new BehaviorSubject(initialValue[key]);
    })
  }
  
   getSelectOptions(key: string): Observable<SelectOption[]> {
    return this._value[key].asObservable();
  }

  emitSelectOption(key: string, value: SelectOption[]): void {
    if (this._value[key]) {
      this._value[key].next(value);
    }else{
      this._value[key] = new BehaviorSubject(value);
    }
  }

}
