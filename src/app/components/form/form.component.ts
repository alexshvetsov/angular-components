import { Component, Input, OnInit } from '@angular/core';
import { FormConfig } from './types/form-congif';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  @Input() formConfig!: FormConfig;

  constructor(){}

  ngOnInit(): void {
    
  }
}
