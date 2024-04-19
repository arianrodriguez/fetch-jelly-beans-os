import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeanCardComponent } from './bean-card.component';

describe('BeanCardComponent', () => {
  let component: BeanCardComponent;
  let fixture: ComponentFixture<BeanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeanCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
