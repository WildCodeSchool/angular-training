import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTstComponent } from './my-tst.component';

describe('MyTstComponent', () => {
  let component: MyTstComponent;
  let fixture: ComponentFixture<MyTstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
