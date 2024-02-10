import { Observable } from "rxjs";
import { BaseInput } from "./base-input";

export interface AutocompleteInput extends BaseInput {
    type: 'autocomplete';
    options: Array<{ label: string; value: any }> | Observable<Array<{ label: string; value: any }>>;
    searchFunction?: (searchTerm: string) => Observable<Array<{ label: string; value: any }>>;
  }
  