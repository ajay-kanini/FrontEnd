import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLogsComponent } from './get-logs.component';

describe('GetLogsComponent', () => {
  let component: GetLogsComponent;
  let fixture: ComponentFixture<GetLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetLogsComponent]
    });
    fixture = TestBed.createComponent(GetLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
