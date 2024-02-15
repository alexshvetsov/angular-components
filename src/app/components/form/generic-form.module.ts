import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { AutocompleteInputComponent } from './components/autocomplete-input/autocomplete-input.component';
import { SelectInputComponent } from './components/select-input/select-input.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { AngularMaterialModule } from '../../utilities/modules/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { SharedModule } from '../../utilities/modules/shared/shared.module';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    FormComponent,
    AutocompleteInputComponent,
    SelectInputComponent,
    TextInputComponent,
    NumberInputComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    FormComponent,
    AutocompleteInputComponent,
    SelectInputComponent,
    TextInputComponent,
    NumberInputComponent,
    InputComponent,
  ],
})
export class GenericFormModule {}
