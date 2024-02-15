export default class GetterSetter<T> {
  private _value: T;

  constructor(initialValue: T) {
    this._value = initialValue;
  }

  public get value(): T {
    return this._value;
  }
  public set value(value: T) {
    this._value = value;
  }
}
