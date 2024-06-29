import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSubscriberComponent } from './second-subscriber.component';

describe('SecondSubscriberComponent', () => {
  let component: SecondSubscriberComponent;
  let fixture: ComponentFixture<SecondSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondSubscriberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
