import { BehaviorSubject, Observable } from 'rxjs';

export default class BehaviorSubjectWrapper<T> {
  private _value$: BehaviorSubject<T>;

  constructor(initialValue: T) {
    this._value$ = new BehaviorSubject<T>(initialValue);
  }
  public get value$(): Observable<T> {
    return this._value$.asObservable();
  }
  public set value$(value: T) {
    this._value$.next(value);
  }
}
