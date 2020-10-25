import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuaComponent } from './actua.component';

describe('ActuaComponent', () => {
  let component: ActuaComponent;
  let fixture: ComponentFixture<ActuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
