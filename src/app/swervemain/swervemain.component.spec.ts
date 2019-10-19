import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwervemainComponent } from './swervemain.component';

describe('SwervemainComponent', () => {
  let component: SwervemainComponent;
  let fixture: ComponentFixture<SwervemainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwervemainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwervemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
