import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesiiComponent } from './mesii.component';

describe('MesiiComponent', () => {
  let component: MesiiComponent;
  let fixture: ComponentFixture<MesiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
