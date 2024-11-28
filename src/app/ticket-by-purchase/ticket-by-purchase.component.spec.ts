import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketByPurchaseComponent } from './ticket-by-purchase.component';

describe('TicketByPurchaseComponent', () => {
  let component: TicketByPurchaseComponent;
  let fixture: ComponentFixture<TicketByPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketByPurchaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketByPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
