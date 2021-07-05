import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResourcePageComponent } from './add-resource-page.component';

describe('AddResourcePageComponent', () => {
  let component: AddResourcePageComponent;
  let fixture: ComponentFixture<AddResourcePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResourcePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResourcePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
