import { BehaviorSubject, Observable } from 'rxjs';

export default class BehaviorSubjectMap<T> {
  private _subjectsMap: { [key: string]: BehaviorSubject<T> } = {};

  constructor(initialValues: { [key: string]: T }) {
    Object.entries(initialValues).forEach(([key, value]) => {
      this._subjectsMap[key] = new BehaviorSubject<T>(value);
    });
  }

  getValueSliceAsObs(key: string): Observable<T> {
    if (!this._subjectsMap[key]) {
      throw new Error(`No BehaviorSubject found for key: ${key}`);
    }
    return this._subjectsMap[key].asObservable();
  }

  createSbjectMapFromArr(values: T[], key:string): void {
    values.forEach((value) => {
      this._subjectsMap[key] = new BehaviorSubject<T>(value);
    });
  }

  updateValues(updatedValues: { [key: string]: T }): void {
    Object.entries(updatedValues).forEach(([key, values]) => {
      if (this._subjectsMap[key]) {
        this._subjectsMap[key].next(values);
      } else {
        this._subjectsMap[key] = new BehaviorSubject<T>(values);
      }
    });
  }
}
