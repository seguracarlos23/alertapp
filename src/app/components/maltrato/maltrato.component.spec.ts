import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaltratoComponent } from './maltrato.component';

describe('MaltratoComponent', () => {
  let component: MaltratoComponent;
  let fixture: ComponentFixture<MaltratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaltratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaltratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
