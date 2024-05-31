import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowItemsComponent } from './row-items.component';

describe('RowItemsComponent', () => {
  let component: RowItemsComponent;
  let fixture: ComponentFixture<RowItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
