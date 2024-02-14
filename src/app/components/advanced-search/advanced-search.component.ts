import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormConfig } from '../form/types/form-congif';
import { FormService } from '../form/form.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-advanced-search',
  standalone: false,
  templateUrl: './advanced-search.component.html',
  styleUrl: './advanced-search.component.scss',
})
export class AdvancedSearchComponent implements OnInit, AfterViewInit {
  @Input() formConfigs!: FormConfig[];
  @ViewChildren(FormComponent) formComponents!: QueryList<FormComponent>;
  formServices: { [key: string]: FormService } = {};
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initFormServicesAndForms();
  }

  initFormServicesAndForms(): void {
    this.formComponents.forEach((formComponent) => {
      const formService: FormService = formComponent.getFromService();
      const formConfig: FormConfig = this.getFormConfig(
        formComponent.formConfig.name
      );
      this.formServices[formComponent.formConfig.name] = formService;
      formService.initFormService(formConfig.inputs);
    });
  }

  getFormConfig(name: string): FormConfig {
    return this.formConfigs.find(
      (config) => config.name === name
    ) as FormConfig;
  }

  submitForm(): void {
    console.log('asd');
  }
}
