import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveTicketsComponent } from './resolve-tickets.component';

describe('ResolveTicketsComponent', () => {
  let component: ResolveTicketsComponent;
  let fixture: ComponentFixture<ResolveTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResolveTicketsComponent]
    });
    fixture = TestBed.createComponent(ResolveTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
