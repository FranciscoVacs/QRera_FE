import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTickettypesComponent } from './manage-tickettypes.component';

describe('ManageTickettypesComponent', () => {
  let component: ManageTickettypesComponent;
  let fixture: ComponentFixture<ManageTickettypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageTickettypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTickettypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
