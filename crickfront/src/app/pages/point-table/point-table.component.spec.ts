import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CWC2023PointTableComponent } from './point-table.component';

describe('CWC2023PointTableComponent', () => {
  let component: CWC2023PointTableComponent;
  let fixture: ComponentFixture<CWC2023PointTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CWC2023PointTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CWC2023PointTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
