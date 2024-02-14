import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular';

  // this.formService = this.formComponent.getFromService();
  // this.formService.initFormService(this.formConfig.inputs);
  // this.formService.selectOptions.updateValues({
  //   last: [
  //     { value: '1', label: '1' },
  //     { value: '2', label: '2' },
  //   ],
  // });
  // this.formService.emitFormChanges().subscribe((value) => {
  //   if (value.name === 'name') {
  //     this.formService.addControl('sor');
  //     this.formService.updateInputs([
  //       ...this.formConfig.inputs,
  //       { type: 'text', name: 'sor', label: 'שם', value: 'גילי' },
  //     ]);
  //   }else{
  //     this.formService.removeControl('sor');
  //     this.formService.updateInputs(this.formConfig.inputs);
  //   }
  //   this.genericTableService.filters.value$ =
  //     this.formService.formGroup.value.value;
  //   this.formService.triggerFormUpdate();
  // });
}
