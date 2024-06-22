import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainObserverComponent } from './main-observer.component';

describe('MainObserverComponent', () => {
  let component: MainObserverComponent;
  let fixture: ComponentFixture<MainObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainObserverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
