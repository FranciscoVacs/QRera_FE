import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsByCityComponent } from './events-by-city.component';

describe('EventsByCityComponent', () => {
  let component: EventsByCityComponent;
  let fixture: ComponentFixture<EventsByCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsByCityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
