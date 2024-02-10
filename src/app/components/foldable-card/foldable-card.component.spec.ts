import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldableCardComponent } from './foldable-card.component';

describe('FoldableCardComponent', () => {
  let component: FoldableCardComponent;
  let fixture: ComponentFixture<FoldableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoldableCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoldableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
