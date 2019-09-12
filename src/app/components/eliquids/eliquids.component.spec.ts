import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliquidsComponent } from './eliquids.component';

describe('EliquidsComponent', () => {
  let component: EliquidsComponent;
  let fixture: ComponentFixture<EliquidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliquidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliquidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
