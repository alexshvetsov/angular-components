import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTableHeaderComponent } from './generic-table-header.component';

describe('GenericTableHeaderComponent', () => {
  let component: GenericTableHeaderComponent;
  let fixture: ComponentFixture<GenericTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericTableHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
