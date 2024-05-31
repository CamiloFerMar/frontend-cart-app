import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudctsListComponent } from './products-list.component';

describe('ProudctsListComponent', () => {
  let component: ProudctsListComponent;
  let fixture: ComponentFixture<ProudctsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProudctsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProudctsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
