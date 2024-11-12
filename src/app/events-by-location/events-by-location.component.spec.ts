import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsByLocationComponent } from './events-by-location.component';

describe('EventsByLocationComponent', () => {
  let component: EventsByLocationComponent;
  let fixture: ComponentFixture<EventsByLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsByLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
